const {Router} = require('express');
const {ProjectModel} = require('../../Models/Task.model');

const ProjectController = Router();


ProjectController.post('/', async(req,res)=>{
    const {project_name, user_id} = req.body;
    const project = new ProjectModel({
        project_name,
        user_id
    })
    await project.save();
    return res.send({message : " new project added"})
})
ProjectController.get("/", async(req,res)=>{
    const {user_id} = req.body;
    const project = await ProjectModel.find();
    
   return res.send({project})
});

ProjectController.patch('/:projectid/edit',async(req,res)=>{
    const {project_id, user_id, project_name} = req.body;
    const project = await ProjectModel.find({project_id});
    if(project.user_id===user_id){
        const newProject = await ProjectModel.findByIdAndUpdate({_id : project_id}, req.body, {new : true});
        return res.status(200).send({message : "project updated successfully", newProject});

    }else{
        return res.status(401).send("you are not authorised to update project")
    }
})

ProjectController.delete('/',async(req,res)=>{
    const {project_id, user_id} = req.body;
    const project = await ProjectModel.find({project_id});
    if(project.user_id===user_id){
        await ProjectModel.findByIdAndDelete({_id : project_id});
        return res.status(200).send({message : "project deleted successfully"});

    }else{
        return res.status(401).send("you are not authorised to update project")
    }
});

module.exports = ProjectController;