import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/API-service";
import { Container, Autor, Content } from "./Reviews.styled";


export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try { setReviews(await getMovieReviews(movieId)); }
      catch (error) { console.error(); }
    };
    getReviews();
  }, [movieId]);
  // console.log(reviews);

  return (
    <Container>
      {!reviews.length
        ? (<p>We don't have any reviews for this movie.</p>)
        : (<ul>
          {reviews.map(item => (
            <li key={item.id}>
              <Autor>Author: {item.author}</Autor>
              <Content>{item.content}</Content>
            </li>
          ))}
        </ul>)
      }
    </Container>
  );
};