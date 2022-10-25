import { Box, useToast } from "@chakra-ui/react";
import axios from "axios";
import styles from "../Styled/TimeSheet.module.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import DisplayTimer from "./DisplayTimer";
import TimerButton from "./TimerButton";
import { saveTime } from "../Redux/AppReducer/action";
import { POST_TIME_FALIURE, POST_TIME_SUCCESS } from "../Redux/AppReducer/actionTypes";

const Timer = ({ taskId, taskName }) => {
 
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [status, setStatus] = useState(0);
  const [interv, setInterv] = useState();
  
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const toast = useToast()

  const dispatch = useDispatch()

  const start = () => {
    run();
    const { finalTime, finaldate } = findtime();

    setDate(finaldate);
    setStartTime(finalTime);

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

  const stop = async () => {
    const { finalTime } = findtime();
    // console.log("1", finalTime);
    // console.log("2", time);

    const payload = {
      taskId: taskId,
      taskName: taskName,
      date: date,
      startTime: startTime,
      endTime: finalTime,
      elapsedTime: time,
    };
    // console.log("payload", payload);
    dispatch(saveTime(payload)).then((response) =>{
      if(response.POST_TIME_SUCCESS === POST_TIME_SUCCESS){
        toast({
          position: "top",
          title: "task worktime saved successfully",
          description:
            "You can see this entry on Report page",
          status: "success",
          duration: 3000,
          isClosable: true,
          zIndex: 10000,
        });
      }
      else if(response.POST_TIME_FALIURE === POST_TIME_FALIURE){
        toast({
          position: "top",
          title: "task worktime have not saved ",
          description:
            " 500 Internal Server Error ",
          status: "success",
          duration: 3000,
          isClosable: true,
          zIndex: 10000,
        });
      }
    })

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
    <Box className={styles.timer_div}>
      <DisplayTimer time={time} />
      <TimerButton
        status={status}
        start={start}
        stop={stop}
        reset={reset}
        resume={resume}
      />
    </Box>
  );
};

export default Timer;
