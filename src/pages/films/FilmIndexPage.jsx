import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function FilmIndexPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/api/movies";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.movies);
      });
  }, []);

  return (
    <>
      <div className="container pt-5">
        <h1>Movies List</h1>

        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={"/movies/" + movie.id}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
