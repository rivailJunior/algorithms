const findDuplicates = (arr) => {
  const chars = {};

  for (let char of arr) {
    chars[char] = chars[char] + 1 || 1;
  }

  let bigger = [0, 0];
  const result = [];

  Object.entries(chars).forEach((item) => {
    if (bigger[1] < item[1]) {
      bigger = item;
    }
    if (item[1] > 1) result.push(item);
  });

  console.log("all duplicates:", result);
  console.log("bigger", bigger);
  return {
    bigger,
    result,
  };
};

findDuplicates([
  1, 1, 1, 2, 3, 4, 5, 3, 4, 5, 7, 8, 9, 10, 10, 10, 10, 5, 5, 6, 5, 6, 7, 5, 5,
]);
