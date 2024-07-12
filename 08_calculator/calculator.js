const add = function(number1, number2) {
  return number1 + number2;
	
};

const subtract = function(number1, number2) {
  return number1 - number2;
	
};

const sum = function(array) {
  total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
	return total;
};

const multiply = function(array) {
  total = 1;
  for (i = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total;
};

const power = function(number, power) {
  return Math.pow(number, power);
};

const factorial = function(number) {
  if (number == 0) {
    return 1;
  }else { 
    total = 1;
    for (i = 1; i <= number; i++) {
       total *= i;
  }
}
return total;
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
