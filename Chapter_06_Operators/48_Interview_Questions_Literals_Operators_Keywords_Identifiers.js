// ============================================================
// INTERVIEW QUESTIONS: Literals, Operators, Keywords, Identifiers
// ============================================================

// ============================================================
// SECTION A: THEORY QUESTIONS
// ============================================================

// --- 1. IDENTIFIERS ---

// Q1: What is an identifier in JavaScript? What are the rules?
// A1: Identifiers are names given to variables, functions, classes.
//     Rules:
//     - Must start with letter, _, or $
//     - Can contain letters, digits, _, $
//     - Cannot start with a digit
//     - Case-sensitive (name != Name)
//     - Cannot be a reserved keyword
//     - No spaces or special characters (except _ and $)

// Q2: Are JavaScript identifiers case-sensitive?
// A2: Yes. `myVar` and `myvar` are two different identifiers.

// Q3: Can identifiers start with a number?
// A3: No. `1name` is invalid. `name1` is valid.

// Q4: What characters are allowed in identifiers?
// A4: Letters (a-z, A-Z), digits (0-9), underscore (_), dollar sign ($).

// Q5: Can I use reserved keywords as identifiers?
// A5: No. `var`, `let`, `const`, `if`, `else`, `function`, `class`,
//     `return`, etc. cannot be used as variable names.

// --- 2. LITERALS ---

// Q6: What is a literal in JavaScript?
// A6: A literal is a fixed value written directly in source code.
//     e.g., 42, "hello", true, null, [1,2,3], {name:"Alice"}

// Q7: What types of literals does JavaScript support?
// A7: String ('', "", ``), Numeric (42, 3.14, 0xFF, 0b1010),
//     Boolean (true, false), Null (null), BigInt (42n),
//     Object ({}), Array ([]), RegExp (/abc/)

// Q8: What is a template literal?
// A8: String literals using backticks (`) that support
//     interpolation: `${expr}`, multi-line strings, and
//     tagged templates.

// Q9: Difference between single quotes, double quotes, and backticks?
// A9: Single and double quotes are identical (no interpolation,
//     single line). Backticks support interpolation, multi-line.

// Q10: What is the difference between null literal and undefined?
// A10: null is an intentional absence (assigned). undefined means
//      declared but not assigned. typeof null -> "object" (bug),
//      typeof undefined -> "undefined".

// Q11: How do you write binary, octal, and hex literals?
// A11: binary: 0b1010 (10), octal: 0o77 (63), hex: 0xFF (255)

// --- 3. KEYWORDS ---

// Q12: What are reserved keywords in JavaScript?
// A12: Words that have special meaning and cannot be used as
//      identifiers. Examples: var, let, const, if, else, for,
//      while, do, function, return, class, new, this, typeof,
//      instanceof, delete, try, catch, throw, switch, case,
//      break, continue, default, import, export, extends,
//      super, yield, await, async, static, get, set, etc.

// Q13: What is the difference between `var`, `let`, and `const`?
// A13: var: function-scoped, hoisted, can redeclare
//      let: block-scoped, hoisted (TDZ), cannot redeclare
//      const: block-scoped, hoisted (TDZ), cannot reassign,
//             must initialize at declaration

// Q14: Can we redeclare a variable with `let` in the same scope?
// A14: No, `let` does not allow redeclaration. `var` does.

// Q15: What happens if we declare a const without initialization?
// A15: SyntaxError: Missing initializer in const declaration.

// Q16: What is the difference between `function` declaration and
//      `function` expression?
// A16: Function declarations are hoisted (can call before definition).
//      Function expressions are not hoisted.

// Q17: What does `typeof` operator return?
// A17: A string indicating the type:
//      typeof 42 -> "number"
//      typeof "hello" -> "string"
//      typeof true -> "boolean"
//      typeof undefined -> "undefined"
//      typeof null -> "object" (known bug)
//      typeof {} -> "object"
//      typeof [] -> "object"
//      typeof function(){} -> "function"
//      typeof Symbol() -> "symbol"
//      typeof 42n -> "bigint"

// Q18: What does `instanceof` do?
// A18: Checks if an object is an instance of a constructor:
//      [] instanceof Array -> true
//      [] instanceof Object -> true
//      [] instanceof Date -> false

// Q19: What does `delete` do?
// A19: Deletes a property from an object:
//      const obj = {a: 1}; delete obj.a; -> obj has no 'a'

