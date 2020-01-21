// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.


function pigIt(str){
    //Code here
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3");
  }
  
  /* Another solution
    pigIt = s => s.split(' ').map(e => e.substr(1) + e[0] + 'ay').join(' ');
  */

  console.log(pigIt('Pig latin is cool')); 
  console.log(pigIt('Hello world !')); 