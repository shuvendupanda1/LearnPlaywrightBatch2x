// Lets take some variables
x = 10
y = 20

x = y ;
console.log(x); //x =20 y= 20
console.log(y);

x += y ;
console.log(x);//x=30 y = 20
console.log(y);

x -= y ;
console.log(x);//x=10 y = 20
console.log(y);

x *= y ;
console.log(x);//x=200 y = 20
console.log(y);

x /= y ;
console.log(x);//x=10 y = 20
console.log(y);

//Addition Assignment Operator(+=)
let a = 2;
const b = 3;

// Expected output: 2
console.log(a);

// Expected output: 5
console.log(a += b );

//Subtraction Assignment Operator(-=)

let a = 4;

// Expected output 3
console.log(a -= 1);
//Multiplication Assignment Operator(*=)

let a = 4;

// Expected output 8
console.log(a *= 2);


//Division Assignment Operator(/=)

let a = 10;
const b = 2;
console.log(a /= b);

//Remainder Assignment Operator(%=)

let a = 5;
const b = 2;
console.log(a %= b);

//Exponentiation Assignment Operator(**=)

let a = 2;
const b = 3;
console.log(a **= b);

//Left Shift Assignment Operator(<<=)
let a = 5;
console.log(a <<= 1);

//Right Shift Assignment Operator(>>=)
let a = 5;
console.log(a >>= 1);

//Unsigned Right Shift Assignment Operator(>>>=)
let a = 5;
console.log(a >>>= 1);

//Bitwise AND Assignment Operator(&=)
let a = 5;
const b = 3;
console.log(a &= b);

//Bitwise XOR Assignment Operator(^=)
let a = 5;
const b = 3;
console.log(a ^= b);

//Bitwise OR Assignment Operator(|=)
let a = 5;
const b = 3;
console.log(a |= b);

//Logical AND Assignment Operator(&&=)
let a = true;
const b = false;
console.log(a &&= b);

//Logical OR Assignment Operator(||=)
let a = true;
const b = false;
console.log(a ||= b);

//Nullish coalescing Assignment Operator(??=)

let a = null;
const b = 5;
console.log(a ??= b);





