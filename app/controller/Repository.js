const service = require('../service/Repository');

async function create(req, res){
    const { id_user, repository } = req.body;

    const result = await service.create(id_user, repository);
    res.status(result.status).json(result.data);
}

async function store(req, res){
    const { id } = req.params;

    const result = await service.store(id);
    res.status(result.status).json(result.data);
}


module.exports = { create, store };