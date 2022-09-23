import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../services/API-service";

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      try { setCast(await getMovieCredits(movieId)); }
      catch (error) { console.error(); }
    };
    getCast();
  }, [movieId]);
  console.log(cast);

  return (
    <div>
      {!cast.length
        ? (<p>No cast</p>)
        : (<ul>
          {cast.map((item) => (
            <li key={item.id}>
              <img src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${item.profile_path}`
                  : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              } alt={item.name} />
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </li>
          ))
          }
        </ul>)
      }
    </div>
  );
};