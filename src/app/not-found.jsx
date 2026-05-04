import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="text-center space-y-4">

        <h1 className="text-6xl font-bold text-pink-500">
          404
        </h1>

        <h2 className="text-xl font-semibold">
          Page not found
        </h2>

        <p className="text-sm opacity-70">
          The page you are looking for does not exist.
        </p>

        <Link href="/">
          <button className="btn bg-pink-500 text-white mt-3">
            Go Home
          </button>
        </Link>

      </div>

    </div>
  );
}