import { useState } from "react";
import { SearchBar } from "components/SearchBar/SearchBar";
import { MoviesList } from "components/MoviesList/MoviesList";

export const Movies = () => {
  const [movies, setMovies] = useState(null);
  return (
    <main>
      <SearchBar setMovies={setMovies} />
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};