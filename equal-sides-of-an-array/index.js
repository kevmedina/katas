// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

/* Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6. 
*/

function findEvenIndex(arr) {
    for(var i = 0; i < arr.length; i++) {
    var leftOfNumTotal = arr.slice(0,i+1).reduce(function(accumulator, currentValue, index, array) {
      return accumulator + currentValue;
    }, 0);
    var rightOfNumTotal = arr.slice(i).reduce(function(accumulator, currentValue, index, array) {
      return accumulator + currentValue;
    }, 0);
    if(leftOfNumTotal === rightOfNumTotal) {
      return i;
    }
  }
  return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]));


// Another Solution

// function findEvenIndex(arr)
// {
//   for(var i=1; i<arr.length-1; i++) {
//     if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {
//       return i;
//     }
//   }
//   return -1;
// }

