import axios from "axios";

const API_KEY = "https://pokeapi.co/api/v2/pokemon/ditto";
const BASE_URL = "https://developer.imdb.com/";

export const fetchMovies = async (search, rating) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: { api_key: API_KEY, query: search, rating },
    });
    return { data: response.data.results, error: null };
  } catch (error) {
    return { data: [], error: "Error al cargar las películas. Inténtalo nuevamente." };
  }
};
