// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// Soultion 1
function spinWords(str) {
  //TODO Have fun :)
  const arrOfWords = str.split(" ");
  for (let i = 0; i < arrOfWords.length; i++) {
    if (arrOfWords[i].length >= 5) {
      arrOfWords[i] = arrOfWords[i].split("").reverse().join("");
    }
  }
  return arrOfWords.toString().replace(/,/g, " ");
}

// Solution 2 (BEST Practice)
function spinWords(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

// Solution 3 (Another great method)
function spinWords(string) {
  return string.replace(/\w{5,}/g, function (w) {
    return w.split("").reverse().join("");
  });
}

console.log(spinWords("This is another test"));
console.log(spinWords("Welcome to another practice kata"));
console.log(spinWords("Wake up eat code and repeat"));
