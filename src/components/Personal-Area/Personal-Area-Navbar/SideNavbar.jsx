import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './SideNavbar.css'

const SideNavbar = () => {
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
            <li className="sidebarItem" id="grades"><Link to="/grades">Grades</Link></li>
            <li className="sidebarItem" id="course-calendar"><Link to="/course-calendar">Course Calendar</Link></li>
            <li className="sidebarItem" id="course-task"><Link to="/course-task">Course Task</Link></li>
            <li className="sidebarItem" id="class-records"><Link to="/class-records">Class Records</Link></li>
            <li className="sidebarItem" id="study-presentations"><Link to="/study-presentations">Study Presentations</Link></li>
            <li className="sidebarItem" id="logout"><Link to="/Login">Log-out</Link></li>
           </ul>
      </div>
    </div>

    )
}

export default SideNavbar