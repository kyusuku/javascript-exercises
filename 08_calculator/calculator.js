const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, curr) => total + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => total * curr, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	if (n === 0 || n === 1) return 1;
  else {
    let res = new Array(n + 1);
    res[0] = 1;
    res[1] = 1;

    for (let i = 2; i <= n; i++) {
      res[i] = res[i - 1] * i;
    }

    return res[n];
  }
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
