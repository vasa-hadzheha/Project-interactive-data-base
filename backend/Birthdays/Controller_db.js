const Birthday = require("./model_db.js");
const {Op} = require("sequelize");

const birthdayController = {
    getAll: async(req, res)=>{
        try {
            res.send( await Birthday.findAll());
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
    getById: async(req, res)=>{
        try {
            let birthday = await Birthday.findByPk(parseInt(req.params.id));
            if (birthday !== null) res.status(200).send(birthday);
            else res.status(404).send("Not Found");
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
    delete: async(req, res)=>{
        try {
            let deletedBirthday = await Birthday.findByPk(parseInt(req.params.id));
            if (deletedBirthday) {
                await deletedBirthday.destroy();
                res.send(deletedBirthday);
            } else res.status(404).send("Not Found");
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    }, 
    post: async(req, res)=>{
        try {
            req.body.age= parseInt(new Date().getFullYear()) - parseInt(new Date(req.body.birthdate+"T03:24:00").getFullYear());
            let newBirthday = await Birthday.create(req.body);
            res.send(newBirthday);
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
    patch: async(req, res)=>{
        try {
            let updatedBirthday = await Birthday.findByPk(parseInt(req.params.id));
            if (updatedBirthday) {
                req.body.age= parseInt(new Date().getFullYear()) - parseInt(new Date(req.body.birthdate+"T03:24:00").getFullYear());
                await updatedBirthday.update(req.body);
                res.send(updatedBirthday);
            } else res.status(404).send("Not Found");
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    }
};

module.exports = birthdayController;