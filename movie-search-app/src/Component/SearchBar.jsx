import React from "react";

const SearchBar = ({ search, setSearch, rating, setRating, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar película..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filtrar por calificación"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={onSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
