import React, { useContext, useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './CourseCalander.css';
import Time from './Time';
import 'react-calendar/dist/Calendar.css';
import { introContext } from "../../../Contexts/introContext";
import { htmlContext } from '../../../Contexts/htmlContext';
import { jsContext } from '../../../Contexts/jsContext';
import { userIndexContext } from "../../../Contexts/userIndexContext";
import usersData from '../../../components/Data/users.json'

const CourseCalander = () => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [events, setEvents] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [displayIntroStyle, setDisplayIntroStyle] = useState('visible');
  const [displayHTMLStyle, setDisplayHTMLStyle] = useState('visible');
  const [displayJSStyle, setDisplayJSStyle] = useState('visible');
  const [btn, setBtn] = useState('Add Event');
  const [btnStyle, setBtnStyle] = useState('hidden-btn');
  const { userIndex } = useContext(userIndexContext);
  const { introStyle, setIntroStyle } = useContext(introContext);
  const { htmlStyle, setHtmlStyle } = useContext(htmlContext);
  const { jsStyle, setJsStyle } = useContext(jsContext);


  useEffect(() => {
    if (usersData.users[userIndex].username === 'admin') {
      setBtnStyle('visible-btn');
    } else {
      setBtnStyle('hidden-btn')
    }
  }, [])



  const handleRemove = (eventToRemove) => {
    setEvents(events.filter((event) => event !== eventToRemove));
  };

  let counter = 1

  const handleAdd = () => {
    const newEvent = {
      title: inputValue,
      description: 'This is a course event',
      location: 'החילזון 3 רמת גן',
      startTime: date.toDateString(),
      endTime: date.toDateString(),
    };
    setEvents([...events, newEvent]);
    setInputValue('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='calendar-holder'>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)} />
      </div>
      {date.length > 0 ? (
        <p>
          <span>Start:</span>
          {date[0].toDateString()}
          &nbsp;
          &nbsp;
          <span>End:</span>{date[1].toDateString()}
        </p>
      ) : (
        <p>
          {date.toDateString()}
        </p>
      )
      }
      <Time showTime={showTime} date={date} />
      <input className='event-input' id={btnStyle} type="text" value={inputValue} onChange={handleInputChange} />
      <button className='add-event-button' id={btnStyle} onClick={handleAdd}>Add Event</button>
      {events.map((event) => (
        <div key={event.startTime}>
          <p>
            {event.title}
          </p>
          <p>
            <span>Start:</span>
            {event.startTime}
            &nbsp;
            &nbsp;
            <span>End:</span>{event.endTime}
          </p>
          <button onClick={() => handleRemove(event)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default CourseCalander;
