import {Box, Heading, HStack } from '@chakra-ui/react'
import React from 'react'
import Timer from './Timer'
import styles from '../Styled/TimeSheet.module.css';

const TimerCard = (props) => {
 
  
  return (
    <Box className={styles.time_card} padding={'8'}   border={'1px solid green'}>
       
          <Heading  size='sm'>{props.taskName}</Heading>
            <Timer {...props}/>
        
    </Box>
  )
}

export default TimerCard