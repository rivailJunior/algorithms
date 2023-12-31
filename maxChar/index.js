// Given a string, return the character that is most commonly used in the string.

// Examples:

//  maxChar("abcccccccd") === "c"
//  maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  const bigger = Object.entries(chars).reduce((accumulator, current) => {
    return (accumulator =
      accumulator[1] || 0 > current[1] ? accumulator : current);
  }, 0);

  return bigger[0];
}

module.exports = { maxChar };
