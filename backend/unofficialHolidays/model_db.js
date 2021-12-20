const { Sequelize, DataTypes, Model } = require("sequelize");
const options = require("../src/options");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: options.dbPathUnofficialHolidays
});

class UnofficialHoliday extends Model{}

UnofficialHoliday.init(
    {
        holiday:{
            type: DataTypes.STRING,
        },
        date:{
            type: DataTypes.DATE,
        },
    },
    {
        sequelize,
        modelName: "UnofficialHoliday",
        createdAt: false,
        updatedAt: false,
    }
);

module.exports = UnofficialHoliday;