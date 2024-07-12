// hello world

// 1.Task: Array Filtering And Mapping

// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const peoples1 = [
  { name: "touhid", age: 25, gender: "male" },
  { name: "urmi", age: 25, gender: "female" },
  { name: "toufik", age: 25, gender: "male" },
];

const getAllFemales = (persons) => {
  return persons
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};

console.log(getAllFemales(peoples1));
//  Output: [ 'touhid', 'toufik' ]

// 2.Task: Object Manipulation

// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

const books = [
  { title: "Learn HTML", author: "JS Publications", year: 2020 },
  { title: "JS Pathfinder", author: "CSS Publications", year: 2022 },
  { title: "Next Numbers", author: "React Publications", year: 2024 },
];

const getBookTitle = (books) => {
  return books.map((book) => book.title);
};

console.log(getBookTitle(books));
//  Output:  [ 'Learn HTML', 'JS Pathfinder', 'Next Numbers' ]

// 3.Task: Function Composition

// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

const square = (num) => num * num;
const double = (num) => num * 2;
const add5 = (num) => num + 5;

const compose = (...functions) => {
  return (input) => {
    return functions.reduceRight((acc, fn) => {
      return fn(acc);
    }, input);
  };
};

const composedFunction = compose(add5, double, square);

console.log(composedFunction(2));
//  Output:  13

// 4.Task: Sorting Objects

// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2019 },
];

const sortCarsByYear = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};

console.log(sortCarsByYear(cars));
// Output: [
//   { make: 'Honda', model: 'Civic', year: 2018 },
//   { make: 'Ford', model: 'Mustang', year: 2019 },
//   { make: 'Toyota', model: 'Corolla', year: 2020 }
// ]

// 5.Task: Find And Modify

// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

const peoples2 = [
  { name: "John", age: 30, gender: "male" },
  { name: "Jane", age: 25, gender: "female" },
  { name: "Mike", age: 35, gender: "male" },
];

const modifyAgeByName = (people, name, newAge) => {
  const person = people.find((person) => person.name === name);
  if (person) {
    person.age = newAge;
  }
  return people;
};

console.log(modifyAgeByName(peoples2, "Jane", 20));
// Output: [
//   { name: "John", age: 30, gender: "male" },
//   { name: "Jane", age: 20, gender: "female" },
//   { name: "Mike", age: 35, gender: "male" }
// ]

// 6.Task: Array Reduction

// Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.

// 7.  Task: Leap Year Checker

// Write A Function That Determines Whether A Given Year Is A Leap Year.

// Example: Happy New Year

// 8. Task: Unique Values

// Create An Array Of Numbers With Some Duplicate Values. Write A Function To Filter Out The Duplicate Values And Return A New Array With Only Unique Numbers. Print The Result.

// 09. Task: Find Maximum Value:

// Write A Function That Takes An Array Of Numbers And Returns The Maximum Value.

// 10.Task: Advanced Sorting

// Create An Array Of Objects Representing Students With 'Name' And 'Grades' Properties. Write A Function To Sort The Students By Average Grade In Descending Order.

// 11. Task: Functional Programming - Reduce

// Write A Function That Uses The Reduce Function To Calculate The Total Value Of An Array Of Objects With A 'Quantity' And 'Price' Property.Interview
