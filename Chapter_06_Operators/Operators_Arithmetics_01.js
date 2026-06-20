// ============================================================
// 📌 JAVASCRIPT OPERATORS — COMPLETE REFERENCE WITH EXAMPLES
// ============================================================
// Operators are special symbols/functions used to perform
// operations on operands (values/variables).
// ============================================================

// ============================================================
// 1️⃣ ARITHMETIC OPERATORS
// ============================================================
// Used to perform mathematical operations on numbers.

let a = 10, b = 3;

console.log("--- ARITHMETIC OPERATORS ---");
console.log("Addition (+):        ", a + b);  // 13
console.log("Subtraction (-):     ", a - b);  // 7
console.log("Multiplication (*): ", a * b);   // 30
console.log("Division (/):       ", a / b);   // 3.333...
console.log("Modulus (%):        ", a % b);   // 1
console.log("Exponentiation (**):", a ** b);  // 1000

// Increment (++) & Decrement (--)
let x = 5;
console.log("Pre-Increment (++x): ", ++x);   // 6
console.log("Post-Increment (x++):", x++);   // 6 (returns old)
console.log("After Post-Increment:", x);     // 7
console.log("Pre-Decrement (--x): ", --x);   // 6
console.log("Post-Decrement (x--):", x--);   // 6 (returns old)
console.log("After Post-Decrement:", x);     // 5

// 💡 Interview Q: What is the difference between ++x and x++?
// ✅ Answer: ++x (pre-increment) increments first then returns the value.
//    x++ (post-increment) returns the old value first then increments.

// 💡 Interview Q: What is the output of "5" + 3 and "5" - 3?
// ✅ Answer: "5" + 3 = "53" (string concatenation).
//    "5" - 3 = 2 (type coercion to number for subtraction).

// 💡 Coding Test: Write a function to swap two numbers without temp variable.
function swap(a, b) {
    a = a + b;   
    b = a - b;   
    a = a - b;   
    return [a, b];
}
console.log("Swap(5,10):", swap(5, 10)); // [10, 5]

// ============================================================
// 2️⃣ ASSIGNMENT OPERATORS
// ============================================================
// Used to assign values to variables.

console.log("\n--- ASSIGNMENT OPERATORS ---");
let n = 10;
console.log("Assignment (=):           n = 10     =>", n);
n += 5;   console.log("Addition (+=):           n += 5     =>", n); // 15
n -= 3;   console.log("Subtraction (-=):        n -= 3     =>", n); // 12
n *= 2;   console.log("Multiplication (*=):     n *= 2     =>", n); // 24
n /= 4;   console.log("Division (/=):           n /= 4     =>", n); // 6
n %= 4;   console.log("Modulus (%=):            n %= 4     =>", n); // 2
n **= 3;  console.log("Exponentiation (**=):    n **= 3    =>", n); // 8

let bit = 5;
bit <<= 1; console.log("Left Shift (<<=):        bit <<= 1  =>", bit); // 10
bit >>= 1; console.log("Right Shift (>>=):       bit >>= 1  =>", bit); // 5
bit >>>= 1; console.log("Zero-fill Right (>>>=): bit >>>= 1 =>", bit); // 2

let bw = 6;
bw &= 3;  console.log("Bitwise AND (&=):        bw &= 3    =>", bw); // 2
bw |= 1;  console.log("Bitwise OR (|=):         bw |= 1    =>", bw); // 3
bw ^= 1;  console.log("Bitwise XOR (^=):        bw ^= 1    =>", bw); // 2

// Logical assignment (ES2021)
let u1 = null, u2 = true;
u1 ||= "default"; console.log("Logical OR (||=):        u1 ||= 'default' =>", u1);
u2 &&= false;     console.log("Logical AND (&&=):       u2 &&= false     =>", u2);
let u3 = null;
u3 ??= "fallback"; console.log("Nullish (??=):           u3 ??='fallback' =>", u3);

// 💡 Interview Q: What is the difference between ||= and ??= ?
// ✅ Answer: ||= assigns if the value is falsy (false, 0, "", null, undefined, NaN).
//    ??= assigns only if the value is null or undefined.

// ============================================================
// 3️⃣ COMPARISON OPERATORS
// ============================================================
// Used to compare two values; returns boolean.

console.log("\n--- COMPARISON OPERATORS ---");
console.log("Equal (==):           5 == '5'   =>", 5 == '5');   // true
console.log("Strict Equal (===):   5 === '5'  =>", 5 === '5');  // false
console.log("Not Equal (!=):       5 != '5'   =>", 5 != '5');   // false
console.log("Strict Not (!==):     5 !== '5'  =>", 5 !== '5');  // true
console.log("Greater (>):          10 > 5     =>", 10 > 5);     // true
console.log("Less (<):             10 < 5     =>", 10 < 5);     // false
console.log("Greater Equal (>=):   10 >= 10   =>", 10 >= 10);   // true
console.log("Less Equal (<=):      10 <= 5    =>", 10 <= 5);    // false

