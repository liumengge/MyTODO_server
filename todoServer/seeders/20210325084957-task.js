"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tasks",
      [
        {
          done: "1",
          value: "写完todoList项目",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: "1",
          value: "学习vue2底层源码",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: "0",
          value: "学习TS+vue3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tasks", null, {});
  },
};
