import { getEventById } from '@/utils/Events';
import React from 'react';
import EventDetails from './EventDetails';
import { NextPage } from 'next';
import { PageProps } from '../../../../.next/types/app/layout';
const delay = (delayInms: number) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};

export default async function EventDetailsPage({ params }: PageProps) {
  await delay(2000);
  const id = params.eventId;
  const event = await getEventById(id);
  return (
    <div>
      <EventDetails event={event} />
    </div>
  );
}
