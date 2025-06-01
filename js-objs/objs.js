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

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];
let names = [];

for (let user of users) {
    names.push(user.name);
}

console.log(names);

let jo = { name: "John", surname: "Smith", id: 1 };
let pe = { name: "Pete", surname: "Hunt", id: 2 };
let ma = { name: "Mary", surname: "Key", id: 3 };

let usrs = [jo, pe, ma];

let usersMapped = usrs.map((user) => ({ fullName: user.name + " " + user.surname, id: user.id }));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // John Smith

let j = { name: "John", age: 25 };
let p = { name: "Pete", age: 30 };
let m = { name: "Mary", age: 28 };

let arrr = [j, p, m];

arrr.sort((user, other) => user.age - other.age);

// now: [john, mary, pete]
console.log(arrr[0].name); // John
console.log(arrr[1].name); // Mary
console.log(arrr[2].name); // Pete

let jhn = { name: "John", age: 25 };
let pte = { name: "Pete", age: 30 };
let mry = { name: "Mary", age: 29 };

let arrrr = [jhn, pte, mry];

let totalAge = arrrr.reduce((total, user) => total + user.age, 0);
let avgAge = totalAge / arrrr.length;

console.log(avgAge); // (25 + 30 + 29) / 3 = 28

let usr = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

function groupById(users = []) {
    return users.reduce((usrList, usr) => {
        usrList[usr.id] = { id: usr.id, name: usr.name, age: usr.age, }
        return usrList;
    }, []);
}

let usersById = groupById(usr);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

console.log(usersById);