// Q20: What does `new` do?
// A20: Creates an instance of a constructor function/class.
//      new Array(), new Date(), new MyClass()

// --- 4. OPERATORS ---

// Q21: What are the different types of operators in JavaScript?
// A21: Arithmetic (+, -, *, /, %, **, ++, --)
//      Assignment (=, +=, -=, *=, /=, %=, **=, <<=, >>=, etc.)
//      Comparison (==, ===, !=, !==, >, <, >=, <=)
//      Logical (&&, ||, !, ??)
//      Bitwise (&, |, ^, ~, <<, >>, >>>)
//      String (+ for concat)
//      Ternary (? :)
//      Comma (,)
//      Unary (typeof, instanceof, delete, +, -, !, ~, void)
//      Relational (in, instanceof)

// Q22: What is the difference between == and ===?
// A22: == (abstract equality) does type coercion.
//      === (strict equality) checks value AND type.
//      5 == "5" -> true, 5 === "5" -> false

// Q23: What is the difference between != and !==?
// A23: != is loose inequality (coerces types).
//      !== is strict inequality (no coercion).
//      5 != "5" -> false, 5 !== "5" -> true

// Q24: What is short-circuit evaluation in && and ||?
// A24: && returns first falsy value or last truthy.
//      || returns first truthy value or last falsy.
//      0 && 42 -> 0 (short-circuits at 0)
//      1 || 42 -> 1 (short-circuits at 1)

// Q25: What is the Nullish Coalescing Operator (??)?
// A25: Returns RHS only when LHS is null or undefined.
//      null ?? "default" -> "default"
//      0 ?? "default" -> 0 (0 is NOT nullish)

// Q26: What does the ternary operator do?
// A26: condition ? valueIfTrue : valueIfFalse
//      let result = 10 > 5 ? "yes" : "no"; -> "yes"

// Q27: What is the difference between pre-increment and post-increment?
// A27: ++a increments then returns the new value.
//      a++ returns the original value then increments.
//      let a=5; ++a -> 6, a=6
//      let a=5; a++ -> 5, a=6

// Q28: What does the comma operator do?
// A28: Evaluates each operand and returns the last.
//      (1, 2, 3) -> 3
//      Used in for loops: for (let i=0, j=10; ...; i++, j--)

// Q29: What is the difference between in and instanceof?
// A29: in checks if a property exists (own or inherited).
//      instanceof checks if an object is an instance of a constructor.
//      "toString" in {} -> true
//      [] instanceof Array -> true

// Q30: What is the spread operator (...)?
// A30: Expands iterables into individual elements.
//      const arr = [1, 2, 3]; const copy = [...arr];
//      const obj = {a: 1, ...{b: 2}};

// Q31: What is the rest parameter (...)?
// A31: Collects remaining arguments into an array.
//      function sum(...nums) { return nums.reduce((a,b)=>a+b); }

// Q32: What is the optional chaining operator (?.)?
// A32: Safely accesses nested properties without error.
//      obj?.a?.b?.c returns undefined if any chain is null/undefined
//      instead of throwing TypeError.

// Q33: What is the difference between prefix and postfix operators?
// A33: Prefix (++a, --a): modify then return.
//      Postfix (a++, a--): return then modify.

// Q34: What are falsy values in JavaScript?
// A34: false, 0, -0, 0n (BigInt zero), "" (empty string),
//      null, undefined, NaN. Everything else is truthy.

// Q35: What is NaN and how do you check for it?
// A35: NaN = Not a Number (typeof NaN -> "number").
//      NaN != NaN (only value not equal to itself).
//      Use Number.isNaN(x) or Object.is(x, NaN) to check.

// ============================================================
// SECTION B: CODING QUESTIONS (with answers)
// ============================================================

console.log("========== CODING QUESTIONS ==========\n");

// --- Q1: What is the output? ---
console.log("--- Q1 ---");
console.log(1 + "2" + "3");    // "123"
console.log(1 + 2 + "3");      // "33"
console.log("1" + 2 + 3);      // "123"

// --- Q2: Compare outputs ---
console.log("\n--- Q2 ---");
console.log(5 == "5");     // true
console.log(5 === "5");    // false
console.log(0 == false);   // true
console.log(0 === false);  // false

// --- Q3: null/undefined comparisons ---
console.log("\n--- Q3 ---");
console.log(null == undefined);   // true
console.log(null === undefined);  // false
console.log(null == 0);           // false
console.log(null >= 0);           // true (gotcha)

