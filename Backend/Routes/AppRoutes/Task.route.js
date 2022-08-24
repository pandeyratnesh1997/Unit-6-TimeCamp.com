const {Router} = require('express');
const {TaskModel} = require('../../Models/Task.model');


const TaskController = Router();

TaskController.post('/create', async(req,res)=>{
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
TaskController.get('/', async(req,res)=>{
    const {user_id, project_id}  = req.body;
    const task = TaskModel.find({user_id, project_id});
    return res.status(200).send(task)
})

TaskController.patch('/',async(req,res)=>{
    
})