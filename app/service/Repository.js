const Repository = require('../model/Repository');
const Repository_stars = require('../model/Repository_stars');
const User = require('../model/User')

async function create(id_user, obj) {
    const {
        name,
        description,
        public,
    } = obj

    if (!id_user || !name || !description || !public) {
        return {
            data: {
                message: "Bad request!"
            },
            status: 400
        }
    }
    const user = await User.findByPk(id_user);
    if (!user) {
        return {
            data: {
                message: "User not found!"
            },
            status: 404
        }
    }
    const slug = `${user.name}-${name}`

    const newRepository = await Repository.create({
        name,
        description,
        public,
        slug,
        id_user
    });
    return {
        data: newRepository,
        status: 201
    };

}

async function store(id_user) {
    const user = await User.findByPk(id_user);
    if (!user) {
        return {
            data: {
                message: "User not found!"
            },
            status: 404
        }
    }

    let repositories = await Repository.findAll({
        where: {
            id_user
        }
    });

    const repositoriesComplete = Promise.all(repositories.map(async (repository) => {
        const stars = await Repository_stars.findAll({
            where: {
                id_repository: repository.id
            }
        });
        return {
            id: repository.id,
            name: repository.name,
            description: repository.description,
            public: repository.public,
            slug: repository.slug,
            id_user: repository.id_user,
            stars: {
                data: stars.map((star) => ({
                    id: star.id,
                    id_user: star.id_user,
                    id_repository: star.id_repository
                })),
                count: stars.length || 0
            }
        }
    }));

    return {
        data: {
            data: await repositoriesComplete,
            count: repositoriesComplete.length
        },
        status: 200
    };
}

module.exports = {
    create,
    store
};