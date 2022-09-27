import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getFoundMovies } from "../../services/API-service";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { SearchBar } from "../../components/SearchBar/SearchBar";

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  // console.log(query);

  useEffect(() => {
    async function getMovies(queryVal) {
      if (queryVal!=="") {
        try {
          const foundMovies = await getFoundMovies(queryVal);
          setMovies(foundMovies);
        } catch {console.error();}
      }
    };
    getMovies(query);
  }, [query]);
  

  const changeQuery = value => {
    setSearchParams(value !== "" ? { query: value } : {});
  }
  
  return (
    <>
      <SearchBar value={query} onChange={changeQuery}/>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;