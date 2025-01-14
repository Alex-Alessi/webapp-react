import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function FilmShowPage() {
  const movieId = useParams().id;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const url = "http://localhost:3000/api/movies/" + movieId;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data.movies);
      });
  }, []);

  return (
    <>
      <div className="container pt-5">
        <h1>Movie Detail</h1>
        {movie && <p>{movie[0].title}</p>}
      </div>
    </>
  );
}
