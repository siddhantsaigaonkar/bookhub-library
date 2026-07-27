import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-indigo-100 via-sky-100 to-purple-100">
        <main className="max-w-7xl mx-auto p-3 md:p-6">
          <Outlet />
        </main>
      </div>
    </>
  );
}
