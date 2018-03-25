const {set, flash, electrocute} = require('../lib/setters')
    , {teal, lightTeal, red, brightRed, gentleGreen, off, white} = require('../lib/colors')
    , {t1, t2, t3, t4, t5, t6, m1, m2, m3, m4, m5, all, mallets, towers} = require('../lib/props')
    , delay = require('../lib/delay')
;


const soloFlashSpeed = 225;



module.exports = {



  // ===============
  // letters J, K, L
  // ===============

  // m58 -> first hit, letter J
  'C6': [
    flash(all, {delay: delay(90, 3), from: teal, duration: delay(90, 0.5), to: off}),
  ],

  // m59 -> second hit
  'C#6': [
    flash(all, {delay: delay(90, 3.75), from: teal, duration: delay(90, 0.5), to: off}),
  ],

  // m60 -> third hit
  'D6': [
    flash(all, {delay: delay(90, 3.75), from: teal, duration: delay(90, 0.5), to: off}),
  ],

  // m61 -> fourth hit
  'D#6': [
    flash(all, {delay: delay(90, 4.5), from: teal, duration: delay(90, 0.5), to: off}),
  ],

  // m62 - > all hit
  'E6': [
    set(all, {delay: delay(90, 3.75), to: teal}),
    set(all, {delay: delay(90, 3+3+4+4), to: off}),
  ],

  // m66, 4 before K - > letter K
  'F6': [
    flash(all, {delay: delay(90,3), duration: delay(90, 0.5), from: teal, to: off}),
    flash(all, {delay: delay(90,4), duration: delay(90, 0.5), from: teal, to: off}),
    electrocute(all, {delay: delay(90, 6), duration: delay(90, 3.5), from: [white, off, off, off], to: off}),
  ],

  'F#6': [
    set([m2], {to: red}),
  ],

  // jan
  'C7': [
    flash([m5], {delay: soloFlashSpeed * 1, from: [brightRed, off, off, off], duration: 100, to: [red, brightRed, off, off], resend: false}),
    flash([m5], {delay: soloFlashSpeed * 2, from: [red, red, brightRed, off],   duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m5],   {delay: soloFlashSpeed * 3, to: red}),
    flash([m2], {delay: soloFlashSpeed * 3, from: [brightRed, red, red, red], duration: 100, to: [red, brightRed, red, red], resend: false}),
    flash([m2], {delay: soloFlashSpeed * 4, from: [red, red, brightRed, red], duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m2],   {delay: soloFlashSpeed * 5, to: red}),
  ],

  // sarah
  'C#7': [
    flash([m4], {delay: soloFlashSpeed * 1, from: [brightRed, off, off, off], duration: 100, to: [red, brightRed, off, off], resend: false}),
    flash([m4], {delay: soloFlashSpeed * 2, from: [red, red, brightRed, off],   duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m4],   {delay: soloFlashSpeed * 3, to: red}),
    flash([m5], {delay: soloFlashSpeed * 3, from: [brightRed, red, red, red], duration: 100, to: [red, brightRed, red, red], resend: false}),
    flash([m5], {delay: soloFlashSpeed * 4, from: [red, red, brightRed, red],   duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m5],   {delay: soloFlashSpeed * 5, to: red}),
    flash([m2], {delay: soloFlashSpeed * 5, from: [brightRed, red, red, red], duration: 100, to: [red, brightRed, red, red], resend: false}),
    flash([m2], {delay: soloFlashSpeed * 6, from: [red, red, brightRed, red], duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m2],   {delay: soloFlashSpeed * 7, to: red}),
  ],

  // jake
  'D7': [
    flash([m1], {delay: soloFlashSpeed * 1,  from: [brightRed, off, off, off], duration: 100, to: [red, brightRed, off, off], resend: false}),
    flash([m1], {delay: soloFlashSpeed * 2,  from: [red, red, brightRed, off],   duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m1],   {delay: soloFlashSpeed * 3,  to: red}),
    flash([m4], {delay: soloFlashSpeed * 3,  from: [brightRed, red, red, red], duration: 100, to: [red, brightRed, red, red], resend: false}),
    flash([m4], {delay: soloFlashSpeed * 4,  from: [red, red, brightRed, red],   duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m4],   {delay: soloFlashSpeed * 5,  to: red}),
    flash([m5], {delay: soloFlashSpeed * 5,  from: [brightRed, red, red, red], duration: 100, to: [red, brightRed, red, red], resend: false}),
    flash([m5], {delay: soloFlashSpeed * 6,  from: [red, red, brightRed, red],   duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m5],   {delay: soloFlashSpeed * 7,  to: red}),
    flash([m2], {delay: soloFlashSpeed * 7, from: [brightRed, red, red, red], duration: 100, to: [red, brightRed, red, red], resend: false}),
    flash([m2], {delay: soloFlashSpeed * 8, from: [red, red, brightRed, red], duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m2],   {delay: soloFlashSpeed * 9, to: red}),
  ],

  // paul
  'D#7': [
    flash([m1], {delay: soloFlashSpeed * 1,  from: [brightRed, red, red, red], duration: 100, to: [red, brightRed, red, red], resend: false}),
    flash([m1], {delay: soloFlashSpeed * 2,  from: [red, red, brightRed, red],   duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m1],   {delay: soloFlashSpeed * 3,  to: red}),
    flash([m3], {delay: soloFlashSpeed * 3,  from: [brightRed, off, off, off], duration: 100, to: [red, brightRed, off, off], resend: false}),
    flash([m3], {delay: soloFlashSpeed * 4,  from: [red, red, brightRed, off],   duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m3],   {delay: soloFlashSpeed * 5,  to: red}),
    flash([m4], {delay: soloFlashSpeed * 5,  from: [brightRed, red, red, red], duration: 100, to: [red, brightRed, red, red], resend: false}),
    flash([m4], {delay: soloFlashSpeed * 6,  from: [red, red, brightRed, red],   duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m4],   {delay: soloFlashSpeed * 7,  to: red}),
    flash([m5], {delay: soloFlashSpeed * 7, from: [brightRed, red, red, red], duration: 100, to: [red, brightRed, red, red], resend: false}),
    flash([m5], {delay: soloFlashSpeed * 8, from: [red, red, brightRed, red],   duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m5],   {delay: soloFlashSpeed * 9, to: red}),
    flash([m2], {delay: soloFlashSpeed * 9, from: [brightRed, red, red, red], duration: 100, to: [red, brightRed, red, red], resend: false}),
    flash([m2], {delay: soloFlashSpeed * 10, from: [red, red, brightRed, red], duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m2],   {delay: soloFlashSpeed * 11, to: red}),
  ],

  // 2 before M
  'E7': [
    set(towers, {delay: delay(112, 2), to: red}),
    set(mallets, {delay: delay(112, 2), to: red}),
  ],

  // 8 before O
  'F7': [
    set([t1], {delay: delay(135, 0),    to: gentleGreen}),
    set([m1], {delay: delay(135, 0.75), to: gentleGreen}),
    set([t2], {delay: delay(135, 1.5),  to: gentleGreen}),
    set([m3], {delay: delay(135, 2.25), to: gentleGreen}),
    set([t3], {delay: delay(135, 3),    to: gentleGreen}),
    set([m4], {delay: delay(135, 3.75), to: gentleGreen}),
    set([t4], {delay: delay(135, 4.5),  to: gentleGreen}),
    set([m5], {delay: delay(135, 5.25), to: gentleGreen}),
    set([t5], {delay: delay(135, 6),    to: gentleGreen}),
    set([m2], {delay: delay(135, 6.75), to: gentleGreen}),
    set([t6], {delay: delay(135, 7.5),  to: gentleGreen}),
  ],



}
