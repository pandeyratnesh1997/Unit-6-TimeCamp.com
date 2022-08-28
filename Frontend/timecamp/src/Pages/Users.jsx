import React from 'react'
import {Box, Button, Flex, Container, HStack,Text, Select, Input} from '@chakra-ui/react'
import {CgProfile} from 'react-icons/cg'
import {HiOutlineMail} from 'react-icons/hi'
import {IoPersonAddOutline} from 'react-icons/io5';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {FaRegEdit} from 'react-icons/fa'
import {GrAdd} from 'react-icons/gr'
import { FiSettings } from 'react-icons/fi'
import {GrCircleQuestion} from 'react-icons/gr';
import {BsHourglassTop} from 'react-icons/bs';
import { SimpleGrid,  } from '@chakra-ui/react'
import { useMediaQuery,Spacer } from '@chakra-ui/react';






const Users = () => {
  return (
    
    <Box boxSize={'border-box'} border='1px solid rgb(219,219,219)' top={'60%'} height={'60px'} ml='500' w='1000px' marginLeft={'250px'}>
   
   <Box bg='whitesmoke' w='100%' p={4} color='black'>
    <Button ml={'8'}><BsHourglassTop/></Button>
    <b>10 days</b> left in your pro trial
    <Button ml={'8'} bg={'rgb(224,165,68)'} color={'white'}>Subscribe to pro</Button>
    <Button ml={'8'} bg={'white'}>Book a demo</Button>
    </Box>

   
    <Flex w='100%' justifyContent={'space-between'}>
    <Box p='2' bg='white'>
    <b>Users</b>
    </Box>
    <Spacer />
  
            <Button ml={'8'} bg='white'><FiSettings/></Button>
            <Button ml={'8'} bg='white'><GrCircleQuestion/></Button>
            <Button ml={'8'} bg='white'><IoPersonAddOutline/></Button>
            <Button ml={'8'} bg='white'><CgProfile/></Button>
</Flex>
    <Box bg='rgb(216,233,255)' w='100%' p={4} color='rgb(65,147,248)'>
    <Button ml={'8'} bg='rgb(216,233,255)'><IoPersonAddOutline/></Button>
    You can now invite guests like clients, vendors, or contractors. You can add them free of charge.<b>Invite guest</b>
</Box>
        <Box mb='15'>
            <HStack spacing={'2'} justifyContent={'space-between'} >
           
                <Button colorScheme='green' size='md' w={'111px'}>+Invite people</Button>
                <Button colorScheme='white' color='black' border='1px solid gray' size='md' w={'151px'}>Create User Group</Button>
                <Box  gap='15px'>
            <Button ml={'8'}><HiOutlineMail/></Button>
            </Box>
            <Box color='blue'><p>Change number of seats</p></Box>
            <Input placeholder='Search Users' w={'222px'} />
                       
            </HStack>
        </Box>
        <Box border='1px' h={'200px'} borderColor='gray.200'>
        <Checkbox defaultChecked>
        People (1 user)
        <Button bg='white'><FaRegEdit/></Button>
        <Button bg='white'><GrAdd/></Button>
                </Checkbox>

  <SimpleGrid columns={1} spacing={10}>
  <Box bg='whitesmoke' height='80px' border='1px solid whitesmoke'>
  <Checkbox defaultChecked></Checkbox>
  <Button ml={'8'}><CgProfile/></Button>
        RatneshPandey(Account Owner)
  </Box>
  
  
</SimpleGrid>
   
      </Box>

        <Box>
            <HStack gap={'2'} justifyContent={'space-between'}>
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