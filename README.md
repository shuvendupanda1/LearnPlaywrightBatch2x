# Learn JavaScript for Playwright (Batch 2x)

A comprehensive hands-on JavaScript course repository designed for QA engineers learning Playwright automation testing. Covers JavaScript fundamentals from basics to advanced concepts with practical examples, interview Q&A, and programming exercises.

## Clone

```bash
git clone https://github.com/shuvendupanda1/LearnPlaywrightBatch2x.git
```

## Remote Origin

```
https://github.com/shuvendupanda1/LearnPlaywrightBatch2x.git
```

---

## Chapter 1 — JavaScript Basics

### Files
| File | Topic |
|------|-------|
| `01_Basics.js` | Hello World, variables, console.log |
| `02_JS.js` | Variable declaration and output |
| `03_js_commands.js` | JavaScript commands |
| `04_Hotcode.js` | For loop (hot loop) |

### Key Concepts
- `console.log()` for output
- Variable declaration with `let`
- Basic for loop syntax

### Interview Q&A
**Q1: What does console.log() do?**
A1: It outputs data to the browser's console (or terminal in Node.js). It's the primary debugging tool in JavaScript.

**Q2: What is the syntax of a for loop?**
A2: `for (initialization; condition; increment) { // code }` — runs code repeatedly until the condition becomes false.

### Run
```bash
node chapter_01_Basic/01_Basics.js
```

---

## Chapter 2 — JavaScript Fundamentals

### Files
| File | Topic |
|------|-------|
| `05_JS_Basics.js` | var declaration, reassignment, console output (38 lines) |

### Key Concepts
- `var`, `let`, `const` declarations
- Block scoping with `{}`
- Reassignment vs redeclaration

### Interview Q&A
**Q1: What is the difference between var, let, and const?**

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function-scoped | Block-scoped | Block-scoped |
| Reassign | ✅ | ✅ | ❌ |
| Redeclare | ✅ | ❌ | ❌ |
| Hoisted | ✅ (undefined) | ✅ (TDZ) | ✅ (TDZ) |
| Must initialize | ❌ | ❌ | ✅ |

**Q2: What happens if you try to access a let variable outside its block?**
A2: ReferenceError — `let` is block-scoped and not accessible outside `{}`.

```js
{
    let t = "shuvendu";
}
// console.log(t); // ReferenceError
```

### Run
```bash
node chapter_02_javascript_Concepts/05_JS_Basics.js
```

---

## Chapter 3 — Identifiers & Literals

### Files
| File | Topic |
|------|-------|
| `06_identifire_Rules.js` | Valid / invalid identifier rules |
| `07_identifire_Part2.js` | Naming conventions (camelCase, PascalCase, etc.) |
| `08_Comments.js` | Single-line & multi-line comments |
| `09_Windows_Shortcut_Keys.js` | Useful Windows shortcuts for coding |
| `10_Shorthand_Syntax.js` | Arithmetic assignment shorthand |
| `identifiers.js` | Identifier examples |

### Key Concepts
- Identifier naming rules
- camelCase, PascalCase, snake_case, kebab-case
- Single-line (`//`) and multi-line (`/* */`) comments

### Interview Q&A
**Q1: What are the rules for JavaScript identifiers?**
- Must begin with a letter (`a-z`, `A-Z`), underscore (`_`), or dollar sign (`$`)
- Cannot start with a digit (`0-9`)
- Can contain letters, digits, underscores, and dollar signs
- Case-sensitive (`myVar` ≠ `myvar`)
- Cannot be a reserved keyword (`let`, `class`, `return`, etc.)
- No spaces or special characters (except `_` and `$`)

**Q2: Valid vs Invalid identifiers**
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

**Q3: What naming conventions are commonly used?**
- **camelCase**: `firstName`, `getUserData` (variables & functions)
- **PascalCase**: `PersonDetails`, `MyClass` (classes & constructors)
- **snake_case**: `user_name`, `total_amount` (rare in JS, common in databases)
- **kebab-case**: `my-variable` (not valid in JS, used in CSS/HTML)

