// not so good solution

// function reverse(str) {
//   let reverseAux = [];
//   let reverseResult = "";
//   for (let a = 0; a < str.length; a++) {
//     reverseAux.push(str[a]);
//   }
//   for (let a = reverseAux.length - 1; a >= 0; a--) {
//     reverseResult += str[a];
//   }

//   return reverseResult;
// }

//better solution
function reverse(str) {
  return str.split("").reduce((rev, char) => {
    return char + rev;
  }, "");
}

module.export = { reverse };
