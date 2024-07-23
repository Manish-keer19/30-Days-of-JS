// object creation and acces:

const book = {
  title: "master-js",
  author: "hiteshchoudhary",
  year: "2024",
  detail: () => {
    return ` book titile is ${book.title} author is ${book.author} and year is ${book.year}`;
  },
  updateYear: (year) => {
    book.year = year;
  },
};

console.log(book["title"]);
console.log(book.title);
console.log(book.author);

// object methods :

let str = book.detail();
console.log(str);
book.updateYear("1200");
console.log(book.year);

// nested objects

const laibrary = {
  book: [
    {
      title: "Mastering JavaScript",
      author: "Hitesh Choudhary",
      year: 2024,
    },
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      year: 2022,
    },
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      year: 2023,
    },
  ],
};


