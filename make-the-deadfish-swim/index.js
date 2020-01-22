// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// Return the output array, and ignore all non-op characters
function parse(data) {
    let result = [];

  data.split('').reduce((char, s) => {
    if (s === 'i') char++;
    if (s === 'd') char--;
    if (s === 's') char = Math.pow(char, 2); //I would've done char *= char;
    if (s === 'o') result.push(char);
    
    return char;
  }, 0);
  
  return result;

}

console.log(parse("iiisdoso")); // => [ 8, 64 ]
