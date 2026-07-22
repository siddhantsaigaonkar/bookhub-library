import { useParams, Link } from "react-router-dom";
import books from "../data/books";

export default function BookDetails() {
  const { id } = useParams();

  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold text-red-600">Book Not Found</h2>

        <Link
          to="/browse-books"
          className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Book Image */}
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-[500px] object-cover rounded-lg"
        />

        {/* Book Details */}
        <div>
          <h1 className="text-4xl font-bold">{book.title}</h1>

          <p className="text-xl text-gray-600 mt-2">by {book.author}</p>

          <p className="mt-4">
            <span className="font-semibold">Category:</span> {book.category}
          </p>

          <p className="mt-2">
            <span className="font-semibold">Rating:</span> ⭐ {book.rating}
          </p>

          <p className="mt-6 text-gray-700 leading-7">{book.description}</p>

          <Link
            to="/browse-books"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            ← Back to Browse
          </Link>
        </div>
      </div>
    </div>
  );
}
