/*
given a string as parameter, capitalize the string and return the capitalized string
ex: i'm playing soccer -> I'm Playing Soccer
*/
function capitalize(str) {
  const arr = str.split(" ");
  let newStr = "";
  for (const key of arr) {
    const sliced = key.slice(1);
    newStr += key[0].toUpperCase() + sliced + " ";
  }
  return newStr.trim();
}

capitalize("hello i'm rivail santos");

capitalize("hi there, i'm doing the mac instalation");

module.exports = capitalize;
