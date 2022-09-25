import PropTypes from "prop-types";
import { posterW500 } from "../../services/API-service";

export const MovieItem = ({ movie }) => {
  const { title, poster_path } = movie;
  return (
    <>
      <img
        src={
          poster_path
            ? `${posterW500}` + poster_path
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