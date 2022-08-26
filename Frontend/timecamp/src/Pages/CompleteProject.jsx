import { HStack } from '@chakra-ui/react'
import React from 'react'
import EditPage from './EditPage'
import Projectpage from './Projectpage'

const CompleteProject = () => {
  return (
  <HStack justifyContent={'space-between'}>
    <Projectpage/>
    <EditPage/>
  </HStack>
  )
}

export default CompleteProject