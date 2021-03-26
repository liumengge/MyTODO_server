var express = require("express");
var router = express.Router();
var models = require("../models")   // 导入模型

// 获取所有任务接口
router.get("/", async function (req, res, next) {
  let tasks;
  if (req.query.done) {
    tasks = await models.Task.findAll({ where: { done: req.query.done } });
    res.json({ tasks: tasks });
  }

  tasks = await models.Task.findAll()
  res.json({tasks: tasks})
});

// 添加一项任务的接口
router.post("/", async function (req, res, next) {
  await models.Task.create(req.body);
  let tasks = await models.Task.findAll();
  res.json({ tasks: tasks });
});

// 删除某项任务的接口
router.delete("/:id", async function (req, res, next) {
  let task = await models.Task.findByPk(req.params.id);
  await task.destroy(req.body)
  let tasks = await models.Task.findAll(); 
  res.json({ 
    msg: "删除成功",
    tasks: tasks
  });
});

// 删除所有已完成任务
router.delete("/", async function (req, res, next) {
  let task = await models.Task.findByPk(req.params.id);
  task.destroy(req.body);
  let tasks = await models.Task.findAll();
  res.json({
    msg: "删除成功",
    tasks: tasks,
  });
});


module.exports = router;
