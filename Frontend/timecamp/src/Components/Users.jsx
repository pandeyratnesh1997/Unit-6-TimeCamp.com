import React from 'react'
import {Box, Button, Flex, Container, HStack,Text, Select, Input} from '@chakra-ui/react'
import {CgProfile} from 'react-icons/cg'
import {HiOutlineMail} from 'react-icons/hi'
import {IoPersonAddOutline} from 'react-icons/io5';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {FaRegEdit} from 'react-icons/fa'
import {GrAdd} from 'react-icons/gr'
import { FiSettings } from 'react-icons/fi'
import {GrCircleQuestion} from 'react-icons/gr'

const Users = () => {
  return (
    <Box boxSize={'border-box'} border='1px solid rgb(219,219,219)' top={'50%'} height={'60px'} ml='500' w='1000px'>
    <Container mb={'20'}>
    <HStack justifyContent={'space-between'} align='right'>
            <Text fontSize={'20'} fontWeight="700" >Users</Text>
            <Box gap='15px'>
            <Button ml={'8'}><FiSettings/></Button>
            <Button ml={'8'}><GrCircleQuestion/></Button>
            <Button ml={'8'}><IoPersonAddOutline/></Button>
            <Button ml={'8'}><CgProfile/></Button>
            </Box>

        </HStack>
    </Container>
    <Box bg='rgb(216,233,255)' w='100%' p={4} color='rgb(65,147,248)'>
    <Button ml={'8'}><IoPersonAddOutline/></Button>
    You can now invite guests like clients, vendors, or contractors. You can add them free of charge. Invite guest
</Box>
        <Box mb='15'>
            <HStack spacing={'2'} >
           
                <Button colorScheme='green' size='md'>+Invite people</Button>
                <Button colorScheme='green' size='md'>Create User Group</Button>
                <Box  gap='15px'>
            <Button ml={'8'}><HiOutlineMail/></Button>
            </Box>
            <p>change number of seats</p>
            <Input placeholder='Search Users' />
            
            </HStack>
        </Box>
        <Box border='1px' h={'200px'} borderColor='gray.200'>
        <Checkbox defaultChecked>
        People (1 user)
        <Button><FaRegEdit/></Button>
        <Button><GrAdd/></Button>
                </Checkbox>
   
      </Box>
        <Box>
            <HStack gap={'2'}>
                <Select w='60' placeholder="Bulk Edit">
                <option value='All tasks'>Delete Selected</option>
                    <option value='My tasks'>Move Selected</option>
                    <option value='All tasks'>Change role for selected</option>
                    <option value='My tasks'>Disable/Enable Selected</option>
                </Select>
                <Button size={'md'} colorScheme='green'>Apply</Button>
                <Checkbox defaultChecked>Hide disabled users from lists in reports
                </Checkbox>
            </HStack>
        </Box>
    
        
    </Box>
  )
}

export default Users