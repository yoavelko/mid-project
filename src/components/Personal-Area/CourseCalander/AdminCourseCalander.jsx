import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './CourseCalander.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import SideNavbar from "../Personal-Area-Navbar/SideNavbar";

const CourseCalander = () => {
    const [date, setDate] = useState(new Date())
    
    return (
        <div className="courseCalnder-area-holder">
        </div>

    )
}

export default CourseCalander