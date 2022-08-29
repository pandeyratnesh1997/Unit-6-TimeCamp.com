import React from 'react'
import styles from "./Style/Subscription.module.css"
import { FcCheckmark } from "react-icons/fc";
import { Radio, RadioGroup } from '@chakra-ui/react'
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
import CompareFeatures from './CompareFeatures';
import Basicsub from './Basicsub';
import { useNavigate } from 'react-router-dom';
const Customsub = () => {
  const [value, setValue] = React.useState('1')
  const navigate=useNavigate();
  return (
    <>
    <Box>
    <Flex style={{gap:"2px",marginLeft:"5vw"}} >
        <Box style={{height:"200px",width:"200px",padding:"auto"}} className={styles.boxA} onClick={()=>{navigate('/billing')}} _hover={{cursor:"pointer"}}>
       <Text style={{color:"green",marginTop:"30px", textAlign:"center"}} >FREE</Text> 
       <Text style={{fontSize:"40px", textAlign:"center"}}>$0</Text>
       <Text className={styles.test1} textAlign="center">free for unlimited number</Text>
       <Text className={styles.test1}  textAlign="center">of users</Text>
       {/* focusBorderColor='green.400'  */}
        </Box>
        <Box style={{height:"200px",width:"200px",padding:"auto"}}   className={styles.boxA} onClick={()=>{navigate('/basic')}} _hover={{cursor:"pointer"}}>
       <Text style={{color:"green",marginTop:"30px", textAlign:"center"}}>Basic</Text> 
       <Text style={{fontSize:"40px", textAlign:"center"}}>$6.3</Text>
       <Text className={styles.test1} textAlign="center">per license/billed</Text>
       <Text className={styles.test1} textAlign="center">annually, $7 billed</Text>
       <Text className={styles.test1} textAlign="center">monthly</Text>

        </Box>
        <Box style={{height:"200px",width:"200px",padding:"auto"}}  className={styles.boxA} onClick={()=>{navigate('/pro')}} _hover={{cursor:"pointer"}}>
       <Text style={{color:"green",marginTop:"30px", textAlign:"center"}}>Pro</Text> 
       <Text style={{fontSize:"40px", textAlign:"center"}}>$9</Text>
       <Text className={styles.test1} textAlign="center">per license/billed</Text>
       <Text className={styles.test1} textAlign="center">annually, $9 billed</Text>
       <Text className={styles.test1} textAlign="center">monthly</Text>

        </Box>
        <Box style={{height:"200px",width:"200px",padding:"auto"}}  className={styles.boxB}  onClick={()=>{navigate('/custom')}} _hover={{cursor:"pointer"}}>
       <Text style={{color:"green",marginTop:"30px", textAlign:"center"}}>ENTERPRISE</Text> 
       <Text style={{fontSize:"40px", textAlign:"center"}}>Custom</Text>
       <Text className={styles.test1}  textAlign="center">Contact our Sales team</Text>
       <Text className={styles.test1}  textAlign="center">for the best offer</Text>

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
        <Text style={{textAlign:"center",marginTop:"4vw"}}>Talk to our Sales to tailor the plan to your business</Text>
        <Text style={{textAlign:"center"}}>needs. The perfect solution can skyrocket your</Text>
        <Text style={{textAlign:"center"}}>performance so don't be afraid to ask, we're here</Text>
        <Text style={{textAlign:"center"}}>to help!</Text>
     <Button style={{backgroundColor:"green",color:"white",display:"block",margin:"auto"}}>Book a call</Button>
        </Box>
    </Flex>
    </Box>
    <CompareFeatures/>

    </>
  )
}

export default Customsub