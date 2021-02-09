const service = require('../service/Repository_stars');

async function create(req, res) {
    const {
        id_repository,
        id_user
    } = req.body;

    const result = await service.create(id_user, id_repository);
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
    del
};