// src/App.js
import React, { useState, useEffect } from 'react';
import './index.css';
import EventCard from './components/EventCard';

const mockData = [
  { id: 1, event_name: "Butterfly 100M", event_category: "Swimming", start_time: "2022-12-17 13:00:00", end_time: "2022-12-17 14:00:00" },
  { id: 2, event_name: "Backstroke 100M", event_category: "Swimming", start_time: "2022-12-17 13:30:00", end_time: "2022-12-17 14:30:00" },
  { id: 3, event_name: "Freestyle 400M", event_category: "Swimming", start_time: "2022-12-17 15:00:00", end_time: "2022-12-17 16:00:00" },
  { id: 4, event_name: "High Jump", event_category: "Athletics", start_time: "2022-12-17 13:00:00", end_time: "2022-12-17 14:00:00" },
  { id: 5, event_name: "Triple Jump", event_category: "Athletics", start_time: "2022-12-17 16:00:00", end_time: "2022-12-17 17:00:00" },
  { id: 6, event_name: "Long Jump", event_category: "Athletics", start_time: "2022-12-17 17:00:00", end_time: "2022-12-17 18:00:00" },
  { id: 7, event_name: "100M Sprint", event_category: "Athletics", start_time: "2022-12-17 17:00:00", end_time: "2022-12-17 18:00:00" },
  { id: 8, event_name: "Lightweight 60kg", event_category: "Boxing", start_time: "2022-12-17 18:00:00", end_time: "2022-12-17 19:00:00" },
  { id: 9, event_name: "Middleweight 75 kg", event_category: "Boxing", start_time: "2022-12-17 19:00:00", end_time: "2022-12-17 20:00:00" },
  { id: 10, event_name: "Heavyweight 91kg", event_category: "Boxing", start_time: "2022-12-17 20:00:00", end_time: "2022-12-17 22:00:00" }
];

const App = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);

  useEffect(() => {
    // Fetch the events data
    setEvents(mockData);
  }, []);

  const isConflicting = (event1, event2) => {
    return !(new Date(event1.end_time) <= new Date(event2.start_time) || new Date(event1.start_time) >= new Date(event2.end_time));
  };

  const handleSelect = (event) => {
    if (selectedEvents.includes(event)) {
      setSelectedEvents(selectedEvents.filter(e => e.id !== event.id));
    } else {
      if (selectedEvents.length < 3 && !selectedEvents.some(e => isConflicting(e, event))) {
        setSelectedEvents([...selectedEvents, event]);
      }
    }
  };

  return (
    <div className="App flex p-4 bg-gray-100 min-h-screen">
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Available Events</h2>
        <div className="space-y-4">
          {events.map(event => {
            const isSelected = selectedEvents.includes(event);
            const isDisabled = selectedEvents.length >= 3 || selectedEvents.some(e => isConflicting(e, event));
            let tooltipMessage = '';
            if (selectedEvents.length >= 3) {
              tooltipMessage = 'You cannot select more than 3 events.';
            } else if (selectedEvents.some(e => isConflicting(e, event))) {
              tooltipMessage = 'This event conflicts with one of your selected events.';
            }

            return (
              <EventCard
                key={event.id}
                event={event}
                onSelect={handleSelect}
                isSelected={isSelected}
                disabled={isDisabled && !isSelected}
                tooltipMessage={tooltipMessage}
              />
            );
          })}
        </div>
      </div>
      <div className="w-1/2 p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Selected Events</h2>
        <div className="space-y-4">
          {selectedEvents.map(event => (
            <EventCard
              key={event.id}
              event={event}
              onSelect={handleSelect}
              isSelected={true}
              disabled={false}
              tooltipMessage={''}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
