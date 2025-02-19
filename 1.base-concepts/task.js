"use strict"
function solveEquation(a, b, c) {
  const arr = [];
  const discriminant = b ** 2 - (4 * a * c);
  if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthPercentDecimalFraction = percent / 100 / 12;
  const creditBody = amount - contribution;
  const monthPayment = creditBody * (monthPercentDecimalFraction + (monthPercentDecimalFraction / (((1 + monthPercentDecimalFraction) ** countMonths) - 1)));
  return Number((monthPayment * countMonths).toFixed(2));
}