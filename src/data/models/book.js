
module.exports = (sequelize, DataTypes) => {
    const book = sequelize.define('book', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: DataTypes.INTEGER,
        isDelete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {});
    return book;
}