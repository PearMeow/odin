const myObject = {
    property: "Value!",
    otherProperty: 77,
    "obnoxious property": function() {
        // do stuff!
    }
};

// example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// example two
const playerOne = {
    name: "tim",
    marker: "X"
};

const playerTwo = {
    name: "jenn",
    marker: "O"
};

function Player(name, marker) {
    if (!new.target) {
        throw Error("You must use the new operator to call the constructor");
    }
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name)
    };
}

function Book(title, author, pages, read = false) {
    if (!new.target) {
        throw Error("New operator not used for constructor function");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let res = this.title + " by " + this.author + ", " + this.pages + ", ";
        if (this.read) {
            res += "read"
        } else {
            res += "not read yet"
        }
        return res;
    };
}

let theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295);
console.log(theHobbit.info());
