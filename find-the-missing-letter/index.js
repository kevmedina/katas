// Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

// Solution 1
// function findTheMissingLetter(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         let currentCharCode = arr[i].charCodeAt(0);
//         if(currentCharCode + 1 !== arr[i + 1].charCodeAt(0)){
//             return String.fromCharCode(currentCharCode + 1);
//         }
//     }
// }

// Solution 2
const findTheMissingLetter = (arr) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const start = alphabet.indexOf(arr[0]);
    return alphabet.slice(start, start + arr.length).find(el => !arr.includes(el));
  };

console.log(findTheMissingLetter(["a","b","c","d","f"]));