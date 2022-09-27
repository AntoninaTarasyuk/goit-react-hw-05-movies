import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits, posterW200 } from "../../services/API-service";
import { ActorsList, Item, Photo, Actor, Role } from "./Cast.Styled";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      try { setCast(await getMovieCredits(movieId)); }
      catch (error) { console.error(); }
    };
    getCast();
  }, [movieId]);
  // console.log(cast);

  return (
    <>
      {!cast.length
        ? (<p>No cast</p>)
        : (<ActorsList>
          {cast.map((item) => (
            <Item key={item.id}>
              <Photo src={
                item.profile_path
                  ? `${posterW200}${item.profile_path}`
                  : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              } alt={item.name} />
              <Actor>{item.name}</Actor>
              <Role>Character: {item.character}</Role>
            </Item>
          ))
          }
        </ActorsList>)
      }
    </>
  );
};
export default Cast;