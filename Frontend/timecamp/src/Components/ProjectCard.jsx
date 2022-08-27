import { Box, HStack, VStack,Text, Button } from "@chakra-ui/react";
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
            <VStack >
                <Text >{props.project_name}</Text>
                <Text >{props.user_id}</Text>
            </VStack >
            <HStack >
                <Button colorScheme={'green'}>Add task</Button>
                <Button><DeleteIcon/></Button>
                <Button onClick={()=> navigate(`/${props._id}/edit`)}><EditIcon/></Button>
                </HStack>

            </HStack>
            
        </Box>
       
       
    )
    
}

export default ProjectCard


