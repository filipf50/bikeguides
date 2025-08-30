function SearchBar({ onSearch }) {
  return (
    <div className="flex items-center space-x-2 mt-4">
      <input
        type="text"
        placeholder="Buscar rutas..."
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;