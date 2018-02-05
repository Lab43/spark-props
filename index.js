const midi = require('midi')
    , static = require('node-static')
    , delay = require('./lib/delay')
;



// ======
// scenes
// ======

const {set} = require('./lib/setters')
    , {off, white, teal, lightTeal, gentleGreen, red} = require('./lib/colors')
    , t1 = 't1'
    , t2 = 't2'
    , t3 = 't3'
    , t4 = 't4'
    , t5 = 't5'
    , t6 = 't6'
    , m1 = 'm1'
    , m2 = 'm2'
    , m3 = 'm3'
    , m4 = 'm4'
    , m5 = 'm5'
    , all = ['t1', 't2', 't3', 't4', 't5', 't6', 'm1', 'm2', 'm3', 'm4', 'm5']
    , towers = ['t1', 't2', 't3', 't4', 't5', 't6']
    , mallets = ['m1', 'm2', 'm3', 'm4', 'm5']
;

let scenes = {};



// ====
// test
// ====

// on swith
scenes['C0']  = [
  set(all, {to: white}),
];

// all red
scenes['D0'] = [
  set(all, {to: 'ff0000'}),
];

// all green
scenes['D#0'] = [
  set(all, {to: '00ff00'}),
];

// all blue
scenes['E0'] = [
  set(all, {to: '0000ff'}),
];

// off swith
scenes['B0']  = [
  set(all, {to: off}),
];

// all 1
scenes['F0'] = [
  set(all, {to: ['ffffff', '000000', '000000', '000000']}),
];

// all 2
scenes['F#0'] = [
  set(all, {to: ['000000', 'ffffff', '000000', '000000']}),
];

// all 3
scenes['G0'] = [
  set(all, {to: ['000000', '000000', 'ffffff', '000000']}),
];

// all 4
scenes['G#0'] = [
  set(all, {to: ['000000', '000000', '000000', 'ffffff']}),
];



// =========
// beginning
// =========

// m0b3 -> first note
scenes['C3']  = [
  set(all, {delay: delay(90, 2), to: white}),
];

// m1 -> first hit
scenes['C#3'] = [
  set([t1, t2, m1, m2], {delay: delay(90, 4), to: teal}),
  set([t1, t2, m1, m2], {delay: delay(90, 5.5), to: white}),
];

// m2 -> nothing
scenes['D3'] = [];

// m3 -> second hit
scenes['D#3'] = [
  set([t5, t6, m4, m5], {delay: delay(90, 0.75), to: teal}),
  set([t5, t6, m4, m5], {delay: delay(90, 2.25), to: white}),
];

// m4 -> third hit
scenes['E3'] = [
  set([t1, t2, t3, m1, m2, m3], {delay: delay(90, 0.75), to: teal}),
  set([t1, t2, t3, m1, m2, m3], {delay: delay(90, 2.25), to: white}),
];

// m5 - > fourth hit and fith hit (all)
scenes['F3'] = [
  set([t4, t5, t6, m3, m4, m5], {delay: delay(90, 1.5), to: teal}),
  set([t4, t5, t6, m3, m4, m5], {delay: delay(90, 3), to: white}),
  set(all, {delay: delay(90, 3.75), to: teal}),
];

// m6-7 -> letter B first hit
scenes['F#3'] = [
  set(all, {delay: delay(90, 5), to: lightTeal}),
  letterAPulses(delay(90, 5))
];



// ========
// letter A
// ========

function letterAPulses(wait) {
  const length = 200;
  const space = 60;

  return function () {
    return [
      set([m3], {delay: wait, to: teal}),
      set([m3], {delay: wait + length, to: lightTeal}),

      set([t3, t4], {delay: wait + space * 1, to: teal}),
      set([t3, t4], {delay: wait + space * 1 + length, to: lightTeal}),

      set([m2, m4], {delay: wait + space * 2, to: teal}),
      set([m2, m4], {delay: wait + space * 2 + length, to: lightTeal}),

      set([t2, t5], {delay: wait + space * 3, to: teal}),
      set([t2, t5], {delay: wait + space * 3 + length, to: lightTeal}),

      set([m1, m5], {delay: wait + space * 4, to: teal}),
      set([m1, m5], {delay: wait + space * 4 + length, to: lightTeal}),

      set([t1, t6], {delay: wait + space * 5, to: teal}),
      set([t1, t6], {delay: wait + space * 5 + length, to: lightTeal}),
    ]
  }

}

