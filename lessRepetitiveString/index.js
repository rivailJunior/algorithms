// given a string return the char with less repetition
// ex: aabbccd => d

function getLessCharRepetitive(str) {
  const arr = str.split("");
  const chars = {};
  for (const char of arr) {
    chars[char] = chars[char] + 1 || 1;
  }

  const result = Object.entries(chars).reduce((acu, cur) => {
    return parseInt(acu[1]) > parseInt(cur[1]) ? cur : acu;
  });

  return result[0];
}

module.exports = { getLessCharRepetitive };
