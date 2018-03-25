const {set, flash, electrocute} = require('../lib/setters')
    , {off, white, teal, lightTeal, gentleGreen} = require('../lib/colors')
    , {t1, t2, t3, t4, t5, t6, m1, m2, m3, m4, m5, all, mallets, towers} = require('../lib/props')
    , delay = require('../lib/delay')
;



module.exports = {



  // ========
  // letter C
  // ========

  // m25 (3 before C) -> letter C
  'C5': [
    set(all, {delay: delay(90, 3), to: off}),
  ],

  // m27b2 (2 before D) -> letter D
  'C#5': [
    flash(towers, {delay: delay(90, 2), from: lightTeal, duration: delay(90, 3), to: off}),
    flash(mallets, {delay: delay(90, 2), from: [lightTeal, lightTeal, lightTeal, teal], duration: delay(90, 0.75), to: [lightTeal, teal, lightTeal, lightTeal]}),
    flash(mallets, {delay: delay(90, 3.5), from: [lightTeal, lightTeal, teal, lightTeal], duration: delay(90, 0.75), to: [teal, lightTeal, lightTeal, lightTeal]}),
    set(mallets, {delay: delay(90, 5), to: off}),
  ],

  // m30b2 (2 before E) -> letter E
  'D5': [
    flash(towers, {delay: delay(90, 2), from: lightTeal, duration: delay(90, 3), to: off}),
    flash(mallets, {delay: delay(90, 2), from: [teal, lightTeal, lightTeal, lightTeal], duration: delay(90, 0.75), to: [lightTeal, lightTeal, teal, lightTeal]}),
    flash(mallets, {delay: delay(90, 3.5), from: [lightTeal, teal, lightTeal, lightTeal], duration: delay(90, 0.75), to: [lightTeal, lightTeal, lightTeal, teal]}),
    electrocute(all, {delay: delay(90, 5.5), duration: delay(90, 5), from: [white, off, off, off], to: off}),
  ],

  // m33 (2 before F) -> letter F
  'D#5': [
    set(towers, {delay: delay(90,2), to: lightTeal}),
    flash(mallets, {delay: delay(90, 2), from: [lightTeal, lightTeal, lightTeal, teal], duration: delay(90, 1), to: [lightTeal, teal, lightTeal, lightTeal]}),
    flash(mallets, {delay: delay(90, 4), from: [lightTeal, lightTeal, teal, lightTeal], duration: delay(90, 1), to: [teal, lightTeal, lightTeal, lightTeal]}),
    flash(mallets, {delay: delay(90, 5.75), from: [lightTeal, lightTeal, lightTeal, teal], duration: delay(90, 0.75), to: [lightTeal, teal, lightTeal, lightTeal]}),
    set(mallets, {delay: delay(90, 7.25), to: [lightTeal, lightTeal, teal, lightTeal]}),
    flash(all, {delay: delay(90, 8), from: teal, duration: delay(90, 0.75), to: lightTeal}),
    flash(all, {delay: delay(90, 9.5), from: teal, duration: delay(90, 0.75), to: lightTeal}),
    set([t4, t5, t6, m3, m4, m5], {delay: delay(90, 11),   to: off}),
    set([t1, t2, t3, m1, m2],     {delay: delay(90, 11), to: gentleGreen}),
  ],



  // ===================
  // letters G, H, and I
  // ===================

  // m38 (4 after G) -> bass feature
  'E5': [
  ],

  // m42 (4 before H) -> snare/marimba feature
  'F5': [
    set([t4, t5, t6, m3, m4, m5], {delay: delay(90, 2), to: teal}),
    set([t1, t2, t3, m1, m2], {delay: delay(90, 2), to: off}),
  ],

  // m50 (4 before I) -> Letter I
  'F#5': [
    set(all, {delay: delay(90, 4), to: gentleGreen}),
  ],



}
