const express = require('express');
const cors = require('cors');
const c = require('dotenv').config({path: __dirname + `/../config/.env.${process.env.NODE_ENV}`});

console.log(process.env);
console.log(process.env.MYSQL_PORT);
console.log(process.env.MYSQL_DATABASE);
console.log(process.env.MYSQL_USER);
console.log(process.env.MYSQL_PASS);
console.log(process.env.SEQUELIZE_DIALECT);

const homeRoute = require('../routes/homeRoute');
const autorRoute = require('../routes/autorRoute');
const bookRoute = require('../routes/bookRouter');

const app = express();
app.use(cors());
app.use(express.json());

//Add the routes
app.use('/home', homeRoute);
app.use('/autor', autorRoute);
app.use('/book', bookRoute);

app.use((req, res) => {
    console.log(req);
})

module.exports = app;