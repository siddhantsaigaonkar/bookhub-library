import CategoryList from "../components/CategoryList";
import BookCard from "../components/BookCard";
import books from "../data/books";

export default function Home() {
  const popularBooks = books.slice(0, 4);

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to BookHub 📚</h1>

        <p className="text-lg max-w-2xl mx-auto">
          Discover your next favorite book. Browse thousands of books across
          different categories and build your own digital library.
        </p>
      </section>

      {/* Categories */}
      <CategoryList />

      {/* Popular Books */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Popular Books</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {popularBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}
