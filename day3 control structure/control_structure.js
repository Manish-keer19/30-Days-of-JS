// let a = 10;
let a = -10;

if (a < 0) {
  console.log(a + "is negative");
} else {
  console.log(a + "is positive");
}

let age = 17;

if (age >= 18) {
  console.log("you are eligible for vote");
} else {
  console.log("you are not eligible");
}

// nested if else :
let n1 = 100,
  n2 = 12,
  n3 = 90;

if (n1 > n2 && n1 & n3) {
  console.log(n1 + "is greater");
} else if (n2 > n1 && n2 > n3) {
  console.log(n2 + "is greater");
} else {
  console.log(n3 + "is greater");
}

// switch case :

let day = 7;

switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thirsday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;

  default:
    console.log("bhai number is wrong");
    break;
}

//  get grade
function getGrade(score) {
  switch (true) {
    case score >= 90:
      console.log("Your grade is A");
      break;
    case score >= 80:
      console.log("Your grade is B");
      break;
    case score >= 60:
      console.log("Your grade is C");
      break;
    case score >= 30:
      console.log("Your grade is D");
      break;
    default:
      console.log("You have failed");
      break;
  }
}

let score = 90;
getGrade(score);

// odd aur even use ternary:

// let num = 20;
let num = 575;

num % 2 == 0
  ? console.log(num + "is even number")
  : console.log(num + "is odd number");

//   check leep year :

let year = 2020;

if (year % 400 == 0) {
  console.log(year + " is a leap year");
} else if (year % 100 == 0) {
  console.log(year + " is not a leap year");
} else if (year % 4 == 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}
