const mongoose = require('mongoose');

const TimerSchema = mongoose.Schema({
   
    taskId : String ,
    userId : String,
    date   : String,
    startTime : String,
    endTime  : String,
    elapsedTime: {}
});

const TimerModel = mongoose.model('timer', TimerSchema);

module.exports = TimerModel;
