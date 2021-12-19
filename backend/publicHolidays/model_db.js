const { Sequelize, DataTypes, Model } = require("sequelize");
const options = require("../src/options");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: options.dbPathPublicHolidays
});

class PublicHoliday extends Model{}

PublicHoliday.init(
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
        modelName: "PublicHoliday",
        createdAt: false,
        updatedAt: false,
    }
);

module.exports = PublicHoliday;