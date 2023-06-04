import React, { createContext, useState } from 'react';

// Create the event context
export const EventContext = createContext();

// Create the EventProvider component to wrap the application
export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);

    // Function to add an event to the context
    const addEvent = (date, event) => {
        setEvents((prevEvents) => [...prevEvents, { date, event }]);
    };

    // Function to get events for a specific date
    const getEventsByDate = (date) => {
        return events.filter((event) => event.date.toDateString() === date.toDateString());
    };

    return (
        <EventContext.Provider value={{ events, addEvent, getEventsByDate }}>
            {children}
        </EventContext.Provider>
    );
};
