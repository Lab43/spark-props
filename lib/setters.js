exports.set = function (props, opts) {
  return props.map(function (prop) {
    return Object.assign({prop}, opts);
  });
}
