
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BookDetails() {
  const { id } = useParams();

  // Get books from Redux store
  const books = useSelector((state) => state.books.books);

  // Find the selected book
  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <h2 className="text-4xl font-bold text-red-600 mb-4">Book Not Found</h2>

        <p className="text-gray-600 mb-6">
          The book you are looking for does not exist.
        </p>

        <Link
          to="/browse-books"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          ← Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-md shadow-lg overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 p-3">
        {/* Book Image */}
        <div>
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-[300px] md:h-[500px] object-cover rounded-sm shadow-md"
          />
        </div>

        {/* Book Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800">{book.title}</h1>

          <p className="text-xl text-gray-600 mt-2">
            by <span className="font-semibold">{book.author}</span>
          </p>

          <div className="mt-6 space-y-3">
            <p className="text-lg">
              <span className="font-semibold">Category:</span>{" "}
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {book.category}
              </span>
            </p>

            <p className="text-lg">
              <span className="font-semibold">Rating:</span> ⭐ {book.rating}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">Description</h2>

            <p className="text-gray-700 leading-7">{book.description}</p>
          </div>

          <Link
            to="/browse-books"
            className="mt-10 inline-block w-fit bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            ← Back to Browse
          </Link>
        </div>
      </div>
    </div>
  );
}