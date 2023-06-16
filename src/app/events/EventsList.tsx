import { getEvents } from '@/utils/Events';
import Link from 'next/link';
import React from 'react';

export default async function EventsList() {
  const events = await getEvents();
  return (
    <div>
      <h1 className="text-2xl  font-bold text-blue-50 mb-4">Events</h1>
      <ul className="flex flex-col gap-y-6">
        {events.map((event) => (
          <li className="text-xl underline underline-offset-2" key={event.$id}>
            <Link href={`/events/${event.$id}`}> {event.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
