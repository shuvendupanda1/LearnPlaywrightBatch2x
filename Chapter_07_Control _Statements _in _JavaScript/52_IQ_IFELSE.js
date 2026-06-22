if("hello") console.log("string is truthy"); //string is truthy
if(42) console.log("number is truthy"); //number is truthy
if(42.10) console.log("number is truthy"); //number is truthy
if ({}) console.log("Empty object is truthy!");
if ([]) console.log("Empty array is truthy!");

// if ("") console.log("Won't print"); //not print any 
// if (null) console.log("Won't print");
// if (undefined) console.log("Won't print");
// if (NaN) console.log("Won't print");
// if (0) console.log("Won't print");

// ANY NUMBER = 1,2,,3,34,32,2,- TRUTH
// 0= FALSE

let name = 0;
if (name) {
    console.log("Hi");
} else {
    console.log("Bye");
}
//Bye