let a = 34;
let result = a++;
console.log(result);
console.log(a); 

// Output:
// 34
// 35

// In the above code, the value of `a` is first assigned to `result`, and then `a` is incremented by 1. Therefore, `result` gets the original value of `a` (34), and `a` becomes 35 after the post-increment operation.


let a1 = 10;
console.log(++a1 +a1); //22
console.log(a1); //11


// post increment - first assigned then increments the value 

let ab =20;
let cd = ab++;
console.log(ab++ +ab); // 22 + 21 =43
console.log(ab); // 22
console.log(cd);  // 20


// pre increment - first increment the value then assigned it 

let aa= 10;
let bb= ++aa; //aa 11 bb 11 
console.log(++aa);


/*

 Step-by-Step Execution Tracelet a = 10;The variable a starts at 10.
 let b = ++a;The prefix increment (++a) runs first. a becomes 11, and 
 that 11 is assigned to b.console.log(++a + a);JavaScript evaluates the math 
 expression from left to right:Left side (++a): The prefix increment runs again. 
 a is bumped up from 11 to 12. This side of the plus sign evaluates to 12.Right side
 
 (a): JavaScript looks up the current value of a, which is now 12.The Addition: 
 It adds the two sides together: 12 + 12 = 24

*/


let ss = 10;
console.log(ss++ + ++ss);
/*

ss = 10 
ss++ = 11 
++ss=12
sun = 10+12 = 22

*/


