import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition bg-white">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold">{book.title}</h3>

        <p className="text-gray-600 mt-2">{book.author}</p>

        <p className="text-yellow-500 mt-2">⭐ {book.rating}</p>

        <Link
          to={`/book/${book.id}`}
          className="inline-block mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
