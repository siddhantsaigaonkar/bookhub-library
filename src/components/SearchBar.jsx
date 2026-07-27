export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search by title or author..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="mt-2 w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
    />
  );
}
