//  1. activity 1
//  add two numbers:

let a = 10,
  b = 20;
// console.log(a, b);
console.log(a + b);
let c = a + b;
console.log(c);

// sub two numbers:

let n1 = 100,
  n2 = 30;
console.log(n1 - n2);

//  multi two numbers:
let num1 = 4,
  num2 = 25;
console.log(num1 * num2);

// divide two numbers:

let number1 = 105.23,
  number2 = 20;

console.log(number1 / number2);

// find the remainder :

console.log(number1 % number2);

// activity 2.

// use += operator
num1 = 10;
num2 = 20;
num1 += num2;
console.log(num1);

// use -= operator

num1 = 500;
num2 = 250;
num1 -= num2;
console.log(num1);

//  activity 3 : comparision operators

num1 = 18;
num2 = 20;

//    sorry for use controll structure before open this article

// greater than operator
if (num1 >= num2) {
  console.log(`${num1} is greater`);
} else {
  console.log(`${num2} is greater`);
}

//    less than < and greater then > operator || less than equal to <= and greater than equal to >= operator:

if (num1 <= num2) {
  console.log(`${num1} is less than ${num2}`);
} else {
  console.log(`${num2} is less than ${num1} `);
}

//    == and === opertore
// == operatore check the value not data type:
// === operator is strict opertar it check also value and data type of variable if value and data type both same then it wiil true:

// == operator
let num = 0;
let flag1 = false;
console.log(num == flag1);

// === strict operatore:
console.log(num === flag1);

// activity 4 . logical operatore && || ! :

let f1 = false;
let f2 = true;

console.log(f1 && f2);
console.log(f1 || f2);
console.log(!f2);
console.log(!f1);

// ternary operator:

let age = 18;

age >= 18 ? console.log("you are adult ") : console.log("you are not adult");

// check the number is positive or nagative
// num = -1;
num = 100;

num < 0 ? console.log(`${num} is nagative`) : console.log(`${num} is positive`);
