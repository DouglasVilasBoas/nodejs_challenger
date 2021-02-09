const Token = require('../model/Token');
const User = require('../model/User');

async function authentication(email) {
    if (!email) {
        return {
            data: {
                message: "Bad request!"
            },
            status: 400
        };
    }

    const user = await User.findAll({
        where: {
            email
        }
    });
    if (user.length == 0) {
        return {
            data: {
                message: "User not found!"
            },
            status: 404
        };
    }

    await Token.create({
        id_user: user[0].id,
        request_date: Date.now()
    });

    return {
        data: {
            data: user,
        },
        status: 200
    };
}

module.exports = { authentication };