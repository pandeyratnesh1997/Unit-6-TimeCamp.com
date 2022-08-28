
// write all route link here and add on app.js



import React from "react";
import { Routes, Route } from "react-router-dom";
import Basicsub from "../Components/Basicsub";
import Customsub from "../Components/Customsub";
import Prosub from "../Components/Prosub";
import Subcription from "../Components/Subcription";
import Billing from "../Pages/Billing";
import { Homepage } from "../Pages/Hompage";
import Login from "../Pages/Login";
import Projectpage from "../Pages/Projectpage";
import Signin from "../Pages/Signin";
import TaskEdit from "../Pages/TaskEdit";
import TimeSheet from "../Pages/TimeSheet";



const RoutePage = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/project" element={<Projectpage/>}/>
        <Route path="/project/task" element={<Projectpage/>}/>
        <Route path="/project/task/:taskId/edit" element={<TaskEdit/>}/>
        <Route path="/timesheet" element={<TimeSheet/>}/>
        <Route path="/billing" element={<Billing/>}/>
        <Route path="/billing/subscription" element={<Subcription/>}/>
        <Route path="/billing/custom" element={<Customsub/>}/>
        <Route path="/billing/basics" element={<Basicsub/>}/>
        <Route path="/billing/pro" element={<Prosub/>}/>
        <Route path="/register" element={<Signin/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

    </>
  );
};




export default RoutePage;
