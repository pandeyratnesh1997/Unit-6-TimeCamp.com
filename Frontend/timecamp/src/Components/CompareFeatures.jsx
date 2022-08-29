
import React from 'react'
import { FcCheckmark } from "react-icons/fc";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
  import styles from "./Style/Subscription.module.css"
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
   
    useColorModeValue,
    Stack,
  } from '@chakra-ui/react';

const CompareFeatures = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Text style={{color:"blue",marginTop:"2vw",marginLeft:"30vw"}} onClick={onOpen}>Compare all features</Text>

      <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent  >
            
          <ModalHeader>Compare plans
          
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
       <Flex style={{width:"70vw",height:"40vw",gap:"1.5vw"}}>
       <Box style={{border:"1px solid gray",height:"450px",width:"200px",padding:"auto",textAlign:"center"}} className={styles.box1234} >
       <Text style={{color:"green",marginTop:"30px",textContent:"center"}}>FREE</Text> 
       <Text style={{fontSize:"40px"}}>$0</Text>
       <Text className={styles.test1}>free for unlimited number</Text>
       <Text className={styles.test1}>of users</Text>
       <Button style={{color:"white",backgroundColor:"green"}}>Your current Plan</Button>
       <hr/>
       <Text style={{textAlign:"left",marginLeft:"1vw",fontSize:"16px",fontWeight:"500",marginTop:"1.5vw"}}>Plan Free Includes:</Text>
       <Flex style={{gap:"0.5vw",marginTop:"1vw",fontSize:"14px",marginLeft:"1.5vw"}}> <FcCheckmark/><Text>Unlimited users</Text></Flex>
           <Flex style={{gap:"0.5vw",fontSize:"14px",marginLeft:"1.5vw"}}> <FcCheckmark/><Text>Unlimited projects</Text></Flex>
           <Flex style={{gap:"0.5vw",fontSize:"14px",marginLeft:"1.5vw"}}> <FcCheckmark/><Text>Desktop & Mobile app</Text></Flex>
           <Flex style={{gap:"0.5vw",fontSize:"14px",marginLeft:"1.5vw"}}> <FcCheckmark/><Text>One Integration </Text></Flex>
           {/* <Flex style={{gap:"0.5vw",fontSize:"14px"}}> <FcCheckmark/><Text>Budgeting & alerts</Text></Flex> */}
        </Box>
        <Box style={{border:"1px solid gray",height:"450px",width:"200px",padding:"auto",textAlign:"center"}} className={styles.box1234} >
       <Text style={{color:"green",marginTop:"30px",textContent:"center"}}>BASIC</Text> 
       <Text style={{fontSize:"40px"}}>$7</Text>
       <Text className={styles.test1}>per license/billed monthly, $6.3</Text>
       <Text className={styles.test1}>billed annually</Text>
       <Button style={{color:"white",backgroundColor:"green"}}>Upgrade to Basic</Button>
       <hr/>
       <Text style={{textAlign:"left",marginLeft:"1vw",fontSize:"16px",fontWeight:"500",marginTop:"1.5vw"}}>Plan Basic Includes:</Text>
       <Flex style={{gap:"0.5vw",marginTop:"1vw",fontSize:"14px",marginLeft:"1.5vw"}}> <FcCheckmark/><Text>Everything in Free</Text></Flex>
           <Flex style={{gap:"0.5vw",fontSize:"14px",marginLeft:"1.5vw"}}> <FcCheckmark/><Text>Export to Excel, Google</Text></Flex>
           <Flex style={{gap:"0.5vw",fontSize:"14px",marginLeft:"1.5vw"}}> <FcCheckmark/><Text>Unlimited integrations</Text></Flex>
           <Flex style={{gap:"0.5vw",fontSize:"14px",marginLeft:"1.5vw"}}> <FcCheckmark/><Text>Management roles </Text></Flex>
           <Flex style={{gap:"0.5vw",fontSize:"14px",marginLeft:"1.5vw"}}> <FcCheckmark/><Text>Budgeting & alerts</Text></Flex>
        </Box>


        {/* <Box style={{border:"1px solid gray",height:"600px",width:"200px",padding:"auto",textAlign:"center"}} className={styles.box1234} >
       <Text style={{color:"green",marginTop:"30px",textContent:"center"}}>BASIC</Text> 
       <Text style={{fontSize:"40px"}}>$7</Text>
       <Text className={styles.test1}>per license/billed monthly, $6.3</Text>
       <Text className={styles.test1}>billed annually</Text>
       <Button style={{color:"white",backgroundColor:"green"}}>Upgrade to Basic</Button>
       <hr/>
       <Text style={{textAlign:"left",marginLeft:"1vw",fontSize:"16px",fontWeight:"500",marginTop:"1.5vw"}}>Plan Basic Includes:</Text>
       <Flex style={{gap:"0.5vw",marginTop:"1vw",fontSize:"14px",marginLeft:"1.5vw"}}> <FcCheckmark/><Text>Everything in Free</Text></Flex>
           <Flex style={{gap:"0.5vw",fontSize:"14px",marginLeft:"1.5vw"}}> <FcCheckmark/><Text>Export to Excel, Google</Text></Flex>
           <Flex style={{gap:"0.5vw",fontSize:"14px",marginLeft:"1.5vw"}}> <FcCheckmark/><Text>Unlimited integrations</Text></Flex>
           <Flex style={{gap:"0.5vw",fontSize:"14px",marginLeft:"1.5vw"}}> <FcCheckmark/><Text>Management roles </Text></Flex>
           <Flex style={{gap:"0.5vw",fontSize:"14px",marginLeft:"1.5vw"}}> <FcCheckmark/><Text>Budgeting & alerts</Text></Flex>
        </Box> */}


       </Flex>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  )
}

export default CompareFeatures