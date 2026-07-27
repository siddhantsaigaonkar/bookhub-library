import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
      isActive
        ? "bg-blue-600 text-white shadow-md"
        : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md realtive">
      <div className="max-w-7xl mx-auto px-5 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="BookHub" className="w-15 h-14  object-cover" />
            {/* 
            <div>
              <h1 className="text-2xl font-bold text-blue-700">BookHub</h1>
              <p className="text-xs text-gray-500">Read • Learn • Grow</p>
            </div> */}
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="absolute left-0 top-full w-full  shadow-lg md:hidden rounded-md bg-amber-200 ">
            <div className="flex flex-col p-4 gap-2">
              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/browse-books"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Browse Books
              </NavLink>

              <NavLink
                to="/add-book"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Add Book
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
