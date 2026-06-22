//Control Statements in JavaScript
//Approach 1: If Statement 
//syntex

//if ( condition_is_given_here ) {
    // If the condition is met, 
    //the code  will get executed.
//}

const num= 10;
if(num>0)
{
  console.log("code should be excuated");
}


// Approach 2: Using If-Else Statement

/*if (condition1) {
    // Executes when condition1 is true
    if (condition2) {
        // Executes when condition2 is true
    }
}*/

let num1 = -10;

if (num1 > 0)
    console.log("The number is positive.");
else
    console.log("The number is negative");

//Approach 3: Using Switch Statement

/*
switch (expression) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    .
    .
    case valueN:
        statementN;
        break;
    default:
        statementDefault;
}
*/

let num0 = 5;

switch (num0) {
    case 0:
        console.log("Number is zero.");
        break;
    case 1:
        console.log("Nuber is one.");
        break;
    case 2:
        console.log("Number is two.");
        break;
    default:
        console.log("Number is greater than 2.");
};

//Approach 4: Using the Ternary Operator (Conditional Operator)

//condition ? value if true : value if false

let num12 = 10;

let result = num12 >= 0 ? "Positive" : "Negative";

console.log(`The number is ${result}.`);

//Approach 5: Using For loop

/*
for(declearation/initilazation; condations; increments or decrements)
{
// code here 
}
*/


for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
};


//Approach 6: Using While loop

/*
while (condition) {
    // code block
}
*/


let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

//Approach 7: Using Do-While loop

/*
do {
    // code block
} while (condition);
*/

let i1 = 1;

do {
    console.log(i1);
    i1++;
} while (i1 <= 5);







