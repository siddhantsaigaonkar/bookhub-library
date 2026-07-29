
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";

import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import BookCard from "../components/BookCard";

export default function BrowseBooks() {
  const books = useSelector((state) => state.books.books);
  const { category } = useParams();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const selectedCategory = category || "All";

  const categories = ["All", ...new Set(books.map((book) => book.category))];

  const filteredBooks = books.filter((book) => {
    const matchSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchCategory =
      selectedCategory === "All" || book.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  function handleCategoryChange(category) {
    setShowFilters(false);

    if (category === "All") {
      navigate("/browse-books");
    } else {
      navigate(`/books/${category}`);
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 lg:w-72 shrink-0">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryChange}
        />
      </aside>

      {/* Books */}
      <section className="flex-1">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4">
          {filteredBooks.length ? (
            filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
          ) : (
            <p>No books found.</p>
          )}
        </div>
      </section>

      {/* Mobile Filter Button */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 md:hidden z-40 animate-soft-bounce">
        <button
          onClick={() => setShowFilters(true)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-xl"
        >
          <SlidersHorizontal size={18} />
          Filters
        </button>
      </div>

      {/* Mobile Bottom Sheet */}
      {showFilters && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setShowFilters(false)}
          />

          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl p-5 z-50 md:hidden">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>

            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">Categories</h2>

              <button onClick={() => setShowFilters(false)}>
                <X />
              </button>
            </div>

            <CategoryFilter
              mobile
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={handleCategoryChange}
            />
          </div>
        </>
      )}
    </div>
  );
}