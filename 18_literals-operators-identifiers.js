// ============================================================
//  LITERALS, OPERATORS & IDENTIFIERS in JavaScript (with Tests)
// ============================================================

// ============================================================
// 1. IDENTIFIERS
// ============================================================
// Identifiers are names given to variables, functions, classes, etc.
// Rules:
//   - Can contain letters, digits, _, $
//   - Cannot start with a digit
//   - Case-sensitive
//   - Cannot be a reserved keyword

const validVariable = 10;
const _privateVar = 20;
const $dollarVar = 30;
const camelCaseExample = 40;
const TEST_CONSTANT = 50;

// ---- TESTS for Identifiers ----
function testIdentifiers() {
  console.log('--- Test: Identifiers ---');

  // 1. Valid identifiers
  console.assert(validVariable === 10, 'validVariable should be 10');
  console.assert(_privateVar === 20, '_privateVar should be 20');
  console.assert($dollarVar === 30, '$dollarVar should be 30');
  console.assert(camelCaseExample === 40, 'camelCaseExample should be 40');
  console.assert(TEST_CONSTANT === 50, 'TEST_CONSTANT should be 50');

  // 2. Case sensitivity
  const myVar = 'lowercase';
  const MYVAR = 'UPPERCASE';
  console.assert(myVar !== MYVAR, 'myVar and MYVAR should be different');

  // 3. typeof returns "string" for identifiers holding strings
  console.assert(typeof myVar === 'string', 'typeof myVar should be string');

  console.log('All identifier tests passed.');
}
testIdentifiers();


// ============================================================
// 2. LITERALS
// ============================================================
// A literal is a fixed value written directly in source code.

// --- String Literals ---
const str1 = 'single quotes';        // string literal
const str2 = "double quotes";        // string literal
const str3 = `template literal ${1 + 1}`; // template literal

// --- Numeric Literals ---
const intLiteral = 42;               // integer
const floatLiteral = 3.14;           // floating-point
const hexLiteral = 0xFF;             // hexadecimal -> 255
const binaryLiteral = 0b1010;        // binary -> 10
const octalLiteral = 0o77;           // octal -> 63
const sciLiteral = 1.5e3;            // scientific -> 1500

// --- Boolean Literals ---
const boolTrue = true;
const boolFalse = false;

// --- Null & Undefined ---
const nullValue = null;
let undefinedValue;

// --- BigInt Literal ---
const bigInt = 9007199254740991n;

// --- Object Literal ---
const person = {
  name: 'Alice',
  age: 30,
};

// --- Array Literal ---
const numbers = [1, 2, 3];

// --- RegExp Literal ---
const regex = /hello/g;

// ---- TESTS for Literals ----
function testLiterals() {
  console.log('\n--- Test: Literals ---');

  // String literals
  console.assert(str1 === 'single quotes', 'str1 mismatch');
  console.assert(str2 === 'double quotes', 'str2 mismatch');
  console.assert(str3 === 'template literal 2', `str3 should be "template literal 2", got "${str3}"`);

  // Numeric literals
  console.assert(intLiteral === 42, 'intLiteral');
  console.assert(floatLiteral === 3.14, 'floatLiteral');
  console.assert(hexLiteral === 255, `hexLiteral should be 255, got ${hexLiteral}`);
  console.assert(binaryLiteral === 10, `binaryLiteral should be 10, got ${binaryLiteral}`);
  console.assert(octalLiteral === 63, `octalLiteral should be 63, got ${octalLiteral}`);
  console.assert(sciLiteral === 1500, `sciLiteral should be 1500, got ${sciLiteral}`);

  // Boolean
  console.assert(boolTrue === true, 'boolTrue');
  console.assert(boolFalse === false, 'boolFalse');

  // Null / Undefined
  console.assert(nullValue === null, 'nullValue should be null');
  console.assert(undefinedValue === undefined, 'undefinedValue should be undefined');

  // BigInt
  console.assert(bigInt === 9007199254740991n, 'bigInt mismatch');
  console.assert(typeof bigInt === 'bigint', 'typeof bigInt should be bigint');

  // Object literal
  console.assert(person.name === 'Alice', 'person.name');
  console.assert(person.age === 30, 'person.age');

  // Array literal
  console.assert(numbers.length === 3, 'numbers.length');
  console.assert(numbers[0] === 1, 'numbers[0]');
  console.assert(numbers[1] === 2, 'numbers[1]');
  console.assert(numbers[2] === 3, 'numbers[2]');

  // RegExp literal
  console.assert(regex instanceof RegExp, 'regex should be RegExp');
  console.assert(regex.source === 'hello', 'regex.source');
  console.assert(regex.flags === 'g', 'regex.flags');

  console.log('All literal tests passed.');
}
testLiterals();


// ============================================================
// 3. OPERATORS
// ============================================================

