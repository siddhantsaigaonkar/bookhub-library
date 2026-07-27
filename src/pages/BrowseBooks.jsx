// import { useMemo, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import BookCard from "../components/BookCard";
// import SearchBar from "../components/SearchBar";
// import CategoryList from "../components/CategoryList";

// export default function BrowseBooks() {
//   const books = useSelector((state) => state.books.books);
//   const { category } = useParams();
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredBooks = useMemo(() => {
//     let filtered = books;

//     // Filter by category
//     if (category) {
//       filtered = filtered.filter(
//         (book) =>
//           book.category.toLowerCase() === category.toLowerCase()
//       );
//     }

//     // Search by title or author
//     return filtered.filter(
//       (book) =>
//         book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         book.author.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [category, searchTerm]);

//   return (
//     <div>
//       <h1 className="text-4xl font-bold mb-6">
//         Browse Books
//       </h1>

//       <SearchBar
//         searchTerm={searchTerm}
//         setSearchTerm={setSearchTerm}
//       />

//       <CategoryList>

//       </CategoryList>

//       <div className="grid gap-4 mt-8 grid-cols-2 lg:grid-cols-5">
//         {filteredBooks.length ? (
//           filteredBooks.map((book) => (
//             <BookCard key={book.id} book={book} />
//           ))
//         ) : (
//           <p>No books found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import BookCard from "../components/BookCard";
import { SlidersHorizontal } from "lucide-react";


export default function BrowseBooks() {
  const books = useSelector((state) => state.books.books);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(books.map((book) => book.category))];

  const filteredBooks = books.filter((book) => {
    const matchSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchCategory =
      selectedCategory === "All" || book.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  return (
    // <div className="grid md:grid-cols-4 gap-4">
    //   {/* Sidebar */}
    //   <div>
    //     <CategoryFilter
    //       categories={categories}
    //       selectedCategory={selectedCategory}
    //       setSelectedCategory={setSelectedCategory}
    //     />
    //   </div>

    //   {/* Books */}
    //   <div className="md:col-span-3">
    //     <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

    //     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
    //       {filteredBooks.map((book) => (
    //         <BookCard key={book.id} book={book} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col md:flex-row gap-6">
      {/* Sidebar */}
      <aside className="w-full md:w-64 lg:w-72 shrink-0 hidden md:block  ">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </aside>

      {/* Main Content */}
      <section className="flex-1">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-1 md:gap-3">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>


      {/* mobile view */}

      <button
  className="fixed bottom-5 left-1/2 -translate-x-1/2 md:hidden flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-xl"
>
  <SlidersHorizontal size={18} />
  Filters
</button>
    </div>
  );
}