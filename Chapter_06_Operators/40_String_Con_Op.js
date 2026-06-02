let s = "Hi";
s += " Dev";
console.log(s);

// String concatenation with + operator
console.log("Hello " + "World");
// String concatenation with template literals
let name = "Alice";
console.log(`Hello ${name}`);

// String concatenation with + operator and numbers
console.log("The answer is " + 42);
// String concatenation with template literals and expressions
let a = 5;
let b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}`);

// String concatenation with + operator and booleans
console.log("The statement is " + true);

// String concatenation with template literals and booleans
let isTrue = false;
console.log(`The statement is ${isTrue}`);

// String concatenation with + operator and null
console.log("The value is " + null);

// String concatenation with template literals and null
let value = null;
console.log(`The value is ${value}`);

// String concatenation with + operator and undefined
console.log("The value is " + undefined);

// String concatenation with template literals and undefined
let undef;
console.log(`The value is ${undef}`);

// String concatenation with + operator and objects
console.log("The object is " + { key: "value" });

// String concatenation with template literals and objects
let obj = { key: "value" };
console.log(`The object is ${obj}`); // This will call the toString method of the object, which by default returns "[object Object]"

