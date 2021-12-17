const interfaceController = {
    mainPage: async(req, res) =>{
        res.render("index")
    },

    carList: async(req, res) => {
        res.render("cars")
    },

    birthdayList:async(req, res) => {
        res.render("birthdays")
    },

    nationalGeographic:async(req, res) => {
        res.render("National Geographic Channel")
    }
}

module.exports = interfaceController;