const {
    DataTypes,
    Sequelize
} = require('sequelize');
const sequelize = require('../../config/database');
const User = require('./User');


const Follower = sequelize.define('Follower', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }

}, {
    freezeTableName: true
});

Follower.belongsTo(User, {
    foreignKey: 'id_user'
});
Follower.belongsTo(User, {
    foreignKey: 'id_follower'
});

module.exports = Follower;