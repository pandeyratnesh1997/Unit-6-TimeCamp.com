import { VStack ,Box,Stack ,Input,FormControl, FormLabel, Textarea, Button} from '@chakra-ui/react'
import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const TaskEdit = () => {

const [task,setTask] = useState({})

    const {taskId} = useParams();
    const getTask = async()=>{
        try {
            let res = await axios.get(`https://blooming-sea-03900.herokuapp.com/project/task`, {
                headers :{
                    'authorization': `${localStorage.getItem("TimeCampToken")}`
                }
            });
            //   console.log(res)
            const editTask = res.data.filter((item)=> item._id===taskId);
            setTask(editTask[0]); 
          
        } catch (error) {
            console.log("edit Task error", error);
        }
    }

const handleChange = (e)=>{
    const {name, value} = e.target;
    if(name!= 'tags'){
        setTask({...task, [name] : value})
    }else if(name=== 'tags'){
        setTask({...task, [name] : value.split(",")})
    }
    
}
const handleSubmit = async(e)=>{
    e.preventDefault();
    const headers = {
        'Content-Type': 'application/json',         
        'authorization': `${localStorage.getItem("TimeCampToken")}`
    }
    try {
        let res = await axios.patch(`https://blooming-sea-03900.herokuapp.com/project/task/${taskId}/edit`, task, { headers});
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
useEffect(()=>{
    getTask();
},[])


  return (
    <Box>
    <VStack>
    <FormControl >
            <FormLabel>Add Project</FormLabel>
            <Input name='projectName' value={task.projectName} onChange={handleChange} placeholder='Project name...'/>
        </FormControl>
        <FormControl >
            <FormLabel>Add task</FormLabel>
            <Input name='taskName' value={task.taskName} onChange={handleChange} placeholder='Task name...'/>
        </FormControl>
        <FormControl >
            <FormLabel>Description</FormLabel>
            <Textarea name='description' value={task.description} onChange={handleChange} placeholder='add description'/>
        </FormControl>
        <FormControl >
            <FormLabel>Estimated hours</FormLabel>
            <Input name='estimatedTime' value={task.estimatedTime} onChange={handleChange}/>
        </FormControl>
        <FormControl >
            <FormLabel>Estimated fee</FormLabel>
            <Input name='estimatedFee' value={task.estimatedFee} onChange={handleChange}/>
        </FormControl>
        <FormControl >
            <FormLabel>Tags</FormLabel>
            <Input name='tags' value={task.tags} onChange={handleChange} placeholder='seperate multiple tags with comma'/>
        </FormControl>
        <Stack>
            <Button onClick={(e)=>handleSubmit(e)} colorScheme={'green'}>Update Task</Button>
           
        </Stack>
    </VStack>
</Box>
  )
}

export default TaskEdit