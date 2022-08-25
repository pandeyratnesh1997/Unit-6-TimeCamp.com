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
  } from '@chakra-ui/react';
import CompareFeatures from './CompareFeatures';
const Subcription = () => {
  return (
    <>
    <Box style={{border:"1px solid red"}}>
    <Flex style={{gap:"2px",marginLeft:"5vw"}} >
        <Box style={{border:"1px solid gray",height:"200px",width:"200px",padding:"auto"}} focusBorderColor='green.400' className={styles.boxA}>
       <Text style={{color:"green",marginTop:"30px"}}>FREE</Text> 
       <Text style={{fontSize:"40px"}}>$0</Text>
       <Text className={styles.test1}>free for unlimited number</Text>
       <Text className={styles.test1}>of users</Text>

        </Box>
        <Box style={{border:"1px solid gray",height:"200px",width:"200px",padding:"auto"}}>
       <Text style={{color:"green",marginTop:"30px"}}>Basic</Text> 
       <Text style={{fontSize:"40px"}}>$6.3</Text>
       <Text className={styles.test1}>per license/billed</Text>
       <Text className={styles.test1}>annually, $7 billed</Text>
       <Text className={styles.test1}>monthly</Text>

        </Box>
        <Box style={{border:"1px solid gray",height:"200px",width:"200px",padding:"auto"}}>
       <Text style={{color:"green",marginTop:"30px"}}>Pro</Text> 
       <Text style={{fontSize:"40px"}}>$9</Text>
       <Text className={styles.test1}>per license/billed</Text>
       <Text className={styles.test1}>annually, $9 billed</Text>
       <Text className={styles.test1}>monthly</Text>

        </Box>
        <Box style={{border:"1px solid gray",height:"200px",width:"200px",padding:"auto"}}>
       <Text style={{color:"green",marginTop:"30px"}}>ENTERPRISE</Text> 
       <Text style={{fontSize:"40px"}}>Custom</Text>
       <Text className={styles.test1}>Contact our Sales team</Text>
       <Text className={styles.test1}>for the best offer</Text>

        </Box>
    </Flex>
    <Flex style={{gap:"2px",marginLeft:"5vw",border:"1px solid red"}} >
        <Box style={{width:"34%",border:"1px solid green",paddingLeft:"20px",marginTop:"2vw"}}>
            <Text style={{textAlign:"left",fontWeight:"800",fontSize:"24px"}}>WHAT YOU GET</Text>
           <Flex style={{gap:"2px",marginTop:"1vw"}}> <FcCheckmark/><Text>Everything in Basic</Text></Flex>
           <Flex style={{gap:"2px"}}> <FcCheckmark/><Text>Export to Excel, Google</Text></Flex>
           <Flex style={{gap:"2px"}}> <FcCheckmark/><Text>Unlimited integrations</Text></Flex>
           <Flex style={{gap:"2px"}}> <FcCheckmark/><Text>Management roles</Text></Flex>
           <Flex style={{gap:"2px"}}> <FcCheckmark/><Text>Budgeting & alerts</Text></Flex>

        </Box>
        <Box style={{width:"35%",border:"1px solid green",backgroundColor:"#f8f8f8",paddingLeft:"20px",paddingRight:"20px"}}>
        <Text style={{textAlign:"left",fontWeight:"bolder",marginTop:"2vw",fontSize:"24px"}}>Purchase options</Text>
        <Flex style={{justifyContent:"space-between",marginTop:"1vw",fontSize:"20px"}}> <Text>Number of licenses:</Text><Text>unlimited users</Text></Flex>
        <Flex style={{justifyContent:"space-between",marginTop:"1vw",fontSize:"20px"}}> <Text>Price per license:</Text><Text>$0/month</Text></Flex>
        <Flex style={{justifyContent:"space-between",marginTop:"1vw",fontSize:"20px"}}> <Text>Plan:</Text><Text>Free</Text></Flex>
        <hr/>
        <Flex style={{justifyContent:"space-between",marginTop:"1vw",fontSize:"20px",marginBottom:"2vw"}}> <Text>Charge:</Text><Text style={{fontWeight:"bolder"}}>$0 per month</Text></Flex>
        </Box>
    </Flex>
    </Box>
    <CompareFeatures/>

    </>
  )
}

export default Subcription