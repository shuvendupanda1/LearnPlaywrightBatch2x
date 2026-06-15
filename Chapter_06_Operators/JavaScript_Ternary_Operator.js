//JavaScript Ternary Operator
let age = 19;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);

let number = 10;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result);

// JavaScript to illustrate Conditional operator
let PMarks = 50;
let res = (PMarks > 39) ? "Pass" : "Fail";
console.log(res);

//syntex of ternary operator
// condition ? expression1 : expression2

let day = 3;
let greeting = (day === 1) ? 'Start of the week' :
               (day === 2) ? 'Second day' :
               (day === 3) ? 'Midweek' :
               (day === 4) ? 'Almost weekend' :
               'Weekend';

console.log(greeting);

//Using the Ternary Operator with Function Calls
function checkEvenOdd(num) { 
    return (num % 2 === 0) ? "Even" : "Odd";
}
console.log(checkEvenOdd(10)); // Output: Even
console.log(checkEvenOdd(11)); // Output: Odd

//A Comparison of the Ternary Operator and the if...else Statement

let score = 85;
let grade = (score >= 90) ? 'A' :
            (score >= 80) ? 'B' :
            (score >= 70) ? 'C' :
            (score >= 60) ? 'D' : 'F';

console.log(grade); // Output: B

//Using the Ternary Operator for Default Values
let name = "Alice";
let greeting = name ? `Hello, ${name}!` : "Hello, Guest!";
console.log(greeting); // Output: Hello, Alice!

let userName = "";
let welcomeMessage = userName ? `Welcome, ${userName}!` : "Welcome, Guest!";
console.log(welcomeMessage); // Output: Welcome, Guest!

