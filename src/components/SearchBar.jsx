function SearchBar({ onSearch }) {
    return (
      <div className="p-6 bg-white shadow">
        <input
          type="text"
          placeholder="Buscar rutas..."
          className="w-full p-3 border rounded-lg"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    );
  }
  
  export default SearchBar;