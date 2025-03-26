import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "TU_API_KEY_AQUI";
const BASE_URL = "https://developer.imdb.com/";

const MovieSearchApp = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/search`, {
        params: { api_key: API_KEY, query: search, rating: rating }
      });
      setMovies(response.data.results);
      setError(null);
    } catch (err) {
      setError("Error al cargar las películas. Inténtalo nuevamente.");
    }
  };

  return (
    <div>
      <header>
        <h1>Plataforma de Búsqueda de Películas</h1>
      </header>
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
        <button onClick={fetchMovies}>
          Buscar
        </button>
      </div>
      {error && <p>{error}</p>}
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Calificación: {movie.rating}</p>
            <p>{movie.description}</p>
          </div>
        ))}
      </div>
      <footer>
        <p>Desarrollado por [Tu Nombre] - Contacto: [Tu Email]</p>
      </footer>
    </div>
  );
};

export default MovieSearchApp;
