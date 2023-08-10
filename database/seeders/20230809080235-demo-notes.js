'use strict';

const {v4} = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'notes',
      [
        {
          id: v4(),
          created_at: new Date(),
          edited_at: new Date(),
          content: "I'm gonna have a dentist appointment on the 3/5/2023",
          category: 'Idea',
          name: 'Books',
          dates: '3/5/2023',
          is_archived: true,
        },
        {
          id: v4(),
          created_at: new Date(),
          edited_at: new Date(),
          content: "I'm gonna have a dentist appointment on the 3/5/2023",
          category: 'Task',
          name: 'Books',
          dates: '3/5/2023',
          is_archived: false,
        },
        {
          id: v4(),
          created_at: new Date(),
          edited_at: new Date(),
          content: "I'm gonna have a dentist appointment on the 3/5/2023",
          category: 'Idea',
          name: 'Books',
          dates: '3/5/2023',
          is_archived: false,
        },
        {
          id: v4(),
          created_at: new Date(),
          edited_at: new Date(),
          content: "I'm gonna have a dentist appointment on the 3/5/2023",
          category: 'Idea',
          name: 'Books',
          dates: '3/5/2023',
          is_archived: false,
        },
        {
          id: v4(),
          created_at: new Date(),
          edited_at: new Date(),
          content: "I'm gonna have a dentist appointment on the 3/5/2023",
          category: 'Idea',
          name: 'Books',
          dates: '3/5/2023',
          is_archived: false,
        },
        {
          id: v4(),
          created_at: new Date(),
          edited_at: new Date(),
          content: "I'm gonna have a dentist appointment on the 3/5/2023",
          category: 'Idea',
          name: 'Books',
          dates: '3/5/2023',
          is_archived: false,
        },
        {
          id: v4(),
          created_at: new Date(),
          edited_at: new Date(),
          content: "I'm gonna have a dentist appointment on the 3/5/2023",
          category: 'Idea',
          name: 'Books',
          dates: '3/5/2023',
          is_archived: true,
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
