const socketIo = require('socket.io')
    , normalizeFrameData = require('./normalizeFrameData')
;



module.exports = function ({server, startTime}) {

  const io = socketIo(server);

  io.on('connection', function (socket) {
    console.log('Connected to web browser');
    socket.on('disconnect', function(){
      console.log('Disconnected from web browser');
    });
    socket.on('trigger', function(msg){
      console.log(msg);
      serialPort.write(msg, function(err, results) {
        if (err) return console.log('err ' + err);
      });
    });
  });

  return function (rawFrame) {
    let frame = normalizeFrameData(rawFrame);
    frame.at = Date.now() - startTime + (frame.delay || 0);
    frame.time = Date.now() - startTime;
    io.emit('event', frame)
  }

}