// --- 3a. Arithmetic Operators ---
function testArithmetic() {
  console.log('\n--- Test: Arithmetic Operators ---');

  // + (addition)
  console.assert(10 + 5 === 15, '10 + 5');
  // - (subtraction)
  console.assert(10 - 5 === 5, '10 - 5');
  // * (multiplication)
  console.assert(10 * 5 === 50, '10 * 5');
  // / (division)
  console.assert(10 / 5 === 2, '10 / 5');
  // % (modulus / remainder)
  console.assert(10 % 3 === 1, '10 % 3');
  // ** (exponentiation)
  console.assert(2 ** 3 === 8, '2 ** 3');
  // ++ (increment)
  let a = 5;
  console.assert(a++ === 5, 'a++ post-increment returns original');
  console.assert(a === 6, 'after a++ value is 6');
  let b = 5;
  console.assert(++b === 6, '++b pre-increment returns new');
  // -- (decrement)
  let c = 5;
  console.assert(c-- === 5, 'c-- post-decrement');
  console.assert(c === 4, 'after c-- value is 4');

  // Unary negation
  console.assert(-(5) === -5, '-(5)');

  console.log('Arithmetic tests passed.');
}

// --- 3b. Assignment Operators ---
function testAssignment() {
  console.log('\n--- Test: Assignment Operators ---');

  let x = 10;           // = simple assignment
  console.assert(x === 10, 'x = 10');

  x += 5;               // x = x + 5
  console.assert(x === 15, 'x += 5');

  x -= 3;               // x = x - 3
  console.assert(x === 12, 'x -= 3');

  x *= 2;               // x = x * 2
  console.assert(x === 24, 'x *= 2');

  x /= 4;               // x = x / 4
  console.assert(x === 6, 'x /= 4');

  x %= 4;               // x = x % 4
  console.assert(x === 2, 'x %= 4');

  x **= 3;              // x = x ** 3
  console.assert(x === 8, 'x **= 3');

  let y = 8;
  y &= 3;               // y = y & 3  (1000 & 0011 = 0000)
  console.assert(y === 0, 'y &= 3');

  let z = 8;
  z |= 3;               // z = z | 3  (1000 | 0011 = 1011 = 11)
  console.assert(z === 11, 'z |= 3');

  console.log('Assignment tests passed.');
}

// --- 3c. Comparison Operators ---
function testComparison() {
  console.log('\n--- Test: Comparison Operators ---');

  // == loose equality (type coercion)
  console.assert(5 == '5', "5 == '5'");
  // === strict equality (no coercion)
  console.assert(5 !== '5', "5 !== '5'");
  console.assert(5 === 5, '5 === 5');
  // != loose inequality
  console.assert(5 != '6', "5 != '6'");
  // !== strict inequality
  console.assert(5 !== '5', "5 !== '5'");
  // >
  console.assert(10 > 5, '10 > 5');
  // <
  console.assert(5 < 10, '5 < 10');
  // >=
  console.assert(10 >= 10, '10 >= 10');
  console.assert(10 >= 5, '10 >= 5');
  // <=
  console.assert(5 <= 5, '5 <= 5');
  console.assert(5 <= 10, '5 <= 10');

  // Special: null/undefined comparisons
  console.assert(null == undefined, 'null == undefined');
  console.assert(null !== undefined, 'null !== undefined');
  console.assert(null >= 0 === true, 'null >= 0');   // coercion quirk
  console.assert(null > 0 === false, 'null > 0');
  console.assert(null == 0 === false, 'null == 0');  // != null

  console.log('Comparison tests passed.');
}

// --- 3d. Logical Operators ---
function testLogical() {
  console.log('\n--- Test: Logical Operators ---');

  // && (AND) – returns first falsy OR last truthy
  console.assert((true && true) === true, 'true && true');
  console.assert((true && false) === false, 'true && false');
  console.assert((false && true) === false, 'false && true');
  console.assert((false && false) === false, 'false && false');
  console.assert((0 && 42) === 0, '0 && 42 -> short-circuit returns 0');
  console.assert((1 && 42) === 42, '1 && 42 -> returns 42');

  // || (OR) – returns first truthy OR last falsy
  console.assert((true || false) === true, 'true || false');
  console.assert((false || true) === true, 'false || true');
  console.assert((false || false) === false, 'false || false');
  console.assert((0 || 42) === 42, '0 || 42 -> returns 42');
  console.assert((1 || 42) === 1, '1 || 42 -> short-circuit returns 1');

  // ! (NOT)
  console.assert(!true === false, '!true');
  console.assert(!false === true, '!false');
  console.assert(!0 === true, '!0');
  console.assert(!1 === false, '!1');
  console.assert(!'' === true, "!''");
  console.assert(!!'hello' === true, "!!'hello'");

  // ?? (nullish coalescing) – returns RHS only when LHS is null/undefined
  console.assert((null ?? 'default') === 'default', 'null ?? default');
  console.assert((undefined ?? 'default') === 'default', 'undefined ?? default');
  console.assert((0 ?? 'default') === 0, '0 ?? default -> 0 is not nullish');
  console.assert(('' ?? 'default') === '', "'' ?? default -> '' is not nullish");

  console.log('Logical tests passed.');
}

