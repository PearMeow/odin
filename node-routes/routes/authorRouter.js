const { Router } = require("express");

const authorRouter = Router();

authorRouter.get("/", (req, res) => res.send("All authors"));
authorRouter.get("/:authorId", (req, res) => {
    const { authorId } = req.params;
    res.send(`authorId is ${authorId}`);
});

module.exports = authorRouter;
