import {
  Box,
  Container,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import {useSelector , useDispatch} from 'react-redux'

import TimerCard from "../Components/TimerCard";
import styles from "../Styled/TimeSheet.module.css";
import Sidebar from "../Components/Sidebar";
import { getProject } from "../Redux/AppReducer/action";

const TimeSheet = () => {
const options = useSelector((state) => state.appReducer.allProject)

const dispatch = useDispatch();


  useEffect(() => {
   dispatch(getProject())
  }, []);

  return (
    <Box className={styles.main_cont}>
      <Container w="17%" padding={0} margin={0}>
        <Sidebar />
      </Container>

      <Box
        ml={"20%"}
        boxShadow="box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"
      >
        <Box className={styles.top_cont}>
          <Heading size={"lg"}>TimeSheet</Heading>
        </Box>

     
        {options?.map((el) => {
          return (
            <div key={el._id}>
              <TimerCard taskId={el._id} taskName={el.taskName} />
            </div>
          );
        })}
      
      </Box>
    </Box>
  );
};

export default TimeSheet;
