const Follower = require('../model/Follower');
const User = require('../model/User');

async function store(id_user) {
    if (!id_user) {
        return {
            data: {
                message: "Bad request!"
            },
            status: 400
        };
    }

    const user = await User.findByPk(id_user);
    if (!user) {
        return {
            data: {
                message: "User not found!"
            },
            status: 404
        };
    }

    const userFollower = await Follower.findAll({
        where: {
            id_user
        }
    });
    return {
        data: {
            data: userFollower,
            count: userFollower.length
        },
        status: 200
    };
}

module.exports = { store }; 