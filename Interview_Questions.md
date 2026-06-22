# JavaScript Interview Questions & Answers for Playwright

---

## Table of Contents

1. [Identifiers & Literals](#1-identifiers--literals)
2. [Var, Let, Const](#2-var-let-const)
3. [Hoisting & TDZ](#3-hoisting--tdz)
4. [Data Types & typeof](#4-data-types--typeof)
5. [Operators](#5-operators)
6. [Control Flow (If-Else & Switch)](#6-control-flow-if-else--switch)
7. [Functions & Closures](#7-functions--closures)
8. [ES6+ Features](#8-es6-features)
9. [Coding Interview Problems](#9-coding-interview-problems)

---

## 1. Identifiers & Literals

### Q1: What is an identifier? What are the rules?
**A:** Identifiers are names given to variables, functions, classes.

**Rules:**
- Must start with letter, `_`, or `$`
- Can contain letters, digits, `_`, `$`
- Cannot start with a digit
- Case-sensitive (`myVar` ≠ `myvar`)
- Cannot be a reserved keyword
- No spaces or special characters (except `_` and `$`)

### Q2: Valid vs Invalid identifiers?

```js
// ✅ Valid
name, _userName, $price, firstName2, _total_amount

// ❌ Invalid
2name        // starts with digit
my-name      // contains hyphen
first name   // contains space
@age         // special character
var class = "math";  // 'class' is a keyword
```

### Q3: What is a literal in JavaScript?
**A:** A literal is a fixed value written directly in source code — e.g., `42`, `"hello"`, `true`, `null`, `[1,2,3]`.

### Q4: What types of literals does JavaScript support?

| Type | Examples |
|------|----------|
| String | `'hello'`, `"hello"`, `` `hello ${x}` `` |
| Numeric | `42`, `3.14`, `0xFF`, `0b1010`, `0o77` |
| Boolean | `true`, `false` |
| Null | `null` |
| BigInt | `42n` |
| Object | `{}`, `{name:"Alice"}` |
| Array | `[]`, `[1,2,3]` |

### Q5: Single quotes vs double quotes vs backticks?
**A:** Single and double quotes are identical (no interpolation, single line). Backticks support `${}` interpolation, multi-line strings, and tagged templates.

```js
let name = "Alice";
console.log(`Hello ${name}!`); // "Hello Alice!"
```

### Q6: Null vs Undefined?

| null | undefined |
|------|-----------|
| Intentional absence of value | Variable declared but not assigned |
| Assigned by developer | Default by JS engine |
| `typeof null` → `"object"` (bug) | `typeof undefined` → `"undefined"` |
| `null == undefined` → `true` | `null === undefined` → `false` |

---

## 2. Var, Let, Const

### Q7: Difference between var, let, and const?

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function-scoped | Block-scoped | Block-scoped |
| Reassign | ✅ | ✅ | ❌ |
| Redeclare | ✅ | ❌ | ❌ |
| Hoisted | ✅ (undefined) | ✅ (TDZ) | ✅ (TDZ) |
| Must initialize | ❌ | ❌ | ✅ |

```js
// var — can redeclare and reassign
var x = 10;
var x = 20; // ✅
x = 30;     // ✅

// let — can reassign but NOT redeclare
let y = 10;
// let y = 20; // ❌ SyntaxError
y = 30;        // ✅

// const — cannot reassign or redeclare, must initialize
const z = 10;
// const z = 20; // ❌ SyntaxError
// z = 30;       // ❌ TypeError
// const w;      // ❌ SyntaxError — must initialize
```

### Q8: Can const objects be modified?
**A:** Yes — `const` prevents reassignment, not mutation.

```js
const arr = [1, 2, 3];
arr.push(4); // ✅ Allowed — mutating, not reassigning
// arr = [5, 6]; // ❌ TypeError

const obj = { name: "Alice" };
obj.age = 30;  // ✅ Allowed
// obj = {};   // ❌ TypeError
```

### Q9: Can you redeclare a let variable in the same scope?
**A:** No. let does not allow redeclaration in the same scope. var does.

---

## 3. Hoisting & TDZ

### Q10: What is hoisting?
**A:** JavaScript's behavior of moving declarations to the top of their scope during compilation.

```js
console.log(x); // undefined (not error)
var x = 5;

hello(); // "Hello!" — function hoisted fully
function hello() { console.log("Hello!"); }
```

### Q11: What is the Temporal Dead Zone (TDZ)?
**A:** The period between entering scope and the actual declaration of a `let`/`const` variable. Accessing the variable during TDZ throws `ReferenceError`.

```js
{
    // TDZ starts for 'a'
    // console.log(a); // ReferenceError
    let a = 10; // TDZ ends
    console.log(a); // 10
}
```

### Q12: Function declaration vs function expression — hoisting difference?
**A:** Function declarations are fully hoisted (can call before definition). Function expressions are NOT hoisted.

```js
foo(); // ✅ Works
function foo() {}

bar(); // ❌ TypeError: bar is not a function
const bar = function() {};
```

---

## 4. Data Types & typeof

### Q13: What does typeof return for different values?

```js
typeof 42               // "number"
typeof "hello"          // "string"
typeof true             // "boolean"
typeof undefined        // "undefined"
typeof null             // "object" (known bug)
typeof NaN              // "number"
typeof function(){}     // "function"
typeof []               // "object"
typeof {}               // "object"
typeof Symbol()         // "symbol"
typeof 42n              // "bigint"
```

### Q14: What are the primitive types in JavaScript?
**A:** string, number, bigint, boolean, undefined, null, symbol.

### Q15: What is NaN and how do you check for it?
**A:** NaN = Not a Number. `typeof NaN` → `"number"`. NaN is the only value not equal to itself.

```js
NaN == NaN   // false
NaN === NaN  // false
Number.isNaN(NaN)  // true (reliable check)
Object.is(NaN, NaN) // true
```

### Q16: Why is typeof null "object"?
**A:** A bug from JavaScript's first version. Values were stored with type tags, and null was represented as the null pointer (0x00), which was interpreted as the object type tag. Cannot be fixed for backward compatibility.

---

## 5. Operators

### Q17: What are the different types of operators?

| Category | Operators |
|----------|-----------|
| Arithmetic | `+`, `-`, `*`, `/`, `%`, `**` |
| Assignment | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=` |
| Comparison | `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=` |
| Logical | `&&`, `||`, `!` |
| Ternary | `condition ? val1 : val2` |
| Nullish | `??` |
| Increment/Decrement | `++a`, `a++`, `--a`, `a--` |
| Bitwise | `&`, `|`, `~`, `^`, `<<`, `>>`, `>>>` |
| Type | `typeof`, `instanceof` |
| Unary | `+`, `-`, `!`, `~`, `++`, `--`, `typeof`, `void`, `delete` |
| Relational | `in`, `instanceof` |
| Comma | `,` |

### Q18: == vs === (Loose vs Strict Equality)?

```js
5 == "5"    // true  (type coercion)
5 === "5"   // false (no coercion)
0 == false  // true
0 === false // false
"" == false // true
"" === false // false
null == undefined // true
null === undefined // false
```

### Q19: What are falsy values?
**A:** `false`, `0`, `-0`, `0n` (BigInt zero), `""` (empty string), `null`, `undefined`, `NaN`. Everything else is truthy.

```js
if ("") console.log("won't print");    // falsy
if (0) console.log("won't print");     // falsy
if (null) console.log("won't print");  // falsy
if ([]) console.log("will print");     // truthy!
if ({}) console.log("will print");     // truthy!
if ("false") console.log("will print"); // truthy!
```

### Q20: Short-circuit evaluation in && and ||?

```js
0 && 42          // 0  (first falsy)
1 && 42          // 42 (both truthy → last)
0 || 42          // 42 (first truthy)
1 || 42          // 1  (short-circuits)
null || undefined || 0 || "fallback" // "fallback"
```

### Q21: Nullish Coalescing (??) vs OR (||)?

```js
0 ?? "default"    // 0   (?? only null/undefined)
0 || "default"    // "default" (|| catches any falsy)
"" ?? "default"   // ""
"" || "default"   // "default"
null ?? "default" // "default"
```

### Q22: Pre-increment vs Post-increment?

```js
let a = 5;
console.log(a++); // 5 (returns original, then increments)
console.log(a);   // 6

let b = 5;
console.log(++b); // 6 (increments, then returns)
console.log(b);   // 6
```

### Q23: Predict the output?

```js
// Puzzle 1
let a = 10;
console.log(++a + a); // 11 + 11 = 22

// Puzzle 2
let ab = 20;
let cd = ab++;
console.log(ab++ + ab); // 20 + 21 = 41
console.log(ab);        // 22
console.log(cd);        // 20

// Puzzle 3
let ss = 10;
console.log(ss++ + ++ss); // 10 + 12 = 22

// Puzzle 4
console.log(1 + "2" + "3"); // "123"
console.log(1 + 2 + "3");   // "33"
console.log("1" + 2 + 3);   // "123"
```

### Q24: What is the output of confusing comparisons?

```js
console.log([] == []);    // false (different references)
console.log([] == 0);     // true  ([] → "" → 0)
console.log([] == false); // true
console.log([1] == 1);    // true  ([1] → "1" → 1)
console.log([] == ![]);   // true
// ![] → false, [] == false → "" == false → 0 == 0 → true

console.log("A" > "a");    // false (ASCII: 65 > 97)
console.log("2" > "12");   // true  (string compare: "2" > "1")
console.log("2" > 12);     // false ("2" coerces to 2)

console.log(null > 0);     // false (null → 0)
console.log(null == 0);    // false (special rule)
console.log(null >= 0);    // true  (null → 0)
```

### Q25: What does the comma operator do?
**A:** Evaluates each operand and returns the last value.

```js
console.log((1, 2, 3)); // 3
let a = (1, 2, 3);
console.log(a);         // 3
```

### Q26: What does the ternary operator do?
**A:** `condition ? valueIfTrue : valueIfFalse`

```js
let result = 10 > 5 ? "yes" : "no"; // "yes"
```

---

## 6. Control Flow (If-Else & Switch)

### Q27: What values are falsy in if conditions?
**A:** `false`, `0`, `""`, `null`, `undefined`, `NaN`.

```js
if ("hello") console.log("truthy"); // ✅ prints
if (42) console.log("truthy");      // ✅ prints
if ({}) console.log("truthy");      // ✅ prints (empty object is truthy)
if ([]) console.log("truthy");      // ✅ prints (empty array is truthy)
```

### Q28: How does switch comparison work — loose or strict?
**A:** Switch uses **strict equality** (`===`).

```js
let status = 0;
switch (status) {
    case false:
        console.log("false matched"); // ❌ Won't run (0 !== false)
        break;
    case 0:
        console.log("0 matched");     // ✅ Runs
        break;
}
```

### Q29: What happens if you omit break in switch?
**A:** Fall-through occurs — execution continues to the next case even if it doesn't match.

```js
let fruit = "banana";
switch (fruit) {
    case "apple":
        console.log("Apple selected");
    case "banana":
        console.log("Banana selected");  // ✅ runs
    case "cherry":
        console.log("Cherry selected");  // ✅ runs (fall-through)
    default:
        console.log("Default reached");  // ✅ runs (fall-through)
}
// Output: Banana selected, Cherry selected, Default reached
```

### Q30: How to use switch for ranges?
**A:** Use `switch(true)` pattern.

```js
let score = 85;
switch (true) {
    case (score >= 95): console.log("A"); break;
    case (score >= 85): console.log("B"); break;
    case (score >= 70): console.log("C"); break;
    default: console.log("Fail");
}
```

---

## 7. Functions & Closures

### Q31: What is a closure?
**A:** A function that retains access to its outer (lexical) scope even after the outer function has returned.

```js
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

### Q32: var vs let in loop closures?

```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 0); // 3, 3, 3
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 0); // 0, 1, 2
}
```

### Q33: What is the difference between function declaration and arrow function?
**A:** Function declarations are hoisted, have their own `this`, and the `arguments` object. Arrow functions are not hoisted, inherit `this` from surrounding scope, and have no `arguments` object.

---

## 8. ES6+ Features

### Q34: What are template literals?
**A:** String literals using backticks with `${}` interpolation and multi-line support.

```js
let name = "Alice";
console.log(`Hello ${name}!`);       // "Hello Alice!"
console.log(`Line 1
Line 2`);                              // Multi-line
```

### Q35: What is the spread operator?
**A:** Expands iterables into individual elements.

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];       // [1, 2, 3, 4, 5]
const obj = { a: 1, ...{ b: 2 } };  // { a: 1, b: 2 }
```

### Q36: What is optional chaining?
**A:** Safely accesses nested properties without error.

```js
const user = { profile: { name: "Alice" } };
console.log(user?.profile?.name);       // "Alice"
console.log(user?.address?.city);       // undefined (no error)
```

### Q37: What are rest parameters?
**A:** Collects remaining arguments into an array.

```js
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6
```

### Q38: What does the delete operator do?
**A:** Deletes a property from an object.

```js
const person = { name: "Alice", age: 30 };
delete person.age;
console.log(person); // { name: "Alice" }
```

### Q39: in operator vs hasOwnProperty?

```js
const obj = { a: 1 };
console.log("a" in obj);              // true
console.log("toString" in obj);       // true (prototype chain)
console.log(obj.hasOwnProperty("a")); // true
console.log(obj.hasOwnProperty("toString")); // false
```

---

## 9. Coding Interview Problems

### Problem 1: Even or Odd
```js
let num = 14;
if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}
```

### Problem 2: Grade Calculator
```js
let marks = 85;
if (marks >= 90) console.log("Grade: A");
else if (marks >= 80) console.log("Grade: B");
else if (marks >= 70) console.log("Grade: C");
else if (marks >= 60) console.log("Grade: D");
else console.log("Grade: Fail");
```

### Problem 3: Leap Year Checker
```js
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is NOT a Leap Year");
}
```

### Problem 4: Voting Eligibility
```js
let age = 20;
if (age > 18) {
    console.log("Allow to vote");
} else {
    console.log("Not Allow to vote");
}
```

### Problem 5: Compound Increment Puzzle
```js
// Predict the output:
let a = 10;
console.log(++a + a);  // ?

let ab = 20;
let cd = ab++;
console.log(ab++ + ab); // ?
console.log(ab);        // ?
console.log(cd);        // ?

let ss = 10;
console.log(ss++ + ++ss); // ?
```
**Answers:** 22, 41, 22, 20, 22

### Problem 6: String + Number Coercion
```js
console.log(1 + "2" + "3");  // ?
console.log(1 + 2 + "3");    // ?
console.log("1" + 2 + 3);    // ?
console.log("10" - 5);       // ?
console.log("abc" - 5);      // ?
```
**Answers:** "123", "33", "123", 5, NaN

### Problem 7: Floating Point Precision
```js
console.log(0.1 + 0.2);          // ?
console.log(0.1 + 0.2 === 0.3);  // ?
```
**Answers:** 0.30000000000000004, false

### Problem 8: Array Comparison
```js
console.log([] == []);     // ?
console.log([] == 0);      // ?
console.log([] == ![]);    // ?
console.log([1] == 1);     // ?
```
**Answers:** false, true, true, true

### Problem 9: ASI Gotcha
```js
function test() {
    return
    {
        value: 42
    };
}
console.log(test()); // ?
```
**Answer:** undefined (ASI inserts `;` after `return`)

### Problem 10: Number Conversion
```js
console.log(parseInt("123abc")); // ?
console.log(Number("123abc"));   // ?
console.log(+"123abc");          // ?
```
**Answers:** 123, NaN, NaN

---

## Quick Reference — Key Gotchas

| Expression | Result | Why |
|------------|--------|-----|
| `typeof null` | `"object"` | Historical JS bug |
| `NaN == NaN` | `false` | IEEE 754 spec |
| `null >= 0` | `true` | null → 0 in relational operators |
| `null == 0` | `false` | Special rule in spec |
| `[] == ![]` | `true` | Complex coercion chain |
| `0.1 + 0.2 === 0.3` | `false` | Floating point precision |
| `"2" > "12"` | `true` | String ASCII comparison |
| `return {x:1}` | `undefined` | ASI after return |
| `"5" - 1` | `4` | String coerced to number for `-` |
| `"5" + 1` | `"51"` | Number coerced to string for `+` |

---

## Operator Precedence (High → Low)

1. `()` grouping
2. `.` `[]` `()` member access / function call
3. `!` `~` `+` `-` `++` `--` `typeof` `void` `delete` `await` — unary
4. `**` exponentiation (right-associative)
5. `*` `/` `%` multiplicative
6. `+` `-` additive
7. `<<` `>>` `>>>` bitwise shift
8. `<` `<=` `>` `>=` `in` `instanceof` relational
9. `==` `!=` `===` `!==` equality
10. `&` bitwise AND
11. `^` bitwise XOR
12. `|` bitwise OR
13. `&&` logical AND
14. `||` logical OR
15. `??` nullish coalescing
16. `?:` ternary conditional
17. `=` `+=` `-=` `*=` `/=` `%=` `**=` `<<=` `>>=` `>>>=` `&=` `^=` `|=` `&&=` `||=` `??=` — assignment
18. `,` comma
