let name = "John";
let surname = "Doe";

console.log("This is a script that will be run from an html file.")
console.log(name);
console.log(surname);

let age = 11;
console.log(age);

age = 54;
console.log(age);

const pi = 3.14;
// pi = 10; // uncaught typeerror: assignment to const var
console.log(pi);

console.log((3 + 2) - 76 * (1 + 1));
console.log(23 + 97); // should be 120
console.log("Expecting 120");

console.log(1 + 2 + 3 + 4 + 5 + 6);
console.log("Expecting 21");

console.log((4 + 6 + 9) / 77);
console.log("Expecting 0.24675");

let a = 10;
console.log(a);
console.log("Expecting 10");

a = 21;
console.log(a);
console.log("Expecting 21");

let b = 7 * a;
console.log(b);
console.log("Expecting 147");

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);
console.log("Expecting 0.7719");