// m8 -> nothing
scenes['G3'] = [];

// m9 -> second hit
scenes['G#3'] = [
  letterAPulses(delay(90, 3.75))
];

// m10 -> nothing
scenes['A3'] = [];

// m11 -> nothhing
scenes['A#3'] = [];

// m12 -> third hit
scenes['B3'] = [
  letterAPulses(delay(90, 1.5))
];

// m13 -> nothing
scenes['C4'] = [];

// m13 -> fourth hit
scenes['C#4'] = [
  letterAPulses(delay(90, 2.75))
];

// m15 -> nothing
scenes['D4'] = [];

// m16 -> letter B
scenes['D#4'] = [
  set(all, {delay: delay(90, 3), to: gentleGreen}),
];



// ========
// letter C
// ========

// m25 (3 before C) -> letter C
scenes['C5'] = [
  set(all, {delay: delay(90, 3), to: lightTeal}),
];

// m27b2 (2 before D) -> letter D
scenes['C#5'] = [
  set(mallets, {delay: delay(90, 2), to: [lightTeal, lightTeal, lightTeal, teal], resend: false}),
  set(mallets, {delay: delay(90, 2.75), to: [lightTeal, teal, lightTeal, lightTeal], resend: false}),
  set(mallets, {delay: delay(90, 3.5), to: [lightTeal, lightTeal, teal, lightTeal], resend: false}),
  set(mallets, {delay: delay(90, 4.5), to: [teal, lightTeal, lightTeal, lightTeal], resend: false}),
  set(mallets, {delay: delay(90, 5), to: lightTeal}),
];

// m30b2 (2 before E) -> letter E
scenes['D5'] = [
  set(mallets, {delay: delay(90, 2), to: [teal, lightTeal, lightTeal, lightTeal], resend: false}),
  set(mallets, {delay: delay(90, 2.75), to: [lightTeal, lightTeal, teal, lightTeal], resend: false}),
  set(mallets, {delay: delay(90, 3.5), to: [lightTeal, teal, lightTeal, lightTeal], resend: false}),
  set(mallets, {delay: delay(90, 4.5), to: [lightTeal, lightTeal, lightTeal, teal], resend: false}),
  set(mallets, {delay: delay(90, 5), to: lightTeal}),
];

// m33 (2 before F) -> letter F
scenes['D#5'] = [
  set(mallets, {delay: delay(90, 2), to: [lightTeal, lightTeal, lightTeal, teal], resend: false}),
  set(mallets, {delay: delay(90, 3), to: [lightTeal, teal, lightTeal, lightTeal], resend: false}),
  set(mallets, {delay: delay(90, 4), to: [lightTeal, lightTeal, teal, lightTeal], resend: false}),
  set(mallets, {delay: delay(90, 5), to: [teal, lightTeal, lightTeal, lightTeal], resend: false}),
  set(mallets, {delay: delay(90, 5.75), to: [lightTeal, lightTeal, lightTeal, teal], resend: false}),
  set(mallets, {delay: delay(90, 6.5), to: [lightTeal, teal, lightTeal, lightTeal], resend: false}),
  set(mallets, {delay: delay(90, 7.25), to: [lightTeal, lightTeal, teal, lightTeal], resend: false}),
  set(all, {delay: delay(90, 8), to: teal, resend: false}),
  set(all, {delay: delay(90, 8.75), to: lightTeal, resend: false}),
  set(all, {delay: delay(90, 9.5), to: teal, resend: false}),
  set(all, {delay: delay(90, 10.25), to: lightTeal, resend: false}),
  set(all, {delay: delay(90, 11), to: gentleGreen}),
];



// ===================
// letters G, H, and I
// ===================

