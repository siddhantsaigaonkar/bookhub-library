import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-10 max-w-lg w-full text-center">
        <h1 className="text-7xl font-bold text-red-500">404</h1>

        <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>

        <p className="text-gray-600 mt-3">
          The page you are looking for doesn't exist.
        </p>

        <div className="bg-gray-100 rounded-lg p-3 mt-6">
          <p className="text-sm text-gray-500">Invalid Route</p>

          <p className="font-semibold text-red-600 break-all">
            {location.pathname}
          </p>
        </div>

        <Link
          to="/"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
