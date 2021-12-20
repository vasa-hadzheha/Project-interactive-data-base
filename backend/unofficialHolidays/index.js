const Router = require("express").Router;
const unofficialHolidayController = require("./controller_db");

const unofficialHolidayRouter = new Router();

unofficialHolidayRouter.get("/", unofficialHolidayController.getAll);
unofficialHolidayRouter.get("/:id", unofficialHolidayController.getById);

module.exports = unofficialHolidayRouter;