import Link from 'next/link';

export default function Home() {
  return (
    <main className=" p-24 max-w-6xl mx-auto flex flex-col items-center">
      <h1 className="text-6xl font-bold text-center text-blue-50 mb-4">
        Learn Build Teach
      </h1>
      <p className="text-white text-2xl text-center italic mb-10">
        The safe community for developers to Learn, Build, and Teach
      </p>
      <Link href="/events" className="p-4 rounded-md bg-white text-blue-950">
        View Events
      </Link>
    </main>
  );
}
