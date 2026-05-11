// ============================================
// JavaScript Naming Conventions (Cases)
// ============================================

// ----- 1. camelCase (most common for variables & functions) -----
var firstName = "shuvendu";
var lastName = "panda";
var userAge = 25;
var isLoggedIn = true;
var totalPrice = 99.99;

console.log("--- camelCase ---");
console.log(firstName);    // shuvendu
console.log(lastName);     // panda
console.log(userAge);      // 25
console.log(isLoggedIn);   // true
console.log(totalPrice);   // 99.99


// ----- 2. snake_case (common in databases, Python style) -----
var first_name = "shuvendu";
var last_name = "panda";
var user_age = 25;
var is_logged_in = true;
var total_price = 99.99;

console.log("--- snake_case ---");
console.log(first_name);   // shuvendu
console.log(last_name);    // panda
console.log(user_age);     // 25
console.log(is_logged_in); // true
console.log(total_price);  // 99.99


// ----- 3. PascalCase (used for classes & constructors) -----
var FirstName = "shuvendu";
var LastName = "panda";
var UserAge = 25;
var IsLoggedIn = true;
var TotalPrice = 99.99;

console.log("--- PascalCase ---");
console.log(FirstName);    // shuvendu
console.log(LastName);     // panda
console.log(UserAge);      // 25
console.log(IsLoggedIn);   // true
console.log(TotalPrice);   // 99.99


// ----- 4. UPPER_CASE (used for constants) -----
var MAX_SIZE = 100;
var API_KEY = "abc123";
var PI_VALUE = 3.1416;
var BASE_URL = "https://example.com";
var TIMEOUT_MS = 5000;

console.log("--- UPPER_CASE ---");
console.log(MAX_SIZE);     // 100
console.log(API_KEY);      // abc123
console.log(PI_VALUE);     // 3.1416
console.log(BASE_URL);     // https://example.com
console.log(TIMEOUT_MS);   // 5000


// ----- 5. Starting with underscore (private convention) -----
var _age = 25;
var _privateVar = "hidden";
var _temp = 30;

console.log("--- Underscore Prefix ---");
console.log(_age);         // 25
console.log(_privateVar);  // hidden
console.log(_temp);        // 30


// ----- 6. Starting with dollar sign (jQuery convention) -----
var $salary = 50000;
var $element = "div";
var $result = "success";

console.log("--- Dollar Sign Prefix ---");
console.log($salary);      // 50000
console.log($element);     // div
console.log($result);      // success


// ----- 7. Invalid (commented out) -----
// var 1stName = "shuvendu";     // cannot start with digit
// var my-name = "shuvendu";     // hyphen not allowed
// var my name = "shuvendu";     // space not allowed

console.log("--- Done ---");