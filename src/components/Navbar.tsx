import Link from 'next/link';
import React from 'react';

export default function navbar() {
  return (
    <header className=" h-[100px] bg-blue-800  p-10 text-white text-xl font-bold">
      <nav className="flex justify-between max-w-6xl mx-auto">
        <Link href="/">Home</Link>
        <div className="flex gap-4">
          <Link href="/events">Events</Link>
          <Link href="/events">Discord</Link>
        </div>
      </nav>
    </header>
  );
}
