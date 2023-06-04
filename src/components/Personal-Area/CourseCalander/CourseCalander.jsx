import React, { useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CourseCalander.css';
import { useState } from 'react';
import { EventContext } from '../EventContext';

const CourseCalander = () => {
    const { addEvent, getEventsByDate } = useContext(EventContext);
    const [date, setDate] = useState(new Date());

    const handleDateChange = (date) => {
        setDate(date);
    };

    const handleEventAdd = () => {
        const event = prompt('Enter the event:');
        if (event) {
            addEvent(date, event);
        }
    };

    const events = getEventsByDate(date);

    return (
        <div className="courseCalnder-area-holder">
            <div className="courseCalnder-area">
                <h1 className="calendarHeader">React Calendar</h1>
                <div className="courseCalendar">
                    <div className="calendar-container">
                        <Calendar onChange={handleDateChange} value={date} />
                        <button onClick={handleEventAdd}>Add Event</button>
                    </div>
                    <div className="text-center">
                        <p>Selected date: {date.toDateString()}</p>
                        <p>Events:</p>
                        <ul className='calendar-map'>
                            {events.map((event, index) => (
                                <li key={index}>{event.event}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCalander;
