'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Notes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    context: {
      type: Sequelize.STRING
    },
    categories: {
      type: Sequelize.STRING
    },
    dates: {
      type: Sequelize.STRING
    },
    is_archived: {
      type: Sequelize.BOOLEAN
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_t: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('Notes');
}