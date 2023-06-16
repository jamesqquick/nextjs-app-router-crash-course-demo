import React from 'react';
import { Event } from '../../../utils/Events';
interface Props {
  event: Event;
}

export default function EventDetails({ event }: Props) {
  return (
    <div>
      <div className="flex justify-between mb-8 items-center">
        <h2 className="text-2xl font-bold mb-1 ">{event.name}</h2>
        <p className="text-blue-100 text-center ">{event.date.toString()}</p>
      </div>
      <p className="text-xl">{event.description}</p>
    </div>
  );
}
