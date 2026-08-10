// app/error.tsx
'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-red-50 text-red-900 flex items-center justify-center min-h-screen">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
        <p className="mb-4">{error.message}</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Try again
        </button>
        <p className="mt-4">
          <Link href="/" className="underline text-blue-600 hover:text-blue-800">
            Return home
          </Link>
        </p>
      </div>
    </div>
  );
}
