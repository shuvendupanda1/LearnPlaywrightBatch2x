let x = 10; // global scope of x
x=20;// reassigning x is allowed with let
console.log("Value of x: ", x); // Output: Value of x:  20

//let x= 30; // SyntaxError: Identifier 'x' has already been declared, re-declaring with let is not allowed

function testLet() { // function declaration or function definition
    let x = 10; //local scope of x within the function
    console.log("Value of x: ", x); // Output: Value of x:  10
    x = 20; // reassigning x within the function is allowed
    console.log("Value of x inside function: ", x); // Output: Value of x inside function:  20
    if (true) {
        let x = 30; // block scope of x, different from the global and function-scoped x
        console.log("Value of x inside if block: ", x); // Output: Value of x inside if block:  30
    }
}

testLet();
console.log("Value of x outside function: ", x); // Output: Value of x outside function:  20
