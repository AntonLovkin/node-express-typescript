'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('notes', {
    id: {
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      unique: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dates: {
      type: Sequelize.STRING
    },
    is_archived: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    edited_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
},
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('notes');
  }
};