// 💡 Interview Q: What is the difference between == and === ?
// ✅ Answer: == does type coercion before comparing; === compares both value AND type
//    without coercion. Always prefer === to avoid unexpected type conversions.

// 💡 Coding Test: What is the output of [] == ![] ?
// ✅ Answer: true. Explanation: ![] is false, [] == false becomes "" == false
//    which becomes 0 == 0 → true. (a famous JavaScript quirk)
console.log("[] == ![]            =>", [] == ![]); // true

// ============================================================
// 4️⃣ LOGICAL OPERATORS
// ============================================================
// Used to combine boolean values or perform logical operations.

console.log("\n--- LOGICAL OPERATORS ---");
let t = true, f = false;
console.log("AND (&&):      true  && false =>", t && f);  // false
console.log("OR  (||):      true  || false =>", t || f);  // true
console.log("NOT (!):            !true      =>", !t);      // false

// Short-circuit evaluation
console.log("Short-circuit &&:", 0 && console.log("won't run"));  // 0
console.log("Short-circuit ||:", "" || "default");                // "default"

// Nullish Coalescing (??)
let val = null;
console.log("Nullish (??):   null ?? 'fallback' =>", val ?? "fallback"); // fallback

// 💡 Interview Q: What is the difference between || and ?? ?
// ✅ Answer: || returns the RHS for ALL falsy values (0, "", false, null, undefined, NaN).
//    ?? returns RHS only for null/undefined. Use ?? when 0 or "" is a valid value.

// 💡 Coding Test: FizzBuzz using logical operators
for (let i = 1; i <= 15; i++) {
    let out = (i % 3 === 0 && i % 5 === 0) ? "FizzBuzz" :
              (i % 3 === 0) ? "Fizz" :
              (i % 5 === 0) ? "Buzz" : i;
    if (i === 1) process.stdout.write("FizzBuzz(1-15): ");
    process.stdout.write(out + (i < 15 ? ", " : "\n"));
}

// ============================================================
// 5️⃣ BITWISE OPERATORS
// ============================================================
// Operate on 32-bit signed integer representations.

console.log("\n--- BITWISE OPERATORS ---");
let p = 5, q = 3; // 5=0101, 3=0011
console.log("AND (&):     5 & 3  =>", p & q);  // 1 (0001)
console.log("OR  (|):     5 | 3  =>", p | q);  // 7 (0111)
console.log("XOR (^):     5 ^ 3  =>", p ^ q);  // 6 (0110)
console.log("NOT (~):         ~5  =>", ~p);     // -6
console.log("Left Shift (<<):  5<<1 =>", p << 1); // 10
console.log("Right Shift (>>): 5>>1 =>", p >> 1); // 2
console.log("Zero-fill Right (>>>): 5>>>1 =>", p >>> 1); // 2

// 💡 Interview Q: How do you check if a number is odd/even without modulus?
// ✅ Answer: Use bitwise AND: (n & 1) === 0 → even, else odd.
//    Example: 5 & 1 = 1 (odd), 4 & 1 = 0 (even).

// 💡 Coding Test: Count set bits in a number
function countSetBits(n) {
    let count = 0;
    while (n) { count += n & 1; n >>>= 1; }
    return count;
}
console.log("Set bits in 13 (1101):", countSetBits(13)); // 3

// ============================================================
// 6️⃣ STRING OPERATORS
// ============================================================
// Used for string concatenation.

console.log("\n--- STRING OPERATORS ---");
console.log("Concatenation (+):   'Hello' + ' ' + 'World' =>", "Hello" + " " + "World");
let str = "Foo";
str += "Bar";
console.log("Concatenation (+=):  str += 'Bar'            =>", str); // "FooBar"

// 💡 Interview Q: What is "5" + 3 and "5" - 3?
// ✅ Answer: "5" + 3 → "53" (string wins for +). "5" - 3 → 2
//    (- operator forces numeric conversion).

// ============================================================
// 7️⃣ TERNARY / CONDITIONAL OPERATOR (? :)
// ============================================================
// Shorthand for if-else; syntax: condition ? expr1 : expr2

console.log("\n--- TERNARY OPERATOR ---");
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log("Ternary: age >= 18 ? 'Adult' : 'Minor' =>", status);

// Nested ternary
let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" : "D";
console.log("Nested Ternary grade(85):", grade);

