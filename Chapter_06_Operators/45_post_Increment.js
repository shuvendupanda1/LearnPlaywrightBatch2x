
let a_post = 10;
let b = a_post++;
// post ++ -> first assign the value and then increase.
console.log(a_post);
console.log(b);

// Output:
// 11
// 10

// In the above code, the value of `a_post` is first assigned to `b`, and then `a_post` is incremented by 1. Therefore, `b` gets the original value of `a_post` (10), and `a_post` becomes 11 after the post-increment operation.

