function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (const number of arr) {
    if (number < min) {
      min = number;
    }

    if (number > max) {
      max = number;
    }

    sum += number;
  }

  const avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr.reduce((sum, nextValue) => sum + nextValue);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (const number of arr) {
    if (number % 2 === 0) {
      sumEvenElement += number;
    } else {
      sumOddElement += number;
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (const number of arr) {
    if (number % 2 === 0) {
      sumEvenElement += number;
      ++countEvenElement;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (const array of arrOfArr) {
    const funcResult = func(...array);
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
  }

  return maxWorkerResult;
}
