const service = require('../service/Following');

async function create(req, res) {
    const {
        id_following,
        id_user
    } = req.body;

    const result = await service.create(id_user, id_following);
    res.status(result.status).json(result.data);
}

async function store(req, res) {
    const {
        id
    } = req.params;

    const result = await service.store(id);
    res.status(result.status).json(result.data);
}

async function del(req, res) {
    const {
        id
    } = req.params;

    const result = await service.del(id);
    res.status(result.status).json(result.data);
}

module.exports = {
    create,
    store,
    del
};