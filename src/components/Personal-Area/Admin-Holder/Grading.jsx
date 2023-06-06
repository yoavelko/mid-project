import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Grading.css'
import usersData from '../../Data/users.json';

const Grading = () => {
    return (
        <div className="grading-container">
            {usersData.users.map((user, index) => (
                <div key={index} className="userArea">
                    <h3>{`${user.firstName}'s Grades:`}</h3>
                    <div id="grading-holder">
                        <div>
                            <span className="grades-headers">openning test:</span>{" "}
                            {user.grades?.["start-test"]}
                        </div>
                        <div>
                            <span className="grades-headers">semi-final test:</span>{" "}
                            {user.grades?.["middle-test"]}
                        </div>
                        <div>
                            <span className="grades-headers">final test:</span>{" "}
                            {user.grades?.["final-test"]}
                        </div>
                        <div>
                            <span className="grades-headers">project 1:</span>{" "}
                            {user.grades?.["start-project"]}
                        </div>
                        <div>
                            <span className="grades-headers">project 2:</span>{" "}
                            {user.grades?.["middle-project"]}
                        </div>
                        <div>
                            <span className="grades-headers">project 3:</span>{" "}
                            {user.grades?.["final-project"]}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Grading;


