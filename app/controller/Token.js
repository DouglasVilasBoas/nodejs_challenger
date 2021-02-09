const service = require('../service/Token');

async function authentication(req, res){
    const { email } = req.body;

    const result = await service.authentication(email);
    res.status(result.status).json(result.data);
}

module.exports = { authentication };