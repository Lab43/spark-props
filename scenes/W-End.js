const {set, flash} = require('../lib/setters')
    , {teal, lightTeal, red, brightRed, gentleGreen, off} = require('../lib/colors')
    , {t1, t2, t3, t4, t5, t6, m1, m2, m3, m4, m5, all, mallets, towers} = require('../lib/props')
    , delay = require('../lib/delay')
;



module.exports = {



  // ========
  // W to End
  // ========

  // 4 before W
  'C7': [
    set(all, {delay: delay(90, 4), to: lightTeal})
  ],

  // W measure 1
  'C#7': [
  ],

  // W measure 2
  'D7': [
  ],

  // W measure 3
  'D#7': [
    set(all, {delay: delay(90, 4.5), to: teal})
  ],

  // W measure 4
  'E7': [
    set(all, {delay: delay(90, 3.5), to: lightTeal})
  ],

  // W measure 5
  'F7': [
  ],

  // W measure 6
  'F#7': [
    set(all, {delay: delay(90, 3), to: teal})
  ],

  // W measure 7
  'G7': [
    set(all, {delay: delay(90, 3), to: lightTeal})
  ],

  // W measure 8
  'G#7': [
    set(all, {delay: delay(90, 3), to: teal})
  ],

  // W measure 9
  'A7': [
    set(all, {delay: delay(90, 3), to: lightTeal})
  ],

  // X measure 1
  'A#7': [
    set(all, {delay: delay(90, 3), to: teal})
  ],

  // X measure 2
  'B7': [
    set(all, {delay: delay(90, 3), to: off})
  ],

  // X measure 3
  'C8': [
  ],

  // X measure 4
  'C#8': [
    set(all, {delay: delay(90, 4), to: red})
  ],

  // X measure 5
  'D8': [
    set(all, {delay: delay(90, 4), to: teal})
  ],


}
