import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "86ce07b8f3d2976f0645a9d5066f9d40";
const params = `api_key=${API_KEY}&language=en-US&include_adult=false`;

export const posterW500 = "https://image.tmdb.org/t/p/w500";
export const posterW200 = "https://image.tmdb.org/t/p/w200/";

export async function getTrendyMovies() {
  const response = await axios.get(`trending/movie/day?${params}`);
  return response.data.results;
};
export async function getFoundMovies(searchQuery) {
  const response = await axios.get(
    `search/movie?q=${searchQuery}&page=1&${params}`
  );
  return response.data.results;
};
export async function getMovieDetails(movieId) {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
export async function getMovieCredits(movieId) {
  const response = await axios.get(
    `movie/${movieId}/credits?&api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};
export async function getMovieReviews(movieId) {
  const response = await axios.get(
    `movie/${movieId}/reviews?&api_key=${API_KEY}&language=en-US`
  );
  return response.data.results
;
};
