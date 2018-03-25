var socket = io.connect('http://localhost:3000');

socket.on('event', function (frame) {
  handleFrame(frame);
});

function handleFrame(opts) {
  opts.received = Date.now();
  var delay = opts.at - opts.time;
  if (delay > 0) {
    //setPreview(prop, to);
    window.setTimeout(function () {
      go(opts);
    }, delay);
  } else {
    go(opts);
  }
}

function go ({type, ...opts}) {
  switch (type) {
    case 's': // set
      setProp(opts);
      break;
    case 'f': // flash
      flashProp(opts);
      break;
    case 'u': // fade up
      fade('up', opts);
      break;
    case 'd': // fade down
      fade('down', opts);
      break;
  }
}

function setProp ({prop, to}) {
  var $prop = $('#' + prop + ' li').each(function (i) {
    $(this).add('span', this).css('background-color', '#' + to[i])
  });
}

function flashProp({prop, from, duration, to}) {
  setProp({prop, to: from});
  setTimeout(function () {
    setProp({prop, to});
  }, duration);
}

function fade(direction, opts) {
  var timeSinceReceived = Date.now() - opts.received - opts.delay;
  if (timeSinceReceived >= opts.duration) {
    return setProp(opts);
  }
  var setTo = opts.from.map(function (fromHex, i) {
    var from = tinycolor(fromHex).toHsv();
    var to = tinycolor(opts.to[i]).toHsv();

    if ((direction === 'up') && (from.h > to.h)) to.h += 360;
    if ((direction === 'down') && (from.h < to.h)) from.h += 360;

    setColor = {
      h: convertRange(timeSinceReceived, [0, opts.duration], [from.h, to.h]) % 360,
      s: convertRange(timeSinceReceived, [0, opts.duration], [from.s, to.s]),
      v: convertRange(timeSinceReceived, [0, opts.duration], [from.v, to.v]),
    }

    return tinycolor(setColor).toHex();

  });

  setProp({prop: opts.prop, to: setTo});

  window.setTimeout(function () {
    fade(direction, opts);
  }, 10);
}

function setPreview (prop, colors) {
  var $prop = $('#' + prop + ' li span').each(function (i) {
    $(this).css('background-color', '#' + colors[i])
  });
}



// =================
// utility functions
// =================

// https://stackoverflow.com/a/14224813
function convertRange( value, r1, r2 ) { 
    return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}
