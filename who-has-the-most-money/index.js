// You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }

  mostMoney(students) {
    // Soultion 1  
    let array = [];
    if (students.length === 1) {
       return students[0].name;
    }
    students.forEach((value, index) => {
       let total = ((5 * value.fives) + (10 * value.tens) + (20 * value.twenties));
       array.push([total, value.name]);
    });
    array = array.sort((a, b) => b[0] - a[0]);
    if (array.every((el, i, array) => el[0] === array[0][0])) {
      return 'all'; 
    }
    else {
      return array[0][1];
    }

    // Soultion 2
    // students.sort((x,y) => sum(y)-sum(x));
    // if(students.length > 1 && sum(students[0]) == sum(students[1])) return 'all';
    // return students[0].name;

  }
}


// As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

// Notes:

// Each student will have a unique name
// There will always be a clear winner: either one person has the most, or everyone has the same amount
// If there is only one student, then that student has the most money