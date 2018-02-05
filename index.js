const midi = require('midi')
    , static = require('node-static')
    , commandLineArgs = require('command-line-args')
;

// web-only mode
const optionDefinitions = [{name: 'web', alias: 'w', type: Boolean}];
const webOnly = commandLineArgs(optionDefinitions).web || false;



// ==================
// static file server
// ==================

const file = new static.Server('./public', {cache: false});

const server = require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    file.serve(request, response);
  }).resume();
}).listen(3000, function () {
  console.log('Listening at http://localhost:3000');
});



// =====================
// scenes and midi input
// =====================

const tests = require('./scenes/tests')
    , zero_B = require('./scenes/0-B')
    , C_I = require('./scenes/C-I')
    , J_L = require('./scenes/J-L')
;

const input = new midi.input();

const channels = {
  144: 1,
  145: 2,
  146: 3,
  147: 4,
  148: 5,
  149: 6,
  150: 7,
  151: 8,
  152: 9,
  153: 10,
  154: 11,
  155: 12,
  156: 13,
  157: 14,
  158: 15,
  159: 16,
}

input.openVirtualPort('Spark Props');

input.on('message', function (deltaTime, message) {
  const channel = channels[message[0]]
      , note = getNoteName(message[1])
  ;

  if (!channel) return; // this is not a note on message

  console.log(`${note} triggered on channel ${channel}`);

  switch (channel) {
    case 1:
      triggerScene(tests[note]);
      break;
    case 2:
      triggerScene(zero_B[note]);
      break;
    case 3:
      triggerScene(C_I[note]);
      break;
    case 4:
      triggerScene(J_L[note]);
      break;
    default:
      console.log(`No scene set for channel ${channel}`);
  }

});



// ===============
// send out scenes
// ===============

const startTime = Date.now()
    , dispatchToWeb = require('./lib/dispatchToWeb')({server, startTime})
    , dispatchToProp = require('./lib/dispatchToProp')({startTime})
;

function triggerScene(scene) {
  if (scene) {
    scene.forEach(function (commandSet) {
      if (typeof commandSet === 'function') commandSet = commandSet();
      commandSet.forEach(function (command) {
        if (Array.isArray(command)) {
          command.forEach(function (subCommand) {
            dispatchToWeb(subCommand);
            if (!webOnly) dispatchToProp(subCommand);
          })
        } else {
          dispatchToWeb(command);
          if (!webOnly) dispatchToProp(command);
        }
      })
    });
  }
}

function getNoteName(note) {
  const pitches = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
      , pitch = pitches[note % 12]
      , octave = Math.floor(note / 12) - 2; // ableton outputs 2 octaves higher than expected
  ;
  return `${pitch}${octave}`;
}
