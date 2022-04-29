const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	let result = 0;
  const lengthNums = nums.length;
  for (i = 0; i < lengthNums; i++) {
    result += nums[i];
  }
  return result;
};

const multiply = function(nums) {
  let result = nums[0];
  const lengthNums = nums.length;

  for (i = 1; i < lengthNums; i++) {
    result *= nums[i];
  }
  return result;
};

const power = function(a, b) {
	let result = a;
  for (i = 1; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }

	let result = num;
  for (i = num - 1; i > 0; i--) {
    result *= i;
  }
  return result;
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
