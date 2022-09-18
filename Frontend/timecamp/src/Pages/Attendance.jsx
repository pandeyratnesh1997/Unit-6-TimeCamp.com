import React from 'react'
import {Box, Button, Flex, Container, HStack,Text, Select, Input} from '@chakra-ui/react'
import {CgProfile} from 'react-icons/cg'
import {HiOutlineMail} from 'react-icons/hi'
import {IoPersonAddOutline} from 'react-icons/io5';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {FaRegEdit} from 'react-icons/fa'
import {GrAdd} from 'react-icons/gr'
import { FiSettings } from 'react-icons/fi'
import {GrCircleQuestion} from 'react-icons/gr'
import {BsHourglassTop} from 'react-icons/bs';
import { SimpleGrid } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react';
  import { Center, Square, Spacer } from '@chakra-ui/react'
  import Sidebar from "../Components/Sidebar";
  import styles from "../Styled/attendance.module.css";




const Attendance = () => {
  return (
    <Flex w="100%" justifyContent={'space-between'} padding={0}>
    <Container w="17%" padding={0} margin={0} >
      <Sidebar />
    </Container>

    
    <Box className={styles.mid_div} boxSize={'border-box'} border='1px solid rgb(219,219,219)' top={'50%'} height={'60px'} ml='500' w='1000px'>
    
    <Box bg='whitesmoke' w='100%' p={'3'} color='black'>
    <Button ml={'8'}><BsHourglassTop/></Button>
    <b>10 days</b> left in your pro trial
    <Button ml={'8'} bg={'rgb(224,165,68)'} color={'white'}>Subscribe to pro</Button>
    <Button ml={'8'} bg={'white'}>Book a demo</Button>
    </Box>
 
    
    
    <Flex w='100%' justifyContent={'space-between'}>
    <Box p='2' bg='white'>
    Attendance
    </Box>
    <Spacer />
  
            <Button ml={'8'} bg='white'><FiSettings/></Button>
            <Button ml={'8'} bg='white'><GrCircleQuestion/></Button>
            <Button ml={'8'} bg='white'><IoPersonAddOutline/></Button>
            <Button ml={'8'} bg='white'><CgProfile/></Button>
</Flex>
            

        <Divider orientation='horizontal' />
    
    <Box bg='whitesmoke' w='100%' p={4} color='black'>
    
    
    {/* Date */}
   
    <Menu>
  <MenuButton as={Button} colorScheme='white' color='black' border='0.01px solid black'>
    Last Month
  </MenuButton>
  <MenuList>
    <MenuGroup title='This year'>
      <MenuItem>Today</MenuItem>
      <MenuItem>Yesterday </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>This week</MenuItem>
      <MenuItem>Last week</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>

{/* YOU */}
<Button ml={'8'} border='0.1px solid black'><CgProfile/>You</Button>
    

</Box>
        <Box mb='15' className={styles.mid_div}>
            <HStack spacing={'2'} >
           
                <Button colorScheme='' size='md' w={'111px'}><Avatar src='https://bit.ly/broken-link' /></Button>
                <Text colorScheme='' color='black' size='md' w={'151px'}>Suraj Badwaik</Text>
                <Box  gap='15px'>
            
            </Box>
        
         {/* dropdown button */}
            <Menu>
  <MenuButton color='black' as={Button} colorScheme='white' border='.1px solid black'>
    Columns
  </MenuButton>
  <MenuList>
    <MenuGroup title='Profile' border='2px solid black'>
      <MenuItem>My Account</MenuItem>
      <MenuItem>Payments </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>Docs</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>

{/* dropdown button */}
            <Menu>
  <MenuButton color='black' as={Button} colorScheme='white' border='0.1px solid black'>
    Day Type
  </MenuButton>
  <MenuList>
    <MenuGroup title='Profile'>
      <MenuItem>My Account</MenuItem>
      <MenuItem>Payments </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>Docs</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>


{/* dropdown button */}
            <Menu>
  <MenuButton color='black' as={Button} colorScheme='white' border='0.1px solid black'>
    Bulk Edit
  </MenuButton>
  <MenuList>
    <MenuGroup title='Profile'>
      <MenuItem>My Account</MenuItem>
      <MenuItem>Payments </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>Docs</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
         


            <Input placeholder='Awaiting requests' w={'222px'} />
                       
            </HStack>
        </Box>
        <Box border='1px' h={'300px'} borderColor='gray.200'>



                <SimpleGrid columns={4} spacing={10}>
  <Box bg='whitesmoke' align="center" height='100px' w='120'>PER DAY
  <Box bg='whitesmoke' color='green' align="center" height='80px' w='120'>0s</Box>
  </Box>
  <Box bg='whitesmoke' align="center" height='100px' w='120'>TOTAL
  <Box bg='whitesmoke' color='green' align="center" height='80px' w='120'>0s</Box>
  </Box>
  <Box bg='whitesmoke' align="center" height='100px' w='120'>FIRST AND LAST TIME ENTRY
  <Box bg='whitesmoke' color='green' align="center" height='80px' w='120'>-</Box>
  </Box>
  <Box bg='whitesmoke' align="center" height='100px' w='120'>PER DAY(BETWEEN FIRST AND LAST TIME ENTRY)
  <Box bg='whitesmoke' color='green' align="center" height='80px' w='120'>0s</Box>
  </Box>
  <Box bg='whitesmoke' align="center" height='100px' w='120'>TOTAL BETWEEN FIRST AND LAST TIME ENTRY
  <Box bg='whitesmoke' color='green' align="center" height='80px' w='120'>0s</Box>
  </Box>
  <Box bg='whitesmoke' align="center" height='100px' w='120'>PRODUCTIVE/WORKING DAYS
  <Box bg='whitesmoke' color='green' align="center" height='80px' w='120'>0/23</Box>
  </Box>
  <Box bg='whitesmoke' align="center" height='100px' w='120'>USED VACATION HOURS THIS YEAR
  <Box bg='whitesmoke' color='green' align="center" height='80px' w='120'>0s/0h</Box>
  </Box>
</SimpleGrid>
   
      </Box>
      
     
      <Box bg='whitesmoke' w='100%' p={30} borderRadius='7px' color='white'>
     
      <Box bg='white' w='100%' p={2} borderRadius='2px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='black'>Date</Text></Center><Center w='100px'><Text color='black'>Total in projects</Text></Center><Center w='100px'><Text color='black'>Total between first and last time entry</Text></Center><Center w='100px'><Text color='black'>Should Be</Text></Center><Center w='100px'><Text color='black'>Vacation hours</Text></Center><Center w='100px'><Text color='black'>First time entry</Text></Center><Center w='100px'><Text color='black'>Last time entry</Text></Center><Center w='100px'><Text color='black'>Day Type</Text></Center></Flex></Box>


      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 1,Mon</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid grey'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 2,Tue</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid grey'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 3,Wed</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 4,Thu</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 5,Fri</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 6,Sat</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'></Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Non-working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 7,Sun</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'></Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Non-working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 8,Mon</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 9,Tue</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 10,Wed</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 11,Thu</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 12,Fri</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 13,Sat</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'></Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Non-working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 14,Sun</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'></Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Non-working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 15,Mon</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 16,Tue</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 17,Wed</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 18,Thu</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 19,Fri</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 20,Sat</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'></Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Non-working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 21,Sun</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'></Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Non-working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 22,Mon</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 23,Tue</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 24,Wed</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 25,Thu</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 26,Fri</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 27,Sat</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'></Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Non-working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 28,Sun</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'></Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Non-working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 29,Mon</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Working day</Button></Center></Flex></Box>
      <Box bg='white' w='100%' p={5} border='1px solid black' borderRadius='1px' color='white'><Flex color='white'><Center w='100px'><Checkbox defaultChecked></Checkbox></Center><Center w='100px'><Text color='blue'>Sep 30,Tue</Text></Center><Center w='100px'></Center><Center w='100px'></Center><Center w='100px'><Text color='black'>8h 00m</Text></Center><Center w='100px'><Text color='black'>0s</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Text>Box 1</Text></Center><Center w='100px'><Button color='black' border='0.1px solid black'>Working day</Button></Center></Flex></Box>
      
       

    </Box>
    </Box>

    </Flex>
  )
  
}

export default Attendance