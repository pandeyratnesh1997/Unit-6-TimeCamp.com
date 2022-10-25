import {
  VStack,
  Box,
  Stack,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { updateProject } from "../Redux/AppReducer/action";
import {
  UPDATE_PROJECT_FALIURE,
  UPDATE_PROJECT_SUCCESS,
} from "../Redux/AppReducer/actionTypes";

const TaskEdit = () => {
  const [task, setTask] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const { taskId } = useParams();
  const getTask = async () => {
    try {
      let res = await axios.get(
        `https://blooming-sea-03900.herokuapp.com/project/task`,
        {
          headers: {
            authorization: `${localStorage.getItem("TimeCampToken")}`,
          },
        }
      );
      //   console.log(res)
      const editTask = res.data.filter((item) => item._id === taskId);
      setTask(editTask[0]);
    } catch (error) {
      console.log("edit Task error", error);
    }
  };

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
    const payload = {
      taskId,
      task,
    };
    dispatch(updateProject(payload)).then((response) => {
      if (response.type === UPDATE_PROJECT_SUCCESS) {
        toast({
          position: "top",
          title: "Project updated successfully",
          description: "You can see it on page",
          status: "success",
          duration: 3000,
          isClosable: true,
          zIndex: 10000,
        });
        navigate("/project");
        return;
      } else if (response.type === UPDATE_PROJECT_FALIURE) {
        toast({
          position: "top",
          title: "Error in project updation",
          description: "Error 500 Server error",
          status: "error",
          duration: 3000,
          isClosable: true,
          zIndex: 10000,
        });
      }
    });
  };
  useEffect(() => {
    getTask();
  }, []);

  return (
    <Box>
      <VStack>
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
            Update Task
          </Button>
        </Stack>
      </VStack>
    </Box>
  );
};

export default TaskEdit;
