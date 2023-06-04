import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './AdminNavbar.css'

const AdminNavbar = () => {
    return (
        <div className="personal-area-holder">
         <div className="header-sidebar"></div>
         <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
         <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
         <div className="spinner diagonal part-1"></div>
         <div className="spinner horizontal"></div>
         <div className="spinner diagonal part-2"></div>
         </label>
         <div id="sidebarMenu">
           <ul className="sidebarMenuInner">
            <li className="sidebarItem" id="homepage"><Link to="/">Homepage</Link></li>
            <li className="sidebarItem" id="AdminCourseCalander"><Link to="/AdminCourseCalander">Course Calendar</Link></li>
            <li className="sidebarItem" id="AdminCourseTask"><Link to="/AdminCourseTask">Course Task</Link></li>
            <li className="sidebarItem" id="AdminStudyPresentation"><Link to="/AdminStudyPresentation">Study Presentations</Link></li>
            <li className="sidebarItem" id="Grading"><Link to="/Grading">Grading</Link></li>
            <li className="sidebarItem" id="logout"><Link to="/Login">Log-out</Link></li>
           </ul>
      </div>
    </div>

    )
}

export default AdminNavbar