import React from 'react';

export default async function NewEventForm(formData: FormData) {
  async function addEventHandler() {
    //!Not working and don't know why :)
    'use server';
    console.log('Handle form submission');
  }

  return (
    <form action={addEventHandler}>
      <div className="mb-4">
        <label
          className="block text-gray-200 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Event Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          name="name"
          type="text"
          placeholder="Event Name"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-200 text-sm font-bold mb-2"
          htmlFor="date"
        >
          Event Date
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          id="date"
          name="date"
          type="date"
          placeholder="Event Date"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-200 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Event Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          name="description"
          placeholder="Event Description"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Event
        </button>
      </div>
    </form>
  );
}
