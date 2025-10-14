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
          `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    };

    fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      options
    )
      .then((res) => res.json())
      .then((res) => {
        const popularMovies = res.results.slice(0, 12);
        setMovies(popularMovies);
      })
      .catch((err) => console.error(err));
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (movies.length === 0) return;

    console.log('Auto-slide effect');

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
