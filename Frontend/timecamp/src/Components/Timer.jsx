import { HStack } from "@chakra-ui/react";
import axios from "axios";


import React, { useState } from "react";

import DisplayTimer from "./DisplayTimer";
import TimerButton from "./TimerButton";

const Timer = ({ taskId }) => {
  console.log(taskId);
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [status, setStatus] = useState(0);
  const [interv, setInterv] = useState();
  // const [timer, setTimer] = useState({
  //   taskId: taskId,

  //   date: "",
  //   startTime: "",
  //   endTime: "",
  //   elapsedTime: "",
  // });
  const [date,setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState();
  const [elapsedTime, setElapsedTime] = useState()
console.log(endTime);
console.log(elapsedTime);
  const start = () => {
    run();
    const { finalTime, finaldate } = findtime();
    // setTimer({ ...timer, date: finaldate, startTime: finalTime });
    setDate(finaldate);
    setStartTime(finalTime)
    setEndTime("17:00");
    setElapsedTime({s: "6"})
    setStatus(1);

    setInterv(setInterval(run, 1000));
  };
  const findtime = () => {
    let date_time = new Date();

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
    let finaldate = date + "-" + month + "-" + year;
    let finalTime = hours + ":" + minutes + ":" + seconds;
    return { finaldate, finalTime };
  };

  let updatedS = time.s;
  let updatedM = time.m;
  let updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    updatedS++;
    return setTime({ s: updatedS, m: updatedM, h: updatedH });
  };
  const sendTime = async () => {
    

    const payload = {
      taskId : taskId,
      date : date,
      startTime : startTime,
      endTime : endTime,
      elapsedTime : elapsedTime
    }
    console.log("payload",payload)
    try {
      let res = await axios.post("http://localhost:5000/timer",payload , {
        headers: {
          authorization: `${localStorage.getItem("TimeCampToken")}`,
        },
      });
      console.log(res);
    } catch (error) {
      console.log("timer post error", error);
    }
  };
  const stop = async() => {

    const { finalTime } = findtime();
    console.log("1",finalTime)
    console.log("2",time)
    // setTimer({ ...timer, endTime: finalTime, elapsedTime : time  })
  setEndTime(finalTime);
  setElapsedTime(time)
   
    console.log(endTime);
    console.log(time)
   

   
    

      const payload = {
        taskId : taskId,
        date : date,
        startTime : startTime,
        endTime : endTime,
        elapsedTime : elapsedTime
      }
      console.log("payload",payload)
      try {
        let res = await axios.post("http://localhost:5000/timer",payload , {
          headers: {
            authorization: `${localStorage.getItem("TimeCampToken")}`,
          },
        });
        console.log(res);
      } catch (error) {
        console.log("timer post error", error);
      }
   


    clearInterval(interv);
    setStatus(2);
    
  };
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ s: 0, m: 0, h: 0 });
  };
  const resume = () => {
    start();
  };

  return (
    <HStack>
      <DisplayTimer time={time} />
      <TimerButton
        status={status}
        start={start}
        stop={stop}
        reset={reset}
        resume={resume}
      />
    </HStack>
  );
};

export default Timer;
