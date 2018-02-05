exports.set = function (props, opts) {
  return props.map(function (prop) {
    return Object.assign({prop, type: 's'}, opts);
  });
}

exports.flash = function (props, opts) {
  return props.map(function (prop) {
    return Object.assign({prop, type: 'f'}, opts);
  });
}
