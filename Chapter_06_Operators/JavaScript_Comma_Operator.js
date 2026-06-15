let n1, n2
const res = (n1 = 1, n2 = 2, n1 + n2);
console.log(res);

let a = 1, b = 2, c = 3;
const result = (a += 1, b *= 2, c -= 1, a + b + c);
console.log(result);

let x1 = (1, 2, 3);
console.log(x1);

let aa = 1, bb = 2, cc = 3;
let res1 = (aa++, bb++, cc++);

console.log(res1);
console.log(aa, bb, cc);


function Func1() {
    console.log('one');
    return 'one';
}
function Func2() {
    console.log('two');
    return 'two';
}
function Func3() {
    console.log('three');
    return 'three';
}

// Three expressions are
// given at one place
let x = (Func1(), Func2(), Func3());

console.log(x);

