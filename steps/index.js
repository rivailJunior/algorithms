/*
Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # character.  Make sure the step has spaces on the right hand side!

Examples

steps(2);
//    '# '
//    '##'
 
steps(3)
//    '#  '
//    '## '
//    '###'
 
steps(4)
//    '#   '
//    '##  '
//    '### '
//    '####'
*/

function steps(n) {
  let chars = "";
  for (let index = 1; index <= n; index++) {
    const totalSpaces = n - index;
    chars += "#";
    const spaces = Array(totalSpaces).fill(" ").join("");
    const message = chars + spaces;
    console.log(message);
  }
}

// alternative from class
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = "";
//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }

steps(3);
