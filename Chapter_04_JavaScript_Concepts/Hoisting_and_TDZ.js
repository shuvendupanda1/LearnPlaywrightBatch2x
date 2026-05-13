// =============================================
// Hoisting & Temporal Dead Zone (TDZ)
// var  vs  let  vs  const
// =============================================

// ---------- WHAT IS HOISTING? ----------
// JavaScript moves all declarations to the top of their scope.
// Only the declaration is hoisted, NOT the initialization.

// ---------- WHAT IS TDZ? ----------
// The time between entering scope and actual declaration
// where the variable exists but CANNOT be accessed.
// Accessing it throws ReferenceError.

// =============================================
// 1. var — HOISTED + INITIALIZED with undefined
// =============================================

console.log("\n========== VAR ==========");

// --- Hoisting Example ---
console.log("--- var Hoisting ---");
console.log(myVar); // undefined (NOT an error) — hoisted with default value
var myVar = 10;
console.log(myVar); // 10

// What actually happens behind the scenes:
// var myVar;           // hoisted & set to undefined
// console.log(myVar);  // undefined
// myVar = 10;
// console.log(myVar);  // 10

// --- var in function scope (Hoisting) ---
function varHoisting() {
  console.log(hoistedVar); // undefined (hoisted inside function too)
  var hoistedVar = "I am var";
  console.log(hoistedVar); // "I am var"
}
varHoisting();

// --- var does NOT have TDZ ---
console.log("--- var does NOT have TDZ ---");
{
  console.log(noTdz); // undefined (accessed before declaration — no error)
  var noTdz = "still works";
}
console.log(noTdz); // "still works" — var ignores block scope

// =============================================
// 2. let — HOISTED but NOT initialized (TDZ)
// =============================================

console.log("\n========== LET ==========");

// --- TDZ Example (access before declaration) ---
console.log("--- let TDZ ---");
// console.log(myLet);  // ❌ ReferenceError: Cannot access before initialization
let myLet = 20;
console.log(myLet);    // 20

// Explanation:
// myLet is hoisted BUT stays in Temporal Dead Zone
// from the start of scope until the 'let' line is reached.

// --- let with block scope (TDZ in action) ---
console.log("--- let Block Scope & TDZ ---");
function letTdzExample() {
  // console.log(blockLet); // ❌ ReferenceError — TDZ active here
  let blockLet = "inside function";
  console.log(blockLet); // "inside function"
}
letTdzExample();

// --- let in a block shows TDZ clearly ---
{
  // console.log(x); // ❌ ReferenceError — TDZ
  let x = 10;
  console.log(x); // 10
}
// console.log(x); // ❌ ReferenceError — x is not defined (block scoped)

// --- typeof in TDZ ---
// console.log(typeof myLetVar); // ❌ ReferenceError (TDZ), NOT "undefined"
let myLetVar = "check";

// =============================================
// 3. const — same as let (HOISTED + TDZ)
// =============================================

console.log("\n========== CONST ==========");

// --- TDZ Example ---
console.log("--- const TDZ ---");
// console.log(myConst); // ❌ ReferenceError: Cannot access before initialization
const myConst = 30;
console.log(myConst);   // 30

// const MUST be initialized at declaration.
// const myConst;        // ❌ SyntaxError: Missing initializer

// --- const block scope + TDZ ---
console.log("--- const Block Scope & TDZ ---");
function constTdzExample() {
  // console.log(PI); // ❌ ReferenceError — TDZ
  const PI = 3.14;
  console.log(PI); // 3.14
  // PI = 3.15;     // ❌ TypeError: Assignment to constant variable
}
constTdzExample();

// --- const with objects (reference cannot change, properties can) ---
const user = { name: "Alice" };
user.name = "Bob";  // ✅ allowed — we modify the object, not the reference
console.log(user.name); // "Bob"
// user = { name: "Charlie" }; // ❌ TypeError: Assignment to constant variable

// =============================================
// BONUS: Classic TDZ Gotcha with let/const
// =============================================

console.log("\n========== BONUS GOTCHA ==========");

var greeting = "Hello from global";

function tdzGotcha() {
  console.log(greeting); // ❌ ReferenceError (NOT "Hello from global")
  let greeting = "Hello from local";
}
// tdzGotcha(); // Uncomment to see the TDZ error

// Because let/const are hoisted in the function scope,
// the local 'greeting' shadows the global one.
// Accessing it before the let line triggers TDZ error.

// =============================================
// SUMMARY TABLE (console output)
// =============================================

console.log("\n========== SUMMARY ==========");
console.log("Feature     | Hoisted? | Initialized? | TDZ? | Reassign? | Scope");
console.log("------------|----------|--------------|------|-----------|--------");
console.log("var         | Yes      | undefined    | No   | Yes       | Function");
console.log("let         | Yes      | NOT (TDZ)    | Yes  | Yes       | Block");
console.log("const       | Yes      | NOT (TDZ)    | Yes  | No        | Block");
