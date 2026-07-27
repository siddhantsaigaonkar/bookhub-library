import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { FaBookOpen } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
      isActive
        ? "bg-blue-600 text-white shadow-md"
        : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-md ">
      <div className="max-w-7xl mx-auto px-5 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <FaBookOpen className="w-10 h-10 text-blue-400" />
              <h2 className="text-2xl font-bold ">BookHub</h2>
            </div>
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
          <nav className="absolute top-full left-0 w-full mt-2 md:hidden">
            <div className="rounded-xl border border-gray-200 bg-white/95 backdrop-blur-md shadow-xl p-3">
              <div className="flex flex-col gap-2">
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
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
