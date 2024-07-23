// Telplet string

let name1 = "elon musk";
let city1 = "Uk";

let message = `hello my name is ${name1} and my city is ${city1}`;
console.log(message);

// multiline literal :

let multiline = `...     hello how are you
`;
console.log(multiline);

// array  distructing:

let number = [1, 2, 3, 4, 5, 6];
let [n1, n2] = number;
console.log(n1);
console.log(n2);

// Object distructing:

let obj = {
  name: "manish",
  age: "20",
  city: "indore",
};
// console.log(obj);

let { name, age, city } = obj;
console.log(name);
console.log(age);
console.log(city);

// spread and rest operator

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
let newArr = [...arr];
console.log(newArr);

//  rest operator :
function sum(...number) {
  return number.reduce((acc, cv) => acc + cv, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(1, 5, 3));
console.log(sum(1, 10, 3));

// default paramiter:

function product(n1, n2 = 10) {
  return n1 * n2;
}

console.log(product(10));
console.log(product(5));

// object litrals :

let firstName = "manish";
let lastName = "keer";
age: "20";

let student = {
  firstName,
  lastName,
  age,
  fullName (){
    return `${this.firstName} ${this.lastName}`;
  },

  greet() {
    console.log(`hello my name is ${this.fullName()}`);
  },
};

console.log(student);

student.greet();
