// types of JS -----------------
console.log(typeof undefined === 'undefined'); // true
console.log(typeof null === 'object'); // true
console.log(typeof true === 'boolean'); // true
console.log(typeof '5' === 'string'); // true
console.log(typeof 5 === 'number'); // true
console.log(typeof { id: 10 } === 'object'); // true
// --- add to ES6 ---
console.log(typeof Symbol() === 'symbol'); // true

var a1 = null;
console.log(!a1 && typeof a1 === 'object'); // true

// функция - вызываемый объект в JS ----------
console.log(typeof function () {}); // function

function a(b, c) {
    /*..*/
}

console.log(a.length); // 2

// undefined и необъявленные переменные --------
var a2;

console.log(typeof a2); // undefined
console.log(typeof b2); // undefined
