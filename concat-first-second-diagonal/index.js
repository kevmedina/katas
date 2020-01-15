/* 
Iteration 1 
From a two dimensional array (with the same height and width), extract and concat all the elements from the "first diagonal", starting from the top left corner to the bottom right corner. 
*/

function concatFirstDiagonal(twoDimArray) {
    // your code goes here
    let result = '';
    for(let r = 0; r < twoDimArray.length; r++) {
        let arr = twoDimArray[r];
        for(let c = 0; c < twoDimArray.length; c++) {
        }
        result += arr[r];
    }
    return result;
}

// If given the following array, here is the result you should expect:

const someArr1 = [
  ['L','z','x','C','v','B'],
  ['t','i','I','p','e','7'],
  ['w','y','s','r','m','x'],
  ['q','U','l','b','k','H'],
  ['A','i','G','Y','o','L'],
  ['n','f','d','W','z','n']
];

// solution:
console.log(concatFirstDiagonal(someArr1));
// ==> "Lisbon"

/*
Iteration 2
From a two dimensional array (with the same height and width), extract and concat all the elements from the "second diagonal", starting from the top right corner to the bottom left corner.
*/

function concatSecondDiagonal(twoDimArray) {
    // your code goes here
    
}

// If given the following array, here is the result you should expect:

const someArr2 = [
  ['L','z','x','C','v','B'],
  ['t','i','I','p','e','7'],
  ['w','y','s','r','m','x'],
  ['q','U','l','b','k','H'],
  ['A','i','G','Y','o','L'],
  ['n','f','d','W','z','n']
];

// solution:
console.log(concatSecondDiagonal(someArr2));
// ==> "Berlin"

