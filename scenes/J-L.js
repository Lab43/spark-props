const {set} = require('../lib/setters')
    , {teal, lightTeal, red} = require('../lib/colors')
    , {t1, t2, t3, t4, t5, t6, m1, m2, m3, m4, m5, all, mallets, towers} = require('../lib/props')
    , delay = require('../lib/delay')
;



module.exports = {



  // ===============
  // letters J, K, L
  // ===============

  // m58 -> first hit, letter J
  'C6': [
    set(all, {delay: delay(90, 3), to: teal}),
    set(all, {delay: delay(90, 3.5), to: lightTeal}),
  ],

  // m59 -> second hit
  'C#6': [
    set(all, {delay: delay(90, 3.75), to: teal}),
    set(all, {delay: delay(90, 4.25), to: lightTeal}),
  ],

  // m60 -> third hit
  'D6': [
    set(all, {delay: delay(90, 3.75), to: teal}),
    set(all, {delay: delay(90, 4.25), to: lightTeal}),
  ],

  // m61 -> fourth hit
  'D#6': [
    set(all, {delay: delay(90, 4.5), to: teal}),
    set(all, {delay: delay(90, 5), to: lightTeal}),
  ],

  // m62 - > all hit
  'E6': [
    set(all, {delay: delay(90, 3.75), to: teal}),
  ],

  // m66b3, 2 before K - > letter K (William)
  'F6': [
    set([t1, t2, t3, t4, t5, t6, m1, m3, m4, m5], {delay: delay(90, 2), to: teal}),
    set([m2], {delay: delay(90, 2), to: red}),
  ],

  // jan
  'C7': [
    set([m5], {to: red}),
  ],

  // sarah
  'C#7': [
    set([m4], {to: red}),
  ],

  // jake
  'D7': [
    set([m1], {to: red}),
  ],

  // paul
  'D#7': [
    set([m3], {to: red}),
  ],

  // all
  'E7': [
    set(all, {to: red}),
  ],



}
