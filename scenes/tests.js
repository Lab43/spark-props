const {set} = require('../lib/setters')
    , {off, pureWhite, pureRed, pureGreen, pureBlue} = require('../lib/colors')
    , {all} = require('../lib/props')
;



module.exports = {

  // on swith
  'C0': [
    set(all, {to: pureWhite}),
  ],

  // all red
  'D0': [
    set(all, {to: pureRed}),
  ],

  // all green
  'D#0': [
    set(all, {to: pureGreen}),
  ],

  // all blue
  'E0': [
    set(all, {to: pureBlue}),
  ],

  // off swith
  'B0': [
    set(all, {to: off}),
  ],

  // all 1
  'F0': [
    set(all, {to: [pureWhite, off, off, off]}),
  ],

  // all 2
  'F#0': [
    set(all, {to: [off, pureWhite, off, off]}),
  ],

  // all 3
  'G0': [
    set(all, {to: [off, off, pureWhite, off]}),
  ],

  // all 4
  'G#0': [
    set(all, {to: [off, off, off, pureWhite]}),
  ],

}