// m38b3 (6 after G) -> bass feature
scenes['E5'] = [
  set([t1, t2, t3, m1, m2], {delay: delay(90, 2), to: teal}),
  set([t4, t5, t6, m3, m4, m5], {delay: delay(90, 2), to: lightTeal}),
];

// m42b3 (2 before H) -> snare/marimba feature
scenes['F5'] = [
  set([t1, t2, t3, m1, m2], {delay: delay(90, 2), to: lightTeal}),
  set([t4, t5, t6, m3, m4, m5], {delay: delay(90, 2), to: teal}),
];

// m50b3 (2 before I) -> Letter I
scenes['F#5'] = [
  set(all, {delay: delay(90, 2), to: lightTeal}),
];



// ===============
// letters J, K, L
// ===============

// m58 -> first hit, letter J
scenes['C6'] = [
  set(all, {delay: delay(90, 3), to: teal}),
  set(all, {delay: delay(90, 3.5), to: lightTeal}),
];

// m59 -> second hit
scenes['C#6'] = [
  set(all, {delay: delay(90, 3.75), to: teal}),
  set(all, {delay: delay(90, 4.25), to: lightTeal}),
];

// m60 -> third hit
scenes['D6'] = [
  set(all, {delay: delay(90, 3.75), to: teal}),
  set(all, {delay: delay(90, 4.25), to: lightTeal}),
];

// m61 -> fourth hit
scenes['D#6'] = [
  set(all, {delay: delay(90, 4.5), to: teal}),
  set(all, {delay: delay(90, 5), to: lightTeal}),
];

// m62 - > all hit
scenes['E6'] = [
  set(all, {delay: delay(90, 3.75), to: teal}),
];

// m66b3, 2 before K - > letter K (William)
scenes['F6'] = [
  set([t1, t2, t3, t4, t5, t6, m1, m3, m4, m5], {delay: delay(90, 2), to: teal}),
  set([m2], {delay: delay(90, 2), to: red}),
];

// jan
scenes['C7'] = [
  set([m5], {to: red}),
];

// sarah
scenes['C#7'] = [
  set([m4], {to: red}),
];

// jake
scenes['D7'] = [
  set([m1], {to: red}),
];

// paul
scenes['D#7'] = [
  set([m3], {to: red}),
];

// all
scenes['E7'] = [
  set(all, {to: red}),
];







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



// ====================
// configure midi input
// ====================

const input = new midi.input();

input.openVirtualPort('Spark Props');

input.on('message', function (deltaTime, message) {
  const [command, note, velocity] = message;
  // only do stuff on Note On messages
  if (command === 144) triggerNote(getNoteName(note));
});



// =================
// handle note input
// =================

const startTime = Date.now()
    , dispatchToWeb = require('./lib/dispatchToWeb')({server, startTime})
    , dispatchToProp = require('./lib/dispatchToProp')({startTime})
;

function triggerNote(note) {
  console.log(`${note} triggered`);

  var scene = scenes[note];
  if (scene) {
    scene.forEach(function (commandSet) {
      if (typeof commandSet === 'function') commandSet = commandSet();
      commandSet.forEach(function (command) {
        if (Array.isArray(command)) {
          command.forEach(function (subCommand) {
            dispatchToWeb(subCommand);
            if (subCommand.prop !== 'm1' && subCommand.prop !== 'm2') dispatchToProp(subCommand);
          })
        } else {
          dispatchToWeb(command);
          if (command.prop !== 'm1' && command.prop !== 'm2') dispatchToProp(command);
        }
      })
    });
  }



/*
  var scene = scenes[note];
  if (scene) {
    const at = Date.now() - startTime + scene[1];
    const commands = scene[0]();
    commands.forEach(function (command) {
      command.at = at;
      dispatchToWeb(command);
      dispatchToProp(command);
    });
  }
  */
}

function getNoteName(note) {
  const pitches = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
      , pitch = pitches[note % 12]
      , octave = Math.floor(note / 12) - 2; // ableton outputs 2 octaves higher than expected
  ;
  return `${pitch}${octave}`;
}
