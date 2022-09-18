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
import Attendance from "../Pages/Attendance";
import Users from "../Pages/Users";
import Basic from "../Pages/Basic";
import Pro from "../Pages/Pro"
import Custom from "../Pages/Custom";
import { Report } from "../Pages/Report";






const RoutePage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/project" element={<Projectpage />} />
        <Route path="/project/task" element={<Projectpage />} />
        <Route path="/project/task/:taskId/edit" element={<TaskEdit />} />
        <Route path="/timesheet" element={<TimeSheet />} />
        <Route path="/billing" element={<Billing />}/>
          <Route path="/subscription" element={<Subcription />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/basic" element={<Basic />} />
          <Route path="/pro" element={<Pro/>} />
          <Route path="/report" element={<Report/>}/>
        {/* </Route> */}
        <Route path="/register" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/attendance" element={<Attendance/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
    </>
  );
};

export default RoutePage;
