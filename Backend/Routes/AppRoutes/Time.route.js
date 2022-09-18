const {Router} = require('express');

const TimerModel = require('../../Models/Timer.model');

const TimeController = Router();

TimeController.post('/', async(req,res)=>{
  const { taskId, userId, date, startTime, endTime, elapsedTime,taskName}  = req.body;
   const newTimer = new TimerModel({
  
    taskId,
    taskName,
    userId,
    date,
    startTime,
    endTime,
    elapsedTime
   })

   await newTimer.save();
   return res.status(200).send({message : "timer saved successfully"});

});
TimeController.get('/', async(req,res)=>{
  const {userId}  = req.body;
  const {page, limit} = req.query;

  const task =  await TimerModel.find({userId : userId}).skip(page*limit).limit(limit);
 
  return res.status(200).send(task)
})

module.exports  = TimeController

