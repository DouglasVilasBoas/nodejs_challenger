const service = require('../service/Follower');

async function store(req, res){
    const { id } = req.params;

    const result = await service.store(id);
    res.status(result.status).json(result.data);
}

module.exports = { store };