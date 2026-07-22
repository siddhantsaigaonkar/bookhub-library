import { Link } from "react-router-dom";

const categories = [
  "Fiction",
  "Non Fiction",
  "Sci-Fi",
  "Biography",
  "History",
  "Self Help",
];

export default function CategoryList() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Categories</h2>

      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/books/${category}`}
            className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            {category}
          </Link>
        ))}
      </div>
    </section>
  );
}
