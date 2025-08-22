// controllers/usersController.js
const usersStorage = require("../storages/usersStorage");

// This just shows the new stuff we're adding to the existing contents
const { body, validationResult, matchedData } = require("express-validator");

exports.usersListGet = (req, res) => {
    res.render("index", {
        title: "User list",
        users: usersStorage.getUsers(),
    });
};

exports.usersCreateGet = (req, res) => {
    res.render("createUser", {
        title: "Create user",
    });
};

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";

const validateUser = [
    body("firstName")
        .trim()
        .isAlpha()
        .withMessage(`First name ${alphaErr}`)
        .isLength({ min: 1, max: 10 })
        .withMessage(`First name ${lengthErr}`)
        .escape(),
    body("lastName")
        .trim()
        .isAlpha()
        .withMessage(`Last name ${alphaErr}`)
        .isLength({ min: 1, max: 10 })
        .withMessage(`Last name ${lengthErr}`)
        .escape(),
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage(
            "Email is not formatted correctly. Example of a correct format: johndoe@gmail.com",
        )
        .escape(),
    body("age")
        .isInt({ min: 18, max: 120 })
        .withMessage("Age must be a number greater than 18 and less than 120")
        .optional({ values: "falsy" }),
    body("bio")
        .isLength({ min: 1, max: 120 })
        .withMessage("Bio must be less than 200 characters long")
        .escape()
        .optional({ values: "falsy" }),
];

// We can pass an entire array of middleware validations to our controller.
exports.usersCreatePost = [
    validateUser,
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("createUser", {
                title: "Create user",
                errors: errors.array(),
            });
        }
        const { firstName, lastName, email, age, bio } = matchedData(req);
        usersStorage.addUser({ firstName, lastName, email, age, bio });
        res.redirect("/");
    },
];

exports.usersUpdateGet = (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    res.render("updateUser", {
        title: "Update user",
        user: user,
    });
};

exports.usersUpdatePost = [
    validateUser,
    (req, res) => {
        const user = usersStorage.getUser(req.params.id);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("updateUser", {
                title: "Update user",
                user: user,
                errors: errors.array(),
            });
        }
        const { firstName, lastName, email, age, bio } = matchedData(req);
        usersStorage.updateUser(req.params.id, {
            firstName,
            lastName,
            email,
            age,
            bio,
        });
        res.redirect("/");
    },
];

// Tell the server to delete a matching user, if any. Otherwise, respond with an error.
exports.usersDeletePost = (req, res) => {
    usersStorage.deleteUser(req.params.id);
    res.redirect("/");
};

exports.usersSearchGet = (req, res) => {
    res.render("searchUser", {
        title: "Search",
    });
};

exports.usersSearchGetResults = (req, res) => {
    console.log(req.query);
    const user = usersStorage.searchUser(
        req.query.firstName + " " + req.query.lastName,
        req.query.email,
    );
    res.render("searchResults", {
        title: "Search Results",
        user: user,
    });
};
