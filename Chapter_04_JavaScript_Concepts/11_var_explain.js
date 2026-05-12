

var x= 10;// var is function scoped, and global scoped when declared outside a function. This x is in the global scope.
console.log("Value of x: ", x); // Output: Value of x:  10
function testVar() {
    var x= 20; // var local scope, so this x is different from the x outside the function
    console.log("Value of x inside function: ", x); // Output: Value of x inside function:  20
}
testVar();
console.log("Value of x outside function: ", x); // Output: Value of x outside function:  10