
module.exports = async (sequelize, DataTypes) => {
    const bookStore = sequelize.define("book_store", {
        name: DataTypes.STRING
    }, {});
    return bookStore;
}