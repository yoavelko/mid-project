 import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import './UserGradePage.css'
import SideNavbar from "../Personal-Area-Navbar/SideNavbar";
import { userIndexContext } from "../../../Contexts/userIndexContext";
import usersData from '../../Data/users.json';

const UserGradePage = () => {

    const { userIndex, setUserIndex} = useContext(userIndexContext)

    return (
    <div className="grades-first-container">
        <div className="userArea">
            <h3>{usersData.users[userIndex].firstName}'s Grades:</h3>
        </div>
        <div id="grades-container">
            <div><span className="grades-headers">openning test:</span>  {usersData.users[userIndex].grades["start-test"]}</div>
            <div><span className="grades-headers">semi-final test:</span>  {usersData.users[userIndex].grades["middle-test"]}</div>
            <div><span className="grades-headers">final test:</span>  {usersData.users[userIndex].grades["final-test"]}</div>
            <div><span className="grades-headers">project 1:</span>  {usersData.users[userIndex].grades["start-project"]}</div>
            <div><span className="grades-headers">project 2:</span>  {usersData.users[userIndex].grades["middle-project"]}</div>
            <div><span className="grades-headers">project 3:</span>  {usersData.users[userIndex].grades["final-project"]}</div>
        </div>
    </div>

    )
}

export default UserGradePage