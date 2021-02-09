const Repository = require('../model/Repository');
const User = require('../model/User');
const Repository_stars = require('../model/Repository_stars');

async function create(id_user, id_repository) {
    if (!id_user && !id_repository) {
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
    const repository = await Repository.findByPk(id_repository);
    if (!repository) {
        return {
            data: {
                message: "Repository not found!"
            },
            status: 404
        };
    }

    const newRepositoryStars = await Repository_stars.create({
        id_user,
        id_repository
    });
    return {
        data: newRepositoryStars,
        status: 201
    };
}

async function del(id) {
    if (!id) {
        return {
            data: {
                message: "Bad request!"
            },
            status: 400
        };
    }
    const repositoryStars = await Repository_stars.findByPk(id);
    if(!repositoryStars){
        return {
            data: {
                message: "Repository stars not found!"
            },
            status: 404
        };
    }

    await repositoryStars.destroy();
    return {
        data: {
            message: "Succefully deleted!"
        },
        status: 200
    };
    
}

module.exports = {
    create,
    del
};