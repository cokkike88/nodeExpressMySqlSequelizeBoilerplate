
module.exports = {
    db: {
        mysql: {
            host: process.env.MYSQL_HOSTNAME,
            port: process.env.MYSQL_PORT,
            database: process.env.MYSQL_DATABASE,
            user: process.env.MYSQL_USER,
            pass: process.env.MYSQL_PASS,
            dialect: process.env.SEQUELIZE_DIALECT,
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        }
    }
}