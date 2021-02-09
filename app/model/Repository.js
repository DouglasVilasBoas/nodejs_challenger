const {
    DataTypes,
    Sequelize
} = require('sequelize');
const sequelize = require('../../config/database');
const User = require('./User');

const Repository = sequelize.define('Repository', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    public: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

Repository.belongsTo(User, {
    foreignKey: 'id_user'
});

module.exports = Repository;