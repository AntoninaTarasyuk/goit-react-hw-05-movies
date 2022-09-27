import { useState, useEffect, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { getMovieDetails, posterW500 } from "../../services/API-service";
import { BackLink } from "../../components/BackLink";
import { MainInfo, AddInfo, RightWrap, Poster, H2, H3 } from "./MovieDetails.styled";

export const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/home";
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  
  useEffect(() => {
    async function getMovie() {
      try { setMovie(await getMovieDetails(movieId)); }
      catch (error) { console.error(); }
    };
    getMovie();
  }, [movieId]);

  // console.log(movie);
  // console.log(movie.genres);

  const { poster_path, title, overview, vote_average, genres } = movie;
  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <MainInfo>
        <Poster src={
          poster_path
            ? `${posterW500}` + poster_path
            : "https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg"
          }
          alt={title}
        />
        <RightWrap>
          <H2>{title}</H2>
          <p>Vote average: {vote_average}</p>
          <div>
            <H3>Overview</H3>
            {overview 
              && (<p>{overview}</p>)
            }
          </div>
          <div>
            <H3>Genres</H3>
            {genres
              && <p>{genres.map(genre => genre.name).join(', ')}</p>
            }
          </div>
        </RightWrap>
      </MainInfo>
      
      <AddInfo>
        <H3>Additional information</H3>
        <ul>
          <li>
            <Link to="cast" state={{from: location.state?.from}}>Cast</Link>
          </li>
          <li>
            <Link to="reviews" state={{from: location.state?.from}}>Reviews</Link>
          </li>
        </ul>
      </AddInfo>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};