module.exports = function (bpm, beats) {
  return Math.round(60000 / bpm * beats, 1);
}
