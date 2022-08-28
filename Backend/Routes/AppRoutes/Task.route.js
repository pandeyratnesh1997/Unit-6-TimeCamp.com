const {Router} = require('express');
const {TaskModel} = require('../../Models/Task.model');


const TaskController = Router();

TaskController.post('/task', async(req,res)=>{
    console.log(req.params)
    let {taskName,description, estimatedFee, estimatedTime, tags,  userId} = req.body;
    const newTask = new TaskModel({
        userId,
        projectName,
        taskName,
        description,
        estimatedFee,
        estimatedTime,
        tags
       
        

    })

    await newTask.save();
    return res.status(200).send({message : "new task created"});

})
TaskController.get('/task', async(req,res)=>{
    const {userId}  = req.body;
    const task =  await TaskModel.find();
   
    return res.status(200).send(task)
})

TaskController.patch('/task/:taskid/edit',async(req,res)=>{
    const {taskId} = req.params;
    const {userId} = req.body;

    const Task = await TaskModel.findOne({_id: taskId});
    if(Task.userId===userId){
        const newTask = await TaskModel.findByIdAndUpdate({_id : taskId}, req.body, {new : true});
        return res.status(200).send({message : "task updated successfully", newTask})
    }
    else{
        return res.status(401).send("you are not authorised to updated this task")
    }
})

TaskController.delete('/task',async(req,res)=>{
    const {taskId, userId} = req.body;

    const Task = await TaskModel.findOne({_id: taskId});
    if(Task.userId===userId){
     await TaskModel.findByIdAndDelete({_id : taskId});
        return res.status(200).send({message : "task deleted successfully"})
    }
    else{
        return res.status(401).send("you are not authorised to updated this task")
    }


})
module.exports = TaskController;