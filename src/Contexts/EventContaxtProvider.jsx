import React, { useState, useEffect } from 'react';
import { EventContext } from './EventContext';

const EventContextProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Call addEvent to add the "fuckfest" event
    addEvent(['06/14/2023'], 'fuckfest', 'Description goes here');
  }, []);

  const addEvent = (dates, title, description) => {
    const newEvent = {
      id: Date.now(),
      dates: '06/14/2023',
      title: 'fuckfest',
      description: 'Description goes here'
    };

    setEvents([...events, newEvent]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventContextProvider;

