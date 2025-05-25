function add7(num) {
    return +num + 7; // make num into int
}

function multiply(num1, num2) {
    return +num1 * +num2;
}

function capitalize(str) {
    capital = str.substring(0, 1).toUpperCase();
    return capital + str.substring(1, str.length);
}

function lastLetter(str) {
    return str.substring(str.length - 1, str.length);
}

for (let i = 0; i < 10; ++i) {
    console.log(add7(i));
}

for (let i = 0; i < 10; ++i) {
    console.log(multiply(i, i));
}

let str = "meow";
console.log(capitalize(str));
console.log(lastLetter(str));
