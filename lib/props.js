const all = ['t1', 't2', 't3', 't4', 't5', 't6', 'm1', 'm2', 'm3', 'm4', 'm5']
    , towers = ['t1', 't2', 't3', 't4', 't5', 't6']
    , mallets = ['m1', 'm2', 'm3', 'm4', 'm5']
    , vibes = ['m1', 'm2']
    , marimbas = ['m3', 'm4', 'm5']
;

module.exports = {
  t1: 't1',
  t2: 't2',
  t3: 't3',
  t4: 't4',
  t5: 't5',
  t6: 't6',
  m1: 'm1',
  m2: 'm2',
  m3: 'm3',
  m4: 'm4',
  m5: 'm5',
  all,
  towers,
  mallets,
  vibes,
  marimbas,
  random: function () {
    return all[Math.floor(Math.random()*all.length)];
  },
  randomAll: shuffle(all),
};


// https://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};
