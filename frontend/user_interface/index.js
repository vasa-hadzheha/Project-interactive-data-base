const Router = require("express").Router;
const interfaceController = require("./controller");

const inerfaceRouter = new Router();

inerfaceRouter.get("/", interfaceController.mainPage);
inerfaceRouter.get("/cars", interfaceController.carList);
inerfaceRouter.get("/birthdays", interfaceController.birthdayList);
inerfaceRouter.get("/publicHolidays", interfaceController.publicHolidaysList);
inerfaceRouter.get("/unofficialHolidays", interfaceController.unofficialHolidays);

module.exports = inerfaceRouter;