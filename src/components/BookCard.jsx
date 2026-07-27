import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition bg-linear-to-b from-white to-slate-100 border border-gray-200">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-54 md:h-34 md:h-64 object-contain mt-5"
      />

      <div className="p-3 md:p-4 flex flex-col justify-between h-[170px]">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-sm md:text-md font-bold flex-1 line-clamp-1">
            {book.title}
          </h3>

          <p className="text-yellow-500 text-sm shrink-0">⭐ {book.rating}</p>
        </div>

        <p className="text-gray-600 text-sm">{book.author}</p>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed tracking-wide line-clamp-2">
          {book.description}
        </p>

        <Link
          to={`/book/${book.id}`}
          className="flex justify-center bg-blue-600 text-white px-4 py-2 rounded-sm hover:bg-blue-700 mt-2"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
