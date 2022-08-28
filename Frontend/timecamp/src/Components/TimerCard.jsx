import {Box, HStack } from '@chakra-ui/react'
import React from 'react'
import Timer from './Timer'

const TimerCard = () => {
  return (
    <Box  width={'80%'} h='100px' border={'1px solid green'}>
        <HStack>
            <Timer/>
        </HStack>
    </Box>
  )
}

export default TimerCard