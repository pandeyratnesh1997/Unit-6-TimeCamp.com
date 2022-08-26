import { Box, HStack, VStack,Text, Button } from "@chakra-ui/react";
import React from "react";
import {DeleteIcon} from '@chakra-ui/icons';

const ProjectCard = (props)=>{
    console.log(props)

    return (
      
                <Box justifyContent={'space-between'} >
            <HStack>
            <VStack lineHeight={'1'}>
                <Text >project_name</Text>
                <Text >user_name</Text>
            </VStack >
            <HStack >
                <Button colorScheme={'green'}>Add task</Button>
                <Button><DeleteIcon/></Button>
                </HStack>

            </HStack>
            
        </Box>
       
       
    )
    
}

export default ProjectCard


