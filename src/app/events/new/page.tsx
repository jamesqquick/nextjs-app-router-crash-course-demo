import NewEventForm from './NewEventForm';
import React from 'react';

export default async function NewEventPage() {
  return (
    <div>
      <h1 className="text-2xl font-2xl font-bold mb-10">Create a New Event</h1>
      <NewEventForm />
    </div>
  );
}
