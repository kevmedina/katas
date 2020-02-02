// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2],[1]) == [2]

function arrayDiff(a,b) {
  // Solution 1
//   let difArray = []

//   for ( let i = 0; i < a.length; i++) {
//       let elem = a[i]
//       if (b.indexOf(elem) === -1 ){
//        difArray.push(elem)
//       }
//   }
//   return difArray;

  // Solution 2
  return a.filter(function(x) { return b.indexOf(x) == -1; });

}

console.log(arrayDiff([1,2,4,3,6,1],[1,3,4]));