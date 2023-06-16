import Link from 'next/link';
import React from 'react';
import EventsList from './EventsList';

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="max-w-sm px-10 h-[calc(100vh-100px)] bg-blue-700 p-10 flex flex-col justify-between">
        <EventsList />
        <Link href="/events/new" className="block text-center underline">
          Create a New Event
        </Link>
      </div>
      <div className="p-10 flex-1">{children}</div>
    </div>
  );
}
