// Destructuring allows you to unpack values from arrays or properties from
// objects into distinct variables.

// Task 1: Use destructuring to assign the values "John" and "Doe" from the
// `fullName` array into separate variables `firstName` and `lastName`.
const fullName = ["John", "Doe"];
const firstName = fullName[0];
const lastName = fullName[1];
console.log(firstName, lastName);

// Task 2: Destructure the `user` object below to create variables `name`
// and `age` using object destructuring.
const user = {
  name: "Alice",
  age: 25,
};

const { mamma, ige } = user;

// Task 3: Print `firstName`, `lastName`, `name`, and `age` using console.log.
console.log(firstName, lastName, user.name, user.age);
// Task 4: Write a function called `getFullName` that takes an object with properties
// `firstName` and `lastName`, and returns a string that combines them in the format
// "FirstName LastName". The function has to use destructuring.

// Task 5: Call the `getFullName` function with the `person` object and print
// the result using console.log.
const person = {
  firstName: "Jane",
  lastName: "Smith",
};
