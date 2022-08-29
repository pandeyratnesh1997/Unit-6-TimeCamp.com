import React from 'react'

import { IoSettingsOutline } from "react-icons/io5";
import { BsQuestionCircle ,BsPerson,BsBoxArrowInDown,BsGlobe,BsPower} from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { HiOutlineUserCircle,HiOutlineSpeakerphone } from "react-icons/hi";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { MdSubscriptions } from "react-icons/md";
import { AiOutlineInfoCircle,AiOutlineHeart,AiOutlineGift} from "react-icons/ai";
import { BiBookOpen,BiMessageRounded } from "react-icons/bi";



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
    MenuGroup,
  } from '@chakra-ui/react';
  import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Subcription from '../Components/Subcription';
import Invoices from '../Components/Invoices';
import Address from '../Components/Address';
import Basicsub from '../Components/Basicsub';
import Prosub from '../Components/Prosub';
import Customsub from '../Components/Customsub';
import { useNavigate } from 'react-router-dom';

const Pro = () => {
  const navigate=useNavigate();
  return (
    <Box>
        <Flex style={{justifyContent:'space-between',marginLeft:"5vw",marginRight:"5vw",marginTop:"2vw"}}>
            <Text>Billing</Text>
            <Flex style={{justifyContent:"space-around",gap:"1vw"}}>
<Button style={{backgroundColor:"#ffa500",color:"white"}}>Upgrade to Pro</Button>

<Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<IoSettingsOutline style={{height:"3vw",width:"2vw"}} />}
    variant='outline'
  />

  <MenuList>
    <MenuItem icon={<IoSettingsOutline />} >
      Setting
    </MenuItem>
    <MenuItem icon={<IoExtensionPuzzleOutline />} >
      Integration
    </MenuItem>
    <MenuItem icon={<MdSubscriptions />} >
      Subscription
    </MenuItem>
    
  </MenuList>
</Menu>
<Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<BsQuestionCircle style={{height:"3vw",width:"2vw"}}/>}
    variant='outline'
  />

  <MenuList>
    <MenuGroup>
    <MenuItem icon={<AiOutlineInfoCircle />} >
     Help
    </MenuItem>
    <MenuItem icon={<BiBookOpen />} >
    Knowledge Base
    </MenuItem>
    <MenuItem icon={<BiMessageRounded />} >
      Send Feedback
    </MenuItem>
   
    <MenuItem icon={<AiOutlineHeart />} >
     Become a Partner
    </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup>
    <MenuItem icon={<AiOutlineGift />} >
   What's new
    </MenuItem>
    <MenuItem icon={<HiOutlineSpeakerphone />} >
     Suggest a feature
    </MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>

<FiUserPlus style={{height:"3vw",width:"2vw"}} />

<Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HiOutlineUserCircle style={{height:"3vw",width:"2vw"}}/>}
    variant='outline'
  />

  <MenuList>
    <MenuGroup>
    <MenuItem icon={<BsPerson />} >
     mmobinmemon@gmail.com
    </MenuItem>
  
    </MenuGroup>
    <MenuDivider />
    <MenuGroup>
    <MenuItem icon={<BsBoxArrowInDown />} >
  Download App
    </MenuItem>
    <MenuItem icon={<BsGlobe />} >
     Browser Plugin
    </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup>
    <MenuItem icon={<BsPower />} >
   Logout
    </MenuItem>
  
    </MenuGroup>
  </MenuList>
</Menu>

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
      <Prosub/>
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

export default Pro