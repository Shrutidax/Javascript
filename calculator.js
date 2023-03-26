const add = function (a, b) {
    return a + b;
  };
  
  const subtract = function (a, b) {
    return a - b;
  };
  
  const multiply = function (a,b) {
    return a * b;
  }

  const division = function (a,b) {
    return a / b;
  }

  const power = function (a, b) {
    return Math.pow(a, b);
  };
  
  console.log(add(6,4));
  console.log(subtract(6,4));
  console.log(multiply(6,4));
  console.log(division(6,2));
  console.log(power(6,2));

  module.exports = {
    add,
    subtract,
    multiply,
    division,
    power
  };