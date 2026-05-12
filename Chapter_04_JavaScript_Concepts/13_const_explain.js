

const BASE_URL = "https://app.thetestingacademy.com";
//BASE_URL = "https:/ / staging.thetestingacademy.com";
// TypeError: Assignment to constant variable.


//let name = "pending";
//name = "done";

{
    const name = "pending"; // block scope
    console.log("Inside block: ", name); // Output: Inside block:  pending
}
// console.log("Outside block: ", name); // Output: Outside block:  done