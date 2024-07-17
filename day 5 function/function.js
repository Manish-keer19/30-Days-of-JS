function check_even_odd(num) {
  if (num % 2 == 0) {
    console.log(num + " is even number");
  } else {
    console.log(num + " is odd number");
  }
}

check_even_odd(15);

function square_Number(num) {
  return num * num;
}

let res = square_Number(5);
console.log(res);

// maximum of two number:
function maxNum(num1, num2) {
  num1 > num2
    ? console.log(num1 + " is greater")
    : console.log(num2 + " is greater");
}

maxNum(13, 80);

// concatinat two string:

function concatinatString(s1, s2) {
  return s1 + s2;
}

let newStr = concatinatString("manish", " keer");
console.log(newStr);

// Arrow function:

let sumFunc = (num1, num2) => num1 + num2;

let sum = sumFunc(12, 50);
console.log(sum);

// check a string contain specific charactor or not

checkCharctor = (str) => {
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    if (
      str[i] === "!" ||
      str[i] === "@" ||
      str[i] === "#" ||
      str[i] === "$" ||
      str[i] === "%" ||
      str[i] === "^" ||
      str[i] === "&" ||
      str[i] === "*"
    ) {
      return true;
    }
  }
  return false;
};

let str = "mani$shkeer";
let isContainchar = checkCharctor(str);
// console.log(isContainchar);
if (isContainchar) {
  console.log("char is present in " + str);
} else {
  console.log("char isn't present in " + str);
}

// function para defualt value:

function product(a, b = 2) {
  console.log(a * b);
}

product(4);

// deafult value for the age:

function greet(name, age = 20) {
  console.log("Hello Good Morning " + name + " your age is " + age);
}

greet("Manish");

// higher order function

function callFuncNtime(fn, n) {
  return function () {
    for (let i = 0; i < n; i++) {
      fn(i);
    }
  };
}

function sayhello(n) {
  console.log("hello " + n);
}

const ans = callFuncNtime(sayhello, 5);
ans();

// write a  higher order function that take two function and a value ,apply the first function to the value and second function to the result

function composeFunctions(fn1, fn2, value) {
  return fn2(fn1(value));
}

// Example usage:
function addTwo(num) {
  return num + 2;
}

function multiplyByThree(num) {
  return num * 3;
}

const result = composeFunctions(addTwo, multiplyByThree, 5);
console.log(result);
// result();
