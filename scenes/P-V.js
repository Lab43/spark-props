const {set, flash} = require('../lib/setters')
    , {teal, lightTeal, red, brightRed, gentleGreen, off} = require('../lib/colors')
    , {t1, t2, t3, t4, t5, t6, m1, m2, m3, m4, m5, all, mallets, towers} = require('../lib/props')
    , delay = require('../lib/delay')
;



module.exports = {



  // =============
  // letters P - V
  // =============

  // 4 before P
  'C7': [
    set(all, {delay: delay(135, 4), to: off})
  ],

  // 4 after P
  'C#7': [
    set(all, {delay: delay(135, 4), to: red})
  ],

  // 5 before Q
  'D7': [
    set(all, {delay: delay(135, 5), to: lightTeal})
  ],

  // 3 before R
  'D#7': [
    set([t1, t2, t3], {delay: delay(90, 3), to: teal})
  ],

  // 4 before S
  'E7': [
    set([t1, t2, t3], {delay: delay(90, 4), to: lightTeal}),
    set([t4, t5, t6], {delay: delay(90, 4), to: teal}),
  ],

  // 4 before T
  'F7': [
    set(towers, {delay: delay(90, 4), to: lightTeal}),
    set(mallets, {delay: delay(90, 4), to: teal}),
  ],

  // 4 before U
  'F#7': [
    set(all, {delay: delay(90, 4), to: lightTeal})
  ],

  // 4 before V
  'G7': [
    set(all, {delay: delay(90, 4), to: off})
  ],


}
