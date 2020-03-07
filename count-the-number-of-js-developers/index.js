// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organizing for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

const list1 = [
  { first_name: 'Noah', last_name: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { first_name: 'Maia', last_name: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { first_name: 'Shufen', last_name: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { first_name: 'Sumayah', last_name: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
]
// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

// Notes:

// The format of the strings will always be Europe and JavaScript.
// All data will always be valid and uniform as in the example above.

// Soultion 1
function countDevelopers(list) {
    // your awesome code here :)
    let count = 0;
    for(let i = 0; i < list.length; i++) {
        let developer = list[i];
        if(developer.continent === 'Europe' && developer.language === 'JavaScript') {
            count++;
        }
    }
    return count;
  }

  console.log(countDevelopers(list1));
