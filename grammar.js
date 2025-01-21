// ---example-1------------------
var obj = {
    a: 42,
};

console.log(obj.a); // 42
console.log(delete obj.a); // true
console.log(obj.a); // undefined

// ---example-2------------------
function vowels(str) {
    var matches;

    if (str) {
        // извлечение гласных
        matches = str.match(/[aeiou]/g);
    }

    if (matches) return matches;
}

console.log(vowels('Hello, world!')); // ['e','o','o']

// --- try-&-finally ---------
// --- example-1 ---
for (var i = 0; i < 5; i++) {
    try {
        continue;
    } finally {
        console.log(i);
    }
}

// 0, 1, 2, 3, 4

// --- example-2 ---
function foo() {
    try {
        return 42;
    } finally {
        // здесь нет 'return ..' , поэтому
        // нет переопределения
    }
}

function bar() {
    try {
        return 42;
    } finally {
        // переопределяет предыдущую
        // команду 'return 42'
        return;
    }
}

function baz() {
    try {
        return 42;
    } finally {
        // переопределяет предыдущую
        // команду'return 42'
        return 'Hello';
    }
}

console.log(foo()); // 42
console.log(bar()); // undefined
console.log(baz()); // 'Hello'

// --- command 'switch' -------------
// --- example-1 ---
var a = '42';

switch (true) {
    case a == 10: {
        console.log("10 or '10'");
        break;
    }
    case a == 42: {
        console.log("42 or '42'");
        break;
    }
    default:
}
// "42 or '42'"

// --- example-2 ---
var b = 'Hello, world!';
var c = 10;

switch (true) {
    case b || c == 10: {
        // сюда управление никогда не передается
        break;
    }
    default: {
        console.log('oops!');
    }
}

// 'oops!'
