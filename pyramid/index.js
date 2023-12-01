/*
Write a function that accepts a positive number N.

The function should console log a pyramid shape with N levels using the # character.  Make sure the pyramid has spaces on both the left *and* right hand sides.

Examples

pyramid(1);
//      '#'
 
pyramid(2);
//      ' # '
//      '###'
 
pyramid(3);
//      '  #  '
//      ' ### '
//      '#####'
*/

// function pyramid(n) {
//   const colsQuantity = n * 2 - 1;
//   let midPoint = Math.floor(colsQuantity / 2);
//   for (let row = 0; row < n; row++) {
//     let chars = "";
//     for (let col = 0; col < colsQuantity; col++) {
//       const minor = midPoint - row;
//       const major = midPoint + row;
//       if (minor <= col && major >= col) {
//         chars += "#";
//       } else {
//         chars += " ";
//       }
//     }
//     console.log("chars", chars);
//   }
// }

function pyramid(n, row = 0, chars = "") {
  if (row === n) return;
  let colsQuantity = n * 2 - 1;

  if (chars.length === colsQuantity) {
    console.log(chars);
    return pyramid(n, row + 1);
  }

  const midPoint = Math.floor(colsQuantity / 2);
  const minor = midPoint - row;
  const major = midPoint + row;
  let add;
  if (minor <= chars.length && major >= chars.length) {
    add = "#";
  } else {
    add = " ";
  }

  pyramid(n, row, chars + add);
}

pyramid(3);
