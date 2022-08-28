import { HStack } from '@chakra-ui/react';
import axios from 'axios';

import React, { useState } from 'react'

import DisplayTimer from './DisplayTimer';
import TimerButton from './TimerButton';

const Timer = () => {
    const [time,setTime] = useState({s : 0, m : 0, h : 0});
    const [status,setStatus] = useState(0);
    const [interv, setInterv] = useState();
   const [timer,setTimer] = useState({
    
    taskId : '',
    userId : '',
    date : '' ,
    startTime : '',
    endTime : '',
    elapsedTime : ''
   })


    const start = ()=>{
        run();
      const {finalTime, finaldate } =   findtime();
        setTimer({...timer, date : finaldate, startTime : finalTime})
        setStatus(1);
       
       setInterv(setInterval(run,1000))

    }
  const findtime = ()=>{
    let date_time = new Date.now();
    
let date = ("0" + date_time.getDate()).slice(-2);

// get current month
let month = ("0" + (date_time.getMonth() + 1)).slice(-2);

// get current year
let year = date_time.getFullYear();

// get current hours
let hours = date_time.getHours();

// get current minutes
let minutes = date_time.getMinutes();

// get current seconds
let seconds = date_time.getSeconds();
let finaldate = date + "-" + month + "-" + year
let finalTime = hours + ":" + minutes + ":" + seconds
return {finaldate, finalTime}

}

    let updatedS = time.s;
    let updatedM = time.m;
    let updatedH = time.h;

    const run = ()=>{
        if(updatedM === 60){
            updatedH++;
            updatedM = 0;
        }
        if(updatedS===60){
            updatedM++;
            updatedS = 0;
        }
        updatedS++
        return setTime({s : updatedS, m : updatedM, h : updatedH});

    }
    const sendTime = async()=>{
        
        let res = await axios.post("http://localhost:5000/timer" )
    }
    const stop = ()=>{
        const {finalTime} = findtime();
        setTimer({...timer, end_time : finalTime, elapsedTime : time})
        clearInterval(interv);
        setStatus(2);
        sendTime()
    }
    const reset = ()=>{
        clearInterval(interv);
        setStatus(0);
        setTime({s: 0, m : 0, h: 0})
    }
    const resume = ()=>{
        start();
    }

  return (
    <HStack>
        <DisplayTimer time={time}/>
        <TimerButton status={status}
          start = {start}
          stop = {stop}
            reset = {reset}
            resume = {resume}
            />
    </HStack>
  )
}

export default Timer