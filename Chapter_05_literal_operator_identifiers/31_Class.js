// ES6 Class in JavaScript

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method (defined inside a class)
  greet() { //is this non static method or instance method? - this is an instance method because it operates on instances of the class (objects created from the class).
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  //methods can be static or non-static. Static methods are called on the class itself, while non-static (instance) methods are called on instances of the class.

  // Static method (called on the class itself, not instances)
  static species() {
    return "Homo sapiens";
  }
}

// Creating an instance (object) of the class
const person1 = new Person("Alice", 25);
console.log(person1.greet()); // Method call
//why const? Can we use other keywords?
// const is used because we are creating an instance of the class, and we don't want to reassign the reference to a different object.
// let or var could be used, but const is preferred for clarity and to prevent accidental reassignment.

// Calling a static method
console.log(Person.species()); // Static method call

// ------------------------------------------------
// Inheritance with `extends`
// ------------------------------------------------
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Calls the parent constructor
    this.grade = grade;
  }

  // Overriding the parent method
  greet() {
    return `${super.greet()} I am in grade ${this.grade}.`;
  }
}

const student1 = new Student("Bob", 20, "A");
console.log(student1.greet());

// ------------------------------------------------
// Getters and Setters
// ------------------------------------------------
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get area() {
    return Math.PI * this._radius * this._radius;
  }

  set radius(value) {
    if (value <= 0) {
      console.log("Radius must be positive.");
    } else {
      this._radius = value;
    }
  }

  get radius() {
    return this._radius;
  }
}

const circle = new Circle(5);
console.log(circle.area); // Getter (no parentheses)
circle.radius = 10;       // Setter
console.log(circle.area);
