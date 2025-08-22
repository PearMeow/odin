const userController = require("../controllers/userController");
const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", userController.getUsernames);
indexRouter.get("/new", userController.createUsernameGet);
indexRouter.post("/new", userController.createUsernamePost);
indexRouter.get("/delete", userController.deleteUsernames);

module.exports = indexRouter;
