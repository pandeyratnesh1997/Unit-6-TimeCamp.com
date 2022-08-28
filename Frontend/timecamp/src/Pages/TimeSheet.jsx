import { Box, HStack,Button, Input, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TimerCard from '../Components/TimerCard'

const TimeSheet = () => {
    const [options,setOptions] = useState([]);

const getData = async(url)=>{
try {
    let res = await axios.get(url);
    let response = await res.data.project
    // res.data.project.map((el)=>{
    //     return  setOptions.push(el.project_name)
    // })
    setOptions([...options, response])
   
} catch (error) {
    
}
}
let url2 = "http://localhost:5000/project/task"
// let url1 = "http://localhost:5000/project"
useEffect(()=>{
    // getData(url1);
    getData(url2)
    
},[])
    
  return (
    <Box ml={'20%'} boxShadow='box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;'>
        <HStack mb={'10'} w={'50%'} justifyContent={'space-between'}>
            <Input w={''} type={'date'}/>
            <Button colorScheme={'green'} defaultChecked>Day</Button>
        </HStack>
        <Box mb={'8'} width={'80%'} h='100px' border={'1px solid green'}>
        <HStack>
           <Box>
            <Select>
                <option></option>
            </Select>
            </Box>
        </HStack>
        </Box>
        <TimerCard/>
    </Box>
  )
}

export default TimeSheet
