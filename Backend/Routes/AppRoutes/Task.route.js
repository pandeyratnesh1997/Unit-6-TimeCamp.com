const { Router } = require("express");
const { TaskModel } = require("../../Models/Task.model");

const TaskController = Router();

TaskController.post("/task", async (req, res) => {
  let {
    taskName,
    projectName,
    description,
    estimatedFee,
    estimatedTime,
    tags,
    userId,
  } = req.body;
  const newTask = new TaskModel({
    userId,
    projectName,
    taskName,
    description,
    estimatedFee,
    estimatedTime,
    tags,
  });

  await newTask.save();
  return res.status(200).send({ message: "new task created", newTask });
});
TaskController.get("/task", async (req, res) => {
  const { userId } = req.body;
  const task = await TaskModel.find({ userId: userId });

  return res.status(200).send(task);
});

TaskController.patch("/task/:taskId/edit", async (req, res) => {
  const { taskId } = req.params;
  const { userId } = req.body;
  // console.log(req.params)

  const Task = await TaskModel.findOne({ _id: taskId });
  // console.log(Task)
  if (Task.userId === userId) {
    const newTask = await TaskModel.findByIdAndUpdate(
      { _id: taskId },
      req.body,
      { new: true }
    );
    return res
      .status(200)
      .send({ message: "task updated successfully", newTask });
  } else {
    return res.status(401).send("you are not authorised to updated this task");
  }
});

TaskController.delete("/task", async (req, res) => {
  const { userId, id } = req.body;

  // console.log("back",taskId)
  const Task = await TaskModel.findOne({ _id: id });
  if (Task.userId === userId) {
    const deletedProject = await TaskModel.findByIdAndDelete(
      { _id: id },
      { new: true }
    );
    return res
      .status(200)
      .send({ message: "task deleted successfully", deletedProject });
  } else {
    return res.status(401).send("you are not authorised to updated this task");
  }
});
module.exports = TaskController;