// --- Q4: NaN behavior ---
console.log("\n--- Q4 ---");
console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false
console.log(Number.isNaN(NaN)); // true
console.log(isNaN("abc"));      // true (coerces)
console.log(Number.isNaN("abc")); // false (no coercion)

// --- Q5: Falsy check ---
console.log("\n--- Q5 ---");
console.log(Boolean(""));        // false
console.log(Boolean("false"));   // true (non-empty string)
console.log(Boolean(0));         // false
console.log(Boolean([]));        // true (empty array is truthy)
console.log(Boolean({}));        // true (empty object is truthy)

// --- Q6: Logical operators ---
console.log("\n--- Q6 ---");
console.log(0 && 42);          // 0
console.log(1 && 42);          // 42
console.log(0 || 42);          // 42
console.log(1 || 42);          // 1
console.log(null ?? "default"); // "default"
console.log(0 ?? "default");   // 0
console.log("" ?? "default");  // ""

// --- Q7: Increment operators ---
console.log("\n--- Q7 ---");
let a = 5;
console.log(a++);   // 5 (post: return then increment)
console.log(a);     // 6
let b = 5;
console.log(++b);   // 6 (pre: increment then return)
console.log(b);     // 6

// --- Q8: typeof quiz ---
console.log("\n--- Q8 ---");
console.log(typeof 42);            // "number"
console.log(typeof "hello");       // "string"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof null);          // "object" (bug)
console.log(typeof NaN);           // "number"
console.log(typeof function(){});  // "function"
console.log(typeof []);            // "object"
console.log(typeof {});            // "object"
console.log(typeof Symbol());      // "symbol"
console.log(typeof 42n);           // "bigint"

// --- Q9: Array comparison ---
console.log("\n--- Q9 ---");
console.log([] == []);    // false (different references)
console.log([] == 0);     // true ([] -> "" -> 0)
console.log([] == false); // true ([] -> "" -> 0 == false -> 0)
console.log([1] == 1);    // true ([1] -> "1" -> 1)
console.log([] == ![]);   // true (tricky one!)
// ![] -> false, [] == false -> "" == false -> 0 == 0 -> true

// --- Q10: Floating point ---
console.log("\n--- Q10 ---");
console.log(0.1 + 0.2);            // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);    // false
console.log((0.1 + 0.2).toFixed(1) === "0.3"); // true

// --- Q11: String comparison ---
console.log("\n--- Q11 ---");
console.log("A" > "a");    // false (65 > 97 = false)
console.log("2" > "12");   // true ("2" > "1" = true, string compare)
console.log("2" > 12);     // false ("2" coerced to 2, 2 > 12 = false)

// --- Q12: Comma operator ---
console.log("\n--- Q12 ---");
console.log((1, 2, 3));        // 3
let x = (1, 2, 3);
console.log(x);                // 3

// --- Q13: ASI gotcha ---
console.log("\n--- Q13 ---");
function asiTest() {
  return
  {
    value: 42
  };
}
console.log(asiTest()); // undefined (ASI inserts ; after return)

// --- Q14: typeof null vs null check ---
console.log("\n--- Q14 ---");
console.log(typeof null === "object"); // true (the bug)
console.log(null === null);            // true
console.log(!null);                    // true (null is falsy)

// --- Q15: Valid vs invalid identifiers ---
console.log("\n--- Q15 ---");
let $ = "dollar";
let _ = "underscore";
let _name = "valid";
let $test = "valid";
let camelCase = "valid";
let PascalCase = "valid";
console.log($, _, _name, $test, camelCase, PascalCase);

// Invalid (commented out to avoid errors):
// let 1name = "invalid";      // starts with digit
// let my-var = "invalid";     // hyphen not allowed
// let my var = "invalid";     // space not allowed
// let let = "invalid";        // reserved keyword

// --- Q16: Keyword restrictions ---
console.log("\n--- Q16 ---");
// Can't do: let var = 10; let function = () => {};
// But keywords can be property names:
const obj = { var: 10, function: "ok", let: "also ok" };
console.log(obj.var, obj.function, obj.let);

// --- Q17: const behavior ---
console.log("\n--- Q17 ---");
const PI = 3.14;
// PI = 3; // TypeError: Assignment to constant variable
const arr = [1, 2, 3];
arr.push(4); // Allowed! const prevents reassignment, not mutation
console.log(arr); // [1, 2, 3, 4]
// arr = [5, 6]; // TypeError

