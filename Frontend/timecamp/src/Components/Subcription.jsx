import React from 'react'
import styles from "./Style/Subscription.module.css"
import { FcCheckmark } from "react-icons/fc";
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
    Center,
  } from '@chakra-ui/react';
import CompareFeatures from './CompareFeatures';
import Basicsub from '../Components/Basicsub';
import Prosub from '../Components/Prosub';
import Customsub from '../Components/Customsub';
import { useNavigate } from 'react-router-dom';

const Subcription = () => {
  const navigate=useNavigate()
  return (
    <>
    <Box>
    <Flex style={{gap:"2px",marginLeft:"5vw"}} >
        <Box style={{height:"200px",width:"200px",padding:"auto"}} className={styles.boxB} onClick={()=>{navigate('/subscription')}} _hover={{cursor:"pointer"}}>
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
        <Box style={{height:"200px",width:"200px",padding:"auto"}}  className={styles.boxA}  onClick={()=>{navigate('/custom')}} _hover={{cursor:"pointer"}}>
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
        <Text style={{textAlign:"left",fontWeight:"bolder",marginTop:"2vw",fontSize:"24px"}}>Purchase options</Text>
        <Flex style={{justifyContent:"space-between",marginTop:"1vw",fontSize:"20px"}}> <Text>Number of licenses:</Text><Text>unlimited users</Text></Flex>
        <Flex style={{justifyContent:"space-between",marginTop:"1vw",fontSize:"20px"}}> <Text>Price per license:</Text><Text>$0/month</Text></Flex>
        <Flex style={{justifyContent:"space-between",marginTop:"1vw",fontSize:"20px"}}> <Text>Plan:</Text><Text>Free</Text></Flex>
        <hr/>
        <Flex style={{justifyContent:"space-between",marginTop:"1vw",fontSize:"20px",marginBottom:"2vw"}}> <Text>Charge:</Text><Text style={{fontWeight:"bolder"}}>$0 per month</Text></Flex>
        </Box>
    </Flex>
    </Box>
    <Center><CompareFeatures/></Center>

    </>
  )
}

export default Subcription