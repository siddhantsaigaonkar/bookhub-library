import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition duration-300 ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
    }`;

  return (
    <header className="shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">📚 BookHub</h1>

        {/* Navigation */}
        <nav className="flex gap-4">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/browse-books" className={navLinkClass}>
            Browse Books
          </NavLink>

          <NavLink to="/add-book" className={navLinkClass}>
            Add Book
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
