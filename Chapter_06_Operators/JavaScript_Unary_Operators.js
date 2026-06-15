let x = 5;

console.log(+x);
console.log(-x);

console.log(++x);
console.log(--x);

console.log(!x);

let y = "Hello";
console.log(+y);
console.log(-y);
console.log(!y);

let s1 = "12";

// Using unary plus to convert string to number
let x2 = +s1;
console.log(x2);

// Using unary plus to convert number to string
let s3 = +x2;
console.log(s3);
//can you please explain simple waySure! In JavaScript, unary operators are operators that operate on a single operand. Here are some examples:

//1. The unary plus operator (+) is used to convert a value to a number. For example, if you have a string that represents a number, you can use the unary plus to convert it to an actual number.

//2. The unary minus operator (-) is used to negate a number. For example, if you have a positive number, using the unary minus will make it negative.

//3. The increment operator (++) is used to increase a number by 1. For example, if you have a variable x with a value of 5, using x++ will change its value to 6.

//4. The decrement operator (--) is used to decrease a number by 1. For example, if you have a variable x with a value of 5, using x-- will change its value to 4.

//5. The logical NOT operator (!) is used to convert a value to its boolean opposite. For example, if you have a variable x with a value of 5, using !x will return false because 5 is considered truthy in JavaScript.

//In the code you provided, we are demonstrating the use of these unary operators. We start with a variable x that has a value of 5, and we apply various unary operators to it. We also show how to convert a string to a number using the unary plus operator, and we demonstrate what happens when we try to convert a non-numeric string to a number.
// Here we are using typeof operator
console.log(typeof (x2))

// "Geeks" cannot be converted to a number
let s2 = +"Geeks";
console.log(s2);


let s10 = "12";

// Unary negation, negates the
// value of number
let x0 = -s10;

console.log(x0);

// Unary negation, tries to convert
// 'Geeks' to a number
let s20 = -"Geeks";

console.log(s20);

//The Unary Negation (-) operator is used to convert its operand to a negative number if it isn’t already a negative number

//what is Unary Plus (+) Operator
//The Unary Plus (+) operator is used to convert its operand to a number. If the operand is already a number, it will return the same number. If the operand is a string that can be converted to a number, it will return the numeric value of that string. If the operand cannot be converted to a number, it will return NaN (Not-a-Number).

//For example:
let s4 = "123";
let num1 = +s4; // This will convert the string "123" to the number 123
console.log(num1); // Output: 123

//what is Unary Negation (-) operator
//The Unary Negation (-) operator is used to convert its operand to a negative number if it isn’t already a negative number. If the operand is already a negative number, it will return the same number. If the operand is a string that can be converted to a number, it will return the negative value of that number. If the operand cannot be converted to a number, it will return NaN (Not-a-Number).

//For example:
let s5 = "123";
let num2 = -s5; // This will convert the string "123" to the number -123
console.log(num2); // Output: -123

//what is Unary Increment (++) Operator
//The Unary Increment (++) operator is used to increase the value of a variable by 1. It can be used in two forms: prefix and postfix. In the prefix form (++x), the variable is incremented before its value is used in an expression. In the postfix form (x++), the variable is incremented after its value is used in an expression.

//For example:
let x1 = 5;
console.log(x1++); // Output: 5 (postfix, returns the original value before incrementing)
console.log(x1);   // Output: 6 (the value after incrementing)

//prefix example
let x3 = 5;
console.log(++x3); // Output: 6 (prefix, increments the value before returning it)
console.log(x3);   // Output: 6 (the value after incrementing)

//Unary Decrement (--) Operator
//The Unary Decrement (--) operator is used to decrease the value of a variable by 1. Similar to the increment operator, it can also be used in two forms: prefix and postfix. In the prefix form (--x), the variable is decremented before its value is used in an expression. In the postfix form (x--), the variable is decremented after its value is used in an expression.

//For example:
let x4 = 5;
console.log(x4--); // Output: 5 (postfix, returns the original value before decrementing)
console.log(x4);   // Output: 4 (the value after decrementing)

//prefix example
let x5 = 5;
console.log(--x5); // Output: 4 (prefix, decrements the value before returning it)
console.log(x5);   // Output: 4 (the value after decrementing)

//Bitwise NOT (~) Operator
//The Bitwise NOT (~) operator is used to invert the bits of a number. It takes a single operand and returns the bitwise complement of that operand. In JavaScript, numbers are represented in 32-bit signed integer format, so the Bitwise NOT operator will flip all the bits of the number, including the sign bit.

//For example:
let num3 = 5; // In binary: 00000000 00000000 00000000 00000101
let result = ~num3; // This will flip the bits to: 11111111 11111111 11111111 11111010
console.log(result); // Output: -6 (the bitwise complement of 5 is -6 in two's complement representation)

//example
let num4 = 10; // In binary: 00000000 00000000 00000000 00001010
let result2 = ~num4; // This will flip the bits to: 11111111 11111111 11111111 11110101
console.log(result2); // Output: -11 (the bitwise complement of 10 is -11 in two's complement representation)

//typeof Operator
//The typeof operator is used to determine the type of a variable or an expression. It returns a string that indicates the type of the operand. The possible return values include "undefined", "object", "boolean", "number", "string", "function", and "symbol".

//For example:
let a = 42;
console.log(typeof a); // Output: "number"

let b = "Hello, World!";
console.log(typeof b); // Output: "string"

let c = true;
console.log(typeof c); // Output: "boolean"

let d = null;
console.log(typeof d); // Output: "object"

let e;
console.log(typeof e); // Output: "undefined"

//delete Operator
//The delete operator is used to remove a property from an object. It takes an object and a property name as arguments and deletes the specified property from the object. If the property is successfully deleted, it returns true; otherwise, it returns false.

//For example:
let obj = {
    name: "Alice",
    age: 30,
    city: "New York"
};
console.log(delete obj.age); // Output: true
console.log(obj); // Output: { name: "Alice", city: "New York" }

//void Operator
//The void operator is used to evaluate an expression and return undefined. It is often used in situations where you want to execute an expression for its side effects but do not care about its return value. The syntax for the void operator is void followed by an expression.

//For example:
function showAlert() {
    alert("This is an alert!");
}
void showAlert(); // This will execute the showAlert function and return undefined
