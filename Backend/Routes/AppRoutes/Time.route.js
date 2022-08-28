const {Router} = require('express');

const TimerModel = require('../../Models/Timer.model');

const TimeController = Router();

TimeController.post('/', async(req,res)=>{
  const { taskId, userId, date, startTime, endTime, elapsedTime}  = req.body;
   const newTimer = new TimerModel({
  
    taskId,
    userId,
    date,
    startTime,
    endTime,
    elapsedTime
   })

   await newTimer.save();
   return res.status(200).send({message : "timer saved successfully"});

});

module.exports  = TimeController

