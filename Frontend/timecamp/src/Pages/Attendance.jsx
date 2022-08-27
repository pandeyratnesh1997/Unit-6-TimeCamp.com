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






const Attendance = () => {
  return (
   
    <Box boxSize={'border-box'} border='1px solid rgb(219,219,219)' top={'50%'} height={'60px'} ml='500' w='1000px'>
    
    <Box bg='whitesmoke' w='100%' p={4} color='black'>
    <Button ml={'8'}><BsHourglassTop/></Button>
    <b>10 days</b> left in your pro trial
    <Button ml={'8'} bg={'rgb(224,165,68)'} color={'white'}>Subscribe to pro</Button>
    <Button ml={'8'} bg={'white'}>Book a demo</Button>
    </Box>
 
    
    
    
    
    
    <Container mb={'20'}>
    <HStack justifyContent={'space-between'} align='right'>
            <Text fontSize={'20'} fontWeight="700" >Attendance</Text>
            <Box gap='15px'>
            <Button ml={'8'}><FiSettings/></Button>
            <Button ml={'8'}><GrCircleQuestion/></Button>
            <Button ml={'8'}><IoPersonAddOutline/></Button>
            <Button ml={'8'}><CgProfile/></Button>
            </Box>

        </HStack>
    </Container>
    <Box bg='whitesmoke' w='100%' p={4} color='black'>
    
    
    {/* Date */}
   
    <Menu>
  <MenuButton as={Button} colorScheme='white' color='black'>
    Last Month>
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
<Button ml={'8'}><CgProfile/>You</Button>
    

</Box>
        <Box mb='15'>
            <HStack spacing={'2'} >
           
                <Button colorScheme='' size='md' w={'111px'}><Avatar src='https://bit.ly/broken-link' /></Button>
                <Text colorScheme='' color='black' size='md' w={'151px'}>Suraj Badwaik</Text>
                <Box  gap='15px'>
            
            </Box>
        
         //dropdown button
            <Menu>
  <MenuButton color='black' as={Button} colorScheme='white'>
    Columns
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

//dropdown button
            <Menu>
  <MenuButton color='black' as={Button} colorScheme='white'>
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


//dropdown button
            <Menu>
  <MenuButton color='black' as={Button} colorScheme='white'>
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
      
        
    </Box>
  )
}

export default Attendance