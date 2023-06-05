import React from "react";
import { Link } from "react-router-dom";
import './UserArea.css'
import SideNavbar from "../Personal-Area-Navbar/SideNavbar";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { loginContext } from '../../../Contexts/loginContext';
import { userIndexContext } from "../../../Contexts/userIndexContext";
import usersData from '../../Data/users.json';


const UserArea = () => {

    const { userIndex, setUserIndex} = useContext(userIndexContext)
    const {login, setLogin} = useContext(loginContext);

    return (
        <div className="personal-area-container">
            <div className="userArea">
                <h3>Welcome back, {usersData.users[userIndex].firstName}!</h3>
            </div>
            <div id="navigate">
                <div className="navigate" id="personal-grades">Grades</div>
                <div className="navigate" id="personal-schedule">Schedule</div>
                <div className="navigate" id="personal-tasks">Tasks</div>
                <div className="navigate" id="personal-files">Files</div>
            </div>
        </div>
    );
}

export default UserArea
