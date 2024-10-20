const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  }
  if (num2 < num1) {
    [num1, num2] = [num2, num1];
  }
  let numberOfTerms =num2 -num1 + 1;
  const sum = (numberOfTerms/2) * (num1 + num2);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

