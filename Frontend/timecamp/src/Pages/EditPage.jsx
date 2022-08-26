import { VStack ,Box,Stack ,Input,FormControl, FormLabel, Textarea, Button} from '@chakra-ui/react'
import React,{useState} from 'react';
import axios from 'axios';

const EditPage = () => {
    const [task,setTask] = useState({
        task_name : '',
        description : '',
        estimated_time : '',
        estimated_fee : "",
        tags : [],
        user_id : '',
        project_id : ''
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
    const payload = {...task, project_id : "630788ff82ba9870b93037e5", user_id : "1"}
    try {
        let res = await axios.post("http://localhost:5000/project/task", payload);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

  return (
    <Box>
        <VStack>
            <FormControl >
                <FormLabel>Add task</FormLabel>
                <Input name='task_name' value={task.task_name} onChange={handleChange} placeholder='Task name...'/>
            </FormControl>
            <FormControl >
                <FormLabel>Description</FormLabel>
                <Textarea name='description' value={task.description} onChange={handleChange} placeholder='add description'/>
            </FormControl>
            <FormControl >
                <FormLabel>Estimated hours</FormLabel>
                <Input name='estimated_time' value={task.estimated_time} onChange={handleChange}/>
            </FormControl>
            <FormControl >
                <FormLabel>Estimated fee</FormLabel>
                <Input name='estimated_fee' value={task.estimated_fee} onChange={handleChange}/>
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