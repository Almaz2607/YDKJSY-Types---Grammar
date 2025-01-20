// -1- explicit (явное) & implicit(неявное) преобразования
var a = 2;

var b = a + ''; // implicit transform

var c = String(a); // explicit transform

// -2- ToString ------------------
var a2 = 1.07 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000;

console.log(a2.toString()); // '1.07e+21'

var b2 = [1, 2, 3];
console.log(b2.toString()); // '1,2,3'

// -3- JSON -----------------
console.log(JSON.stringify(42)); // '42'
console.log(JSON.stringify('42')); // "'42'"
console.log(JSON.stringify(null)); // 'null'
console.log(JSON.stringify(true)); // 'true'

// небезопасные значения для JSON.stringify
console.log(JSON.stringify(undefined)); // undefined
console.log(JSON.stringify(function () {})); // undefined

console.log(JSON.stringify([1, undefined, function () {}, 4])); // '[1, null, null, 4]'

console.log(JSON.stringify({ a: 2, b: function () {} })); // '{"a": 2}'

// --- define toJSON method for transforming JSON ---
var o = {};

var a3 = {
    b: 42,
    c: o,
    d: function () {},
};

o.e = a3;
// определить нестандартную сериализацию значения JSON
a3.toJSON = function () {
    return { b: this.b };
};

console.log(JSON.stringify(a3)); // '{"b": 42}'

// --- the 2nd argument when calling JSON.stringify() ---
// --- 2nd argument replacer (заменитель) ---
var b3 = {
    a: 42,
    c: '42',
    d: [1, 2, 3],
};

console.log(JSON.stringify(b3, ['a', 'c'])); // '{"a": 42, "c": "42"}'
console.log(
    JSON.stringify(b3, function (k, v) {
        if (k !== 'c') return v;
    })
); // '{"a": 42, "d": [1,2,3]}

// --- the 3rd argument when calling JSON.stringify() ---
// --- 3rd argument - indent (отступ) ---
var c3 = {
    a: 42,
    b: '42',
    d: [1, 2, 3],
};

console.log(JSON.stringify(c3, null, 3));
// "{
//     "a": 42,
//     "b": "42",
//     "d": [
//        1,
//        2,
//        3
//     ]
// }"

// -4- --- ToNumber ---
var a4 = {
    valueOf: function () {
        return '42';
    },
};

var b4 = {
    toString: function () {
        return '42';
    },
};

var c4 = [4, 2];
console.log(
    c4.toString(function () {
        return this.join('');
    })
); // '42'

console.log(Number(a4)); // 42
console.log(Number(b4)); // 42
console.log(Number('')); // 0
console.log(Number([])); // 0
console.log(Number(['abc'])); // NaN

// -5- --- ToBoolean ---
var a5 = new Boolean(false);
var b5 = new Number(0);
var c5 = new String('');

var d5 = Boolean(a5 && b5 && c5);
console.log(d5); // true

var f = 5;
var q = '3.14';
console.log(f + +q); // 8.14

var z = 'hello world';

// --- operator ~ --------------------
console.log(~z.indexOf('lo')); // -4 <-- truthy!

if (~z.indexOf('lo')) {
    console.log('Yes, find');
} // 'Yes, find'

console.log(~z.indexOf('ol')); // 0 <-- falsy!

if (!~z.indexOf('ol')) {
    console.log('Not find');
} // 'Not find'

// --- operator ~~ --------------------
console.log(Math.floor(-49.6)); // -50
console.log(~~-49.6); // 49

console.log(parseInt(Infinity, 19)); // 18

// --- implicit conversion: -------------
// -6- --- String <--> Number ---
// --- example-1 ---
var a6 = [1, 2];
var b6 = [3, 4];

console.log(a6 + b6); // "1, 23, 4"
// --- example-2 ---
var c6 = {
    valueOf: function () {
        return 42;
    },
    toString: function () {
        return 4;
    },
};

console.log(c6 + ''); // '42'
console.log(String(c6)); // '4'

// --- example-3 ---
var d6 = '3.14';
var e6 = d6 - 0;
console.log(e6); // 3.14

// --- example-4 ---
var f6 = [4];
var g6 = [1];
console.log(f6 - g6); // 3

// -7- --- Boolean --> Number ---
// --- example-1 ---
function onlyOne(a, b, c) {
    return !!((a && !b && !c) || (!a && b && !c) || (!a && !b && c));
}

var a7 = true;
var b7 = false;

console.log(onlyOne(a7, b7, b7)); // true
console.log(onlyOne(b7, a7, b7)); // true
console.log(onlyOne(a7, b7, a7)); // false

// --- example-2 ---
function onlyOne2() {
    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {
        // ложные значения пропускаются. Эквивалентно
        // их интерпретации как 0, но избегает NaN.
        if (arguments[i]) {
            sum += arguments[i];
        }
    }

    return sum == 1;
}

var d7 = true;
var e7 = false;

console.log(onlyOne2(e7, d7)); // true
console.log(onlyOne2(e7, d7, e7, e7, e7)); // true

console.log(onlyOne2(e7, e7)); // false
console.log(onlyOne2(e7, d7, e7, e7, e7, d7)); // false

// -8- ---  *--> Boolean ---
var a8 = 42;
var b8 = null;
var c8 = 'foo';

console.log(a8 && (b8 || c8)); // 'foo'

// -9- --- comparison of false values ---
console.log('0' == undefined); // false
console.log('0' == null); // false
console.log('0' == false); // true oops!
console.log('0' == ''); // false
console.log('0' == 0); // true
console.log('0' == NaN); // false

console.log(false == null); // false
console.log(false == undefined); // false
console.log(false == NaN); // false
console.log(false == 0); // true oops!
console.log(false == ''); // true oops!
console.log(false == []); // true oops!
console.log(false == {}); // false

console.log('' == null); // false
console.log('' == undefined); // false
console.log('' == NaN); // false
console.log('' == 0); // true oops!
console.log('' == []); // true oops!
console.log('' == {}); // false

console.log(0 == null); // false
console.log(0 == undefined); // false
console.log(0 == NaN); // false
console.log(0 == []); // true oops!
console.log(0 == {}); // false

console.log([] == ![]); // true
console.log(2 == [2]); // true
console.log('' == [null]); //true
