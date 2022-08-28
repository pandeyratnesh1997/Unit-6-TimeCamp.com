import { Box, HStack, VStack,Text, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import {DeleteIcon} from '@chakra-ui/icons';
import {EditIcon} from '@chakra-ui/icons';

const ProjectCard = (props)=>{
    const navigate = useNavigate()
    console.log(props)

    return (
      
                <Box justifyContent={'space-between'} >
            <HStack>
            <VStack mr={'8'} >
                <Heading size='md' >{props.projectName}</Heading>
                <Heading size='sm' >{props.taskName}</Heading>
            </VStack >
            <HStack >
           
                <Button><DeleteIcon/></Button>
                <Button onClick={()=> navigate(`/project/task/${props._id}/edit`)}><EditIcon/></Button>
                </HStack>

            </HStack>
            
        </Box>
       
       
    )
    
}

export default ProjectCard


