
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

export default function BrowseBooks() {
  const books = useSelector((state) => state.books.books);
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = useMemo(() => {
    let filtered = books;

    // Filter by category
    if (category) {
      filtered = filtered.filter(
        (book) =>
          book.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Search by title or author
    return filtered.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [category, searchTerm]);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">
        Browse Books
      </h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="grid gap-4 mt-8 grid-cols-2 lg:grid-cols-5">
        {filteredBooks.length ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}