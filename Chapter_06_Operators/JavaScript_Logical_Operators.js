//JavaScript Logical Operators
//Logical AND(&&)
const a = true;
const b = false;
console.log(a && b); // false

//Logical OR(||)
const c = true;
const d = false;
console.log(c || d); // true

//Logical NOT(!)
const e = true;
console.log(!e); // false

//nullish Coalescing Operator(??)
const f = null;
const g = 5;
console.log(f ?? g); // 5

//??= Logical Nullish Assignment Operator
let h = null;
const i = 10;
console.log(h ??= i); // 10
//what ??= does is it assigns the value of i to h only if h is null or undefined. In this case, since h is null, it gets assigned the value of i, which is 10.

let username = "Kartik";
const defaultName = "Guest";
console.log(username ?? defaultName);

//why Kartik is printed instead of Guest? Because the nullish coalescing operator (??) only considers null and undefined as "nullish" values. Since username has a value of "Kartik", it is not null or undefined, so the operator returns the value of username instead of defaultName.