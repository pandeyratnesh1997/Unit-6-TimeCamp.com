import React, { useState } from 'react'
import axios from 'axios'
import {Box, Button, Flex, Container, HStack,Text, Select, Input, VStack} from '@chakra-ui/react'
import {CgProfile} from 'react-icons/cg'
import {IoPersonAddOutline} from 'react-icons/io5';

import ProjectCard from '../Components/ProjectCard';
import { useEffect } from 'react';
import EditPage from './EditPage';
import Sidebar from '../Components/Sidebar';

const Projectpage = () => {
    // const [project,setproject] = useState("");;
    const [allProjects, setAllProjects] = useState([])
    // const handleAdd = async(e)=>{
    //     e.preventDefault();
    //     let url = "http://localhost:5000/project"
    //     const payload = {
    //         project_name : project,
    //         user_id : 1
    //     }
    //     const headers = {
    //         'Content-Type': 'application/json',
    //         'authorization': `${localStorage.getItem("TimeCampToken")}`
    //       }
    //     try {
    //         let res = await axios.post(url,payload);
    //         console.log(res)
    //     } catch (error) {
    //         console.log("error while createing project", error)
    //     }
        

    // }



    const getProject = async()=>{
        const headers = {
                   
                    'authorization': `${localStorage.getItem("TimeCampToken")}`
            }
        try {
           let res = await axios.get("http://localhost:5000/project/task", {headers});
           setAllProjects(res.data);
           console.log(res)
        } catch (error) {
            console.log("error", error)
        }
    }

    useEffect(()=>{
        getProject()
    },[])
    
  return (
    <>
    
    <Box boxSize={'border-box'} border='1px solid rgb(219,219,219)' top={'50%'} height={'60px'} ml='40'>
   
    <Container mb={'20'}>
    <HStack justifyContent={'space-between'} align='center'>
            <Text fontSize={'20'} fontWeight="700" >Projects</Text>
            <Box  gap='15px'>
            <Button ><IoPersonAddOutline/></Button>
            <Button ml={'8'}><CgProfile/></Button>
            </Box>
            
        </HStack>
    </Container>
        {/* <Box mb='15'>
            <HStack spacing={'2'} >
           
                <Button colorScheme='green' size='md'>Add Project</Button>
                <Select variant='outline' size='md' width='110px' placeholder='Filter'>
                    <option value='All tasks'>All tasks</option>
                    <option value='My tasks'>My tasks</option>
                </Select>

            </HStack>
        </Box>
        <Box mb={'8'}>
            <HStack gap={'2'}>
                <Input w='60' placeholder='Enter project name' value={project} onChange={(e)=>setproject(e.target.value)}></Input>
                <Button size={'md'} colorScheme='green' onClick={(e)=>handleAdd(e)}>Add</Button>
                <Button variant={'outline'} size='md'>Cancel</Button>
            </HStack>
        </Box>
       */}
            <Box>
        {allProjects?.map((el)=>{
            return(
                <Box key={el._id}>
            
                <ProjectCard {...el}/>
                </Box>
        
            )
        })}
        </Box>
        <Box style={{border : '1 px solid black'}}  ml={'55%'}>
            <EditPage/>
        </Box>
       
        
        
    </Box>
    </>
  )
}

export default Projectpage