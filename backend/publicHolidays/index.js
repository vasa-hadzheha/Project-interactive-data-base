const Router = require("express").Router;
const publicHolidayController = require("./controller_db");

const publicHolidayRouter = new Router();

publicHolidayRouter.get("/", publicHolidayController.getAll);
publicHolidayRouter.get("/:id", publicHolidayController.getById);

module.exports = publicHolidayRouter;