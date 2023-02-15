const bookService = require('../services/bookService');

const get = async (req, res) => {
    try{
        const id = req.params.id;
        const response = await bookService.get(id);
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
        const response = await bookService.create(entity);
        res.status(response.code);
        res.send(response);
    }
    catch(error){
        throw error;
    }
}

const update = async (req, res) => {
    try{
        let entity = req.body;
        const response = await bookService.update(entity);
        res.status(response.code);
        res.send(response);
    }
    catch(error){
        throw error;
    }
}

module.exports = {
    get,
    create,
    update
}