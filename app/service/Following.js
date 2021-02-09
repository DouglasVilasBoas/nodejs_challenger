const Follower = require('../model/Follower');
const Following = require('../model/Following');
const User = require('../model/User');

async function create(id_user, id_following) {
    if (id_user == id_following) {
        return {
            data: {
                message: "You cant follow yourself!"
            },
            status: 400
        };
    }

    if (!id_user && !id_following) {
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

    const following = await User.findByPk(id_following);
    if (!following) {
        return {
            data: {
                message: "Followed user not found!"
            },
            status: 404
        };
    }
    const followingValidation = await Following.findAll({
        where: {
            id_user,
            id_following
        }
    });
    if (followingValidation.length) {
        return {
            data: {
                message: "User alredy followed"
            },
            status: 400
        };
    }

    await Following.create({
        id_user,
        id_following
    });

    await Follower.create({
        id_user: id_following,
        id_follower: id_user
    });
    return {
        data: {
            message: "User followed!"
        },
        status: 201
    }

}

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

    const userFollowing = await Following.findAll({
        where: {
            id_user
        }
    });
    return {
        data: {
            data: userFollowing,
            count: userFollowing.length
        },
        status: 200
    }

}

async function del(id_follow) {
    if (!id_follow) {
        return {
            data: {
                message: "Bad request!"
            },
            status: 400
        };
    }

    const follow = await Following.findByPk(id_follow);
    if (!follow) {
        return {
            data: {
                message: "Follow not found!"
            },
            status: 404
        };
    }

    const idUser = follow.id_user;
    const idFollowing = follow.id_following;

    await follow.destroy();
    const follow2 = await Follower.findAll({
        where: {
            id_user: idFollowing,
            id_follower: idUser
        }
    });
    if (!follow2[0]) {
        return {
            data: {
                message: "Follower not found!"
            },
            status: 404
        };
    }


    await follow2[0].destroy();
    return {
        data: {
            message: "Unfollow succesfuly!"
        },
        status: 200
    };
}


module.exports = {
    create,
    store,
    del
};