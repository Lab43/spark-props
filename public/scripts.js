var socket = io.connect('http://localhost:3000');

socket.on('event', function (frame) {
  handleFrame(frame);
});

function handleFrame({time, at, ...opts}) {
  var delay = at - time;
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

function setPreview (prop, colors) {
  var $prop = $('#' + prop + ' li span').each(function (i) {
    $(this).css('background-color', '#' + colors[i])
  });
}
