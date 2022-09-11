import {Box, Heading, HStack } from '@chakra-ui/react'
import React from 'react'
import Timer from './Timer'

const TimerCard = (props) => {
 
  
  return (
    <Box  width={'80%'} h='100px' border={'1px solid green'}>
        <HStack justifyContent={'space-around'}>
          <Heading size='sm'>{props.taskName}</Heading>
            <Timer {...props}/>
        </HStack>
    </Box>
  )
}

export default TimerCard