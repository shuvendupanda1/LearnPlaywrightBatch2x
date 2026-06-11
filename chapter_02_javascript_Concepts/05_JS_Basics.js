var x = 5;
console.log(x);
x=20;
console.log(x);
// var is used to declare a variable. It can be reassigned and redeclared.
var x=30;
console.log(x)
//------------------------------------
let y = 10;
console.log(y);
y=15;
// let is used to declare a variable. It can be reassigned but cannot be redeclared in the same scope.
console.log(y);
// let y = 25; // This will cause an error because 'y' has already been declared in the same scope.
let Z = 30;  //variable name or identifiere most be different
console.log(Z);
//------------------------------------
const PI = 3.14;
console.log(PI);
// const is used to declare a constant variable. It cannot be reassigned or redeclared.

{
    var s = "shuvendu";
    console.log(s); // var is function-scoped, so 's' is accessible within this block and outside of it.
}
console.log(s); // var is function-scoped, so 's' is accessible outside the block.

{
    let t = "shuvendu";
    console.log(t); // let is block-scoped, so 't' is only accessible within this block.
}
// console.log(t); // This will cause an error because 't' is not accessible outside the block.

{
    const u = "shuvendu";
    console.log(u); // const is block-scoped, so 'u' is only accessible within this block.
}
// console.log(u); // This will cause an error because 'u' is not accessible outside the block.