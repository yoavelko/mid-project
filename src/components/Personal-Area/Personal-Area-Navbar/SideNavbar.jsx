import React from "react";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import './SideNavbar.css'
import { userIndexContext } from "../../../Contexts/userIndexContext";
import usersData from '../../Data/users.json';

const SideNavbar = () => {

  const { userIndex } = useContext(userIndexContext)
  const [grades, setGrades] = useState('')
  const [grading, setGrading] = useState('')

  useEffect(() =>{
    if (usersData.users[userIndex].username === 'admin'){
      setGrades('hidden-grades')
      setGrading('grading')
    } else {
      setGrades('grades')
      setGrading('hidden-grading')
    }
  }, [])

  
    return (
        <div className="personal-area-holder">
         <div className="header-sidebar">
          <div id="space-between"></div>
          <div>Cytech +</div>
          <div id="logged-as">logged as: {usersData.users[userIndex].username}</div>
          </div>
         <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
         <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
         <div className="spinner diagonal part-1"></div>
         <div className="spinner horizontal"></div>
         <div className="spinner diagonal part-2"></div>
         </label>
         <div id="sidebarMenu">
           <ul className="sidebarMenuInner">
            <li className="sidebarItem" id="homepage"><Link to="/UserArea">Navigate</Link></li>
            <li className="sidebarItem" id={grades}><Link to="/UserGradePage">Grades</Link></li>
            <li className="sidebarItem" id={grading}><Link to="/Grading">Grading</Link></li>
            <li className="sidebarItem" id="CourseCalander"><Link to="/CourseCalander">Course's Schedule</Link></li>
            <li className="sidebarItem" id="UserStudyPresentation"><Link to="/UserStudyPresentation">Files</Link></li>
            <li className="sidebarItem" id="logout"><Link to="/Login">Log-out</Link></li>
           </ul>
      </div>
    </div>

    )
}

export default SideNavbar