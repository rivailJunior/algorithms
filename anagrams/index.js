/*
Check to see if two provided strings are anagrams of each other. One string is an anagram of another if it uses the same characters in the same quantity.

Only consider characters, not spaces or punctuation

Consider capital letters to be the same as lower case

Examples:

anagrams('rail safety', 'fairy tales') === true
anagrams('RAIL! SAFETY!', 'fairy tales') === true
anagrams('Hi there', 'Bye there') === false

*/

// function buildChar(str) {
//   const strA = str.replace(/[ˆ\W]/g, "").toLowerCase().split("");
//   const charAux = {};
//   for (let char of strA) {
//     charAux[char] = charAux[char] + 1 || 1;
//   }
//   return charAux;
// }

// function anagrams(stringA, stringB) {
//   const charA = buildChar(stringA);
//   const charB = buildChar(stringB);

//   return (
//     Object.entries(charA).sort().toString() ===
//     Object.entries(charB).sort().toString()
//   );
// }

function formatChar(str) {
  return str.replace(/[ˆ\W]/g, "").toLowerCase().split("").sort().join("");
}

function anagrams(stringA, stringB) {
  const strA = formatChar(stringA);
  const strB = formatChar(stringB);
  return strA === strB;
}

anagrams("rail safety", "fairy tales");
anagrams("RAIL! SAFETY!", "fairy tales");
anagrams("Hi there", "Bye there");

module.exports = { anagrams };
