import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { MovieItem } from "../MovieItem/MovieItem";
import { Container } from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Container>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovieItem movie={movie} />
          </Link>
        </li>
      ))}
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};