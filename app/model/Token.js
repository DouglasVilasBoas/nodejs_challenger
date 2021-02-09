const {
    DataTypes,
    Sequelize
} = require('sequelize');
const sequelize = require('../../config/database');
const User = require('./User');

const Token = sequelize.define('Token', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },

    request_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    freezeTableName: true
});

Token.belongsTo(User, {
    foreignKey: 'id_user'
});

module.exports = Token;