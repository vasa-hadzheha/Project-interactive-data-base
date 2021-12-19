const PublicHoliday = require("./model_db.js");
const {Op} = require("sequelize");

const publicHolidayController = {
    getAll: async(req, res)=>{
        try {
            res.send( await PublicHoliday.findAll());
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
    getById: async(req, res)=>{
        try {
            let publicHoliday = await PublicHoliday.findByPk(parseInt(req.params.id));
            if (publicHoliday !== null) res.status(200).send(publicHoliday);
            else res.status(404).send("Not Found");
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    }
};

module.exports = publicHolidayController;