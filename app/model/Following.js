const {
    DataTypes,
    Sequelize
} = require('sequelize');
const sequelize = require('../../config/database');
const User = require('./User');

const Following = sequelize.define('Following', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    freezeTableName: true
});

Following.belongsTo(User, {
    foreignKey: 'id_user'
});
Following.belongsTo(User, {
    foreignKey: 'id_following'
});

module.exports = Following;