// --- Q18: Literal types ---
console.log("\n--- Q18 ---");
console.log(42);          // number literal
console.log(0xFF);        // hex literal -> 255
console.log(0b1010);      // binary literal -> 10
console.log(0o77);        // octal literal -> 63
console.log(1.5e3);       // scientific literal -> 1500
console.log(9007199254740991n); // BigInt literal
console.log(`Hello ${1+1}`);    // template literal

// --- Q19: delete operator ---
console.log("\n--- Q19 ---");
const person = { name: "Alice", age: 30 };
delete person.age;
console.log(person);        // { name: "Alice" }
console.log(person.age);    // undefined

// --- Q20: Spread operator ---
console.log("\n--- Q20 ---");
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const combined = [...nums1, ...nums2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// ============================================================
// ADVANCED CODING QUESTIONS
// ============================================================

// --- Q21: Predict output of expression chain ---
console.log("\n--- Q21: Expression chain ---");
console.log(1 + 2 * 3);      // 7 (multiplication first)
console.log((1 + 2) * 3);    // 9
console.log(2 ** 3 ** 2);    // 512 (right-associative: 3**2=9, 2**9=512)

// --- Q22: Nullish vs OR ---
console.log("\n--- Q22: ?? vs || ---");
console.log(0 || "default");   // "default"
console.log(0 ?? "default");   // 0
console.log("" || "default");  // "default"
console.log("" ?? "default");  // ""
console.log(false || true);    // true
console.log(false ?? true);    // false

// --- Q23: Optional chaining ---
console.log("\n--- Q23: Optional chaining ---");
const user = { profile: { name: "Alice" } };
console.log(user?.profile?.name);      // "Alice"
console.log(user?.address?.city);      // undefined (no error)
console.log(user?.address?.city?.zip); // undefined (no error)

// --- Q24: typeof vs instanceof ---
console.log("\n--- Q24 ---");
console.log(typeof "hello");              // "string"
console.log(typeof 42);                    // "number"
console.log(typeof true);                  // "boolean"
console.log(typeof null);                  // "object"
console.log(typeof undefined);             // "undefined"
console.log(typeof Symbol("id"));          // "symbol"
console.log(typeof function(){});          // "function"
console.log([] instanceof Array);          // true
console.log([] instanceof Object);         // true
console.log(new Date() instanceof Date);   // true

// --- Q25: var vs let in loops ---
console.log("\n--- Q25: var vs let ---");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 0); // 3, 3, 3
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 0); // 0, 1, 2
}
// (setTimeout is async, so this will print after sync code)

// ============================================================
// QUICK REFERENCE CARD
// ============================================================
//
// IDENTIFIERS:
//   Valid:    myVar, _private, $dollar, myVar1, _1, $$$
//   Invalid:  1var, my-var, my var, class, let, const
//
// LITERALS:
//   String:   "hello", 'hello', `hello ${x}`
//   Number:   42, 3.14, 0xFF, 0b1010, 0o77, 1.5e3
//   Boolean:  true, false
//   Null:     null
//   BigInt:   42n
//   Object:   {}, {name:"Alice"}
//   Array:    [], [1,2,3]
//   RegExp:   /abc/g
//
// KEYWORDS (Partial list):
//   var, let, const, if, else, for, while, do, switch,
//   case, break, continue, function, return, class, new,
//   this, typeof, instanceof, delete, try, catch, throw,
//   import, export, default, extends, super, yield, await,
//   async, static, get, set, of, in, void, with, debugger
//
// OPERATORS (by precedence - high to low):
//   ()              -> grouping
//   . [] ()         -> member access / call
//   ! ~ + - ++ --   -> unary
//   **              -> exponentiation (right-assoc)
//   * / %           -> multiplicative
//   + -             -> additive
//   << >> >>>       -> bitwise shift
//   < <= > >= in instanceof -> relational
//   == != === !==   -> equality
//   &               -> bitwise AND
//   ^               -> bitwise XOR
//   |               -> bitwise OR
//   &&              -> logical AND
//   ||              -> logical OR
//   ??              -> nullish coalescing
//   ?:              -> ternary
//   = += -= ...     -> assignment
//   ,               -> comma
//
// KEY GOTCHAS:
//   typeof null        -> "object" (bug)
//   NaN == NaN         -> false
//   null >= 0          -> true (but null > 0 -> false, null == 0 -> false)
//   [] == ![]          -> true
//   0.1 + 0.2 !== 0.3  -> true
//   "2" > "12"         -> true (string compare)
//   return {x:1}       -> undefined (ASI after return)
