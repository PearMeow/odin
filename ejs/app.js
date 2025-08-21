const express = require("express");
const path = require("node:path");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const links = [
    {
        href: "/",
        text: "Home",
    },
    {
        href: "about",
        text: "About",
    },
];

const users = ["Rose", "Cake", "Biff"];
const myName = "Meow meow";
const contactLink = "https://google.com";

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.get("/", (req, res) =>
    res.render("index", {
        links: links,
        users: users,
        contactLink: contactLink,
    }),
);
app.get("/about", (req, res) =>
    res.render("about", { name: myName, contactLink: contactLink }),
);

const PORT = 3000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Express app listening on http://127.0.0.1:${PORT}`);
});
