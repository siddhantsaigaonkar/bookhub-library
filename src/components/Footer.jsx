import { Link } from "react-router-dom";
// import { BookOpen, Facebook, Instagram, Twitter, Github } from "lucide-react";\
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaBookOpen } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <FaBookOpen className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">BookHub</h2>
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Discover, organize, and explore your favorite books. BookHub helps
              readers manage their personal library with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link to="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>

              <Link
                to="/browse-books"
                className="hover:text-blue-400 transition-colors"
              >
                Browse Books
              </Link>

              <Link
                to="/add-book"
                className="hover:text-blue-400 transition-colors"
              >
                Add Book
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect With Us
            </h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="bg-slate-700 p-3 rounded-full hover:bg-blue-600 transition-all duration-300"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="#"
                className="bg-slate-700 p-3 rounded-full hover:bg-pink-600 transition-all duration-300"
              >
                <CiInstagram size={20} />
              </a>

              <a
                href="#"
                className="bg-slate-700 p-3 rounded-full hover:bg-sky-500 transition-all duration-300"
              >
                <CiTwitter size={20} />
              </a>

              <a
                href="#"
                className="bg-slate-700 p-3 rounded-full hover:bg-gray-900 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} BookHub. All rights reserved.
          </p>

          <p className="text-sm text-gray-500 text-center">
            Made with ❤️ for book lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
