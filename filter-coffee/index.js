// You love coffee and want to know what beans you can afford to buy it.

// The first argument to your search function will be a number which represents your budget.

// The second argument will be an array of coffee bean prices.

// Your 'search' function should return the stores that sell coffee within your budget.

// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

// Solution 1
const search = (budget, prices) => {
  let budgetArray = [];
  for (let i of prices) {
    if (i <= budget) {
      budgetArray.push(i);
    }
  }
  return budgetArray.sort((a, b) => a - b).join();
}

console.log(search(14, [7, 3, 23, 9, 14, 20, 7]));
