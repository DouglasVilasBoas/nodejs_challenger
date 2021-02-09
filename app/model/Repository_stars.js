const {
    DataTypes,
    Sequelize
} = require('sequelize');
const sequelize = require('../../config/database');
const User = require('./User');
const Repository = require('./Repository');

const Repository_stars = sequelize.define('Repository_stars', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    freezeTableName: true
});

Repository_stars.belongsTo(Repository, {
    foreignKey: 'id_user'
});
Repository_stars.belongsTo(Repository, {
    foreignKey: 'id_repository'
});

module.exports = Repository_stars;