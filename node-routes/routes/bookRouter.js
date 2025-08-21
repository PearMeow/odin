const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("book"));
bookRouter.get("/books/:bookId", (req, res) => {
    console.log(req.params);
    res.send("book bookid get");
});
bookRouter.get("/books/:bookId/reserve", (req, res) => {
    console.log(req.params);
    res.send("book bookid reserve");
});
bookRouter.post("/books/:bookId/reserve", (req, res) => {
    console.log(req.params);
    res.send("book bookid reserve post");
});

module.exports = bookRouter;
