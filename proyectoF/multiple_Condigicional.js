function checkSign(num) {
  if (typeof num === "string") {
    return "No podemos usar strings";
  } else if (num === true || num === false) {
    return "No podemos procesar valores Boleanos";
  } else {
  }
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

module.exports = checkSign;

