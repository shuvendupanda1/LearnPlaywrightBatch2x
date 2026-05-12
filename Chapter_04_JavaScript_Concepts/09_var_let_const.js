var v= 10;
let l= 20;
const c= 30;

console.log("var v: ", v);
console.log("let l: ", l);
console.log("const c: ", c);

var browser= "chrome";
var browser= "firefox"; // re-declaring allows
browser= "edge"; // reassigning allows
console.log("browser: ", browser);
// Output: browser:  edge

//for loop and function scope
for(var i=0; i<3; i++){
    console.log("Inside loop: ", i);
}
console.log("Outside loop: ", i); // var is function scoped, so i is accessible here
// Output: Outside loop:  3




