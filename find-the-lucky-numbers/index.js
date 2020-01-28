// Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

function filterLucky(arr) {
    // return arr.filter(num => num.toString().includes(7));

    // Solution 2
    return arr.filter((num) => (num.toString().match(/7/) != null));
}

console.log(filterLucky([1,2,3,4,5,6,7,68,69,70,15,17]));
console.log(filterLucky([17,30,47,50,62,77,117]));
