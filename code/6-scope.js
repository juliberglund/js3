// JavaScript scope determines the accessibility of variables within different parts of the code.

// Task 1: Declare a variable called `globalVar` with the value "I am global".
const globalVar = "i am global";

// Task 2: Create a function called `testScope` that declares a variable called
// `localVar` with the value "I am local".
const testscope = (localVar) => {
  localVar = "I am local";
  console.log(globalVar);
  console.log(localVar);
};
// Task 3: Inside `testScope`, print both `globalVar` and `localVar`.
testscope();

// Task 4: Outside of the function, try to print `localVar` and observe the result.
