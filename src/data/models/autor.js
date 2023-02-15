
module.exports = (sequelize, DataTypes) => {
    const autor = sequelize.define('autor', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING
    }, {});
    return autor;
}