// Exponentiation operator (**)
// The exponentiation operator (**) raises the first operand to the power of the second operand.
console.log(2 ** 3);
// 2^3

let x = 10;
let y = 3;
console.log(x ** y);

// Exponentiation assignment operator (**=)
// The exponentiation assignment operator (**=) raises the variable to the power of the right operand and assigns the result back to the variable.
let a = 5;
a **= 2;
console.log(a); // 25

// Negative exponentiation
console.log(2 ** -3); // 1 / (2^3) = 1/8 = 0.125
// Exponentiation with non-integer exponents
console.log(9 ** 0.5); // Square root of 9 = 3
console.log(27 ** (1/3)); // Cube root of 27 = 3
// Exponentiation with negative bases
console.log((-2) ** 3); // -8
console.log((-2) ** 2); // 4
// Exponentiation with zero
console.log(2 ** 0); // 1
console.log(0 ** 5); // 0
console.log(0 ** 0); // 1 (by convention)

// Exponentiation operator precedence
console.log(2 + 3 ** 2); // 2 + (3^2) = 2 + 9 = 11
console.log((2 + 3) ** 2); // (2 + 3)^2 = 5^2 = 25

// Exponentiation with variables
let base = 4;
let exponent = 2;
console.log(base ** exponent); // 4^2 = 16

// Exponentiation with negative exponents and variables
let num = 5;
let negExponent = -1;
console.log(num ** negExponent); // 5^-1 = 1/5 = 0.2

// Exponentiation with non-integer exponents and variables
let root = 16;
let fractionalExponent = 0.5;
console.log(root ** fractionalExponent); // 16^0.5 = 4 (square root of 16)

// Exponentiation with negative bases and variables
let negBase = -3;
let oddExponent = 3;
let evenExponent = 2;
console.log(negBase ** oddExponent); // (-3)^3 = -27
console.log(negBase ** evenExponent); // (-3)^2 = 9

// Exponentiation with zero and variables
let zeroBase = 0;
let positiveExponent = 4;
let zeroExponent = 0;
console.log(zeroBase ** positiveExponent); // 0^4 = 0
console.log(zeroBase ** zeroExponent); // 0^0 = 1 (by convention)

// Exponentiation with large numbers
console.log(10 ** 6); // 1,000,000
console.log(2 ** 10); // 1024

// Exponentiation with small numbers
console.log(2 ** -10); // 1 / (2^10) = 1/1024 = 0.0009765625

//intreview question: What is the result of 2 ** 3 ** 2?
// The result of 2 ** 3 ** 2 is 512. This is because the exponentiation operator is right-associative, so it is evaluated as 2 ** (3 ** 2). First, we calculate 3 ** 2, which equals 9, and then we calculate 2 ** 9, which equals 512.


//intreview question: What is the result of 2 ** -3?
// The result of 2 ** -3 is 0.125. This is because a negative exponent indicates that we take the reciprocal of the base raised to the positive exponent. So, 2 ** -3 is equivalent to 1 / (2 ** 3), which equals 1 / 8, resulting in 0.125.

//intreview question: What is the result of 9 ** 0.5?
// The result of 9 ** 0.5 is 3. This is because raising a number to the power of 0.5 is equivalent to taking the square root of that number. The square root of 9 is 3, so 9 ** 0.5 equals 3.

//intreview question: What is the result of (-2) ** 3?
// The result of (-2) ** 3 is -8. This is because when a negative base is raised to an odd exponent, the result is negative. In this case, (-2) ** 3 is equivalent to (-2) * (-2) * (-2), which equals -8.