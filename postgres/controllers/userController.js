const { body, validationResult } = require("express-validator");
const db = require("../db/queries");

async function getUsernames(req, res) {
    let usernames;
    if (req.query.search === undefined || req.query.search === "") {
        usernames = await db.getAllUsernames();
    } else {
        usernames = await db.getUsernames(req.query.search);
    }
    res.render("index", { title: "Usernames", users: usernames });
}

async function createUsernameGet(req, res) {
    res.render("createUsername", { title: "Create new user" });
}

async function deleteUsernames(req, res) {
    await db.deleteUsernames();
    res.redirect("/");
}

async function createUsernamePost(req, res) {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
}

module.exports = {
    getUsernames,
    createUsernameGet,
    createUsernamePost,
    deleteUsernames,
};
