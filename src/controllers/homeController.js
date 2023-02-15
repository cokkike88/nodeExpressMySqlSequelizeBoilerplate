const homeService = require('../services/homeService');


const getHome = (req, res) => {
    res.send(homeService.homePage());
};


const getAbout = (req, res) => {
    res.send(homeService.aboutPage());
}


module.exports = {
    getHome,
    getAbout
};