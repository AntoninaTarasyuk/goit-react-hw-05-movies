import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";
import { getFoundMovies } from "../../services/API-service";
// import { SearchInput, SearchBtn } from "../../components/SearchBar/SearchBar.styled";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [searchQuery, setSearchQuery] = useState("");
  const query = searchParams.get("query") ?? "";

  console.log(query);

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
    console.log(value);
    // e.preventDefault();
    // setSearchQuery(e.target.value);
    setSearchParams(value !== "" ? { query: value } : {});
  }
  return (
    <>
      {/* <form onSubmit={changeQuery}>
        <SearchInput
          type="text"
          value={searchQuery}
          placeholder="Enter movie name"
          onChange={e => setSearchQuery(e.target.value)}
        />
        <SearchBtn type="submit"><FaSearch /></SearchBtn>
      </form> */}
      <SearchBar value={query} onChange={changeQuery}/>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};