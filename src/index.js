module.exports = function reverse (n) {
  let str = n.toString();
  let reversed = ``;

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return +reversed;
}
