// Find how many items each element on array is bigger than
// [8,2,2,3]
// response = [3,0,0,1]

function biggerThan(array) {
  const result = array.map((item) => {
    return array.filter((item2) => {
      return item > item2;
    }).length;
  });
  return result;
}

biggerThan([10, 8, 11, 0]);
