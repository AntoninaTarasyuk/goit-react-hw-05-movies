import { useState, useEffect, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { getMovieDetails, poster } from "../../services/API-service";
import { BackLink } from "../../components/BackLink";

export const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  
  useEffect(() => {
    async function getMovie() {
      try { setMovie(await getMovieDetails(movieId)); }
      catch (error) { console.error(); }
    };
    getMovie();
  }, [movieId]);


  console.log(movie);
  console.log(movie.genres);

  const { poster_path, title, overview, vote_average } = movie;
  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <img src={
          poster_path
            ? `${poster}` + poster_path
            : "https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg"
        }
        alt={title}
      />
      <h2>{title}</h2>
      <p>Vote average: {vote_average}</p>
      {overview && (
        <div>
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
      )}
      <div>
        <h3>Genres</h3>
        {/* <p>{movie.genres.map(genre => genre.name).join(', ')}</p> */}
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};