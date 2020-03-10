// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];
// your function should return true.

// Solution 1
function isRubyComing(list) {
  // thank you for checking out my kata :)
  return list.some(developer => developer.language === "Ruby");
}

// Solution 2
function isRubyComing(list) {
  let rubyDev = false;
  for (let i = 0; i < list.length; i++)
    if (list[i].language === "Ruby") {
      return true;
    }
  return rubyDev;
}

console.log(isRubyComing(list1));
