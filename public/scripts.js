var socket = io.connect('http://localhost:3000');

socket.on('event', function (frame) {
  handleFrame(frame);
});

function handleFrame({prop, type, time, at, from, duration, to}) {
  var delay = at - time;
  if (delay > 0) {
    setPreview(prop, to);
    window.setTimeout(function () {
      setProp(prop, to);
    }, delay);
  } else {
    setProp(prop, to);
  }
}

function setProp(prop, colors) {
  var $prop = $('#' + prop + ' li').each(function (i) {
    $(this).add('span', this).css('background-color', '#' + colors[i])
  });
}

function setPreview(prop, colors) {
  var $prop = $('#' + prop + ' li span').each(function (i) {
    $(this).css('background-color', '#' + colors[i])
  });
}
