

function test(){
    let a ; // declared but not initialized
    return a;
}
console.log(test()); //undefined is the default value for uninitialized variables 


let l ="";
console.log(l); // empty string

const c =null;
console.log(c); // null
//what is null and undefined?
//undefined means a variable has been declared but has not yet been assigned a value.
//  It is the default value for uninitialized variables.
//null, on the other hand, is an assignment value that represents the intentional
//  absence of any object value. It is often used to indicate that a variable should
//  have no value or that an object reference is intentionally empty.