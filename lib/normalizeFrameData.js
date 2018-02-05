module.exports = function ({
  prop,
  type = 's',
  at,
  delay = 0,
  from = ['000000', '000000', '000000', '000000'],
  duration = 0,
  to = ['000000', '000000', '000000', '000000'],
  resend = true,
}) {
  // convert single hex values to arrays of hex values
  if (typeof from === 'string') form = [from, from, from, from];
  if (typeof to === 'string') to = [to, to, to, to];
  return {
    prop,
    type,
    at,
    delay,
    from,
    duration,
    to,
    resend,
  }
};
