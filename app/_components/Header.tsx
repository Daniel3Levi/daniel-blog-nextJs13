import Link from 'next/link';
export default function Header() {
  return (
    <div className="sticky top-0 z-30 w-full p-6 bg-white sm:px-4 shadow">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <Link href="/">
          <span className="text-2xl font-bold text-purple-600">
            Daniel Levi
          </span>
        </Link>
        <div className="flex items-center space-x-1">
          <ul className="hidden space-x-2 md:inline-flex">
            <Link
              href="/"
              className="px-4 py-2 font-semibold text-gray-600 rounded"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="px-4 py-2 font-semibold text-gray-600 rounded"
            >
              About
            </Link>

            <Link
              href="/posts"
              className="px-4 py-2 font-semibold text-gray-600 rounded"
            >
              Posts
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
