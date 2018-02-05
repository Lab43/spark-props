// https://stackoverflow.com/a/2998822
module.exports = function (num, size) {
  var s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}
