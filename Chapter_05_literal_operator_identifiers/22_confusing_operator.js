// ============================================================
// 22 - Confusing Comparisons in JavaScript & Interview Q&A
// ============================================================

// -------------------------------------------------------
// 1. == vs === (Abstract vs Strict Equality)
// -------------------------------------------------------
console.log("--- == vs ===");
console.log(5 == "5");   // true  (type coercion)
console.log(5 === "5");  // false (no coercion)
console.log(0 == false); // true
console.log(0 === false);// false
console.log("" == false);// true
console.log("" === false);// false
console.log(null == undefined); // true
console.log(null === undefined);// false

// -------------------------------------------------------
// 2. NaN is NOT equal to itself
// -------------------------------------------------------
console.log("\n--- NaN ---");
console.log(NaN == NaN);  // false
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true (only reliable way)

// -------------------------------------------------------
// 3. Array comparison (reference vs value)
// -------------------------------------------------------
console.log("\n--- Arrays ---");
console.log([] == []);   // false (different references)
console.log([] === []);  // false
console.log([] == 0);    // true  ([] -> "" -> 0)
console.log([1] == 1);   // true  ([1] -> "1" -> 1)
console.log([1,2] == "1,2"); // true

// -------------------------------------------------------
// 4. String comparison nuances
// -------------------------------------------------------
console.log("\n--- Strings ---");
console.log("A" > "a");    // false (ASCII: 65 > 97)
console.log("2" > "12");   // true  (string compare: "2" > "1")
console.log("2" > 12);     // false ("2" coerces to 2)
console.log("abc" < "abd");// true

// -------------------------------------------------------
// 5. The typeof trap
// -------------------------------------------------------
console.log("\n--- typeof ---");
console.log(typeof null);          // "object" (JS bug, legacy)
console.log(typeof NaN);           // "number"
console.log(typeof undefined);     // "undefined"
console.log(typeof []);            // "object"
console.log(typeof {});            // "object"
console.log(Array.isArray([]));    // true (correct check)

// -------------------------------------------------------
// 6. Falsy values
// -------------------------------------------------------
console.log("\n--- Falsy ---");
// All falsy: false, 0, -0, 0n, "", null, undefined, NaN
console.log(Boolean(""));     // false
console.log(Boolean(0));      // false
console.log(Boolean(null));   // false
console.log(Boolean(NaN));    // false
console.log(Boolean("false"));// true  (non-empty string!)

// -------------------------------------------------------
// 7. + operator vs unary plus
// -------------------------------------------------------
console.log("\n--- + operator ---");
console.log(1 + "2" + "3");  // "123"
console.log(1 + 2 + "3");    // "33"  (left to right: 1+2=3, then 3+"3"="33")
console.log("1" + 2 + 3);    // "123"
console.log(+"123");         // 123 (unary plus converts)
console.log(+"abc");         // NaN

// -------------------------------------------------------
// 8. Subtraction with non-numbers
// -------------------------------------------------------
console.log("\n--- Subtraction ---");
console.log("10" - 5);    // 5   (string coerced to number)
console.log("abc" - 5);   // NaN
console.log("10" - "5");  // 5
console.log(null - 1);    // -1  (null -> 0)
console.log(undefined - 1); // NaN

// -------------------------------------------------------
// 9. Boolean coercion with && and ||
// -------------------------------------------------------
console.log("\n--- && and || ---");
console.log("cat" && "dog");   // "dog" (both truthy -> last)
console.log("cat" || "dog");   // "cat" (first truthy -> short)
console.log(0 && "cat");       // 0     (0 is falsy)
console.log(0 || "cat");       // "cat"
console.log(null || undefined || 0 || "fallback"); // "fallback"
console.log(!"cat");           // false
console.log(!!"cat");          // true

// -------------------------------------------------------
// 10. parseInt vs Number vs +
// -------------------------------------------------------
console.log("\n--- Number conversion ---");
console.log(parseInt("123abc")); // 123
console.log(Number("123abc"));   // NaN
console.log(+"123abc");          // NaN
console.log(parseInt("  123 ")); // 123
console.log(parseInt("0xFF"));   // 255 (hex)

// -------------------------------------------------------
// 11. Floating point precision
// -------------------------------------------------------
console.log("\n--- Floating point ---");
console.log(0.1 + 0.2);            // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);    // false
console.log((0.1 + 0.2).toFixed(1) === "0.3"); // true (workaround)
console.log(0.3 - 0.2 === 0.1);    // false
console.log(1 - 0.9 === 0.1);      // false

// -------------------------------------------------------
// 12. The comma operator
// -------------------------------------------------------
console.log("\n--- Comma operator ---");
console.log((1, 2, 3));       // 3 (returns last)
let a = (1, 2, 3);
console.log(a);               // 3

