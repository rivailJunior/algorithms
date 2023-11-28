/*
Given an array and chunk size, divide the array into many subarrays where each subarray is of the provided size.

Examples:

 // Chunk size two:
 chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]

 // Chunk size two:
 chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]

 // Chunk size 3:
 chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]

 // Chunk size 4:
 chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]

 // Chunk size 10:
 chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

function chunk(array, size) {
  const auxArr = [];
  let position = 0;
  let helperArr = [];

  for (let value of array) {
    helperArr.push(value);
    auxArr[position] = helperArr;
    if (auxArr[position].length === size) {
      position++;
      helperArr = [];
    }
  }
  return auxArr;
}

module.exports = { chunk };
