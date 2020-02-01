// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// input: number
// output: single digit number 

function digital_root(n) {
    var sumOfNums = 0;
    var arrOfNums = n.toString().split("").map(function(str) {  // [ 9, 4, 2 ]
      return parseInt(str); 
    });
    while (arrOfNums.length > 1) {
      sumOfNums = arrOfNums.reduce(function(a, b) { // 15
        return a + b;
      });
      arrOfNums = sumOfNums.toString().split("").map(function(str) { // turns 15 into [1, 5]
      return parseInt(str);
      });
    }
    return sumOfNums;
  }
  
  console.log(digital_root(1)); // 0
  console.log(digital_root(16)); // 1 + 6 = 7
  console.log(digital_root(942)); // 9 + 4 + 2 = 15, 1 + 5 = 6
  console.log(digital_root(132189)); // 1 + 3 + 2 + 1 + 8 + 9 = 24, 2 + 4 = 6
  console.log(digital_root(493193)); // 4 + 9 + 3 + 1 + 9 + 3 = 29, 2 + 9 = 11, 1 + 1 = 2
  