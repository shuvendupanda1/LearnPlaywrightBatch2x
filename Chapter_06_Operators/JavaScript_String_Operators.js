
//JavaScript String Operators
//what is JavaScript String Operators
//JavaScript String Operators include concatenation (+) and concatenation assignment (+=), used to join strings or combine strings with other data types.

const s = "Hello" + " " + "World";
console.log(s);

//1 Concatenate Operator
let s1 = "Geeks";
let s2 = "forGeeks";
let res = (s1 + s2);
console.log(res);

//2 Concatenate Assignment Operator

let s1 = "Geeks";
let s2 = "forGeeks";

s1 += s2; 
console.log(s1);

//3 Comparison Operators

let s1 = "gfg";
let s2 = "gfg";

console.log(s1 == s2);

let s1 = "gfg"; // Primitive Type
let s2 = new String("gfg"); // Object type

console.log(s1 == s2);

//Strict Equality (===) : Checks if two strings are equal in value and type both.

let s1 = "gfg"; // Primitive Type
let s2 = new String("gfg"); // Object type

console.log(s1 === s2); // false

//Inequality (!=) : Checks if two strings are not equal (ignoring type).

let s1 = "gfg";
let s2 = "ggg";

console.log(s1 != s2);

//Here is an example to show that type checking is ignored.
let s1 = "gfg"; // Primitive Type
let s2 = new String("ggg"); // Object type

console.log(s1 != s2);

//Strict Inequality (!==) : Checks if two strings are equal in value and type both.

let s1 = "gfg"; // Primitive Type
let s2 = new String("ggg"); // Object type

console.log(s1 !== s2);

//Lexicographical Comparison (<, >, <=, >=): Compares strings based on Unicode values.

let s1 = "age";
let s2 = "bat";

console.log(s1 < s2);  // true
console.log(s1 > s2);  // false
console.log(s1 <= s2); // true
console.log(s1 >= s2); // false



