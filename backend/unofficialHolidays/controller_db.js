const UnofficialHoliday = require("./model_db.js");
const {Op} = require("sequelize");

const unofficialHolidayController = {
    getAll: async(req, res)=>{
        try {
            res.send( await UnofficialHoliday.findAll());
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
    getById: async(req, res)=>{
        try {
            let unofficialHoliday = await UnofficialHoliday.findByPk(parseInt(req.params.id));
            if (unofficialHoliday !== null) res.status(200).send(unofficialHoliday);
            else res.status(404).send("Not Found");
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    }
};

module.exports = unofficialHolidayController;