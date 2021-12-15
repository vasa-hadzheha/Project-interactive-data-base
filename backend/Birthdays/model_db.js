const { Sequelize, DataTypes, Model } = require("sequelize");
const options = require("../src/options");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: options.dbPathBirth
});

class Birthday extends Model{}

Birthday.init(
    {
        firstname:{
            type: DataTypes.STRING,
        },
        lastname:{
            type: DataTypes.STRING,
        },
        birthdate:{
            type: DataTypes.DATE,
        },
        age:{
            type: DataTypes.INTEGER,
        }
    },
    {
        sequelize,
        modelName: "Birthday",
        createdAt: false,
        updatedAt: false,
    }
);

module.exports = Birthday;