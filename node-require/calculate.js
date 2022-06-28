const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const num1 = Number(process.argv[2]);
const operation = process.argv[3];
const num2 = Number(process.argv[4]);

if (operation === 'plus') {
  console.log(add.sum(num1, num2));
} else if (operation === 'minus') { console.log(subtract.difference(num1, num2)); } else if (operation === 'times') { console.log(multiply.product(num1, num2)); } else if (operation === 'over') { console.log(divide.quotient(num1, num2)); } else {
  console.log('Invalid entry');
}
