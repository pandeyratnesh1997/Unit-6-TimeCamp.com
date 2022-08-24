// write all route link here and add on app.js

import React from 'react'
import {Routes, Route} from "react-router-dom"
import Sidebar from '../Components/Sidebar'
import TopNav from '../Components/TopNav'

const RoutePage = () => {
  return (
    <>
      <TopNav/>
      <Sidebar/>
    </>
  )
}

export default RoutePage