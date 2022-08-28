import React from 'react'
import styles from "./Style/Subscription.module.css"
import { FcCheckmark } from "react-icons/fc";
import { Radio, RadioGroup } from '@chakra-ui/react'
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
 
  import Invoices  from './Invoices';
import CompareFeatures from './CompareFeatures';
import { useNavigate } from 'react-router-dom';
import Subcription from './Subcription';
import Address from './Address';
const Basicsub = () => {
  const [value, setValue] = React.useState('1')
  const navigate=useNavigate();
  return (
    <>
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
      <Subcription onClick={()=>{navigate("/subscription")}}/>
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
    <Box >
    <Flex style={{gap:"2px",marginLeft:"5vw"}} >
        <Box style={{height:"200px",width:"200px",padding:"auto"}} className={styles.boxA} onClick={()=>{navigate('/subscription')}} _hover={{cursor:"pointer"}}>
       <Text style={{color:"green",marginTop:"30px"}}>FREE</Text> 
       <Text style={{fontSize:"40px"}}>$0</Text>
       <Text className={styles.test1}>free for unlimited number</Text>
       <Text className={styles.test1}>of users</Text>
       {/* focusBorderColor='green.400'  */}
        </Box>
        <Box style={{height:"200px",width:"200px",padding:"auto"}}   className={styles.boxB} onClick={()=>{navigate('/basic')}} _hover={{cursor:"pointer"}}>
       <Text style={{color:"green",marginTop:"30px"}}>Basic</Text> 
       <Text style={{fontSize:"40px"}}>$6.3</Text>
       <Text className={styles.test1}>per license/billed</Text>
       <Text className={styles.test1}>annually, $7 billed</Text>
       <Text className={styles.test1}>monthly</Text>

        </Box>
        <Box style={{height:"200px",width:"200px",padding:"auto"}}  className={styles.boxA} onClick={()=>{navigate('/pro')}} _hover={{cursor:"pointer"}}>
       <Text style={{color:"green",marginTop:"30px"}}>Pro</Text> 
       <Text style={{fontSize:"40px"}}>$9</Text>
       <Text className={styles.test1}>per license/billed</Text>
       <Text className={styles.test1}>annually, $9 billed</Text>
       <Text className={styles.test1}>monthly</Text>

        </Box>
        <Box style={{height:"200px",width:"200px",padding:"auto"}}  className={styles.boxA} onClick={()=>{navigate('/custom')}} _hover={{cursor:"pointer"}}>
       <Text style={{color:"green",marginTop:"30px"}}>ENTERPRISE</Text> 
       <Text style={{fontSize:"40px"}}>Custom</Text>
       <Text className={styles.test1}>Contact our Sales team</Text>
       <Text className={styles.test1}>for the best offer</Text>

        </Box>
    </Flex>
    <Flex style={{gap:"2px",marginLeft:"5vw"}} >
        <Box style={{width:"34%",paddingLeft:"20px",marginTop:"2vw"}}>
            <Text style={{textAlign:"left",fontWeight:"800",fontSize:"24px"}}>WHAT YOU GET</Text>
           <Flex style={{gap:"2px",marginTop:"1vw"}}> <FcCheckmark/><Text>Everything in Basic</Text></Flex>
           <Flex style={{gap:"2px"}}> <FcCheckmark/><Text>Export to Excel, Google</Text></Flex>
           <Flex style={{gap:"2px"}}> <FcCheckmark/><Text>Unlimited integrations</Text></Flex>
           <Flex style={{gap:"2px"}}> <FcCheckmark/><Text>Management roles</Text></Flex>
           <Flex style={{gap:"2px"}}> <FcCheckmark/><Text>Budgeting & alerts</Text></Flex>

        </Box>
        <Box style={{width:"35%",backgroundColor:"#f8f8f8",paddingLeft:"20px",paddingRight:"20px"}}>
        <Text style={{textAlign:"left",fontWeight:"bolder",marginTop:"2vw",fontSize:"24px"}}>Purchase options</Text>
        <Flex style={{justifyContent:"space-between",marginTop:"1vw",fontSize:"16px"}}> <Text>Number of licenses:</Text><Text>1 in use</Text></Flex>
        <Flex style={{justifyContent:"space-between",marginTop:"1vw",fontSize:"16px"}}> <Text>Price per license:</Text><Text>$7/month</Text></Flex>
        <Flex style={{justifyContent:"space-between",marginTop:"1vw",fontSize:"16px"}}> <Text>Plan:</Text><Text>Basic</Text></Flex>
        <Flex style={{justifyContent:"space-between",marginTop:"1vw",fontSize:"16px"}}> <Text>Billing cycle:</Text><RadioGroup onChange={setValue} value={value}>
      <Stack direction='row'>
        <Radio value='1' colorScheme='green'>Annual</Radio><Button style={{backgroundColor:"#ffa500",color:"white"}}>10% off</Button>
        <Radio value='2' colorScheme='green'>Monthly</Radio>
      
      </Stack>
    </RadioGroup></Flex>
        <hr/>
        <Flex style={{justifyContent:"space-between",marginTop:"1vw",fontSize:"18px",marginBottom:"2vw"}}> <Text>Charge:</Text><Text style={{fontWeight:"bolder"}}>$7 per month</Text></Flex>
        </Box>
    </Flex>
    </Box>
    <CompareFeatures/>

    </>
  )
}

export default Basicsub