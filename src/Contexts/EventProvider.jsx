import { useState } from "react";
import { EventContext } from "./EventContext";

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
  
    const addEvent = (newEvent) => {
      setEvents([...events, newEvent]);
    };
  
    const removeEvent = (eventToRemove) => {
      setEvents(events.filter((event) => event !== eventToRemove));
    };
  
    return (
      <EventContext.Provider value={{ events, addEvent, removeEvent }}>
        {children}
      </EventContext.Provider>
    );
  };