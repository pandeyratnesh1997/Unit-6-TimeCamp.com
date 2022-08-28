const mongoose = require('mongoose');

// const ProjectSchema = mongoose.Schema({
//     project_name : {type : String, required : true},
//     user_id : { type : String, required : true}
// });

const TaskSchema = mongoose.Schema({
  taskName : {type :String, required : true },
    projectName : {type : String, required : true},
    description : {type : String},
    estimatedFee : {type : Number,},
    estimatedTime : {type :String},
    tags : [String],
   
    userId : {type : String, required : true}

});



const TaskModel = mongoose.model('task', TaskSchema);

module.exports = {
  
    TaskModel
}

