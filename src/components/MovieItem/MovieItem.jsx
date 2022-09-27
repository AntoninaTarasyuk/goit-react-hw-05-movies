import PropTypes from "prop-types";
import { posterW500 } from "../../services/API-service";
import { CardWrapper, H2 } from "./MovieItem.Styled";

export const MovieItem = ({ movie }) => {
  const { title, poster_path } = movie;
  return (
    <CardWrapper>
      <img
        src={
          poster_path
            ? `${posterW500}` + poster_path
            : "https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg"
        }
        alt={title}
        />
      <H2>{title}</H2>
    </CardWrapper>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
};