---

## Chapter 4 — Advanced JavaScript Concepts (Var, Let, Const, Functions, Hoisting)

### Files
| File | Topic |
|------|-------|
| `09_var_let_const.js` | var, let, const basics |
| `10_functions.js` | Function declaration and invocation |
| `11_var_explain.js` | var scoping (function & global scope) |
| `12_let_people_love.js` | let block scoping |
| `13_const_explain.js` | const constants and immutability |
| `14_let_scope.js` | let scope with global vs block |
| `15_Hoisting.js` | Hoisting with var |
| `16_hoisting_function.js` | Hoisting with function declarations |
| `17_Hoisted_TDZ` | Hoisting & Temporal Dead Zone with var in block scope |
| `19_let_hosting.js` | let hosting behavior |
| `Hoisting_and_TDZ.js` | Combined hoisting & TDZ examples |

### Key Concepts
- `var` is function-scoped, hoisted with `undefined`
- `let` is block-scoped, hoisted but in TDZ
- `const` is block-scoped, must be initialized, cannot be reassigned
- Function declarations are fully hoisted
- Temporal Dead Zone (TDZ) — accessing `let`/`const` before declaration throws `ReferenceError`

### Interview Q&A
**Q1: What is hoisting?**
A1: JavaScript's behavior of moving declarations to the top of their scope during compilation. `var` declarations are hoisted and initialized to `undefined`. Function declarations are hoisted in full.

```js
console.log(x); // undefined (not ReferenceError)
var x = 5;

hello(); // "Hello!" — function hoisted fully
function hello() { console.log("Hello!"); }
```

**Q2: What is the Temporal Dead Zone (TDZ)?**
A2: The period between entering scope and the actual declaration of a `let` or `const` variable. Accessing the variable during TDZ throws `ReferenceError`.

```js
{
    // TDZ starts for 'a'
    // console.log(a); // ReferenceError
    let a = 10; // TDZ ends
    console.log(a); // 10
}
```

**Q3: Can a const object be modified?**
A3: Yes — `const` prevents reassignment, not mutation. Properties of const objects can be modified.

```js
const arr = [1, 2, 3];
arr.push(4); // ✅ Allowed — mutating, not reassigning
// arr = [5, 6]; // ❌ TypeError — reassignment
```

### Programming — Interview Questions
```js
// Predict output:
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 0); // 3, 3, 3
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 0); // 0, 1, 2
}
```

### Run
```bash
node Chapter_04_JavaScript_Concepts/09_var_let_const.js
```

---

## Chapter 5 — Literals, Operators, Identifiers & Functions

### Files
| File | Topic |
|------|-------|
| `18_literals-operators-identifiers.js` | Comprehensive literals, operators & identifiers |
| `19_literial.js` | Literal examples |
| `20_Template_literal.js` | Template literal examples |
| `22_confusing_operator.js` | Confusing comparisons & interview Q&A (267 lines) |
| `23_null_undefined.js` | null vs undefined in depth |
| `24_Null.js` | null examples |
| `25_Literal_all.js` | All literal types (numbers, hex, etc.) |
| `26_Literal_Numberall.js` | All number types (integer, float, binary, octal, hex, BigInt) |
| `27_String.js` | String literals (single & double quotes) |
| `28_Templates_Literals.js` | Template literals with `${}` interpolation |
| `29_Backtick_single_ouble.js` | Single quote vs double quote vs backtick |
| `31_Class.js` | ES6 class syntax (constructor, methods, getters, setters) |
| `function_methods.js` | Functions vs methods comparison |

### Key Concepts
- Numeric literals: decimal, binary (`0b`), octal (`0o`), hex (`0x`), BigInt (`n`)
- String literals: single quotes, double quotes, backticks (template literals)
- Template literals: `${expression}`, multi-line strings
- Classes: `constructor`, methods, getters/setters
- null vs undefined

