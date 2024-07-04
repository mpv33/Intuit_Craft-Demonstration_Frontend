// src/components/EventCard.js
import React from 'react';
import { Tooltip } from 'react-tooltip';

const EventCard = ({ event, onSelect, isSelected, disabled, tooltipMessage }) => {
  return (
    <div className={`border p-4 rounded-lg shadow-md ${isSelected ? 'bg-green-100 border-green-500' : 'bg-white'}`}>
      <h3 className="text-lg font-semibold">{event.event_name}</h3>
      <p className="text-gray-600">Category: {event.event_category}</p>
      <p className="text-gray-600">Time: {new Date(event.start_time).toLocaleString()} - {new Date(event.end_time).toLocaleString()}</p>
      <button
        onClick={() => onSelect(event)}
        disabled={disabled}
        data-tooltip-id={`tooltip-${event.id}`}
        data-tooltip-content={tooltipMessage}
        className={`mt-4 py-2 px-4 rounded ${isSelected ? 'bg-red-500 hover:bg-red-600' : disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
      >
        {isSelected ? 'Deselect' : 'Select'}
      </button>
      {disabled && <Tooltip id={`tooltip-${event.id}`} />}
    </div>
  );
};

export default EventCard;
