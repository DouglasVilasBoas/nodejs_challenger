const {
    DataTypes,
    Sequelize
} = require('sequelize');
const sequelize = require('../../config/database');

const User = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    localization: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    freezeTableName: true
});

module.exports = User;