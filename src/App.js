import { useState, useEffect } from 'react';
import Calendar from './Calender';
import EventForm from './EventForm';

function App() {
  const [events, setEvents] = useState([
    {
      title: 'יומולדת לחני',
      start: new Date('2024-06-23'),
      end: new Date('2024-06-23'),
    },
  ]);

  useEffect(() => {
    // שמור את האירועים ב-localStorage בכל פעם שהם מתעדכנים
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div>
      <h1>Class Calendar App</h1>
      <EventForm addEvent={addEvent} />
      <Calendar events={events} />
    </div>
  );
}

export default App;
