// ============================================
// JavaScript Shorthand / Shortcut Syntax
// ============================================

// ----- 1. Arithmetic Assignment -----
var x = 10;
x += 5;   // same as: x = x + 5
x -= 3;   // same as: x = x - 3
x *= 2;   // same as: x = x * 2
x /= 4;   // same as: x = x / 4

console.log("Arithmetic Assignment:", x);  // 6

// ----- 2. Increment / Decrement -----
var count = 0;
count++;   // count = count + 1
count--;   // count = count - 1

console.log("Increment/Decrement:", count);  // 0

// ----- 3. Ternary Operator (shortcut if-else) -----
var age = 20;
var status = age >= 18 ? "Adult" : "Minor";
console.log("Ternary:", status);  // Adult

// ----- 4. String Concatenation Shorthand -----
var fName = "John";
var lName = "Doe";

// Old way
var full1 = fName + " " + lName;

// Shorthand (template literal)
var full2 = `${fName} ${lName}`;

console.log("Template Literal:", full2);  // John Doe

// ----- 5. Default Value (||) -----
var input;
var name = input || "Default Name";
console.log("Default Value:", name);  // Default Name

// ----- 6. Nullish Coalescing (??) -----
var value = null;
var result = value ?? "Fallback";
console.log("Nullish Coalescing:", result);  // Fallback

// ----- 7. Optional Chaining (?.) -----
var user = { address: { city: "NYC" } };
console.log("Optional Chaining:", user?.address?.city);   // NYC
console.log("Optional Chaining:", user?.contact?.phone);  // undefined

// ----- 8. Arrow Function (shortcut for function) -----
// Old way
function add1(a, b) { return a + b; }

// Shorthand
var add2 = (a, b) => a + b;

console.log("Arrow Function:", add2(5, 3));  // 8

// ----- 9. Destructuring Assignment -----
var person = { fname: "Alice", lname: "Bob" };
var { fname, lname } = person;

console.log("Destructuring:", fname, lname);  // Alice Bob

// ----- 10. Spread Operator (...) -----
var arr1 = [1, 2, 3];
var arr2 = [...arr1, 4, 5];
console.log("Spread:", arr2);  // [1, 2, 3, 4, 5]

// ----- 11. Short-circuit Evaluation -----
var isLoggedIn = true;
isLoggedIn && console.log("Short-circuit:", "User is logged in");

// ----- 12. Exponention (**) -----
console.log("Exponent:", 2 ** 3);  // 8