// -------------------------------------------------------
// 13. Automatic Semicolon Insertion (ASI) gotchas
// -------------------------------------------------------
console.log("\n--- ASI gotchas ---");
function asiTest() {
  return
  {
    value: 42
  };
}
console.log(asiTest()); // undefined (ASI inserts ; after return)

// -------------------------------------------------------
// 14. Assignment vs equality in conditions
// -------------------------------------------------------
console.log("\n--- Assignment in condition ---");
let x = 0;
if (x = 10) {  // = not ===, this ASSIGNS 10 to x
  console.log("x is", x); // runs because 10 is truthy
}

// -------------------------------------------------------
// 15. Closure in loops (var vs let)
// -------------------------------------------------------
console.log("\n--- Closure in loop ---");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 0); // 3, 3, 3
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 0); // 0, 1, 2
}

// -------------------------------------------------------
// 16. undefined vs null
// -------------------------------------------------------
console.log("\n--- undefined vs null ---");
console.log(undefined == null);  // true
console.log(undefined === null); // false
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object"
console.log(JSON.stringify({a: undefined, b: null})); // "{"b":null}"

// -------------------------------------------------------
// 17. ++ operator precedence
// -------------------------------------------------------
console.log("\n--- Increment ---");
let b = 5;
console.log(b++); // 5 (post-increment: returns then adds)
console.log(b);   // 6
let c = 5;
console.log(++c); // 6 (pre-increment: adds then returns)

// -------------------------------------------------------
// 18. String to number shortcuts
// -------------------------------------------------------
console.log("\n--- Unary + and - ---");
console.log(+"100");     // 100
console.log(-"100");     // -100
console.log(+"0xFF");    // 255
console.log(+"1e2");     // 100
console.log(+"Infinity");// Infinity

// -------------------------------------------------------
// 19. {} ambiguity (block vs object)
// -------------------------------------------------------
console.log("\n--- {} ambiguity ---");
console.log({} + []);   // "[object Object]" (or 0 in some engines)
// Run in console:
// {} + {}  -> NaN or "[object Object][object Object]"
console.log([] + {});   // "[object Object]"

// -------------------------------------------------------
// 20. in operator vs hasOwnProperty
// -------------------------------------------------------
console.log("\n--- in operator ---");
const obj = { a: 1 };
console.log("a" in obj);              // true
console.log("toString" in obj);       // true (prototype chain)
console.log(obj.hasOwnProperty("a")); // true
console.log(obj.hasOwnProperty("toString")); // false

// ============================================================
// INTERVIEW QUESTIONS & ANSWERS
// ============================================================

// Q1: What is the difference between == and ===?
// A1: == allows type coercion; === checks both value AND type.
//     5 == "5" -> true, 5 === "5" -> false

// Q2: Why is NaN !== NaN?
// A2: NaN is the only value not equal to itself per IEEE 754 spec.
//     Use Number.isNaN() or Object.is(NaN, NaN) to check.

// Q3: What is the output of 0.1 + 0.2 === 0.3?
// A3: false. Floating point arithmetic causes precision loss.
//     0.1 + 0.2 = 0.30000000000000004

// Q4: What does typeof null return?
// A4: "object". This is a well-known bug from JS's first version.

// Q5: What is the output of [] == ![]?
// A5: true.
//     ![] -> false ([] is truthy)
//     [] == false -> "" == false -> 0 == 0 -> true

// Q6: What is the output of 1 + "2" + "3" vs 1 + 2 + "3"?
// A6: "123" (left to right: "12" + "3") vs "33" (3 + "3")
//     Because + is left-associative.

// Q7: What does +"123" or +"abc" do?
// A7: +"123" -> 123 (converts to number), +"abc" -> NaN

// Q8: Explain "2" > "12"
// A8: String comparison compares character by character (ASCII).
//     "2" (50) > "1" (49), so true. Numeric would be false.

// Q9: What is the difference between undefined and null?
// A9: undefined means a variable is declared but not assigned.
//     null is an intentional absence of value (assigned).

// Q10: What does (1, 2, 3) evaluate to?
// A10: 3. The comma operator returns the last operand.

// Q11: Why does function returning {value: 42} give undefined?
// A11: ASI inserts a semicolon after return, making it return undefined.
//      The object literal becomes unreachable code.

// Q12: What's the difference between parseInt("123abc") and Number("123abc")?
// A12: parseInt parses until invalid char -> 123.
//      Number requires full valid number -> NaN.

// Q13: What is the output of typeof NaN, typeof undefined, typeof []?
// A13: "number", "undefined", "object"

// Q14: What does 0 || "fallback" evaluate to?
// A14: "fallback". 0 is falsy, so || moves to the next operand.

// Q15: What's the difference between var and let in loops?
// A15: var is function-scoped (one i for all iterations).
//      let is block-scoped (new i per iteration).
//      In setTimeout: var prints final value, let prints each value.
