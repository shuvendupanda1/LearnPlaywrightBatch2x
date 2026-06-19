// Assignment Operators
// -  = 
// - to assign the right hand side value to the left side.
// -let x = 10;
// - x = 30;

let x = 10;
x = 11;
x = 90;
console.log(x);

//diference between assignment and equality operator
// - == equality operator
// - === strict equality operator
console.log(10 == '10'); // true , is this the comparision operator? yes, it is. it is the equality operator, it compares the value of 10 and '10' and returns true because they are equal in value.
console.log(10 === '10'); // false 


//difference between assignment and comparison operator
// - comparison operator is used to compare two values and return a boolean value (true or false)
// - assignment operator is used to assign a value to a variable

//example of comparison operator
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 9); // false

//example of assignment operator
let y = 20;
console.log(y); // 20
y += 10; // y = y + 10
console.log(y); // 30

//example - == equality operator and === strict equality operator
console.log(0 == false); // true because 0 is falsy and false is also falsy, so they are considered equal in value when using the equality operator (==).
console.log(0 === false); // false, because 0 is a number and false is a boolean, they are not the same type.

//what is operator?
// - an operator is a special symbol that performs a specific operation on one or more operands (values or variables) and returns a result.
// - operators can be classified into different categories such as
//   arithmetic, assignment, comparison, logical, etc.
