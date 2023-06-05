import React, { useState } from 'react';
import {EventContext} from './EventContext';

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
  
    return (
      <EventContext.Provider value={{ events, setEvents }}>
        {children}
      </EventContext.Provider>
    );
  };

export default EventProvider;
