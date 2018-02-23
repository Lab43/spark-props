const {set, flash} = require('../lib/setters')
    , {off, white, teal, lightTeal, gentleGreen} = require('../lib/colors')
    , {t1, t2, t3, t4, t5, t6, m1, m2, m3, m4, m5, all, randomAll} = require('../lib/props')
    , delay = require('../lib/delay')
;



function letterAPulses(wait) {
  return function () {
    return flash(all, {delay: wait, duration: delay(90, 0.5), from: teal, to: lightTeal});
  }
}

function openingFlashOut(wait, gap) {
  return randomAll.map(function(prop, i) {
    return set([prop], {delay: wait + gap * i, to: lightTeal});
  })
}



module.exports = {



  // =========
  // beginning
  // =========

  // m0b3 -> first note
  'C3': [
    set(all, {delay: delay(90, 2), to: teal}),
    openingFlashOut(delay(90, 3), delay(90, 0.25)),
  ],

  // m1 -> first hit
  'C#3': [
    flash([t1, t2],     {delay: delay(90, 4 + 0),    duration: delay(90, 0.5), from: teal, to: lightTeal}),
    flash([m1, m2], {delay: delay(90, 4 + 0.25), duration: delay(90, 0.5), from: teal, to: lightTeal}),
    flash([m3],     {delay: delay(90, 4 + 0.5),  duration: delay(90, 0.5), from: teal, to: lightTeal}),
    flash([m4],     {delay: delay(90, 4 + 0.75), duration: delay(90, 0.5), from: teal, to: lightTeal}),
    flash([m5],     {delay: delay(90, 4 + 1),    duration: delay(90, 0.5), from: teal, to: lightTeal}),
  ],

  // m2 -> nothing
  'D3': [],

  // m3 -> second hit
  'D#3': [
    flash([t6, t5],     {delay: delay(90, 0.75 + 0),    duration: delay(90, 0.5), from: teal, to: lightTeal}),
    flash([m5, m4], {delay: delay(90, 0.75 + 0.25), duration: delay(90, 0.5), from: teal, to: lightTeal}),
    flash([m3],     {delay: delay(90, 0.75 + 0.5),  duration: delay(90, 0.5), from: teal, to: lightTeal}),
    flash([m2],     {delay: delay(90, 0.75 + 0.75), duration: delay(90, 0.5), from: teal, to: lightTeal}),
    flash([m1],     {delay: delay(90, 0.75 + 1),    duration: delay(90, 0.5), from: teal, to: lightTeal}),
  ],

  // m4 -> third hit
  'E3': [
    flash([t1, t2, t3],     {delay: delay(90, 0.75 + 0),    duration: delay(90, 0.5), from: teal, to: lightTeal}),
    flash([m1, m2, m3], {delay: delay(90, 0.75 + 0.25), duration: delay(90, 0.5), from: teal, to: lightTeal}),
    flash([m4],         {delay: delay(90, 0.75 + 0.5),  duration: delay(90, 0.5), from: teal, to: lightTeal}),
    flash([m5],         {delay: delay(90, 0.75 + 0.75), duration: delay(90, 0.5), from: teal, to: lightTeal}),
  ],

  // m5 - > fourth hit and fith hit (all)
  'F3': [
    flash([t6, t5, t4],     {delay: delay(90, 0.75 + 0),    duration: delay(90, 0.5), from: teal, to: lightTeal}),
    flash([m5, m4, m3], {delay: delay(90, 0.75 + 0.25), duration: delay(90, 0.5), from: teal, to: lightTeal}),
    flash([m2],         {delay: delay(90, 0.75 + 0.5),  duration: delay(90, 0.5), from: teal, to: lightTeal}),
    flash([m1],         {delay: delay(90, 0.75 + 0.75), duration: delay(90, 0.5), from: teal, to: lightTeal}),
  ],

  // m6-7 -> letter A first hit
  'F#3': [
    flash(all, {delay: delay(90, 5), duration: delay(90, 0.5), from: teal, to: lightTeal}),
  ],



  // ========
  // letter A
  // ========

  // m8 -> nothing
  'G3': [
    flash(all, {delay: delay(90, 3), duration: delay(90, 0.5), from: teal, to: lightTeal}),
  ],

  // m9 -> nothing
  'G#3': [
    flash(all, {delay: delay(90, 3.75), duration: delay(90, 0.5), from: teal, to: lightTeal}),
  ],

  // m10 -> second hit
  'A3': [],

  // m11 -> nothhing
  'A#3': [],

  // m12 -> third hit
  'B3': [],

  // m13 -> nothing
  'C4': [],

  // m13 -> fourth hit
  'C#4': [],

  // m15 -> nothing
  'D4': [],

  // m16 -> letter B
  'D#4': [
    set(all, {delay: delay(90, 3), to: gentleGreen}),
  ],



}
