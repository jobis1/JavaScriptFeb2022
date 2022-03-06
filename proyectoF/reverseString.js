function reverseString(str) {
  if (str == "boolean") {
    return undefined;
  }
  return str.split("").reverse().join("");
}

module.exports = reverseString;
