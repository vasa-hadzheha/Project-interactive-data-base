const interfaceController = {
    carList: async(req, res) => {
        res.render("index")
    },

    birthdayList:async(req, res) => {
        res.render("birthdays")
    }
}

module.exports = interfaceController;