const Sequelize = require('sequelize');
const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.config");


// models
const bookStore = require('./bookStore')(sequelize, DataTypes);
const autor = require('./autor')(sequelize, DataTypes);
const book = require('./book')(sequelize, DataTypes);



// Synck
sequelize.sync({ alter: true }).then (() => console.log('All models were synchronized successfully'));


module.exports = {
    Book: book,
    BookStore: bookStore,
    Autor: autor,
    sequelize,
    Sequelize
}