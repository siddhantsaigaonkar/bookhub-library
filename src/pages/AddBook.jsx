import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const books = useSelector((state) => state.books.books);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    image: "",
    rating: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.author.trim()) newErrors.author = "Author is required";
    if (!formData.category.trim()) newErrors.category = "Category is required";
    if (!formData.image.trim()) newErrors.image = "Image URL is required";
    if (!formData.rating) newErrors.rating = "Rating is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    dispatch(
      addBook({
        id: books.length ? Math.max(...books.map((b) => b.id)) + 1 : 1,
        ...formData,
        rating: Number(formData.rating),
      }),
    );

    navigate("/browse-books");
  }

  return (
    <div className="">
      <div className="min-h-screen  flex items-center justify-center px-2 md:px-4 py-5 md:py-10">
        <div className="w-full max-w-3xl bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-3 md:p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 mb-2">
           Add New Book
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Fill in the details to add a new book to BookHub.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="font-semibold text-gray-700">Book Title</label>
              <input
                type="text"
                name="title"
                placeholder="Atomic Habits"
                value={formData.title}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            {/* Author */}
            <div>
              <label className="font-semibold text-gray-700">Author</label>
              <input
                type="text"
                name="author"
                placeholder="James Clear"
                value={formData.author}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
              {errors.author && (
                <p className="text-red-500 text-sm mt-1">{errors.author}</p>
              )}
            </div>

            {/* Category & Rating */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="font-semibold text-gray-700">Category</label>
                <input
                  type="text"
                  name="category"
                  placeholder="Self Help"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
                />
                {errors.category && (
                  <p className="text-red-500 text-sm mt-1">{errors.category}</p>
                )}
              </div>

              <div>
                <label className="font-semibold text-gray-700">Rating</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  step="0.1"
                  name="rating"
                  placeholder="4.8"
                  value={formData.rating}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
                />
                {errors.rating && (
                  <p className="text-red-500 text-sm mt-1">{errors.rating}</p>
                )}
              </div>
            </div>

            {/* Image */}
            <div>
              <label className="font-semibold text-gray-700">
                Cover Image URL
              </label>
              <input
                type="text"
                name="image"
                placeholder="https://example.com/book.jpg"
                value={formData.image}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">{errors.image}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="font-semibold text-gray-700">Description</label>
              <textarea
                rows="5"
                name="description"
                placeholder="Write a short description..."
                value={formData.description}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition resize-none"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:scale-[1.02] active:scale-95"
            >
              📖 Add Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}