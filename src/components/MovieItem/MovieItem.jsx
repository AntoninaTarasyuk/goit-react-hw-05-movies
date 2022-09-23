import PropTypes from "prop-types";
import { poster } from "../../services/API-service";

export const MovieItem = ({ movie }) => {
  const { title, poster_path } = movie;
  return (
    <>
      <img
        src={
          poster_path
            ? `${poster}` + poster_path
            : "https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg"
        }
        alt={title}
        />
      <h2>{title}</h2>
    </>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }).isRequired,
};