import { Button, HStack,Box } from '@chakra-ui/react'
import React from 'react';
import styles from '../Styled/TimeSheet.module.css'

const TimerButton = (props) => {

  return (
    <>
        
            {
            (props.status === 0)? 
                <Button onClick={props.start}>Start</Button> : ''
            }
      
        
            {
            (props.status === 1)? 
            <Box className={styles.timer_btn_group}>
                <Button onClick={props.stop}>Stop</Button> 
                <Button onClick={props.reset}>Reset</Button> 
                
            </Box> 
                : ''
            
            }
        {
            (props.status === 2)? 
            <Box className={styles.timer_btn_group} >
                <Button onClick={props.resume}>Resume</Button> 
                <Button onClick={props.reset}>Reset</Button> 
                
            </Box> 
                : ''
            
            }
    </>
  )
}

export default TimerButton