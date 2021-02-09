const User = require('../model/User');

async function create(obj) {
    const {
        name,
        email,
        localization,
        avatar,
        username,
        bio
    } = obj;

    if (!name || !email || !localization || !avatar || !username || !bio) {
        return {
            data: {
                message: "Bad request!"
            },
            status: 400
        };
    }

    const validation = await User.findAll({
        where: {
            email: obj.email
        }
    });
    console.log(validation);
    if (validation.length) {
        return {
            data: {
                message: "User already registered!"
            },
            status: 400
        };
    }
    const newUser = await User.create(obj);
    return {
        data: newUser,
        status: 201
    };

}

async function store(id = null) {
    if (id) {
        let result = await User.findByPk(id);
        if (!result) {
            return {
                data: {
                    message: "User not found!"
                },
                status: 404
            }
        }
        return {
            data: result,
            status: 200
        };
    }
    let result = await User.findAll();
    return {
        data: result,
        status: 200
    };
}

async function update(id, obj) {
    let user = await User.findByPk(id);
    if (!user) {
        return {
            data: {
                message: "User not found!"
            },
            status: 404
        }
    }
    if (!obj) {
        return {
            data: {
                message: "Bad request. Body is Empty"
            },
            status: 400
        }
    }
    const updatedUser = await user.update({
        name: user.name,
        email: user.email,
        localization: user.localization,
        avatar: user.avatar,
        username: user.username,
        bio: user.bio,
        ...obj
    });
    return {
        data: updatedUser,
        status: 200
    }
}

async function del(id = null) {
    if (id) {
        let user = await User.findByPk(id);
        if (!user) {
            return {
                data: {
                    message: "User not found!"
                },
                status: 404
            }
        }
        await user.destroy();
        return {
            data: {message: "Succefully deleted!"},
            status: 200
        };
    }
    
}


module.exports = {
    create,
    store,
    update,
    del
};