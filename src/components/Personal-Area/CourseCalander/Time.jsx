import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './CourseCalander.css';

const times = [
    { date: new Date(2023, 7, 13),  event: 'FIRST DAY OF THE COURSE:  INTRO-BASICKS' },
    { date: new Date(2023, 7, 14),  event: 'INTRO-BASICKS' },
    { date: new Date(2023, 7, 15),  event: 'HTML & CSS' },
    { date: new Date(2023, 7, 16),  event: 'HTML & CSS' },
    { date: new Date(2023, 7, 17),  event: 'HTML & CSS' },
    { date: new Date(2023, 7, 20),  event: 'HTML & CSS' },
    { date: new Date(2023, 7, 21),  event: 'HTML & CSS' },
    { date: new Date(2023, 7, 22),  event: 'HTML & CSS' },
    { date: new Date(2023, 7, 23),  event: 'HTML & CSS' },
    { date: new Date(2023, 7, 24),  event: 'JAVASCRIPT' },
    { date: new Date(2023, 7, 27),  event: 'JAVASCRIPT' },
    { date: new Date(2023, 7, 28),  event: 'JAVASCRIPT' },
    { date: new Date(2023, 7, 29),  event: 'JAVASCRIPT' },
    { date: new Date(2023, 7, 30),  event: 'JAVASCRIPT' },
    { date: new Date(2023, 7, 31),  event: 'JAVASCRIPT' },
    { date: new Date(2023, 8, 3),  event: 'JAVASCRIPT' },
    { date: new Date(2023, 8, 4),  event: 'FORTEND DEVELPMENT REACT & STATE MANAGEMENT' },
    { date: new Date(2023, 8, 5),  event: 'FORTEND DEVELPMENT REACT & STATE MANAGEMENT' },
    { date: new Date(2023, 8, 6),  event: 'FORTEND DEVELPMENT REACT & STATE MANAGEMENT' },
    { date: new Date(2023, 8, 7),  event: 'FORTEND DEVELPMENT REACT & STATE MANAGEMENT' },
    { date: new Date(2023, 8, 10),  event: 'FORTEND DEVELPMENT REACT & STATE MANAGEMENT' },
    { date: new Date(2023, 8, 11),  event: 'FORTEND DEVELPMENT REACT & STATE MANAGEMENT' },
    { date: new Date(2023, 8, 12),  event: 'FORTEND DEVELPMENT REACT & STATE MANAGEMENT' },
    { date: new Date(2023, 8, 13),  event: 'MID-PROJECT' },
    { date: new Date(2023, 8, 14),  event:  'MID-PROJECT' },
    { date: new Date(2023, 8, 17),  event:  'MID-PROJECT' },
    { date: new Date(2023, 8, 18),  event:  'MID-PROJECT' },
    { date: new Date(2023, 8, 19),  event:  'MID-PROJECT' },
    { date: new Date(2023, 8, 20),  event:  'MID-PROJECT' },
    { date: new Date(2023, 8, 21),  event:  'MID-PROJECT' },
    { date: new Date(2023, 8, 24),  event:  'MID-PROJECT' },
    { date: new Date(2023, 8, 28),  event:  'MID-PROJECT' },
    { date: new Date(2023, 8, 26),  event:  'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 8, 27),  event:  'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 8, 28),  event:  'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 9, 1),  event:  'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 9, 2),  event:  'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 9, 3),  event:  'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 9, 4),  event:  'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 9, 5),  event: 'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 9, 8),  event: 'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 9, 9),  event: 'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 9, 10),  event: 'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 9, 11),  event: 'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 9, 12),  event: 'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 9, 15),  event: 'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 9, 19),  event: 'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 9, 22),  event: 'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 9, 23),  event: 'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 9, 24),  event: 'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 9, 25),  event: 'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 9, 26),  event: 'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 9, 29),  event: 'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 9, 30),  event: 'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 9, 31),  event: 'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 10, 1),  event: 'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 10, 2),  event: 'BACKEND DEVELOPMENT USING NODE.JS & MONGO 170 HOURS' },
    { date: new Date(2023, 10, 5),  event: 'HACKATON!!!!' },
    { date: new Date(2023, 10, 6),  event: 'HACKATON!!!!' },
    { date: new Date(2023, 10, 7),  event: 'PAYTHON FUNDAMENTALS' },
    { date: new Date(2023, 10, 8),  event: 'PAYTHON FUNDAMENTALS' },
    { date: new Date(2023, 10, 9),  event: 'PAYTHON FUNDAMENTALS' },
    { date: new Date(2023, 10, 12),  event: 'PAYTHON FUNDAMENTALS' },
    { date: new Date(2023, 10, 13),  event: 'PAYTHON FUNDAMENTALS' },
    { date: new Date(2023, 10, 14),  event: 'PAYTHON FUNDAMENTALS' },
    { date: new Date(2023, 10, 15),  event: 'PAYTHON FUNDAMENTALS' },
    { date: new Date(2023, 10, 16),  event: 'PAYTHON FUNDAMENTALS' },
    { date: new Date(2023, 10, 19),  event: 'PAYTHON FUNDAMENTALS' },
    { date: new Date(2023, 10, 20),  event: 'PAYTHON FUNDAMENTALS' },
    { date: new Date(2023, 10, 21),  event: 'SQL' },
    { date: new Date(2023, 10, 22),  event: 'SQL' },
    { date: new Date(2023, 10, 23),  event: 'ADVANCED GIT COMMANDS' },
    { date: new Date(2023, 10, 26),  event: 'ADVANCED GIT COMMANDS' },
    { date: new Date(2023, 10, 27),  event: 'WEB SERVICE' },
    { date: new Date(2023, 10, 28),  event: 'WEB SERVICE' },
    { date: new Date(2023, 10, 29),  event: 'WEB SERVICE' },
    { date: new Date(2023, 10, 30),  event: 'WEB SERVICE' },
    { date: new Date(2023, 11, 3),  event: 'FINAL-PROJECT' },
    { date: new Date(2023, 11, 4),  event: 'FINAL-PROJECT' },
    { date: new Date(2023, 11, 5),  event: 'FINAL-PROJECT' },
    { date: new Date(2023, 11, 6),  event: 'FINAL-PROJECT' },
    { date: new Date(2023, 11, 7),  event: 'FINAL-PROJECT' },
    { date: new Date(2023, 11, 10),  event: 'FINAL-PROJECT' },
    { date: new Date(2023, 11, 11),  event: 'FINAL-PROJECT' },
    { date: new Date(2023, 11, 12),  event: 'FINAL-PROJECT' },
    { date: new Date(2023, 11, 13),  event: 'FINAL-PROJECT' },
    { date: new Date(2023, 11, 14),  event: 'FINAL-PROJECT' },
    { date: new Date(2023, 11, 17),  event: 'FINAL-PROJECT' },
    { date: new Date(2023, 11, 18),  event: 'FINAL-PROJECT' },
    { date: new Date(2023, 11, 19),  event: 'FINAL-PROJECT' },
    { date: new Date(2023, 11, 20),  event: 'FINAL-PROJECT' },
    { date: new Date(2023, 11, 21),  event: 'FINAL-PROJECT' },
    { date: new Date(2023, 11, 24),  event: 'FINAL-PROJECT' },
    { date: new Date(2023, 11, 25),  event: 'FINAL-PROJECT' },
    { date: new Date(2023, 11, 26),  event: 'PREPARATION FOR JOB PLACEMENT' },
    { date: new Date(2023, 11, 27),  event: 'PREPARATION FOR JOB PLACEMENT' },
    { date: new Date(2023, 11, 28),  event: 'PREPARATION FOR JOB PLACEMENT' },
    { date: new Date(2023, 11, 31),  event: 'PREPARATION FOR JOB PLACEMENT' },
    { date: new Date(2024, 0, 1),  event: 'PREPARATION FOR JOB PLACEMENT' },
    { date: new Date(2024, 0, 2),  event: 'PREPARATION FOR JOB PLACEMENT' },
    { date: new Date(2024, 0, 3),  event: 'PREPARATION FOR JOB PLACEMENT' },
    { date: new Date(2024, 0, 4),  event: 'PREPARATION FOR JOB PLACEMENT' },
    { date: new Date(2024, 0, 7),  event: 'LAST DAY OF THE COURSE' },
];

function Times(props) {
    const [event, setEvent] = useState(null);
    const [info, setInfo] = useState(false);

    function displayInfo(e) {
        setInfo(e.target.dataset.event ? true : false);
        console.log('event', e.target.dataset)
        setEvent(e.target.dataset.event);
    }

    return (
        <div className="times">
            {times.map((timeObj, index) => {
                // Only display buttons for the selected date
                if (timeObj.date.toDateString() === props.date.toDateString()) {
                    return (
                        <div key={index}>
                            
                                {timeObj.event}
                                {(e) => displayInfo(e)}
                            
                                {timeObj.time}
                            
                        </div>
                    );
                }
                return null;
            })}
            <div>
                {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
            </div>
        </div>
    );
}

export default Times;
