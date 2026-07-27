import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">

      <ScrollToTop/>
      <Navbar />

      <main className="flex-1 bg-gradient-to-br from-indigo-100 via-sky-100 to-purple-100">
        <div className="max-[1300px] mx-auto p-3 md:p-6">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}