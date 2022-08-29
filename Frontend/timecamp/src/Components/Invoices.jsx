import React from 'react'
import {
    Box,
    Flex,
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
  } from '@chakra-ui/react';
  import { Image } from '@chakra-ui/react'
const Invoices = () => {
  return (
    
    <Box>
        <Image src='https://cdn.timecamp.com/res/css/images/invoices.svg' style={{margin:"auto"}}/>
        <Text style={{fontWeight:"800", textAlign:"center"}}>You have no invoices history</Text>
        <Text style={{fontSize:"12px", textAlign:"center"}}>After you subscribe, all your invoices will appear here</Text>
        <Button style={{backgroundColor:"green",color:"white", display:"block", margin:"auto"}}>Subscribe now</Button>
    </Box>
  )
}

export default Invoices