// Pre Increment
// let a = 10;
// let b = ++a; // (increment the a by 1)

// // Pre increment -> ++a ->. increse the value and then assign.
// console.log(b);
// console.log(a);


// // Deincrement
// let a = 10;
// let b = --a; // (increment the a by 1)
// console.log(b); // 9
// console.log(a);  // 9

let a = 10;
let b = a--; // (increment the a by 1)
console.log(b); // 10
console.log(a);  // 9

// Post decrement -> a-- ->. assign the value and then decrease.
// In post decrement, the value of a is assigned to b first, and then a is decremented by 1. So, b will have the original value of a (10), and a will be decremented to 9 after the assignment.
//example of post decrement.
// let a = 10;
// let b = a--; // (decrement the a by 1)


// Postfix 
let a0 = 2;
let b0 = a0++; // b0 = 2, a0 = 3

// Prefix
let x0 = 5;
let y0 = ++x0; // x0 = 6, y0 = 6

console.log(a0);
console.log(b0);
console.log(x0);
console.log(y0);

//Decrement (- -) Operator

// Prefix
let a11 = 2;
let b11 = --a11;

// Postfix
let x11 = 3;
let y11 = x11--;
 
console.log(a11);
console.log(b11);
console.log(x11);
console.log(y11);

//Unary plus (+) Operator
let a12 = 5;
let b12 = +a12;
console.log(b12); // 5

//Unary minus (-) Operator
let a13 = 5;
let b13 = -a13;
console.log(b13); // -5

