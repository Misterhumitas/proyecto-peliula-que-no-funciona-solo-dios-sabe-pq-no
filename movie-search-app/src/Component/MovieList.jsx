import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.length === 0 ? (
        <p>No hay resultados</p>
      ) : (
        movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Calificación: {movie.rating}</p>
            <p>{movie.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;
