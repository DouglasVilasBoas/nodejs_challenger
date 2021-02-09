'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Token', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
      },

      request_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      id_user: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id"
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Token');
  }
};