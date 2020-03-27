// Let us begin with an example:

// A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

// He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

// Can you help him?

// How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?

// Parameters and return of function:

// parameter (positive int or float, guaranteed) startPriceOld (Old car price)
// parameter (positive int or float, guaranteed) startPriceNew (New car price)
// parameter (positive int or float, guaranteed) savingperMonth
// parameter (positive float or int, guaranteed) percentLossByMonth

// nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)

// Solution 1
function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let months = 0;
  let savingsTotal = 0;
  let lossPercentage = percentLossByMonth;
  let oldCarValue = startPriceOld;
  let newCarValue = startPriceNew;

  while (oldCarValue + savingsTotal < newCarValue) {
    months++;
    months % 2 === 0 ? (lossPercentage += 0.5) : lossPercentage;

    oldCarValue -= oldCarValue * (lossPercentage / 100);
    newCarValue -= newCarValue * (lossPercentage / 100);
    savingsTotal += savingperMonth;
  }

  let leftoverSavings = oldCarValue + savingsTotal - newCarValue;
  return [months, Math.round(leftoverSavings)];
}

// Solution 2
function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  var months = 0,
    moneySaved = 0;
  while (startPriceNew > startPriceOld + moneySaved) {
    moneySaved += savingperMonth;
    startPriceOld -= startPriceOld * (percentLossByMonth / 100);
    startPriceNew -= startPriceNew * (percentLossByMonth / 100);
    months++;
    if (months % 2 == 1) {
      percentLossByMonth += 0.5;
    }
  }
  return [months, Math.round(startPriceOld + moneySaved - startPriceNew)];
}

console.log(nbMonths(2000, 8000, 1000, 1.5));
