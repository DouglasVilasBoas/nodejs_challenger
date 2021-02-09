const service = require('../service/User');


async function create(req, res) {
    const {
        body
    } = req;
    const result = await service.create(body);
    res.status(result.status).json(result.data);
}

async function store(req, res) {
    const {
        id
    } = req.params;
    const result = await service.store(id);
    res.status(result.status).json(result.data);
}

async function update(req, res) {
    const {
        id
    } = req.params;
    const {
        body
    } = req;
    const result = await service.update(id, body);
    res.status(result.status).json(result.data);
}

async function del(req, res) {
    const { id } = req.params
    const result = await service.del(id);
    res.status(result.status).json(result.data);
}

module.exports = {
    create,
    store,
    update,
    del
};