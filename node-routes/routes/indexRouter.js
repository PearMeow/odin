const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Hello world!"));
indexRouter.get("/about", (req, res) => {
    res.send("About");
});
indexRouter.get("/contact", (req, res) => {
    res.send("Contact");
});
indexRouter.post("/contact", (req, res) => {
    res.send("Contact get");
});
// indexRouter.get("/{*splat}", (req, res) =>
//     res.send("404 Error! But not really..."),
// );

module.exports = indexRouter;
