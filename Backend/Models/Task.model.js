const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    project_name : {type : String, required : true},
    user_id : { type : String, required : true}
});

const TaskSchema = mongoose.Schema({
  task_name : {type :String, required : true },
    description : {type : String},
    estimated_fee : {type : Number,},
    estimated_time : {type :String},
    tags : [String],
    project_id : {type : String, required : true},
    user_id : {type : String, required : true}

});

const ProjectModel = mongoose.model('project', ProjectSchema);

const TaskModel = mongoose.model('task', TaskSchema);

module.exports = {
    ProjectModel,
    TaskModel
}

