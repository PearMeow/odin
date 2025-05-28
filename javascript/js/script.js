let theName = "John";
let surname = "Doe";

console.log("This is a script that will be run from an html file.")
console.log(theName);
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

// Function: creates a new paragraph and appends it to the bottom of the HTML body.
function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
    console.log("Button clicked");
}
/*
    1. Get references to all the buttons on the page in an array format.
    2. Loop through all the buttons and add a click event listener to each one.
    When any button is pressed, the createParagraph() function will be run.
*/
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}

console.log((4 + 6 + 9) / 77);

let arr = [1, 2, 3, 4, 5];
let sumTriplEvens = arr.filter((num) => num % 2 == 0).map((num) => num * 3).reduce((total, num) => total + num, 0);
console.log(sumTriplEvens);

function camelize(str) {
    arr = str.split("-");
    newArr = arr.map((word) => word[0].toUpperCase() + word.slice(1));
    newArr[0] = newArr[0][0].toLowerCase() + newArr[0].slice(1);
    return newArr.join("");
}

if (camelize("list-style-image") == "listStyleImage") {
    console.log("They're equal");
} else {
    console.log("They are not equal");
}

function filterRange(arr = [], a = 0, b = 0) {
    return arr.filter((num) => num >= a && num <= b);
}

arr = [5, 3, 8, 1];
console.log(filterRange(arr, 1, 4));
console.log(arr);

function filterRangeInPlace(arr = [], a = 0, b = 0) {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            --i;
        }
    }
}

let anotherArr = [5, 2, 1, -10, 8];

anotherArr.sort((a, b) => b - a);

function copySorted(arr = []) {
    newArr = arr.slice(0);
    newArr.sort();
    return newArr;
}

let anArr = ["HTML", "JavaScript", "CSS"];
console.log(copySorted(anArr));

function unique(arr = []) {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        if (!res.includes(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}
