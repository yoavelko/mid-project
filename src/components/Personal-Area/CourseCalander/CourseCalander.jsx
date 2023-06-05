import React, { useContext, useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './CourseCalander.css';
import Time from './Time';
import 'react-calendar/dist/Calendar.css'

const CourseCalander = () => {

  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false)

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
    </div>
  );
}

export default CourseCalander;
