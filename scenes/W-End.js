const {set, flash, fadeUp, fadeDown, random} = require('../lib/setters')
    , {teal, lightTeal, red, brightRed, gentleGreen, off} = require('../lib/colors')
    , {t1, t2, t3, t4, t5, t6, m1, m2, m3, m4, m5, all, mallets, towers, vibes} = require('../lib/props')
    , delay = require('../lib/delay')
    , hue = require('../lib/hue')
;



module.exports = {



  // ========
  // W to End
  // ========

  // 4 before W
  'C7': [
    set([m1, m2, t1, t2, t3, t4, t5, t6], {
      delay: delay(90, 4),
      to: off,
    }),

    fadeUp([m3], {
      delay: delay(90, 4),
      duration: delay(90, 3.5),
      from: [hue(0), hue(30), hue(60), hue(90)],
      to: [hue(240), hue(270), hue(300), hue(330)],
    }),
    fadeUp([m4], {
      delay: delay(90, 4),
      duration: delay(90, 3.5),
      from: [hue(120), hue(150), hue(180), hue(210)],
      to: [hue(0), hue(30), hue(60), hue(90)],
    }),
    fadeUp([m5], {
      delay: delay(90, 4),
      duration: delay(90, 3.5),
      from: [hue(240), hue(270), hue(300), hue(330)],
      to: [hue(120), hue(150), hue(180), hue(210)],
    }),

    fadeUp([m3], {
      delay: delay(90, 7.5),
      duration: delay(90, 3.5),
      from: [hue(240), hue(270), hue(300), hue(330)],
      to: [hue(120), hue(150), hue(180), hue(210)],
    }),
    fadeUp([m4], {
      delay: delay(90, 7.5),
      duration: delay(90, 3.5),
      from: [hue(0), hue(30), hue(60), hue(90)],
      to: [hue(240), hue(270), hue(300), hue(330)],
    }),
    fadeUp([m5], {
      delay: delay(90, 7.5),
      duration: delay(90, 3.5),
      from: [hue(120), hue(150), hue(180), hue(210)],
      to: [hue(0), hue(30), hue(60), hue(90)],
    }),

    fadeUp([m3], {
      delay: delay(90, 11),
      duration: delay(90, 3.5),
      from: [hue(120), hue(150), hue(180), hue(210)],
      to: [hue(0), hue(30), hue(60), hue(90)],
    }),
    fadeUp([m4], {
      delay: delay(90, 11),
      duration: delay(90, 3.5),
      from: [hue(240), hue(270), hue(300), hue(330)],
      to: [hue(120), hue(150), hue(180), hue(210)],
    }),
    fadeUp([m5], {
      delay: delay(90, 11),
      duration: delay(90, 3.5),
      from: [hue(0), hue(30), hue(60), hue(90)],
      to: [hue(240), hue(270), hue(300), hue(330)],
    }),

    random([m3,m4,m5], {
      delay: delay(90, 4 + 3.5*3),
      duration: delay(90, 3),
      to: hue(60),
    }),

  ],

  // 3 before X
  'C#7': [
    fadeUp(towers, {
      delay: delay(90, 3),
      duration: delay(90, 3.5),
      from: [hue(0), hue(30), hue(60), hue(90)],
      to: [hue(240), hue(270), hue(300), hue(330)],
    }),
    fadeUp(mallets, {
      delay: delay(90, 3),
      duration: delay(90, 3.5),
      from: hue(60),
      to: hue(300),
    }),

    /*fadeUp([m3], {
      delay: delay(90, 3),
      duration: delay(90, 3.5),
      from: [hue(0), hue(30), hue(60), hue(90)],
      to: [hue(240), hue(270), hue(300), hue(330)],
    }),
    fadeUp([m4], {
      delay: delay(90, 3),
      duration: delay(90, 3.5),
      from: [hue(120), hue(150), hue(180), hue(210)],
      to: [hue(0), hue(30), hue(60), hue(90)],
    }),
    fadeUp([m5], {
      delay: delay(90, 3),
      duration: delay(90, 3.5),
      from: [hue(240), hue(270), hue(300), hue(330)],
      to: [hue(120), hue(150), hue(180), hue(210)],
    }),*/

    fadeUp(towers, {
      delay: delay(90, 6.5),
      duration: delay(90, 3.5),
      from: [hue(240), hue(270), hue(300), hue(330)],
      to: [hue(120), hue(150), hue(180), hue(210)],
    }),
    fadeUp(mallets, {
      delay: delay(90, 6.5),
      duration: delay(90, 3.5),
      from: hue(300),
      to: hue(180),
    }),

    /*fadeUp([m3], {
      delay: delay(90, 6.5),
      duration: delay(90, 3.5),
      from: [hue(240), hue(270), hue(300), hue(330)],
      to: [hue(120), hue(150), hue(180), hue(210)],
    }),
    fadeUp([m4], {
      delay: delay(90, 6.5),
      duration: delay(90, 3.5),
      from: [hue(0), hue(30), hue(60), hue(90)],
      to: [hue(240), hue(270), hue(300), hue(330)],
    }),
    fadeUp([m5], {
      delay: delay(90, 6.5),
      duration: delay(90, 3.5),
      from: [hue(120), hue(150), hue(180), hue(210)],
      to: [hue(0), hue(30), hue(60), hue(90)],
    }),*/

    fadeUp(towers, {
      delay: delay(90, 10),
      duration: delay(90, 3.5),
      from: [hue(120), hue(150), hue(180), hue(210)],
      to: [hue(0), hue(30), hue(60), hue(90)],
    }),
    fadeUp(mallets, {
      delay: delay(90, 10),
      duration: delay(90, 3.5),
      from: hue(180),
      to: hue(60),
    }),

    /*fadeUp([m3], {
      delay: delay(90, 10),
      duration: delay(90, 3.5),
      from: [hue(120), hue(150), hue(180), hue(210)],
      to: [hue(0), hue(30), hue(60), hue(90)],
    }),
    fadeUp([m4], {
      delay: delay(90, 10),
      duration: delay(90, 3.5),
      from: [hue(240), hue(270), hue(300), hue(330)],
      to: [hue(120), hue(150), hue(180), hue(210)],
    }),
    fadeUp([m5], {
      delay: delay(90, 10),
      duration: delay(90, 3.5),
      from: [hue(0), hue(30), hue(60), hue(90)],
      to: [hue(240), hue(270), hue(300), hue(330)],
    }),*/

    random(all, {
      delay: delay(90, 3 + 3.5*3),
      duration: delay(90, 3),
      to: hue(60),
    }),
  ],


  // 3 before Y
  'D7': [
    fadeUp(towers, {
      delay: delay(90, 3),
      duration: delay(90, 3.5),
      from: [hue(0), hue(30), hue(60), hue(90)],
      to: [hue(240), hue(270), hue(300), hue(330)],
    }),
    fadeUp(mallets, {
      delay: delay(90, 3),
      duration: delay(90, 3.5),
      from: hue(60),
      to: hue(300),
    }),

    /*fadeUp([m3], {
      delay: delay(90, 3),
      duration: delay(90, 3.5),
      from: [hue(0), hue(30), hue(60), hue(90)],
      to: [hue(240), hue(270), hue(300), hue(330)],
    }),
    fadeUp([m4], {
      delay: delay(90, 3),
      duration: delay(90, 3.5),
      from: [hue(120), hue(150), hue(180), hue(210)],
      to: [hue(0), hue(30), hue(60), hue(90)],
    }),
    fadeUp([m5], {
      delay: delay(90, 3),
      duration: delay(90, 3.5),
      from: [hue(240), hue(270), hue(300), hue(330)],
      to: [hue(120), hue(150), hue(180), hue(210)],
    }),*/

    fadeUp(towers, {
      delay: delay(90, 6.5),
      duration: delay(90, 3.5),
      from: [hue(240), hue(270), hue(300), hue(330)],
      to: [hue(120), hue(150), hue(180), hue(210)],
    }),
    fadeUp(mallets, {
      delay: delay(90, 6.5),
      duration: delay(90, 3.5),
      from: hue(300),
      to: hue(180),
    }),

    /*fadeUp([m3], {
      delay: delay(90, 6.5),
      duration: delay(90, 3.5),
      from: [hue(240), hue(270), hue(300), hue(330)],
      to: [hue(120), hue(150), hue(180), hue(210)],
    }),
    fadeUp([m4], {
      delay: delay(90, 6.5),
      duration: delay(90, 3.5),
      from: [hue(0), hue(30), hue(60), hue(90)],
      to: [hue(240), hue(270), hue(300), hue(330)],
    }),
    fadeUp([m5], {
      delay: delay(90, 6.5),
      duration: delay(90, 3.5),
      from: [hue(120), hue(150), hue(180), hue(210)],
      to: [hue(0), hue(30), hue(60), hue(90)],
    }),*/

    fadeUp(towers, {
      delay: delay(90, 10),
      duration: delay(90, 3.5),
      from: [hue(120), hue(150), hue(180), hue(210)],
      to: [hue(0), hue(30), hue(60), hue(90)],
    }),
    fadeUp(mallets, {
      delay: delay(90, 10),
      duration: delay(90, 3.5),
      from: hue(180),
      to: hue(60),
    }),

    /*fadeUp([m3], {
      delay: delay(90, 10),
      duration: delay(90, 3.5),
      from: [hue(120), hue(150), hue(180), hue(210)],
      to: [hue(0), hue(30), hue(60), hue(90)],
    }),
    fadeUp([m4], {
      delay: delay(90, 10),
      duration: delay(90, 3.5),
      from: [hue(240), hue(270), hue(300), hue(330)],
      to: [hue(120), hue(150), hue(180), hue(210)],
    }),
    fadeUp([m5], {
      delay: delay(90, 10),
      duration: delay(90, 3.5),
      from: [hue(0), hue(30), hue(60), hue(90)],
      to: [hue(240), hue(270), hue(300), hue(330)],
    }),*/

    random(all, {
      delay: delay(90, 3 + 3.5*3),
      duration: delay(90, 3),
      to: hue(60),
    }),
  ],


  // 3 before Z
  'D#7': [
    fadeUp(towers, {
      delay: delay(90, 3),
      duration: delay(90, 3),
      from: [hue(0), hue(30), hue(60), hue(90)],
      to: [hue(240), hue(270), hue(300), hue(330)],
    }),
    fadeUp(mallets, {
      delay: delay(90, 3),
      duration: delay(90, 3),
      from: hue(60),
      to: hue(300),
    }),

    /*fadeUp([m3], {
      delay: delay(90, 3),
      duration: delay(90, 3.5),
      from: [hue(0), hue(30), hue(60), hue(90)],
      to: [hue(240), hue(270), hue(300), hue(330)],
    }),
    fadeUp([m4], {
      delay: delay(90, 3),
      duration: delay(90, 3.5),
      from: [hue(120), hue(150), hue(180), hue(210)],
      to: [hue(0), hue(30), hue(60), hue(90)],
    }),
    fadeUp([m5], {
      delay: delay(90, 3),
      duration: delay(90, 3.5),
      from: [hue(240), hue(270), hue(300), hue(330)],
      to: [hue(120), hue(150), hue(180), hue(210)],
    }),*/

    random(all, {
      delay: delay(90, 6),
      duration: delay(90, 3),
      to: off,
    }),

  ],

  // 12 after z (2 counts before last measure)
  'E7': [
    set([t3], {delay: delay(90, 2), to: hue(0)}),
    set([m1], {delay: delay(90, 2), to: hue(15)}),
    set([t1], {delay: delay(90, 2), to: hue(50)}),
    set([m3], {delay: delay(90, 2), to: hue(90)}),
    set([t2], {delay: delay(90, 2), to: hue(120)}),
    set([m4], {delay: delay(90, 2), to: hue(150)}),
    set([t4], {delay: delay(90, 2), to: hue(180)}),
    set([m5], {delay: delay(90, 2), to: hue(225)}),
    set([t6], {delay: delay(90, 2), to: hue(270)}),
    set([m2], {delay: delay(90, 2), to: hue(300)}),
    set([t5], {delay: delay(90, 2), to: hue(330)}),
  ],


}