// 💡 Coding Test: Check palindrome using ternary
function isPalindrome(s) {
    return s === s.split('').reverse().join('') ? "Palindrome" : "Not Palindrome";
}
console.log("isPalindrome('radar'):", isPalindrome("radar"));
console.log("isPalindrome('hello'):", isPalindrome("hello"));

// ============================================================
// 8️⃣ COMMA OPERATOR  (,)
// ============================================================
// Evaluates each operand left-to-right and returns the last one.

console.log("\n--- COMMA OPERATOR ---");
let commaResult = (1 + 2, 3 + 4, 5 + 6);
console.log("Comma: (1+2, 3+4, 5+6) =>", commaResult); // 11

// Used in for loops
let j;
for (let i = 0, j = 10; i <= j; i++, j--) {
    if (i === 0) console.log("Comma in for loop: i=", i, ", j=", j);
}

// 💡 Interview Q: What does the comma operator return?
// ✅ Answer: It evaluates all expressions but returns ONLY the last one.

// ============================================================
// 9️⃣ UNARY OPERATORS
// ============================================================
// Operate on a single operand.

console.log("\n--- UNARY OPERATORS ---");

// typeof: returns data type as string
console.log("typeof 42:              ", typeof 42);
console.log("typeof 'hello':         ", typeof "hello");
console.log("typeof true:            ", typeof true);
console.log("typeof undefined:       ", typeof undefined);
console.log("typeof null:            ", typeof null);     // "object" (JS bug)
console.log("typeof function(){}:    ", typeof function(){});
console.log("typeof Symbol():        ", typeof Symbol());
console.log("typeof BigInt(1):       ", typeof BigInt(1));

// delete: removes property from object
let obj = { name: "Alice", age: 30 };
console.log("delete obj.age:", delete obj.age); // true
console.log("obj after delete:", obj);

// void: evaluates expression and returns undefined
console.log("void(0):", void(0)); // undefined

// Unary plus (+) / minus (-)
console.log("+'123':      ", +"123");       // 123 (string → number)
console.log("-'123':      ", -"123");       // -123
console.log("+true:       ", +true);        // 1
console.log("-'hello':    ", -"hello");     // NaN

// 💡 Interview Q: Why is typeof null === "object"?
// ✅ Answer: It's a well-known bug from JS's first implementation.
//    The type tag for objects was 0, and null's type tag was also 0.

// 💡 Coding Test: Implement a function to check data types
function getType(val) {
    return Object.prototype.toString.call(val).slice(8, -1);
}
console.log("getType(null):", getType(null));      // Null
console.log("getType([]):", getType([]));           // Array
console.log("getType(new Date()):", getType(new Date())); // Date

// ============================================================
// 🔟 RELATIONAL OPERATORS
// ============================================================
// Check relationships between values/objects.

console.log("\n--- RELATIONAL OPERATORS ---");

// in: checks if property exists in object
const car = { brand: "Toyota", model: "Camry" };
console.log("'brand' in car:", "brand" in car);   // true
console.log("'price' in car:", "price" in car);   // false

// in with arrays
const arr = [10, 20, 30];
console.log("0 in arr:", 0 in arr);    // true
console.log("3 in arr:", 3 in arr);    // false

// instanceof: checks if object is instance of a class
console.log("arr instanceof Array:", arr instanceof Array);   // true
console.log("arr instanceof Object:", arr instanceof Object);  // true

// 💡 Interview Q: What is the difference between typeof and instanceof?
// ✅ Answer: typeof returns a string of the primitive type.
//    instanceof checks the prototype chain to see if an object is an instance of a class.

// ============================================================
// 1️⃣1️⃣ BigInt OPERATORS
// ============================================================
// BigInt supports all arithmetic operators except unary plus.

console.log("\n--- BigInt OPERATORS ---");
const bigA = 9007199254740991n;
const bigB = 1n;
console.log("BigInt + :", bigA + bigB);
console.log("BigInt * :", bigA * 2n);
console.log("BigInt % :", bigA % 10n);

// 💡 Interview Q: Can you mix BigInt and regular Number?
// ✅ Answer: No! Mixing BigInt and Number throws TypeError.
//    You must explicitly convert them. BigInt cannot use Math methods either.

// ============================================================
// 1️⃣2️⃣ OPTIONAL CHAINING OPERATOR (?.)
// ============================================================
// Safely access nested properties without throwing error on null/undefined.

console.log("\n--- OPTIONAL CHAINING (?.) ---");
const user = { profile: { name: "John" } };
console.log("user?.profile?.name :", user?.profile?.name);   // John
console.log("user?.address?.city:", user?.address?.city);    // undefined (no error)

const arr2 = null;
console.log("arr2?.[0]:", arr2?.[0]); // undefined

