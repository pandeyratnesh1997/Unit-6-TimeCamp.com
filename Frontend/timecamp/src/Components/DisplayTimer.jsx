import { Box } from '@chakra-ui/react'
import React from 'react'

const DisplayTimer = (props) => {
  
    return (
    <Box m={'3'}>
        <span>{(props.time.h >=10) ? props.time.h : '0' + props.time.h}</span>&nbsp;&nbsp;
        <span>{(props.time.m >=10) ? props.time.m : '0' + props.time.m}</span>&nbsp;&nbsp;
        <span>{(props.time.s >=10) ? props.time.s : '0' + props.time.s}</span>&nbsp;&nbsp;
        
    </Box>
  )
}

export default DisplayTimer