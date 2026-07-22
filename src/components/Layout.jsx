import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto p-6">
        <Outlet />
      </main>
    </>
  );
}
