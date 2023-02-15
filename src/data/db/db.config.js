const Sequelize = require('sequelize');
const config = require('../../config');

const mysql = config.db.mysql;
const sequelize = new Sequelize(
    mysql.database,
    mysql.user,
    mysql.pass,
    {
        host: mysql.host,
        dialect: mysql.dialect
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established succesfully.');
}).catch(error => {
    console.error('Unable to connect to the database: ', error);
})

module.exports = sequelize;