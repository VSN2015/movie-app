import { useEffect, useState } from 'react';
import Movie from './Movie';
import PaginateIndicator from './PaginateIndicator';
import useAPIFetch from '@hooks/useFetch';

const FeatureMovies = () => {
  const [slideMovieIndex, setSlideMovieIndex] = useState(0);

  const { data: popularMoviesResponse } = useAPIFetch({
    url: '/movie/popular?language=en-US&page=1',
  });
  const movies = (popularMoviesResponse.results || []).slice(0, 12);

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
      console.log('clear Auto-slide effect');
      clearInterval(interval);
    };
  }, [movies]);

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
