// export default function CategoryFilter({
//   mobile = false,
//   categories,
//   selectedCategory,
//   setSelectedCategory,
// }) {
//   return (
//     <div className="bg-white rounded-md shadow-md p-3 sticky top-24 h-screen">
//       <h2 className="text-xl font-bold mb-4">Categories</h2>

//       <div className="space-y-3">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`w-full text-left px-4 py-2 rounded-sm transition ${
//               selectedCategory === category
//                 ? "bg-indigo-600 text-white"
//                 : "hover:bg-indigo-100 text-gray-700"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function CategoryFilter({
//   mobile = false,
//   categories = [],
//   selectedCategory,
//   setSelectedCategory,
// }) {
//   return (
//     <div
//       className={`${
//         mobile
//           ? ""
//           : "bg-white rounded-md shadow-md p-3 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto"
//       }`}
//     >
//       {/* <h2 className="text-xl font-bold mb-4">Categories</h2> */}

//       <div className="space-y-2">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`w-full text-left px-4 py-2 rounded-md transition ${
//               selectedCategory === category
//                 ? "bg-indigo-600 text-white"
//                 : "hover:bg-indigo-100 text-gray-700"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function CategoryFilter({
  mobile = false,
  categories = [],
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div
      className={
        mobile
          ? ""
          : "bg-white rounded-md shadow-md p-3 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto"
      }
    >
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`w-full text-left px-4 py-2 rounded-md transition ${
              selectedCategory === category
                ? "bg-indigo-600 text-white"
                : "hover:bg-indigo-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}