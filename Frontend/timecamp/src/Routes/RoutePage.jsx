// write all route link here and add on app.js

import React from 'react'
import {Routes, Route} from "react-router-dom"
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'
import TopNav from '../Components/TopNav'
import EditPage from '../Pages/EditPage'
import { Homepage } from '../Pages/Hompage'
import Projectpage from '../Pages/Projectpage'


const RoutePage = () => {
  return (

    <>

      <Projectpage/>
{/* 
      <TopNav/>
      <Homepage/>
      <Footer/> */}
      <Routes>
        <Route path='/task/:taskid/edit' element={<EditPage/>}/>
      </Routes>
  </>

  )
}

export default RoutePage