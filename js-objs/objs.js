const myObject = {
    property: "Value!",
    otherProperty: 77,
    "obnoxious property": function() {
        // do stuff!
    }
};

// // example one
// const playerOneName = "tim";
// const playerTwoName = "jenn";
// const playerOneMarker = "X";
// const playerTwoMarker = "O";

// // example two
// const playerOne = {
//     name: "tim",
//     marker: "X"
// };

// const playerTwo = {
//     name: "jenn",
//     marker: "O"
// };

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

function Player(name, marker) {
    if (!new.target) {
        throw Error("You must use the new operator to call the constructor");
    }
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function() {
    console.log(`My marker is ${this.marker}`)
}

function Person(name) {
    if (!new.target) {
        throw Error("You must use the new operator to call the constructor")
    }
    this.name = name
}

Person.prototype.sayName = function() {
    console.log(`Hello! I'm ${this.name}`);
}

Object.getPrototypeOf(Player.prototype); // returns Object.prototype

Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");

player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();

let head = {
    glasses: 1
};

let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000
};

Object.setPrototypeOf(pockets, bed)
Object.setPrototypeOf(bed, table)
Object.setPrototypeOf(table, head)


