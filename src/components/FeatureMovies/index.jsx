import { useEffect, useState } from 'react';
import Movie from './Movie';
import PaginateIndicator from './PaginateIndicator';

const FeatureMovies = () => {
  const [movies, setMovies] = useState([]);
  // const [activeMovieId, setActiveMovieId] = useState();
  const [slideMovieIndex, setSlideMovieIndex] = useState(0);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTgyYjQyYzMyZTExMDMyYTAyMmY3OTYzYzljNzIyMSIsIm5iZiI6MTc1MzYwNTI0My44MDMsInN1YiI6IjY4ODVlNDdiNmMwZGYzZGE5YjE2YzFkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pg2d9e2VMploGY60BUZFaEj3ueOFk1yuarjuf3JLyZc',
      },
    };

    fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      options
    )
      .then((res) => res.json())
      .then((res) => {
        const popularMovies = res.results.slice(0, 4);
        setMovies(popularMovies);
      })
      .catch((err) => console.error(err));
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (movies.length === 0) return;

    console.log('affect');

    const interval = setInterval(() => {
      setSlideMovieIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % movies.length;
        return nextIndex;
      });
    }, 5000); // Change slide every 3 seconds

    return () => {
      console.log('clear');
      clearInterval(interval);
    };
  }, [movies]);

  console.log('movies', movies);

  return (
    <section className="feature-movies relative text-white">
      {movies[slideMovieIndex] && (
        <>
          <Movie data={movies[slideMovieIndex]} />
          <PaginateIndicator
            movies={movies}
            slideMovieIndex={slideMovieIndex}
            setSlideMovieIndex={setSlideMovieIndex}
          />
        </>
      )}
    </section>
  );
};

export default FeatureMovies;
