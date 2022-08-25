import React from 'react'
import {Box, Button, Flex, Container, HStack,Text, Select, Input} from '@chakra-ui/react'
import {CgProfile} from 'react-icons/cg'
import {IoPersonAddOutline} from 'react-icons/io5';
import styles from '../Styled/projectpage.module.css';

const Projectpage = () => {
  return (
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
        <Box mb='15'>
            <HStack spacing={'2'} >
           
                <Button colorScheme='green' size='md'>Add Project</Button>
                <Select variant='outline' size='md' width='110px' placeholder='Filter'>
                    <option value='All tasks'>All tasks</option>
                    <option value='My tasks'>My tasks</option>
                </Select>

            </HStack>
        </Box>
        <Box>
            <HStack gap={'2'}>
                <Input w='60'></Input>
                <Button size={'md'} colorScheme='green'>Add</Button>
                <Button variant={'outline'} size='md'>Cancel</Button>
            </HStack>
        </Box>
    
        
    </Box>
  )
}

export default Projectpage