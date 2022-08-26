const {Router} = require('express');
const {TaskModel} = require('../../Models/Task.model');


const TaskController = Router();

TaskController.post('/task', async(req,res)=>{
    let {task_name,description, estimated_fee, estimated_time, tags, project_id, user_id} = req.body;
    const newTask = new TaskModel({
        task_name,
        description,
        estimated_fee,
        estimated_time,
        tags,
        project_id,
        user_id

    })

    await newTask.save();
    return res.status(200).send({message : "new task created"});

})
TaskController.get('/task', async(req,res)=>{
    const {user_id, project_id}  = req.body;
    const task =  await TaskModel.find({ project_id});
   
    return res.status(200).send(task)
})

TaskController.patch('/task',async(req,res)=>{
    const {task_id, project_id, user_id} = req.body;

    const Task = await TaskModel.findOne({_id: task_id});
    if(Task.user_id===user_id){
        const newTask = await TaskModel.findByIdAndUpdate({_id : task_id}, req.body, {new : true});
        return res.status(200).send({message : "task updated successfully", newTask})
    }
    else{
        return res.status(401).send("you are not authorised to updated this task")
    }
})

TaskController.delete('/task',async(req,res)=>{
    const {task_id, user_id} = req.body;

    const Task = await TaskModel.findOne({_id: task_id});
    if(Task.user_id===user_id){
     await TaskModel.findByIdAndDelete({_id : task_id});
        return res.status(200).send({message : "task deleted successfully"})
    }
    else{
        return res.status(401).send("you are not authorised to updated this task")
    }


})

module.exports = TaskController;