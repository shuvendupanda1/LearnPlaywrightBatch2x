//template literals are a powerful feature in JavaScript that allow for 
// easier string interpolation and multi-line strings. They are defined using
//  backticks (`) instead of single or double quotes. Template literals can contain placeholders,
//  which are indicated by the ${expression} syntax. The expression inside the placeholder is evaluated 
// and its result is included in the final string. This makes it much easier to create complex strings 
// without having to concatenate multiple parts together.

//example of template literals:
const name = 'Alice';
const age = 30;
// Using template literals for string interpolation:
//backticks and ${} for interpolation
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // "Hello, my name is Alice and I am 30 years old."
//example of multi-line strings using template literals:
const multiLineString = `This is a multi-line string.
It can span multiple lines without needing special characters.`;
console.log(multiLineString);
/* Output:
This is a multi-line string.
It can span multiple lines without needing special characters.
*/

//backticks single and double quotes can be used inside template literals without needing to escape them:
//example of using single and double quotes inside template literals:
const quote = `She said, "It's a beautiful day!"`;
console.log(quote); // "She said, "It's a beautiful day!""
//template literals can also be used to create complex strings with embedded expressions:
const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // "The sum of 5 and 10 is 15."
//template literals can also be used to create tagged templates, which allow you to customize the processing of the template string. A tagged template is a function that is called with the template string and its expressions as arguments. This can be useful for things like internationalization, where you want to format strings differently based on the user's locale.
//example of tagged templates:
function tag(strings, ...values) {
    console.log(strings); // ["Hello, ", " and ", "!"]
    console.log(values); // [Alice, 30]
}
tag`Hello, ${name} and ${age}!`;
/* Output:
["Hello, ", " and ", "!"]
["Alice", 30]
*/

// In this example, the tag function is called with the template string "Hello, ${name} and ${age}!" and the values of name and age. The strings parameter contains the literal parts of the template, while the values parameter contains the evaluated expressions. You can then use these parameters to customize how the final string is constructed.
// Overall, template literals provide a more convenient and readable way to work with strings in JavaScript, making it easier to create complex strings and handle multi-line text.
// They are widely used in modern JavaScript development and are an essential part of the language.
// any example of using template literals in a real-world scenario:
//example of using template literals in a real-world scenario:
const user = { // user object with properties
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com'
}
const userInfo = `User Information:
Name: ${user.firstName} ${user.lastName}
Email: ${user.email}`;
console.log(userInfo);
/* Output:
User Information:
Name: John Doe
Email: john.doe@example.com
*/

// using templater literals to create a dynamic HTML template:
const product = {
    name: 'Laptop',
    price: 999.99,
    description: 'A high-performance laptop for all your computing needs.'
}
const productTemplate = `
    <div class="product">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price.toFixed(2)}</p>
    </div>
`;
console.log(productTemplate);

//create and api payload using backticks and template literals:
const apiPayload = {
    username: 'johndoe',
    password: 'securepassword123'
}
const payloadString = `{
    "username": "${apiPayload.username}",
    "password": "${apiPayload.password}"
}`;
console.log(payloadString);