### Interview Q&A

**Q1: What is a literal?**
A1: A fixed value written directly in source code — e.g., `42`, `"hello"`, `true`, `null`, `[1,2,3]`.

**Q2: What literal types does JavaScript support?**
- **String**: `'hello'`, `"hello"`, `` `hello ${x}` ``
- **Numeric**: `42`, `3.14`, `0xFF`, `0b1010`, `0o77`, `1.5e3`
- **Boolean**: `true`, `false`
- **Null**: `null`
- **BigInt**: `42n`
- **Object**: `{}`, `{name:"Alice"}`
- **Array**: `[]`, `[1,2,3]`

**Q3: What is the difference between single quotes, double quotes, and backticks?**
A3: Single and double quotes are identical (no interpolation, single line). Backticks support `${}` interpolation, multi-line strings, and tagged templates.

**Q4: Null vs Undefined?**

| null | undefined |
|------|-----------|
| Intentional absence of value | Variable declared but not assigned |
| Assigned by developer | Default by JS engine |
| `typeof null` → `"object"` (bug) | `typeof undefined` → `"undefined"` |
| `null == undefined` → `true` | `null === undefined` → `false` |

**Q5: What is NaN and how do you check for it?**
A5: NaN = Not a Number. `typeof NaN` → `"number"`. NaN is the only value not equal to itself (`NaN == NaN` → `false`). Check using `Number.isNaN(x)` or `Object.is(x, NaN)`.

### Programming — Interview Questions
```js
// Q: What are the outputs?
console.log(1 + "2" + "3");    // "123"
console.log(1 + 2 + "3");      // "33"  (left to right: 1+2=3, then 3+"3"="33")
console.log("1" + 2 + 3);      // "123"

// Q: Confusing comparisons
console.log(5 == "5");     // true  (type coercion)
console.log(5 === "5");    // false (strict)
console.log(0 == false);   // true
console.log("" == false);  // true
console.log(null == undefined); // true

// Q: Floating point precision
console.log(0.1 + 0.2 === 0.3); // false (0.30000000000000004)

// Q: Array comparison
console.log([] == []);    // false (different references)
console.log([] == 0);     // true  ([] -> "" -> 0)
console.log([] == ![]);   // true
```

### Run
```bash
node Chapter_05_literal_operator_identifiers/22_confusing_operator.js
```

---

## Chapter 6 — Operators (Comprehensive)

