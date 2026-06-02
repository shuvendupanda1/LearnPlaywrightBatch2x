//??

console.log(null >= 0); //  null == 0 or null > 0
console.log(null === 0);

// ??  Nullish
let amul = null;
let milk_required = amul ?? "nandani milk";
console.log(milk_required);

// ??  Nullish
amul = "amul";
milk_required = amul ?? "nandani milk";
console.log(milk_required);

//what is null operator
// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. It is often used to provide default values for variables that may be null or undefined.
// Example:
let name = null;
let defaultName = "Guest";
let displayName = name ?? defaultName;
console.log(displayName); // Output: "Guest"

