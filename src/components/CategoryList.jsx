import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CategoryList() {
  const books = useSelector((state) => state.books.books);

  // Get unique categories
  const categories = books.reduce((arr, book) => {
    if (!arr.includes(book.category)) {
      arr.push(book.category);
    }
    return arr;
  }, []);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-3">Categories</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/books/${category}`}
            className="bg-white shadow-lg rounded-md p-5 text-center text-lg font-semibold text-gray-700 hover:bg-linear-to-r from-blue-700 via-indigo-700 to-purple-700 hover:text-white hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
          >
            {category}
          </Link>
        ))}
      </div>
    </section>
  );
}