### Files
| File | Topic |
|------|-------|
| `30_operators.js` | Assignment operator basics |
| `31_Arithmetic_Operators.js` | `+`, `-`, `*`, `/` |
| `32_Modulus_op.js` | Modulus (`%`) — remainder |
| `33_Expo.js` | Exponentiation (`**`) |
| `34_IQ.js` | Compound assignment operators (`+=`, `-=`, etc.) |
| `35_Comparsion_Op.js` | Comparison operators (`>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, `!==`) |
| `36_Comparsion_Strict_loose.js` | Loose (`==`) vs strict (`===`) comparison |
| `37_IQ_Lose_Strict.js` | Interview Q&A — loose comparison quirks |
| `38_Confusing_Comparsion.js` | Confusing comparisons — `==` vs `===` deep dive |
| `39_Logical_op.js` | Logical operators (`&&`, `||`, `!`) |
| `40_String_Con_Op.js` | String concatenation with `+` |
| `41_Ternary_op.js` | Ternary operator (`condition ? true : false`) |
| `42_Type_op.js` | `typeof` operator |
| `43_Incre_Decr.js` | Pre-increment / pre-decrement (`++a`, `--a`) |
| `44_Null.op.js` | Nullish coalescing (`??`) and null comparisons |
| `45_post_Increment.js` | Post-increment (`a++`) — assign then increment |
| `46_IQ_Increment.js` | Interview Q&A — increment operator |
| `47_Advance_ID.js` | Advanced increment/decrement expressions |
| `48_Interview_Questions_Literals_Operators_Keywords_Identifiers.js` | Comprehensive interview Q&A (478 lines) |
| `JavaScript_Assignment_Operators.js` | Assignment operators deep dive |
| `JavaScript_BigInt_Operators.js` | BigInt operators |
| `JavaScript_Bitwise_Operators.js` | Bitwise operators (`&`, `|`, `~`, `^`, `<<`, `>>`, `>>>`) |
| `JavaScript_Comma_Operator.js` | Comma operator |
| `JavaScript_Comparison_Operators.js` | Comparison operators deep dive |
| `JavaScript_Logical_Operators.js` | Logical operators deep dive |
| `JavaScript_Relational_Operators.js` | Relational operators (`in`, `instanceof`) |
| `JavaScript_String_Operators.js` | String operators |
| `JavaScript_Ternary_Operator.js` | Ternary operator deep dive |
| `JavaScript_Unary_Operators.js` | Unary operators (`+`, `-`, `!`, `~`, `++`, `--`, `typeof`, `void`, `delete`) |

### Operator Categories

| Category | Operators |
|----------|-----------|
| **Assignment** | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=` |
| **Arithmetic** | `+`, `-`, `*`, `/`, `%`, `**` |
| **Comparison** | `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=` |
| **Logical** | `&&` (AND), `||` (OR), `!` (NOT) |
| **Ternary** | `condition ? expr1 : expr2` |
| **Type** | `typeof` |
| **Nullish** | `??` |
| **Increment/Decrement** | Pre (`++a`) vs Post (`a++`) |
| **BigInt** | Arithmetic with `n` suffix |
| **Bitwise** | `&`, `|`, `~`, `^`, `<<`, `>>`, `>>>` |
| **Comma** | Multiple expressions in one statement |
| **Relational** | `in`, `instanceof` |
| **String** | `+` concatenation, properties/methods |
| **Unary** | `+`, `-`, `!`, `~`, `++`, `--`, `typeof`, `void`, `delete` |

### Interview Q&A

**Q1: What is the difference between `==` and `===`?**
A1: `==` (abstract equality) performs type coercion before comparing. `===` (strict equality) checks both value AND type without coercion.

```js
5 == "5"   // true  (string "5" coerced to number 5)
5 === "5"  // false (number vs string types differ)
```

**Q2: What are falsy values in JavaScript?**
A2: `false`, `0`, `-0`, `0n` (BigInt zero), `""` (empty string), `null`, `undefined`, `NaN`. Everything else is truthy.

**Q3: What is short-circuit evaluation?**
A3: `&&` returns the first falsy value or the last truthy value. `||` returns the first truthy value or the last falsy value.

```js
0 && 42          // 0 (short-circuits at 0, the first falsy)
1 && 42          // 42 (both truthy, returns last)
0 || 42          // 42 (0 is falsy, moves to 42)
1 || 42          // 1 (1 is truthy, short-circuits)
```

**Q4: What is the Nullish Coalescing Operator (`??`)?**
A4: Returns the right-hand side only when the left-hand side is `null` or `undefined`.

```js
null ?? "default"   // "default"
0 ?? "default"      // 0 (0 is NOT nullish)
"" ?? "default"     // "" (empty string is NOT nullish)
```

**Q5: Pre-increment vs Post-increment?**
A5: `++a` increments then returns the new value. `a++` returns the original value then increments.

```js
let a = 5;
console.log(a++); // 5 (returns 5, then a becomes 6)
console.log(++a); // 7 (a was 6, increments to 7, returns 7)
```

### Programming — Interview Questions

```js
// Q: Predict output of compound expressions
let a = 10;
console.log(++a + a);  // 11 + 11 = 22
console.log(a);        // 11

let ss = 10;
console.log(ss++ + ++ss); // 10 + 12 = 22

// Q: Loose comparison gotchas
console.log(0 == "");      // true
console.log(0 == "0");     // true
console.log("" == "0");    // false (transitivity broken!)
console.log(null == 0);    // false
console.log(null >= 0);    // true (gotcha: null coerces to 0 in relational)

// Q: typeof quiz
console.log(typeof null);        // "object" (bug)
console.log(typeof NaN);         // "number"
console.log(typeof undefined);   // "undefined"
console.log(typeof []);          // "object"
```

### Run
```bash
node Chapter_06_Operators/48_Interview_Questions_Literals_Operators_Keywords_Identifiers.js
```

---

## Chapter 7 — Control Statements: If-Else

### Files
| File | Topic |
|------|-------|
| `48_If_Else.js` | Basic if-else — voting eligibility |
| `49_ifElse_else.js` | If-else ladder |
| `50_Reak_IFELSE.js` | Real-world if-else example |
| `51_API_IFELSE.js` | API conditionals |
| `52_IQ_IFELSE.js` | Interview Q&A — truthy/falsy in if conditions |
| `53_ifelse_Real.js` | Real-world if-else |
| `54_IQ_ifelse.js` | Interview Q&A — simple if |
| `55_IF.js` | IF statements |
| `56_EvenOdd,js` | Even/Odd checker |
| `57_Grad_Cal.js` | Grade calculator |
| `58_Leave_Year.js` | Leap year checker |
| `Control_Statements.js` | Control statements overview |
| `IFElse_Statements.js` | If-else statements |

### Key Concepts
- `if`, `else if`, `else` syntax
- Truthy/falsy in conditions
- Nested conditions
- Real-world applications (voting, grades, leap year)

### Interview Q&A

**Q1: What values are falsy in if conditions?**
A1: `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`. All other values are truthy.

```js
if ("hello") console.log("truthy");  // prints
if (42) console.log("truthy");       // prints
if ({}) console.log("truthy");       // prints (empty object is truthy)
if ([]) console.log("truthy");       // prints (empty array is truthy)
if ("") console.log("won't print");  // falsy
if (0) console.log("won't print");   // falsy
```

**Q2: What is the output of `if (x = 10)`?**
A2: It assigns 10 to x, and the condition evaluates to `true` (10 is truthy). This is a common bug — should use `===` instead of `=`.

### Programming — Interview Questions

```js
// 1. Even/Odd Checker
let num = 14;
if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}

// 2. Grade Calculator
let marks = 85;
if (marks >= 90) console.log("Grade: A");
else if (marks >= 80) console.log("Grade: B");
else if (marks >= 70) console.log("Grade: C");
else if (marks >= 60) console.log("Grade: D");
else console.log("Grade: Fail");

// 3. Leap Year Checker
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is NOT a Leap Year");
}

// 4. Voting Eligibility
let age = 20;
if (age > 18) {
    console.log("Allow to vote");
} else {
    console.log("Not Allow to vote");
}
```

### Run
```bash
node "Chapter_07_Control _Statements _in _JavaScript/57_Grad_Cal.js"
```

---

## Chapter 8 — Switch Statements

### Files
| File | Topic |
|------|-------|
| `59_Switch_Statements.js` | Basic switch — day of week + number check |
| `60_noBreak.js` | Switch without break (fall-through) |
| `61_default.js` | Default case usage |
| `62_RealTime_Example.js` | Real-time switch use case |
| `63_Switch_Groups.js` | Grouping cases together |
| `64_Iq.js` | Interview Q&A — fall-through behavior |
| `65_Iq2.js` | Interview Q&A — switch(true) pattern |
| `66_IQ3` | Interview Q&A |
| `67_IQ4.js` | Interview Q&A — type-strict matching in switch |

### Key Concepts
- `switch` / `case` / `break` / `default`
- Fall-through behavior (no `break`)
- `switch(true)` pattern for ranges
- Type-strict matching (`===`)

### Interview Q&A

**Q1: How does switch comparison work — loose or strict?**
A1: Switch uses **strict equality** (`===`). In `67_IQ4.js`, `case 0` does NOT match `false` because `0 === false` is `false`.

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

**Q2: What happens if you omit `break` in a switch?**
A2: Fall-through occurs — execution continues to the next case even if it doesn't match.

```js
let fruit = "banana";
switch (fruit) {
    case "apple":
        console.log("Apple selected");
    case "banana":
        console.log("Banana selected");  // runs
    case "cherry":
        console.log("Cherry selected");  // runs (fall-through)
    case "date":
        console.log("Date selected");    // runs (fall-through)
    default:
        console.log("Default reached");  // runs (fall-through)
}
// Output:
// Banana selected
// Cherry selected
// Date selected
// Default reached
```

**Q3: How to use switch for ranges (grade calculation)?**
A3: Use `switch(true)` pattern — each case evaluates a boolean expression.

```js
let testScore = 85;
switch (true) {
    case (testScore >= 95):
        console.log("Outstanding"); break;
    case (testScore >= 85):
        console.log("Excellent"); break;
    case (testScore >= 70):
        console.log("Good"); break;
    case (testScore >= 50):
        console.log("Needs Improvement"); break;
    default:
        console.log("Unsatisfactory");
}
```

### Run
```bash
node "Chapter_08_Switch_Statements/64_Iq.js"
```

---

## Chapter 9 — User Input

### Files
| File | Topic |
|------|-------|
| `68_UserInput.js` | `prompt()` for user input |
| `69_Node_Readline.js` | Node.js `readline` module |
| `70_Prompts_Synch.js` | Synchronous prompts |

### Key Concepts
- `prompt()` for browser-based input
- `readline` module for Node.js CLI input
- Type conversion (`Number()`, `String()`)

### Programming — Interview Questions

```js
// User input with prompt (browser)
let num = prompt("Enter a number:");
num = Number(num);
if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}
```

---

## Comprehensive Interview Q&A

### 1. Core JavaScript Concepts

**Q: What is the difference between `undefined` and `null`?**
A: `undefined` means a variable is declared but not assigned a value. `null` is an intentional assignment representing "no value". `null == undefined` → `true`, `null === undefined` → `false`. `typeof null` → `"object"` (known bug). `typeof undefined` → `"undefined"`.

**Q: Explain hoisting and TDZ.**
A: `var` declarations are hoisted to the top of their scope and initialized with `undefined`. `let`/`const` are hoisted but remain in the Temporal Dead Zone (TDZ) — accessing them before their declaration throws `ReferenceError`. Function declarations are hoisted in full (can call before definition).

**Q: What is type coercion? Give examples.**
A: JavaScript automatically converts types when operators expect different types.
```js
"5" - 1     // 4 (string → number)
"5" + 1     // "51" (number → string for concatenation)
"5" * "2"   // 10
null - 1    // -1 (null → 0)
undefined - 1 // NaN
```

**Q: What is the difference between `function declaration` and `function expression`?**
A: Function declarations are hoisted (can be called before definition). Function expressions are NOT hoisted.
```js
foo(); // ✅ Works — declaration hoisted
function foo() {}

bar(); // ❌ TypeError — expression not hoisted
const bar = function() {};
```

**Q: Explain closures.**
A: A closure is a function that retains access to its outer (lexical) scope even after the outer function has returned.
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
```

### 2. Operators & Comparisons

**Q: What is the difference between `==` and `===`?**
A: `==` allows type coercion before comparison. `===` checks both value AND type.
```js
5 == "5"   // true  — string "5" coerced to number 5
5 === "5"  // false — number vs string types differ
```

**Q: What are all falsy values?**
A: `false`, `0`, `-0`, `0n` (BigInt zero), `""` (empty string), `null`, `undefined`, `NaN`.

**Q: Why is `NaN !== NaN`?**
A: Per IEEE 754 spec, NaN is the only value not equal to itself. Use `Number.isNaN(x)` or `Object.is(x, NaN)` to check.

**Q: What does `typeof null` return and why?**
A: `"object"`. This is a well-known bug from JavaScript's first version where values were stored with type tags, and `null` was represented as the null pointer (0x00), which was interpreted as the object type tag.

**Q: Explain `??` vs `||`.**
A: `??` (nullish coalescing) returns RHS only when LHS is `null` or `undefined`. `||` returns RHS when LHS is **any** falsy value.
```js
0 ?? "default"    // 0
0 || "default"    // "default"
"" ?? "default"   // ""
"" || "default"   // "default"
```

### 3. Control Flow

**Q: What is the difference between `if-else` and `switch`?**
A: `if-else` is better for range checks and complex conditions. `switch` is better for discrete value matching. Switch uses strict equality (`===`).

**Q: What is fall-through in switch?**
A: When a `case` doesn't have a `break`, execution continues to the next case regardless of whether it matches.

**Q: How do you handle ranges in switch?**
A: Use `switch(true)` — each case evaluates a boolean expression.

### 4. ES6+ Features

**Q: What are template literals?**
A: String literals using backticks that support `${}` interpolation, multi-line strings, and tagged templates.
```js
const name = "Alice";
console.log(`Hello ${name}!`); // "Hello Alice!"
```

**Q: What is the spread operator (`...`)?**
A: Expands iterables into individual elements.
```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
const obj = { a: 1, ...{ b: 2 } }; // { a: 1, b: 2 }
```

**Q: What is optional chaining (`?.`)?**
A: Safely accesses nested properties without throwing if intermediate values are `null`/`undefined`.
```js
const user = { profile: { name: "Alice" } };
user?.address?.city;  // undefined (no error)
```

**Q: What are rest parameters (`...`)?**
A: Collects remaining arguments into an array.
```js
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3); // 6
```

---

## Quick Reference Card

### Identifiers
- ✅ Valid: `myVar`, `_private`, `$dollar`, `myVar1`, `_1`, `$$$`
- ❌ Invalid: `1var`, `my-var`, `my var`, `class`, `let`, `const`

### Key Gotchas
| Expression | Result | Why |
|------------|--------|-----|
| `typeof null` | `"object"` | Historical JS bug |
| `NaN == NaN` | `false` | IEEE 754 spec |
| `null >= 0` | `true` | null → 0 in relational |
| `[] == ![]` | `true` | Complex coercion chain |
| `0.1 + 0.2 === 0.3` | `false` | Floating point precision |
| `"2" > "12"` | `true` | String ASCII comparison |
| `return {x:1}` | `undefined` | ASI after return |

### Operator Precedence (High → Low)
1. `()` grouping
2. `.` `[]` `()` member access / call
3. `!` `~` `+` `-` `++` `--` `typeof` `void` `delete` — unary
4. `**` exponentiation (right-assoc)
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
16. `?:` ternary
17. `=` `+=` `-=` ... assignment
18. `,` comma

---

## How to Run Examples

```bash
# Chapter 1
node chapter_01_Basic/01_Basics.js

# Chapter 5 - Confusing Comparisons
node Chapter_05_literal_operator_identifiers/22_confusing_operator.js

# Chapter 6 - Operators
node Chapter_06_Operators/48_Interview_Questions_Literals_Operators_Keywords_Identifiers.js

# Chapter 7 - Control Statements
node "Chapter_07_Control _Statements _in _JavaScript/57_Grad_Cal.js"

# Chapter 8 - Switch
node "Chapter_08_Switch_Statements/64_Iq.js"

# Chapter 9 - User Input
node "Chapter_09_UserInput/68_UserInput.js"
```

See [Short_Notes.md](./Short_Notes.md) for a concise cheatsheet covering variables, data types, operators, hoisting, control flow, and common interview topics.
