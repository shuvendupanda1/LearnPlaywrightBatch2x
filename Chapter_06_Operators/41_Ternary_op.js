//what is ternary operator?
// The ternary operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. 
// The syntax is: condition ? value_if_true : value_if_false.


// Example:
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: "Yes"


const mark=100;
const no= mark< 90 ?"yes" :"no 123";
console.log(no);

// Another example:
let number = 5;
let result = number % 2 === 0 ? "Even" : "Odd";
console.log(result); // Output: "Odd"

//using ternary operator with nested conditions:
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(grade); // Output: "B"

// Ternary operator can also be used for more complex expressions:
let x = 10;
let y = 20;
let max = x > y ? x : y;
console.log(max); // Output: 20

// Ternary operator can also be used for function calls:
function getStatus(isOnline) {
    return isOnline ? "Online" : "Offline";
}

console.log(getStatus(true));  // Output: "Online"
console.log(getStatus(false)); // Output: "Offline"

//------------------------------------------------

let rajkumar_age1 = 18;
let rj_will_goa = rajkumar_age1 >= 18 ? "RJ will go goa" : "No Goa";
console.log(rj_will_goa)

let a = 10;
a += 10;
// a =-10; this doen't 

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "✅ PASS" : "❌ FAIL";
console.log(testResult);  // ✅ PASS


let environment = "staging";
let baseUrl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(baseUrl);

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mode");



let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms — ${slaStatus}`);

let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);


//  Nested Ternary

// Multiple Condition
let age0 = 26;
let is_pramod_goa = age0 > 26 ? "Yes, he will go" : "else he will not go";
console.log(is_pramod_goa);




let age_pramod = 45;
let is_pramod_d = age_pramod > 18 ? (age_pramod > 26 ? "Drink" : "No Drink") : "NO GOA";
console.log(is_pramod_d);


let age_shuvendu= 36;
let is_shuvendu_date= age_shuvendu  > 18 ? "drink_shuvendu" :"not_drink_shuvendu";
console.log(is_shuvendu_date);

/// --------------------
//multiple nested ternary also
let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}: ${category}`);


// ---- 


let temp = 35;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("7. Temperature:", temp, "| Feel:", feel);



//max two number
let a1 = 25, b = 40;
let max1 = a1 > b ? a : b;
console.log(max1); // 40


//Max of three numbers
let x = 10, y = 25, z = 18;
let max = x > y ? (x > z ? x : z) : (y > z ? y : z);
console.log(max); // 25
