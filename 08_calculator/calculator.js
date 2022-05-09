const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  return nums.reduce((total, number) => total += number, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, number) => total *= number, 1);
};

const power = function(a, b) {
  let sum = 1;
  for (let i = 0; i < b; i++) {
    sum *= a;
  }
  return sum;
};

const factorial = function(num) {
  if (num === 0) return 1;
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
