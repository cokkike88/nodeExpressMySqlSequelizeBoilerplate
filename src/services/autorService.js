const autorRepository = require('../data/repositories/autorRepository');

const getAutor = async(id) => {
    try{
        const response = await autorRepository.getById(id);
        console.log('service response - ', response);
        return response;
    }
    catch(error){
        throw error;
    }
}

const createAutor = async(entity) => {
    try{
        return await autorRepository.create(entity);
    }
    catch(error){
        throw error
    }
}

const updateAutor = async(entity) => {
    try{
        return await autorRepository.update(entity);
    }
    catch(error) {
        throw error;
    }
}

module.exports = {
    getAutor,
    createAutor,
    updateAutor
}
