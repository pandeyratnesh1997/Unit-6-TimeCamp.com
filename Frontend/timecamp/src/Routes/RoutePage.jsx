// write all route link here and add on app.js


import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import TopNav from "../Components/TopNav";
import { Homepage } from "../Pages/Hompage";
import Login from "../Pages/Login";
import Projectpage from "../Pages/Projectpage";
import Signin from "../Pages/Signin";



const RoutePage = () => {
  return (
    <>
      <Projectpage />
      <TopNav />
      <Homepage />
      <Footer />
      <Routes>
        <Route path="/register" element={<Signin/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
};


export default RoutePage;

