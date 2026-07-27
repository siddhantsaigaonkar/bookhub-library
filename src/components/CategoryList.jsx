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
      <h2 className="text-3xl font-bold mb-8">Categories</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/books/${category}`}
            className="bg-white shadow-lg rounded-2xl p-6 text-center font-semibold text-gray-700 hover:bg-blue-600 hover:text-white hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
          >
            {category}
          </Link>
        ))}
      </div>
    </section>
  );
}
