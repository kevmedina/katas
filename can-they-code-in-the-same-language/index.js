// Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return either:

// true if all developers in the list code in the same language; or
// false otherwise.
// For example, given the following input array:

var list1 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "JavaScript"
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "JavaScript"
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 65,
    language: "JavaScript"
  }
];
// your function should return true.

// Solution 1
function isSameLanguage(list) {
  return list.every(e => e.language === list[0].language);
}

// Solution 2
function isSameLanguage(list) {
  return list.every((d, i, arr) => d.language === arr[0].language);
}

// Solution 3
function isSameLanguage(list) {
  for (var i = 0; i < list.length; i++) {
    if (list[0].language !== list[i].language) {
      return false;
    }
  }
  return true;
}

console.log(isSameLanguage(list1));
