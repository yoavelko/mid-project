import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './AdminNavbar.css'

const AdminNavbar = () => {
  return (
    <div className="admin-area-holder">
      <div className="adminHeader-sidebar"></div>
      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
      <label htmlFor="openSidebarMenu" className="adminSidebarIconToggle">
        <div className="adminSpinner diagonal part-1"></div>
        <div className="adminSpinner horizontal"></div>
        <div className="adminSpinner diagonal part-2"></div>
      </label>
      <div id="adminSidebarMenu">
        <ul className="SadminidebarMenuInner">
          <li className="adminSidebarItem" id="homepage"><Link to="/">Homepage</Link></li>
          <li className="adminSidebarItem" id="AdminCourseCalander"><Link to="/AdminCourseCalander">Course Calendar</Link></li>
          <li className="adminSidebarItem" id="AdminCourseTask"><Link to="/AdminCourseTask">Course Task</Link></li>
          <li className="adminSidebarItem" id="AdminStudyPresentation"><Link to="/AdminStudyPresentation">Study Presentations</Link></li>
          <li className="adminSidebarItem" id="Grading"><Link to="/Grading">Grading</Link></li>
          <li className="adminSidebarItem" id="logout"><Link to="/Login">Log-out</Link></li>
        </ul>
      </div>
    </div>

  )
}

export default AdminNavbar