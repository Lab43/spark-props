var tinycolor = require('tinycolor2');

// convert a hue in the range 0-360 to a hex value
module.exports = function (hue) {
  return tinycolor({ h: hue, s: 100, v: 100 }).toHex();
}
