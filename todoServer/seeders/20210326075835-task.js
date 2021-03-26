'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tasks",
      [
        {
          value: "完成todo项目开发与测试",
          done: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: "学习vue2源码底层思想",
          done: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: "学习vue3编程思路+TS",
          done: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: "去旅行",
          done: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
