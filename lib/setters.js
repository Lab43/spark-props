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

exports.fadeUp = function (props, opts) {
  return props.map(function (prop) {
    return Object.assign({prop, type: 'u'}, opts);
  });
}

exports.fadeDown = function (props, opts) {
  return props.map(function (prop) {
    return Object.assign({prop, type: 'd'}, opts);
  });
}

exports.random = function (props, opts) {
  return props.map(function (prop) {
    return Object.assign({prop, type: 'r'}, opts);
  });
}

exports.electrocute = function (props, opts) {
  return props.map(function (prop) {
    return Object.assign({prop, type: 'e'}, opts);
  });
}
