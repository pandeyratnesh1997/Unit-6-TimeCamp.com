import React from 'react'

import {
    Box,
    Flex,
    Select,
    Avatar,
    HStack,
    Link,
    IconButton,
    Text,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    
    Input
  } from '@chakra-ui/react';
const Address = () => {
  return (
    <Box style={{width:"40%"}}>
        <Text style={{fontWeight:"bold",textAlign:"left",marginLeft:"2vw",fontSize:"20px",marginTop:"1vw"}}>Invoice Information</Text>
        <Text style={{textAlign:"left",marginLeft:"2vw",marginTop:"0.60vw"}}>Company name / Your name</Text>
        <Input variant='filled'colotScheme={"#f8f8f8"} focusBorderColor='green.400'  style={{marginLeft:"2vw"}} />
        <Text style={{textAlign:"left",marginLeft:"2vw",marginTop:"0.5vw"}}>Send invoices to (optional)</Text>
        <Input variant='filled'colotScheme={"#f8f8f8"} focusBorderColor='green.400'  style={{marginLeft:"2vw"}} />
        <Text style={{fontWeight:"bold",textAlign:"left",marginLeft:"2vw",fontSize:"20px",marginTop:"1vw"}}>Billing address</Text>
        <Text style={{textAlign:"left",marginLeft:"2vw",marginTop:"0.60vw"}}>Address</Text>
        <Input variant='filled'colotScheme={"#f8f8f8"} focusBorderColor='green.400'  style={{marginLeft:"2vw"}} />
        <Flex gap='2vw'>
            <Box>
                        <Text style={{textAlign:"left",marginLeft:"2vw",marginTop:"0.5vw"}}>City</Text>
        <Input variant='filled'colotScheme={"#f8f8f8"} focusBorderColor='green.400'  style={{marginLeft:"2vw"}} />
        <Text style={{textAlign:"left",marginLeft:"2vw",marginTop:"0.60vw"}}>Country</Text>
        <Select focusBorderColor='green.400'  style={{marginLeft:"2vw"}} >
        <option></option>
            <option>India</option>
            <option>China</option>
            <option>Bhutan</option>
            <option>Bangladesh</option>
        </Select>
        <Flex style={{marginLeft:"2vw"}}>
        <Button colorScheme='green' style={{textAlign:"left",marginTop:"0.75vw"}}>Update Address</Button>
        <Button  style={{textAlign:"left",marginLeft:"0.75vw",marginTop:"0.75vw"}}>Cancel</Button>
        </Flex>
            </Box>
            <Box>
                        <Text style={{textAlign:"left",marginLeft:"2vw",marginTop:"0.5vw"}}>ZIP / Postal</Text>
        <Input variant='filled'colotScheme={"#f8f8f8"} focusBorderColor='green.400'  style={{marginLeft:"2vw"}} />
            </Box>
        </Flex>
       

    </Box>
  )
}

export default Address