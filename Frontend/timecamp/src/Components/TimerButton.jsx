import { Button, HStack } from '@chakra-ui/react'
import React from 'react'

const TimerButton = (props) => {

  return (
    <>
        
            {
            (props.status === 0)? 
                <Button onClick={props.start}>Start</Button> : ''
            }
      
        
            {
            (props.status === 1)? 
            <HStack>
                <Button onClick={props.stop}>Stop</Button> 
                <Button onClick={props.reset}>Reset</Button> 
                
            </HStack> 
                : ''
            
            }
        {
            (props.status === 2)? 
            <HStack>
                <Button onClick={props.resume}>Resume</Button> 
                <Button onClick={props.reset}>Reset</Button> 
                
            </HStack> 
                : ''
            
            }
    </>
  )
}

export default TimerButton