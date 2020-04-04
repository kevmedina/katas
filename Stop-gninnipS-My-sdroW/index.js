// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// Soultion 1
function spinWords(str){
    //TODO Have fun :)
    const arrOfWords = str.split(" ");
    for(let i = 0; i < arrOfWords.length; i++){
      if(arrOfWords[i].length >= 5){
       arrOfWords[i] = arrOfWords[i].split("").reverse().join("");
      }
    }
    return arrOfWords.toString().replace(/,/g, ' ')
  }

  console.log(spinWords('This is another test'));