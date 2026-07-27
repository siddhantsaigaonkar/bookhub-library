// export default function SearchBar({ searchTerm, setSearchTerm }) {
//   return (
//     <input
//       type="text"
//       placeholder="Search by title or author..."
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//       className="mt-2 w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
//     />
//   );
// }

import { Search } from "lucide-react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative mt-4">
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search books by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          w-full
          md:w-1/2
          rounded-md
          border border-gray-200
          bg-white
          py-3
          pl-12
          pr-4
          text-gray-700
          shadow-md
          transition-all
          duration-300
          placeholder:text-gray-400
          focus:border-indigo-500
          focus:ring-4
          focus:ring-indigo-200
          focus:shadow-lg
          outline-none
        "
      />
    </div>
  );
}