// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));

