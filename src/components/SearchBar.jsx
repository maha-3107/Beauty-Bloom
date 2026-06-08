import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-box">
      <Search size={20} className="search-icon" />

      <input
        type="text"
        className="search-input"
        placeholder="Search beauty products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;