// --- 3e. Bitwise Operators ---
function testBitwise() {
  console.log('\n--- Test: Bitwise Operators ---');

  // & (AND)
  console.assert((5 & 1) === 1, '5 & 1');  // 101 & 001 = 001
  console.assert((5 & 2) === 0, '5 & 2');  // 101 & 010 = 000

  // | (OR)
  console.assert((5 | 2) === 7, '5 | 2');  // 101 | 010 = 111

  // ^ (XOR)
  console.assert((5 ^ 2) === 7, '5 ^ 2');  // 101 ^ 010 = 111
  console.assert((5 ^ 7) === 2, '5 ^ 7');  // 101 ^ 111 = 010

  // ~ (NOT)
  console.assert(~5 === -6, '~5 === -6');  // ~0101 = 1010 (two's complement)

  // << (left shift)
  console.assert((5 << 1) === 10, '5 << 1');  // 101 << 1 = 1010

  // >> (right shift sign-propagating)
  console.assert((5 >> 1) === 2, '5 >> 1');   // 101 >> 1 = 010
  console.assert((-5 >> 1) === -3, '-5 >> 1');

  // >>> (right shift zero-fill)
  console.assert((5 >>> 1) === 2, '5 >>> 1');

  console.log('Bitwise tests passed.');
}

// --- 3f. String Operators ---
function testStringOperators() {
  console.log('\n--- Test: String Operators ---');

  // + (concatenation)
  console.assert('Hello ' + 'World' === 'Hello World', 'string +');

  // += (concatenation assignment)
  let str = 'Hello';
  str += ' World';
  console.assert(str === 'Hello World', 'string +=');

  // Template literals (backticks)
  const name = 'Bob';
  console.assert(`Hello ${name}` === 'Hello Bob', 'template literal');

  console.log('String operator tests passed.');
}

// --- 3g. Ternary (Conditional) Operator ---
function testTernary() {
  console.log('\n--- Test: Ternary Operator ---');

  const result1 = 10 > 5 ? 'yes' : 'no';
  console.assert(result1 === 'yes', 'ternary true branch');

  const result2 = 10 < 5 ? 'yes' : 'no';
  console.assert(result2 === 'no', 'ternary false branch');

  // Nested ternary
  const score = 85;
  const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';
  console.assert(grade === 'B', 'nested ternary');

  console.log('Ternary tests passed.');
}

// --- 3h. typeof & instanceof Operators ---
function testTypeOperators() {
  console.log('\n--- Test: typeof & instanceof ---');

  console.assert(typeof 42 === 'number', 'typeof 42');
  console.assert(typeof 'hello' === 'string', "typeof 'hello'");
  console.assert(typeof true === 'boolean', 'typeof true');
  console.assert(typeof undefined === 'undefined', 'typeof undefined');
  console.assert(typeof null === 'object', 'typeof null (historical)');
  console.assert(typeof {} === 'object', 'typeof {}');
  console.assert(typeof [] === 'object', 'typeof []');
  console.assert(typeof function(){} === 'function', 'typeof function');
  console.assert(typeof Symbol() === 'symbol', 'typeof Symbol()');
  console.assert(typeof 1n === 'bigint', 'typeof 1n');

  console.assert([] instanceof Array, '[] instanceof Array');
  console.assert({} instanceof Object, '{} instanceof Object');
  console.assert(new Date() instanceof Date, 'Date instanceof Date');
  console.assert(!([] instanceof Date), '[] not instanceof Date');

  console.log('Type operator tests passed.');
}

// --- 3i. Comma Operator ---
function testComma() {
  console.log('\n--- Test: Comma Operator ---');

  // Returns the last operand
  const result = (1, 2, 3);
  console.assert(result === 3, 'comma operator returns last value');

  // Common in for loops
  let count = 0;
  for (let i = 0, j = 10; i < 5; i++, j--) {
    count += i + j;
  }
  console.assert(count === 50, 'comma in for loop'); // (0+10)+(1+9)+(2+8)+(3+7)+(4+6)=10+10+10+10+10=50

  console.log('Comma operator tests passed.');
}


// ============================================================
// RUN ALL TESTS
// ============================================================
testArithmetic();
testAssignment();
testComparison();
testLogical();
testBitwise();
testStringOperators();
testTernary();
testTypeOperators();
testComma();

console.log('\n=== ALL TESTS PASSED ===');
