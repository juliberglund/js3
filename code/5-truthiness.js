// Truthy and falsy values help in conditional statements. A truthy value is a value
// that is considered true in Boolean context.

// Task 1: Create an array called `values` containing the following values:
// 0, "hello", null, undefined, false, "false", -1 and "JavaScript".
const values = [0, "hello", undefined, false, "false", -1, "JavaScript"];

// Task 2: Write a function called `checkTruthiness` that takes a value and
// logs whether it is truthy or falsy.

const checkTruthiness = (value) => {
  if (value) {
    console.log(`${value} is Truthy`);
  } else {
    console.log(`${value} is Falsy`);
  }
};

checkTruthiness(0);
checkTruthiness("hello");
checkTruthiness(null);
checkTruthiness(undefined);
checkTruthiness(false);
checkTruthiness("false");
checkTruthiness(-1);
checkTruthiness("JavaScript");

// Task 3: Loop through the `values` array using forEach and call `checkTruthiness` on each value.
values.forEach((value) => checkTruthiness(value));

// Task 4. Loop through the `values` array using a for-loop and call `checkTruthiness` on each value.
console.log("ForLoop");
for (let index = 0; index < values.length; index++) {
  checkTruthiness(values[index]);
}

// Task 5. Loop through the `values` array using a while-loop and call `checkTruthiness` on each value.
console.log("WhileLoop:");
let index = 0;
while (index < values.length) {
  checkTruthiness(values[index]);

  index++;
}
