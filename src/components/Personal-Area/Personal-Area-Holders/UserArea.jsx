import React from "react";
import { Link } from "react-router-dom";
import './UserArea.css'
import SideNavbar from "../Personal-Area-Navbar/SideNavbar";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { loginContext } from '../../../Contexts/loginContext';
import usersData from '../../Data/users.json';


const UserArea = () => {


    const {login, setLogin} = useContext(loginContext);
    const [logged, setLogged] = useState('');


    return (
        <div className="personal-area-container">
            <div className="userArea">
                <h3>Welcome, {login}!</h3>
                <div className="ss">
                    <h1>
                        fucker
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default UserArea
