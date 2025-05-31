console.log("This is a the file for testing objects")

let user = {};
let otherUser = new Object();
user["name"] = "John";
user["surname"] = "Smith";
user["name"] = "Pete";
delete user["name"];
for (let key in user) {
    console.log(user[key]);
}

function isEmpty(obj = {}) {
    let i = 0;
    for (let key in obj) {
        ++i;
    }
    if (i > 0) return false;
    return true;
}

if (isEmpty(user)) {
    console.log("Empty");
} else {
    console.log("Not empty");
}

if (isEmpty(otherUser)) {
    console.log("Empty");
} else {
    console.log("Not empty");
}

function timesTwo(obj = {}) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

timesTwo(menu);
for (let key in menu) {
    console.log(menu[key]);
}
