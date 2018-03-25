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
    set([t1, t2, t3], {delay: delay(90, 2), to: lightTeal}),
    flash([m1], {delay: delay(90, 2), from: teal, to: lightTeal, duration: delay(90, 0.4)}),
    flash([m3], {delay: delay(90, 2.4), from: teal, to: lightTeal, duration: delay(90, 0.4)}),
    flash([m4], {delay: delay(90, 2.8), from: teal, to: lightTeal, duration: delay(90, 0.4)}),
    flash([m5], {delay: delay(90, 3.2), from: teal, to: lightTeal, duration: delay(90, 0.4)}),
    flash([m2], {delay: delay(90, 3.6), from: teal, to: lightTeal, duration: delay(90, 0.4)}),
    set([t4, t5, t6], {delay: delay(90, 4), to: teal}),
  ],

  // 4 before T
  'F7': [
    set(towers, {delay: delay(90, 4), to: lightTeal}),
    flash(mallets, {delay: delay(90, 4), duration: delay(90, 8), from: teal, to: lightTeal}),
    flash([t6], {delay: delay(90, 12)   , duration: delay(90, 0.17), from: teal, to: lightTeal}),
    flash([t5], {delay: delay(90, 12.17), duration: delay(90, 0.17), from: teal, to: lightTeal}),
    flash([t4], {delay: delay(90, 12.33), duration: delay(90, 0.17), from: teal, to: lightTeal}),
    flash([m2], {delay: delay(90, 12.5) , duration: delay(90, 0.17), from: teal, to: lightTeal}),
    flash([m5], {delay: delay(90, 12.67), duration: delay(90, 0.17), from: teal, to: lightTeal}),
    flash([m4], {delay: delay(90, 12.83), duration: delay(90, 0.17), from: teal, to: lightTeal}),
    flash([m3], {delay: delay(90, 13)   , duration: delay(90, 0.17), from: teal, to: lightTeal}),
    flash([m1], {delay: delay(90, 13.17), duration: delay(90, 0.17), from: teal, to: lightTeal}),
    flash([t3], {delay: delay(90, 13.33), duration: delay(90, 0.17), from: teal, to: lightTeal}),
    flash([t2], {delay: delay(90, 13.5) , duration: delay(90, 0.17), from: teal, to: lightTeal}),
    flash([t1], {delay: delay(90, 13.67), duration: delay(90, 0.17), from: teal, to: lightTeal}),

    flash([t1], {delay: delay(90, 14)   , duration: delay(90, 0.33), from: teal, to: lightTeal}),
    flash([t2], {delay: delay(90, 14.33), duration: delay(90, 0.33), from: teal, to: lightTeal}),
    flash([t3], {delay: delay(90, 14.67), duration: delay(90, 0.33), from: teal, to: lightTeal}),
    flash([m1], {delay: delay(90, 15)   , duration: delay(90, 0.33), from: teal, to: lightTeal}),
    flash([m3], {delay: delay(90, 15.33), duration: delay(90, 0.33), from: teal, to: lightTeal}),
    flash([m4], {delay: delay(90, 15.66), duration: delay(90, 0.33), from: teal, to: lightTeal}),
    flash([m5], {delay: delay(90, 16)   , duration: delay(90, 0.33), from: teal, to: lightTeal}),
    flash([m2], {delay: delay(90, 16.33), duration: delay(90, 0.33), from: teal, to: lightTeal}),
    flash([t4], {delay: delay(90, 16.66), duration: delay(90, 0.33), from: teal, to: lightTeal}),
    flash([t5], {delay: delay(90, 17)   , duration: delay(90, 0.33), from: teal, to: lightTeal}),
    flash([t6], {delay: delay(90, 17.33), duration: delay(90, 0.33), from: teal, to: lightTeal}),

    set(all, {delay: delay(90, 18), to: teal}),

  ],

  // 3 before U
  'F#7': [
    set(all, {delay: delay(90, 3), to: off})
  ],

  // 4 before V
  'G7': [
    set(all, {delay: delay(90, 4), to: off})
  ],


}
