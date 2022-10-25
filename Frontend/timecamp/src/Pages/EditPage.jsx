import {
  VStack,
  Box,
  Stack,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Heading,
  useToast
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProject, postProject } from "../Redux/AppReducer/action";
import { POST_PROJECT_FALIURE, POST_PROJECT_SUCCESS } from "../Redux/AppReducer/actionTypes";


const EditPage = () => {
  const [task, setTask] = useState({
    projectName: "",
    taskName: "",
    description: "",
    estimatedTime: "",
    estimatedFee: "",
    tags: [],
  })
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name != "tags") {
      setTask({ ...task, [name]: value });
    } else if (name === "tags") {
      setTask({ ...task, [name]: value.split(",") });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(postProject(task)).then((response) =>{
      if(response.type === POST_PROJECT_SUCCESS){
        toast({
          position: "top",
          title: "Project created successfully",
          description:
            "You can see it on page",
          status: "success",
          duration: 3000,
          isClosable: true,
          zIndex: 10000,
        });

        // dispatch(getProject())
      }
      else if( response.type === POST_PROJECT_FALIURE){
        toast({
          position: "top",
          title: "Error in project creation",
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

  return (
    <VStack position={"relative"} w="100%">
      <Heading size={"lg"} mb={"5"}>
        Add New Project and Task{" "}
      </Heading>
      <FormControl>
        <FormLabel>Add Project</FormLabel>
        <Input
          name="projectName"
          value={task.projectName}
          onChange={handleChange}
          placeholder="Project name..."
        />
      </FormControl>
      <FormControl>
        <FormLabel>Add task</FormLabel>
        <Input
          name="taskName"
          value={task.taskName}
          onChange={handleChange}
          placeholder="Task name..."
        />
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="add description"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Estimated hours</FormLabel>
        <Input
          name="estimatedTime"
          value={task.estimatedTime}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Estimated fee</FormLabel>
        <Input
          name="estimatedFee"
          value={task.estimatedFee}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Tags</FormLabel>
        <Input
          name="tags"
          value={task.tags}
          onChange={handleChange}
          placeholder="seperate multiple tags with comma"
        />
      </FormControl>
      <Stack>
        <Button onClick={(e) => handleSubmit(e)} colorScheme={"green"}>
          Add Task
        </Button>
      </Stack>
    </VStack>
  );
};

export default EditPage;
