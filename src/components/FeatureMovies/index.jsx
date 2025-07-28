import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";

const FeatureMovies = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTgyYjQyYzMyZTExMDMyYTAyMmY3OTYzYzljNzIyMSIsIm5iZiI6MTc1MzYwNTI0My44MDMsInN1YiI6IjY4ODVlNDdiNmMwZGYzZGE5YjE2YzFkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pg2d9e2VMploGY60BUZFaEj3ueOFk1yuarjuf3JLyZc",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options,
    )
      .then((res) => res.json())
      .then((res) => {
        const popularMovies = res.results.slice(0, 4);
        setMovies(popularMovies);

        if (popularMovies[0]) setActiveMovieId(popularMovies[0].id);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(movies);

  const activeMovie = movies.find((movie) => movie.id === activeMovieId);

  return (
    <section className="feature-movies relative text-white">
      {activeMovie && <Movie data={activeMovie} />}
      <PaginateIndicator movies={movies} activeMovieId={activeMovieId} setActiveMovieId={setActiveMovieId}/>
    </section>
  );
};

export default FeatureMovies;
