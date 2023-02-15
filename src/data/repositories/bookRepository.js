const db = require('../models');

const getById = async (id) => {
    try{
        const response = await db.Book.findByPk(id);
        if(response){
            return {
                type: "seccess",
                code: 200,
                response
            }
        }
        return {
            type: "error",
            code: 404,
            message: "Book no found"
        }

    }
    catch(error){
        throw error;
    }
}

let create = async(entity) => {
    try{
        await db.Book.create(entity);
        return {
            type: "seccess",
            code: 200,
            message: "Book was created succesfully"
        }

    }
    catch(error){
        throw error;
    }
}

let update = async(entity) => {
    try{
        await db.Book.update({
            'isbn': entity.isbn,
            'year': entity.year
        }, {
            where: {
                'id': entity.id
            }
        });
        return {
            type: "success",
            code: 200,
            message: "Book was updated succesfully"
        };
    }
    catch(error) {
        throw error;
    }
}

module.exports = {
    getById,
    create,
    update
}
