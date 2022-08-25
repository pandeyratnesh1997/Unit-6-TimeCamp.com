import React from 'react'

import { IoSettingsOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi";


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
  import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Subcription from '../Components/Subcription';
import Invoices from '../Components/Invoices';
import Address from '../Components/Address';

const Billing = () => {
  return (
    <Box>
        <Flex style={{justifyContent:'space-between',marginLeft:"5vw",marginRight:"5vw",marginTop:"2vw"}}>
            <Text>Billing</Text>
            <Flex style={{justifyContent:"space-around",gap:"1vw"}}>
<Button style={{backgroundColor:"#ffa500",color:"white"}}>Upgrade to Pro</Button>
<IoSettingsOutline style={{height:"3vw",width:"2vw",}}/>
<BsQuestionCircle style={{height:"3vw",width:"2vw"}}/>
<FiUserPlus style={{height:"3vw",width:"2vw"}}/>
<HiOutlineUserCircle style={{height:"3vw",width:"2vw"}}/>

            </Flex>
        </Flex>
        <br/>
        <hr/>
        <Tabs colorScheme='green'>
  <TabList>
    <Tab>Your Subscription</Tab>
    <Tab>Invoices</Tab>
    <Tab>Billing Address</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <Subcription/>
    </TabPanel>
    <TabPanel>
      <Invoices/>
    </TabPanel>
    <TabPanel>
    <Address/>
    </TabPanel>
  </TabPanels>
</Tabs>

    </Box>
  )
}

export default Billing