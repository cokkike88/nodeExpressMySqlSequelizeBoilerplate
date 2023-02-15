const autorService = require('../services/autorService');

const get = async (req, res) => {
    try{
        const id = req.params.id;
        const response = await autorService.getAutor(id);
        console.log('controller response - ', response);
        res.status(response.code);
        return res.send(response);
    }
    catch(error){
        throw error;
    }
}

const create = async (req, res) => {
    try{
        let entity = req.body;
        const response = await autorService.createAutor(entity);
        res.status(response.code);
        res.send(response);
    }
    catch(error) {
        throw error;
    }
}

const update = async (req, res) => {
    try{
        let entity = req.body;
        const response = await autorService.updateAutor(entity);
        res.status(response.code);
        res.send(response);
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