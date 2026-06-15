//java script operator

//JavaScript Relational Operators
let a = 10;
let b = 20;

console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true
console.log(a == b); // false
console.log(a != b); // true

// Comparing different data types
console.log(5 == "5"); // true (type coercion occurs)
console.log(5 === "5"); // false (strict equality, no type coercion)
console.log(0 == false); // true (type coercion occurs)
console.log(0 === false); // false (strict equality, no type coercion)


//in operator can also be used to check if an index exists in an array
const arr = [1, 2, 3, 4, 5];
// true (index 0 exists in the array)
console.log(0 in arr);
// false (index 10 doesn't exist in the array)
console.log(10 in arr);


//Using in with Objects
const Data = {
    name: "Rahul",
    age: 21,
    city: "Noida"
};

// true ("name" property exists in the object)
console.log("name" in Data);

// false ("gender" property doesn't exist in the object)
console.log("address" in Data);

//JavaScript instanceof Operator

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
}

const person1 = new Person("Rahul", 21);
const person2 = new Person("Priya", 25);

console.log(person1 instanceof Person); // true
console.log(person2 instanceof Person); // true


let languages = ["HTML", "CSS", "JavaScript"];

console.log(languages instanceof Array);
console.log(languages instanceof Object);
console.log(languages instanceof String);
console.log(languages instanceof Number);


//object 
let myString = new String();
let myDate = new Date();

console.log(myString instanceof Object);
console.log(myString instanceof Date);
console.log(myString instanceof String);
console.log(myDate instanceof Date);
console.log(myDate instanceof Object);
console.log(myDate instanceof String);
