//var 
var test =5; 
test =10 // Re-declaration of Variables , old value is removed with replace new value 
console.log(test);


function testVar(){
    var x = 10 ; 
    console.log(x);
    console.log(test); // global scope also 
}
testVar();
//console.log(x); // x is not defined because it is a function scope they are accessing any where with the function decleared 
// it an function scope and Global scope , redeclearation is possible

var a = 5;
var a = 11;
console.log(a); 


console.log(hoistedVar); // Output: undefined 
var hoistedVar = "Hoisted!";

//the declaration part is moved to the top, but not the initialization.
var Hoisted1; // User defined 
console.log(Hoisted1); // Output : undefined 

//No Block Scope , var , let and const

if (true) {
    var blockVar = "I am not block scoped";
}
console.log(blockVar); // Output: I am not block scoped





