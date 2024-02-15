//make a calculator is a function that takes two numbers and
//callback function and applies the callback function to the two numbers

const calculator = (num1, num2, operationFn) => {
  return operationFn(num1, num2);
};

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;

const sum = calculator(15, 23, add);
console.log(sum);
const difference = calculator(15, 25, subtract)
console.log(difference);