const async = require('async')
    , SerialPort = require('serialport')
    , xbee_api = require('xbee-api')
    , normalizeFrameData = require('./normalizeFrameData')
    , pad = require('./pad');
;

// how long it takes signal to get to props
const latency = 75;

// how long to wait between sending data to xbee
const delayBetweenTransmits = 100;

// map prop names to 16-bit xbee address
const xbeeAddresses = {
  't1': '0001',
  't2': '0002',
  't3': '0003',
  't4': '0004',
  't5': '0005',
  't6': '0006',
  'm1': '000a',
  'm2': '000b',
  'm3': '000c',
  'm4': '000d',
  'm5': '000e',
};

// keep track of sent frams so we can catch failures
let attemptedFrames = {};



// =========================
// serial connection to xbee
// =========================

const xbeeAPI = new xbee_api.XBeeAPI({
  api_mode: 2,
});

const serialPort = new SerialPort('/dev/tty.usbserial-DA01A4R1', {
  baudRate: 115200,
});

serialPort.pipe(xbeeAPI.parser);
xbeeAPI.builder.pipe(serialPort);

serialPort.on('open', function () {
  console.log('Connected to XBee');
});

xbeeAPI.parser.on('data', function ({id, deliveryStatus}) {
  attemptedFrames[id].deliveryStatus = deliveryStatus;
});



// ==========
// dispatcher
// ==========

module.exports = function ({startTime}) {

  let q = async.priorityQueue(function ({id = xbeeAPI.nextFrameId(), data}, callback) {

    if (!data.attempts) data.attempts = 1;

    // save this frame so we can check/resend it later
    attemptedFrames[id] = {
      data,
      deliveryStatus: 'Unknown',
    };

    const {prop, type, at, from, duration, to} = normalizeFrameData(data);

    // Build the frame. We want to do this just before we send it so we can make sure the timestamp is fresh
    xbeeAPI.builder.write({
      type: 0x01,
      id: id,
      destination16: xbeeAddresses[prop],
      data: [
        type,
        pad(Date.now() - startTime + latency, 8),
        pad(at, 8),
        from[0],
        from[1],
        from[2],
        from[3],
        pad(duration, 4),
        to[0],
        to[1],
        to[2],
        to[3],
      ].join(' '),
    });

    console.log(`Sending frame frame ${id} to prop ${prop}. Attempt #${data.attempts}`);

    // wait before sending the next frame
    setTimeout(callback, delayBetweenTransmits);

  });

  // when the queue is empty check for failed frames
  q.drain = function () {
    console.log('Requeing failed frames...');
    // iterate through attemptedFrames to check their status
    Object.keys(attemptedFrames).forEach(id => {
      const frame = attemptedFrames[id];
      if (frame.deliveryStatus) {
        // It failed to send, so let's try again. The "attempts" number is used to prioritize newer frames. We don't want to clug up the queue with old frames that have failed many times.
        frame.data.attempts++;
        if (frame.data.resend === false) {
          console.log(`Attempt #${frame.data.attempts} failed to send frame ${id} to prop ${frame.data.prop}. Will not try again because "resend" flag is false.`);
        } else if (frame.data.attempts >= 10) {
          console.log(`Attempt #${frame.data.attempts} failed to send frame ${id} to prop ${frame.data.prop}. Delivery status: ${frame.deliveryStatus}. Will not try again.`);
        } else {
          console.log(`Attempt #${frame.data.attempts} failed to send frame ${id} to prop ${frame.data.prop}. Delivery status: ${frame.deliveryStatus}. Retrying...`);
          q.push({id, data: frame.data}, frame.data.attempts, function (err) {
            if (err) throw(err);
          });
        }
      } else {
        // It sent successfully, so delete it.
        console.log(`Successfully sent frame ${id} to prop ${frame.data.prop}`);
        delete attemptedFrames[id];
      }
    });
  }

  // Module returns this. This function is used to add new commands to the queue.
  return function (data) {
    data.at = Date.now() - startTime + (data.delay || 0);
    q.push({data}, 0, function (err) {
      if (err) throw(err)
    });
  }
}
