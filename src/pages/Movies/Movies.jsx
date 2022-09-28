import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getFoundMovies } from "../../services/API-service";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { SearchBar } from "../../components/SearchBar/SearchBar";

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  // console.log(query);

  useEffect(() => {
    if (query.trim() === "") { return };
    async function getMovies(queryVal) {
      if (queryVal.trim()!=="") {
        try {
          const foundMovies = await getFoundMovies(queryVal);
          setMovies(foundMovies);
        } catch {console.error();}
      }
    };
    getMovies(query);
  }, [query]);
  

  const changeQuery = value => {
    if (value === query) {
      return toast.info(`You just searched for ${query}. Try searching for something else`);
    };
    setSearchParams(value !== "" ? { query: value } : {});
  }
  
  return (
    <>
      <SearchBar onSubmit={changeQuery}/>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;