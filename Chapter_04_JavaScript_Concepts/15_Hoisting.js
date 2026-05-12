console.log(greeting);
var greeting = "Hello, World!";
// Output: undefined
//console.log(greeting); // Output: Hello, World!


console.log(a);
let a =10; // ReferenceError: Cannot access 'a' before initialization
//console.log("a: ", a); // Output: a: 10

console.log(c);
const c= 30; // ReferenceError: Cannot access 'c' before initialization

function test(){ // function decelarition or function definition
    console.log(test);
    let test = "Test function";
    //console.log("Inside function: ", test);
}
test(); // calling function test, Output: [Function: test] and then ReferenceError: Cannot access 'test' before initialization
