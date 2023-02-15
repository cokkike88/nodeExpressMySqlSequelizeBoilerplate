const bookRepository = require('../data/repositories/bookRepository');

const get = async(id) => {
    try{
        const response = await bookRepository.getById(id);
        console.log('service response - ', response);
        return response;
    }
    catch(error){
        throw error;
    }
}

const create = async(entity) => {
    try{
        return await bookRepository.create(entity);
    }
    catch(error){
        throw error
    }
}

const update = async(entity) => {
    try{
        return await bookRepository.update(entity);
    }
    catch(error) {
        throw error;
    }
}

module.exports = {
    get,
    create,
    update
}