// 💡 Interview Q: How does optional chaining prevent errors?
// ✅ Answer: ?. short-circuits and returns undefined if the operand before ?.
//    is null or undefined, instead of throwing a TypeError.

// ============================================================
// 🧪 COMPREHENSIVE CODING TESTS (Interview Questions)
// ============================================================

console.log("\n========== CODING TESTS ==========");

// 🧪 Q1: What is the output of the following?
console.log("\n--- Q1: Output Prediction ---");
console.log(1 + "2" + "2");         // "122"
console.log(1 + +"2" + "2");        // "32"
console.log(1 + -"1" + "2");        // "02"
console.log("A" - "B" + "2");       // "NaN2"
console.log("A" - "B" + 2);         // NaN

// 🧪 Q2: Implement a calculator using switch with operators
function calculator(op, x, y) {
    switch (op) {
        case '+': return x + y;
        case '-': return x - y;
        case '*': return x * y;
        case '/': return y !== 0 ? x / y : "Cannot divide by zero";
        case '%': return x % y;
        case '**': return x ** y;
        default: return "Invalid operator";
    }
}
console.log("\n--- Q2: Calculator ---");
console.log("10 + 3 =", calculator('+', 10, 3));
console.log("10 ** 3 =", calculator('**', 10, 3));

// 🧪 Q3: Check if a number is power of two (bitwise)
function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}
console.log("\n--- Q3: Power of Two ---");
console.log("8 is power of 2?", isPowerOfTwo(8));   // true
console.log("10 is power of 2?", isPowerOfTwo(10)); // false

// 🧪 Q4: Flatten nested array using comma operator trick
// 💡 Actually, this is just a demonstration of expression evaluation
function evaluateExpressions(a, b, c) {
    return (a++, b += 2, a + b + c);
}
console.log("\n--- Q4: Comma Operator ---");
console.log("evaluateExpressions(1,2,3):", evaluateExpressions(1, 2, 3));

// 🧪 Q5: Implement a simple FizzBuzz without if-else (using logical operators)
console.log("\n--- Q5: FizzBuzz (alternative) ---");
for (let i = 1; i <= 15; i++) {
    let fb = (i % 3 === 0 && "Fizz" || "") + (i % 5 === 0 && "Buzz" || "") || i;
    if (i === 1) process.stdout.write("FizzBuzz(1-15): ");
    process.stdout.write(fb + (i < 15 ? ", " : "\n"));
}

// 🧪 Q6: What is the value of !! ("false") ?
console.log("\n--- Q6: Truthy/Falsy ---");
console.log("!!('false'):", !!("false")); // true (non-empty string is truthy)
console.log("!!(false):", !!(false));     // false
console.log("!!(0):", !!(0));             // false
console.log("!!(''):", !!(""));           // false
console.log("!!(null):", !!(null));       // false
console.log("!!(undefined):", !!(undefined)); // false
console.log("!!(NaN):", !!(NaN));         // false

// 🧪 Q7: Chaining comparison — Is (a < b < c) valid?
let m = 5, n2 = 10, o = 15;
console.log("\n--- Q7: Chained Comparison ---");
console.log("5 < 10 < 15:", m < n2 < o);  // true (5<10=true=1, 1<15=true)
// But this is misleading! Always use && for chaining:
console.log("Correct: 5 < 10 && 10 < 15:", m < n2 && n2 < o); // true

// 🧪 Q8: Swap using destructuring (modern approach)
let x1 = 1, y1 = 2;
[x1, y1] = [y1, x1];
console.log("\n--- Q8: Swap with destructuring ---");
console.log("After swap: x1 =", x1, ", y1 =", y1); // 2, 1

// 🧪 Q9: Remove falsy values from array
const mixed = [0, 1, false, 2, "", 3, null, undefined, NaN, 4];
const truthy = mixed.filter(Boolean);
console.log("\n--- Q9: Remove falsy values ---");
console.log("Before:", mixed);
console.log("After: ", truthy);

// 🧪 Q10: Operator precedence puzzle
console.log("\n--- Q10: Operator Precedence ---");
console.log("3 + 4 * 5 =", 3 + 4 * 5);    // 23 (not 35)
console.log("(3 + 4) * 5 =", (3 + 4) * 5); // 35
console.log("2 ** 3 ** 2 =", 2 ** 3 ** 2); // 512 (right-associative)
console.log("(2 ** 3) ** 2 =", (2 ** 3) ** 2); // 64

// 💡 Interview Q: Which operator has the lowest precedence?
// ✅ Answer: The comma (,) operator has the lowest precedence.

// 💡 Interview Q: Which operator has the highest precedence?
// ✅ Answer: Grouping () has the highest precedence, followed by member access (.).

console.log("\n✅ All JavaScript operators covered with examples & coding tests!");
