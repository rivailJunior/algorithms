function twoSum(nums, valueToFind) {
  let result = 0;
  let index = 0;
  let auxArray = [];
  while (result !== valueToFind) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[index] + nums[i] === valueToFind) {
        result = nums[index] + nums[i];
        auxArray = [nums[index], nums[i]];
      }
    }
    index++;
  }

  return auxArray;
}

/**
+ * Finds pairs of numbers in the given array that add up to a specified value.
+ *
+ * @param {Array} nums - The array of numbers to search through.
+ * @param {number} valueToFind - The target value to find pairs for.
+ * @return {Array} - An array of pairs that add up to the target value.
+ * @timeComplexity O(n), where n is the length of the input array.
+ */
function twoSum2(nums, valueToFind) {
  let auxArray = [];
  let auxResult = [];
  for (let item in nums) {
    const result = valueToFind - nums[item];

    if (auxArray.includes(result)) {
      auxResult.push(result, nums[item]);
    } else {
      auxArray.push(nums[item]);
    }
  }
  return auxResult;
}

module.exports = {
  twoSum,
  twoSum2,
};
