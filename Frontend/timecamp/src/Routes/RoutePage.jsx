// write all route link here and add on app.js

import React from 'react'
import {Routes, Route} from "react-router-dom"
import Sidebar from '../Components/Sidebar'
import TopNav from '../Components/TopNav'
import Projectpage from '../Pages/Projectpage'

const RoutePage = () => {
  return (
    <>
      {/* <TopNav/>
      <Sidebar/> */}
      <Projectpage/>
    </>
  )
}

export default RoutePage