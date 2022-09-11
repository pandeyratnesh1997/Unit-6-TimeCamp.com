import { Box, HStack, VStack, Text, Button, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import styles from '../Styled/projectpage.module.css';

import { useNavigate } from "react-router-dom";
import { DeleteIcon } from "@chakra-ui/icons";
import { EditIcon } from "@chakra-ui/icons";
import axios from "axios";

const ProjectCard = (props) => {
  const navigate = useNavigate();
  console.log(props);

  const handleDelete = async (e, id) => {
    // const headers = {
    //     authorization: `${localStorage.getItem("TimeCampToken")}`,
    //   };
    e.preventDefault();
    const payload = { taskId: id };
    console.log("payload", payload);

    try {
      let response = await axios.delete(
        "http://localhost:5000/project/task",
        payload,
        {
          headers: {
            authorization: `${localStorage.getItem("TimeCampToken")}`,
          },
        }
      );
      //    let res = await axios({
      //     method : 'DELETE',
      //     url: 'http://localhost:5000/project/task',
      //     body : JSON.stringify({taskId : id}),
      //     headers : {
      //         authorization: `${localStorage.getItem("TimeCampToken")}`,
      //     }
      //    })
      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    document.title = "timecamp || projects";
  });
  return (
   
      <Box className={styles.card_hstack}>
        <Box >
          <Heading size="md">{props.projectName}</Heading>
          <Text size="sm">{props.taskName}</Text>
        </Box>
        <Box className={styles.card_hstack_btn}>
          <Button onClick={(e) => handleDelete(e, props._id)}>
            <DeleteIcon />
          </Button>
          <Button onClick={() => navigate(`/project/task/${props._id}/edit`)}>
            <EditIcon />
          </Button>
        </Box>
      </Box>
    
  );
};

export default ProjectCard;
