// ---values in JavaScript---------
// -1- --- arrays ----
var a = [1, '2', [5]];

console.log(a.length); // 3
console.log(a[0]); // 1
console.log(a[2][0]); // 5

// --- sparse array ---
var a1 = [];

a1[0] = 2;
a1[2] = '7';
console.log(a1[1]); // undefined
console.log(a1.length); // 3

// -2- --- подобие массива ----
function foo() {
    //var arr = Array.prototype.slice.call(arguments);
    // --- in ES6 ---
    var arr = Array.from(arguments);
    arr.push('bam');
    console.log(arr);
}

foo('bar', 'baz'); // ['bar', 'baz', 'bam']

// -3- --- string ---
var a2 = 'foo';
var b2 = ['f', 'o', 'o'];

console.log(a2.length); // 3
console.log(b2.length); // 3

a.indexOf('o'); // 1
b2.indexOf('o'); // 1

var c2 = a2.concat('bar');
var d2 = b2.concat(['b', 'a', 'r']);

console.log(c2); // 'foobar'
console.log(d2); // ['f','o','o','b','a','r']

console.log(a2 === c2); // false
console.log(b2 === d2); // false

console.log(a2); // 'foo'
console.log(b2); // ['f','o','o']

console.log(a2[0]); // 'f'
console.log(b2[0]); // 'f'

// -4- --- number ---
// -4-1-
var a4 = 5e10;
console.log(a4); // 50000000000
console.log(a4.toExponential()); // '5e+10

var b4 = a4 * a4;
console.log(b4); // '2.5e+21'

var c4 = 1 / a4;
console.log(c4); // 2e-11

// -4-2-
var e4 = 42.59;
// --- toFixed() ---
console.log(e4.toFixed(0)); // '43'
console.log(e4.toFixed(1)); // '42.6'
console.log(e4.toFixed(2)); // '42.59'
console.log(e4.toFixed(3)); // '42.590'

console.log((42).toFixed(3)); // '42.000'
console.log((0.42).toFixed(3)); // '0.420'
console.log((42).toFixed(3)); // '42.000'

// --- toPrecision() ---
console.log(e4.toPrecision(1)); // '4e+1'
console.log(e4.toPrecision(2)); // '43'
console.log(e4.toPrecision(3)); // '42.6'
console.log(e4.toPrecision(4)); // '42.59

// --- integer check ES6 ---
console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(42.0)); // true
console.log(Number.isInteger(42.3)); // false

// -5- --- value NaN (Not a Number) ---
var a5 = 7 / 'foo';
var b5 = 'foo';

console.log(Number.isNaN(a5)); // true
console.log(Number.isNaN(b5)); // false
