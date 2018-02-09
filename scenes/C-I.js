const {set, flash} = require('../lib/setters')
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
    set(all, {delay: delay(90, 3), to: lightTeal}),
  ],

  // m27b2 (2 before D) -> letter D
  'C#5': [
    set(mallets, {delay: delay(90, 2), to: [lightTeal, lightTeal, lightTeal, teal], resend: false}),
    set(mallets, {delay: delay(90, 2.75), to: [lightTeal, teal, lightTeal, lightTeal], resend: false}),
    set(mallets, {delay: delay(90, 3.5), to: [lightTeal, lightTeal, teal, lightTeal], resend: false}),
    set(mallets, {delay: delay(90, 4.5), to: [teal, lightTeal, lightTeal, lightTeal], resend: false}),
    set(mallets, {delay: delay(90, 5), to: lightTeal}),
  ],

  // m30b2 (2 before E) -> letter E
  'D5': [
    set(mallets, {delay: delay(90, 2), to: [teal, lightTeal, lightTeal, lightTeal], resend: false}),
    set(mallets, {delay: delay(90, 2.75), to: [lightTeal, lightTeal, teal, lightTeal], resend: false}),
    set(mallets, {delay: delay(90, 3.5), to: [lightTeal, teal, lightTeal, lightTeal], resend: false}),
    set(mallets, {delay: delay(90, 4.5), to: [lightTeal, lightTeal, lightTeal, teal], resend: false}),
    set(mallets, {delay: delay(90, 5), to: lightTeal}),
  ],

  // m33 (2 before F) -> letter F
  'D#5': [
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
  ],



  // ===================
  // letters G, H, and I
  // ===================

  // m38 (4 after G) -> bass feature
  'E5': [
    flash([m5],   {delay: delay(90, 0.5),  from: [gentleGreen, gentleGreen, gentleGreen, teal], duration: delay(90, 0.125), to: [gentleGreen, gentleGreen, teal, lightTeal], resend: false}),
    flash([m5],   {delay: delay(90, 0.75), from: [gentleGreen, teal, lightTeal, lightTeal],     duration: delay(90, 0.125), to: [teal, lightTeal, lightTeal, lightTeal], resend: false}),
    set([m5, t6], {delay: delay(90, 1),    to: lightTeal}),
    flash([m4],   {delay: delay(90, 1.25), from: [gentleGreen, gentleGreen, gentleGreen, teal], duration: delay(90, 0.125), to: [gentleGreen, gentleGreen, teal, lightTeal], resend: false}),
    flash([m4],   {delay: delay(90, 1.5),  from: [gentleGreen, teal, lightTeal, lightTeal],     duration: delay(90, 0.125), to: [teal, lightTeal, lightTeal, lightTeal], resend: false}),
    set([m4, t5], {delay: delay(90, 1.75), to: lightTeal}),
    flash([m3],   {delay: delay(90, 2),    from: [gentleGreen, gentleGreen, gentleGreen, teal], duration: delay(90, 0.125), to: [gentleGreen, gentleGreen, teal, lightTeal], resend: false}),
    flash([m3],   {delay: delay(90, 2.25), from: [gentleGreen, teal, lightTeal, lightTeal],     duration: delay(90, 0.125), to: [teal, lightTeal, lightTeal, lightTeal], resend: false}),
    set([m3, t4], {delay: delay(90, 2.5),  to: lightTeal}),
    set([t1, t2, t3, m1, m2], {delay: delay(90, 2.5), to: teal}),
  ],

  // m42 (4 before H) -> snare/marimba feature
  'F5': [
    set([t4, t5, t6, m3, m4, m5], {delay: delay(90, 2), to: teal}),
    set([t1, t2, t3, m1, m2], {delay: delay(90, 4), to: lightTeal}),
  ],

  // m50 (4 before I) -> Letter I
  'F#5': [
    set([m1, m2], {delay: delay(90, 0), to: lightTeal}),
    flash([m3], {delay: delay(90, 2.5),  from: [lightTeal, teal, teal, teal],           duration: delay(90, 0.125), to: [lightTeal, lightTeal, teal, teal]}),
    flash([m3], {delay: delay(90, 2.75), from: [lightTeal, lightTeal, lightTeal, teal], duration: delay(90, 0.125), to: lightTeal}),
    flash([m4], {delay: delay(90, 3),    from: [lightTeal, teal, teal, teal],           duration: delay(90, 0.125), to: [lightTeal, lightTeal, teal, teal]}),
    flash([m4], {delay: delay(90, 3.25), from: [lightTeal, lightTeal, lightTeal, teal], duration: delay(90, 0.125), to: lightTeal}),
    flash([m5], {delay: delay(90, 3.5),  from: [lightTeal, teal, teal, teal],           duration: delay(90, 0.125), to: [lightTeal, lightTeal, teal, teal]}),
    flash([m5], {delay: delay(90, 3.75), from: [lightTeal, lightTeal, lightTeal, teal], duration: delay(90, 0.125), to: lightTeal}),
    set(towers, {delay: delay(90, 4), to: teal}),
  ],



}
