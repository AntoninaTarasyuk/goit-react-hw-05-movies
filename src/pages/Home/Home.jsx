import { useState, useEffect } from "react";
import { getTrendyMovies } from "../../services/API-service";
import { MoviesList } from "../../components/MoviesList/MoviesList";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try { setMovies(await getTrendyMovies()); }
      catch (error) { console.error(); }
    };
    getMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </main>
  );
};
export default Home;