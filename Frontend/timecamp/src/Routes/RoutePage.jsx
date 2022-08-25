// write all route link here and add on app.js

import React from 'react'
import {Routes, Route} from "react-router-dom"
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'
import TopNav from '../Components/TopNav'
import Projectpage from '../Pages/Projectpage'

const RoutePage = () => {
  return (

    <>

      <Projectpage/>

      <TopNav/>
      <Footer/>
  </>

  )
}

export default RoutePage