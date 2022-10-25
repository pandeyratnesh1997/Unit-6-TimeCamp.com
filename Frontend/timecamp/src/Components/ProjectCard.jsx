import { Box, HStack, VStack, Text, Button, Heading , useToast} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { DeleteIcon } from "@chakra-ui/icons";
import { EditIcon } from "@chakra-ui/icons";
import styles from "../Styled/projectpage.module.css";
import { deleteProject, getProject } from "../Redux/AppReducer/action";
import { DELETE_PROJECT_FALIURE, DELETE_PROJECT_SUCCESS } from "../Redux/AppReducer/actionTypes";

const ProjectCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast()

  const handleDelete = async (e, id) => {
    e.preventDefault();
    
    dispatch(deleteProject(id)).then((response) =>{
      if(response.type === DELETE_PROJECT_SUCCESS){
        toast({
          position: "top",
          title: "Project deleted successfully",
          description:
            "You can see it on page",
          status: "success",
          duration: 3000,
          isClosable: true,
          zIndex: 10000,
        });
        // getProject()
      }
      else if(response.type === DELETE_PROJECT_FALIURE){
        toast({
          position: "top",
          title: "Error in project deletion",
          description:
            "Error 500 Server error",
          status: "error",
          duration: 3000,
          isClosable: true,
          zIndex: 10000,
        });
      }
    })
  };

  useEffect(() => {
    document.title = "timecamp || projects";
  });
  return (
    <Box className={styles.card_hstack}>
      <Box>
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
