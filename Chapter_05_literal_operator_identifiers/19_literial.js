

function test(){
    let a ; // declared but not initialized
    return a;
}
console.log(test()); //undefined is the default value for uninitialized variables 


let l ="";
console.log(l); // empty string

const c =null;
console.log(c); // null

let a=null;
console.log(a); // null
console.log(typeof a); // object - this is a known quirk in JavaScript where typeof null returns "object".
//what is null and undefined?
//undefined means a variable has been declared but has not yet been assigned a value.
//  It is the default value for uninitialized variables.
//null, on the other hand, is an assignment value that represents the intentional
//  absence of any object value. It is often used to indicate that a variable should
//  have no value or that an object reference is intentionally empty.

let age = "pramod"; // This is a string literal assigned to the variable 'age'.
let isStudent = true; // This is a boolean literal assigned to the variable 'isStudent'.
let pi = 3.14; // This is a numeric literal assigned to the variable 'pi'.
let name = 'Alice'; // This is a string literal assigned to the variable 'name'.
let nullValue = null; // This is a null literal assigned to the variable 'nullValue'.
let undefinedValue; // This variable is declared but not assigned, so it has the value 'undefined'.

// typeof - operatr - It will tell you what is a data type that it has. 
console.log(typeof age); // string
console.log(typeof pi); //number
console.log(typeof isStudent); //boolean 
console.log(typeof nullValue); //object - this is a known quirk in JavaScript where typeof null returns "object".
console.log(typeof undefinedValue); //undefined