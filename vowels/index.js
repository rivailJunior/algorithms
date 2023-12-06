/**
 * count the total number of vowels in a string
 * @param {*} str
 */

// function vowels(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (const char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   console.log(count);
//   return count;
// }

function vowels(str) {
  const matches = (str.match(/[aeiou]/gi) || []).length;
  return matches;
}

vowels("abcdef");
vowels("Eu Estou testando isso aqui");

module.exports = vowels;
