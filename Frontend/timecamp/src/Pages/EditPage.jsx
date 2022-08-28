import { VStack ,Box,Stack ,Input,FormControl, FormLabel, Textarea, Button} from '@chakra-ui/react'
import React,{useState} from 'react';
import axios from 'axios';

const EditPage = () => {
    const [task,setTask] = useState({
        projectName : '',
        taskName : '',
        description : '',
        estimatedTime : '',
        estimatedFee : "",
        tags : [],
       
       
    })
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
        let res = await axios.post("http://localhost:5000/project/task", task, { headers});
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

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
                <Button onClick={(e)=>handleSubmit(e)} colorScheme={'green'}>Add Task</Button>
               
            </Stack>
        </VStack>
    </Box>
  )
}

export default EditPage