import React, { useState } from "react";
import { fetchMovies } from "../services/movieService";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Terminal from "../components/Terminal";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("");
  const [logs, setLogs] = useState([]);

  const handleSearch = async () => {
    setLogs((prevLogs) => [...prevLogs, `Buscando: "${search}" con rating: ${rating || "cualquiera"}`]);

    const { data, error } = await fetchMovies(search, rating);
    setMovies(data);

    if (error) {
      setLogs((prevLogs) => [...prevLogs, error]);
    } else {
      setLogs((prevLogs) => [...prevLogs, `Se encontraron ${data.length} resultados.`]);
    }
  };

  return (
    <div>
      <header>
        <h1>Plataforma de Búsqueda de Películas</h1>
      </header>
      <SearchBar search={search} setSearch={setSearch} rating={rating} setRating={setRating} onSearch={handleSearch} />
      <Terminal logs={logs} />
      <MovieList movies={movies} />
      <footer>
        <p>Desarrollado por [Tu Nombre] - Contacto: [Tu Email]</p>
      </footer>
    </div>
  );
};

export default Home;
