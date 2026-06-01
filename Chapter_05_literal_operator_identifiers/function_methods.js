function test()
{    let a =10;; // declared and initialized with a value of 10
    return a ;
}
console.log(test()); //10

function mash()
{    let a =10; // declared and initialized with a value of 10
    a=20; // reassigning the value of a to 20
    return a ;
}
console.log(mash()); //20

function test1()
{    const a =10; // declared and initialized with a value of 10
    return a ;
}
console.log(test1()); //10


// 1. Define the function
function sayHello(name) {
  return "Hello, " + name;
}

// 2. Call the function directly
console.log(sayHello("Alice")); // Output: "Hello, Alice"

// 3. Assign the function to a variable and call it
const greet = sayHello;
console.log(greet("Bob")); // Output: "Hello, Bob"


const user = {
  name: "Bob",
  
  // Define the method
  greet() {
    return "Hi, I am " + this.name; // 'this' refers to the user object
  }
};

// Call the method using dot notation
console.log(user.greet()); // Output: "Hi, I am Bob"

const calculator = {
  // Define the method
  add: function(a, b) {
    return a + b;
  }
};

// Call the method
console.log(calculator.add(5, 10)); // Output: 15

// --------------------------------------------------------
// 1. undefined
// --------------------------------------------------------
// A variable that has been declared but not assigned a value is undefined.
let userName;
console.log(userName); // Output: undefined

// A function that does not return a value implicitly returns undefined.
function greet() {
  console.log("Hello!");
}
console.log(greet()); // Output: "Hello!" and undefined
// --------------------------------------------------------
// 2. null
// --------------------------------------------------------
// A variable that is explicitly assigned null represents the intentional absence of any value.
let profilePicture = null;
console.log(profilePicture); // Output: null

// A variable can be set to null to indicate that it should have no value.
let score = 100;
score = null;
console.log(score); // Output: null

// Definition of a function using function declaration
function greet(name) {
  return "Hello " + name + "!";
}

// Execution (Calling the function)
console.log(greet("Alice")); // Output: Hello Alice!


// Definition of a function using function expression
const multiply = function(a, b) {
  return a * b;
};

// Execution
console.log(multiply(3, 4)); // Output: 12


// Definition of a function using arrow function syntax
const add = (a, b) => {
  return a + b;
};

// Ultra-short version (implicit return for single line expressions)
const subtract = (a, b) => a - b;

// Execution
console.log(add(5, 5));      // Output: 10
console.log(subtract(10, 4)); // Output: 6
// key differences between function declaration, function expression, and arrow functions:
/*
| Feature                 | Function Declaration           | Function Expression            | Arrow Function                     |
|-------------------------|-------------------------------|-------------------------------|------------------------------------|
| Syntax                  | function name() { ... }       | const name = function() { ... } | const name = () => { ... }         |
| Hoisting                | Yes (can be called before declaration) | No (cannot be called before declaration) | No (cannot be called before declaration) |
| 'this' behavior         | Dynamic (depends on how function is called) | Dynamic (depends on how function is called) | Lexical (inherits 'this' from surrounding scope) |
| Arguments object        | Yes                           | Yes                           | No (does not have its own 'arguments' object)    |
| Use case               | General-purpose functions      | When you need a function as a value (e.g., callbacks) | When you want concise syntax and don't need 'this' or 'arguments' |
*/

// --------------------------------------------------------
// 3. Key Differences (Summary Table)
// --------------------------------------------------------
/*
| Feature                 | Function Declaration           | Function Expression            | Arrow Function                     |
|-------------------------|-------------------------------|-------------------------------|------------------------------------|
| Syntax                  | function name() { ... }       | const name = function() { ... } | const name = () => { ... }         |
| Hoisting                | Yes (can be called before declaration) | No (cannot be called before declaration) | No (cannot be called before declaration) |
| 'this' behavior         | Dynamic (depends on how function is called) | Dynamic (depends on how function is called) | Lexical (inherits 'this' from surrounding scope) |
| Arguments object        | Yes                           | Yes                           | No (does not have its own 'arguments' object)    |
| Use case               | General-purpose functions      | When you need a function as a value (e.g., callbacks) | When you want concise syntax and don't need 'this' or 'arguments' |
*/

//Create a function that checks if a number is even or odd using function declaration, function expression, and arrow function syntax.

// Function Declaration
function isEvenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// Function Expression
const isEvenOrOddExpr = function(num) {
  return num % 2 === 0 ? "Even" : "Odd";
};

// Arrow Function
const isEvenOrOddArrow = (num) => {
  return num % 2 === 0 ? "Even" : "Odd";
};


// Testing the functions
console.log(isEvenOrOdd(10)); // Output: "Even"
console.log(isEvenOrOdd(7));  // Output: "Odd"
console.log(isEvenOrOddExpr(10)); // Output: "Even"
console.log(isEvenOrOddExpr(7));  // Output: "Odd"
console.log(isEvenOrOddArrow(10)); // Output: "Even"
console.log(isEvenOrOddArrow(7));  // Output: "Odd"

// --------------------------------------------------------
// 4. Practical Comparisons
// --------------------------------------------------------
// Check if a variable is undefined
let x;
console.log(x === undefined); // true
// Check if a variable is null
let y = null;
console.log(y === null); // true

// Check if a variable is either null or undefined
let z;
console.log(z == null); // true (loose equality checks for both null and undefined)
console.log(z === undefined); // true (strict equality checks for undefined)
// Check if a variable is not null or undefined
let a = 5;
console.log(a != null); // true (loose inequality checks for both null and undefined)
console.log(a !== undefined); // true (strict inequality checks for undefined)

// --------------------------------------------------------
// 5. When to use what?
// --------------------------------------------------------
// Use undefined when you want to check if a variable has been declared but not assigned a value.
let user;
if (user === undefined) {
  console.log("User is not defined yet.");
}
// Use null when you want to explicitly indicate that a variable should have no value.
let profilePicture = null;
if (profilePicture === null) {
  console.log("Profile picture is intentionally empty.");
}
//create a function and methods and show the difference between them.

// Function definition
function greet(name) {
  return "Hello, " + name + "!";
}
// Method definition (inside an object)
const user = {
  name: "Alice",
  greet: function() {
    return "Hello, " + this.name + "!";
  }
};
// Calling the function
console.log(greet("Bob")); // Output: "Hello, Bob!"
// Calling the method
console.log(user.greet()); // Output: "Hello, Alice!"

//what is the difference between function and method?
/*
| Feature         | Function                          | Method                            |
|-----------------|-----------------------------------|-----------------------------------|
| Definition      | Standalone block of code          | Function defined inside an object |
| Invocation      | Called directly                   | Called on an object instance      |
| Access to 'this'| Not applicable                      | Refers to the object it belongs to|
*/

