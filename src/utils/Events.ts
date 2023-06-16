import { ID } from 'appwrite';
import { appwriteDatabase } from './Appwrite';

export const getEvents = async (): Promise<Event[]> => {
  const { documents } = await appwriteDatabase.listDocuments(
    process.env.APPWRITE_DATABASE_ID || '',
    process.env.APPWRITE_EVENTS_COLLECTION_ID || ''
  );
  const events = documents as unknown as Event[];
  return events;
};

export const createEvent = async (event: Event): Promise<Event> => {
  const createdEvent = (await appwriteDatabase.createDocument(
    process.env.APPWRITE_DATABASE_ID || '',
    process.env.APPWRITE_EVENTS_COLLECTION_ID || '',
    ID.unique(),
    event
  )) as unknown as Event;
  return createdEvent;
};

export const getEventById = async (id: string): Promise<Event> => {
  const event = (await appwriteDatabase.getDocument(
    process.env.APPWRITE_DATABASE_ID || '',
    process.env.APPWRITE_EVENTS_COLLECTION_ID || '',
    id
  )) as unknown as Event;
  if (!event) {
    throw new Error('Event not found');
  }
  return event;
};

export interface Event {
  $id?: string;
  name: string;
  description: string;
  date: Date;
}
