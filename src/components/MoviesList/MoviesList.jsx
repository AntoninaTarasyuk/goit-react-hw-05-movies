import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { MovieItem } from "../MovieItem/MovieItem";
import { List, StyledLink } from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovieItem movie={movie} />
          </StyledLink>
        </li>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};