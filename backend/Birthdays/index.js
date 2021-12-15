const Router = require("express").Router;
const birthdayController = require("./controller_db");

const birthdayRouter = new Router();

birthdayRouter.get("/", birthdayController.getAll);
birthdayRouter.get("/:id", birthdayController.getById);
birthdayRouter.delete("/:id", birthdayController.delete);
birthdayRouter.post("/", birthdayController.post);
birthdayRouter.patch("/:id", birthdayController.patch);

module.exports = birthdayRouter;