// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// export default function Layout() {
//   return (
//     <>
//       <Navbar />
//       <div className="flex-1 bg-linear-to-br from-indigo-100 via-sky-100 to-purple-100 ">
//         <main className="max-w-7xl mx-auto p-3 md:p-6">
//           <Outlet />
//         </main>
//       </div>
//       <Footer/>
//     </>
//   );
// }

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gradient-to-br from-indigo-100 via-sky-100 to-purple-100">
        <div className="max-w-7xl mx-auto p-3 md:p-6">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}