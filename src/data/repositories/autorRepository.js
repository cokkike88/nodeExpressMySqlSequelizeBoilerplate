const db = require('../models');


let getById = async(id) => {
    try{
        const response = await db.Autor.findByPk(id);
        console.log(response);
        if (response === null){
            return {
                type: "success",
                code: 404,
                message: "Autor no found."
            }
        }
        
        return {
            type: "success",
            code: 200,
            response
        };
    }
    catch(error){
        throw error;
    }
}

let create = async(entity) => {
    try{
        await db.Autor.create(entity);
        return {
            type: "success",
            code: 200,
            message: "Autor was created succesfully"
        };       
    }
    catch(error){
        throw error;
    }
}

let update = async(entity) => {
    try{
        await db.Autor.update({'first_name': entity.first_name}, {
            where: {
                'id': entity.id
            }
        });
        return {
            type: "success",
            code: 200,
            message: "Autor was updated succesfully"
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