'use client';
import Link from 'next/link';
export default function PostsError() {
  return (
    <div className="bg-violet-100 w-full px-16 md:px-0 h-screen flex items-center justify-center">
      <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">
          404
        </p>
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
          Post Not Found
        </p>
        <p className="text-gray-500 mt-4  mb-4 pb-4 border-b-2 text-center">
          Sorry, the post you looking for not found.
        </p>

        <Link
          className="text-black border px-5 py-2 border-purple-600 rounded-lg border-t-2 border-l-2"
          href={'/posts'}
        >
          <button>Return to posts</button>
        </Link>
      </div>
    </div>
  );
}
