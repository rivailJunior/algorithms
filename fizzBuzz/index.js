// Write a program that console logs the numbers from 1 to n.

// For multiples of three print 'fizz' instead of the number

// For the multiples of five print 'buzz'

// For numbers which are multiples of both three and five print 'fizzbuzz'

// Example:

// fizzBuzz(5);
// // Output from console.log:
// // 1
// // 2
// // fizz
// // 4
// // buzz
function fizzBuzz(n) {
  for (let value = 1; value <= n; value++) {
    if (value % 5 === 0 && value % 3 === 0) {
      console.log("fizzbuzz");
    } else if (value % 3 === 0) {
      console.log("fizz");
    } else if (value % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(value);
    }
  }
}

module.exports = { fizzBuzz };
