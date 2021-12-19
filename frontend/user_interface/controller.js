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
    publicHolidaysList: async(req, res) =>{
        res.render("publicHolidays")
    }
}

module.exports = interfaceController;