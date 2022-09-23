import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/API-service";

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
  console.log(reviews);

  return (
    <div>
      {!reviews.length
        ? (<p>We don't have any reviews for this movie.</p>)
        : (<ul>
          {reviews.map(item => (
            <li key={item.id}>
              <p>Author: {item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>)
      }
    </div>
  );
};