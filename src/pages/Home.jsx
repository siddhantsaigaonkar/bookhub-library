import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CategoryList from "../components/CategoryList";
import BookCard from "../components/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { Navigation, Grid } from "swiper/modules";



export default function Home() {
  const books = useSelector((state) => state.books.books);
  const totalBooks = books.length;
const categories = books.reduce((arr, book) => {
  const category = book.category.trim().toLowerCase();

  if (!arr.includes(category)) {
    arr.push(category);
  }

  return arr;
}, []);

const totalCategories = categories.length;
  const averageRating =
    books.length > 0
      ? (
          books.reduce((sum, book) => sum + Number(book.rating), 0) /
          books.length
        ).toFixed(1)
      : 0;
  const highestRatedBook =
    books.length > 0
      ? Math.max(...books.map((book) => Number(book.rating)))
      : 0;
const popularBooks = books.filter((book) => book.rating >= 4);

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-sm bg-linear-to-r from-blue-700 via-indigo-700 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative px-6 py-5 md:px-12 lg:px-20 lg:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to <span className="text-yellow-300">BookHub</span> 
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-base md:text-xl text-gray-100">
            Discover thousands of books across every genre. Explore, learn, and
            build your own digital library with BookHub.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/browse-books"
              className="rounded-xl bg-white text-blue-700 px-8 py-3 font-semibold shadow-lg hover:scale-105 transition"
            >
              Browse Books
            </Link>

            <Link
              to="/add-book"
              className="rounded-xl border-2 border-white px-8 py-3 font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              Add Book
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600">{totalBooks}</h2>
          <p>Total Books</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <h2 className="text-3xl font-bold text-green-600">
            {totalCategories}
          </h2>
          <p>Categories</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <h2 className="text-3xl font-bold text-yellow-500">
            ⭐ {averageRating}
          </h2>
          <p>Average Rating</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <h2 className="text-3xl font-bold text-purple-600">
            ⭐ {highestRatedBook}
          </h2>
          <p>Highest Rating</p>
        </div>
      </div>

      {/* Categories */}
      <section>
        <CategoryList />
      </section>

      {/* Popular Books */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">📖 Popular Books</h2>

          <Link
            to="/browse-books"
            className="text-blue-600 font-semibold hover:underline"
          >
            View All →
          </Link>
        </div>

        <Swiper
          modules={[Navigation, Grid]}
          navigation
          spaceBetween={10}
          grid={{
            rows: 2,
            fill: "row",
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {popularBooks.map((book) => (
            <SwiperSlide key={book.id}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Bottom Banner */}
      <section className="rounded-3xl bg-linear-to-r from-indigo-600 to-blue-600 text-white p-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Grow Your Library?
        </h2>

        <p className="mt-4 text-lg text-gray-100">
          Add your favorite books and share your reading collection with
          everyone.
        </p>

        <Link
          to="/add-book"
          className="inline-block mt-8 bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Add Your First Book
        </Link>
      </section>
    </div>
  );
}
