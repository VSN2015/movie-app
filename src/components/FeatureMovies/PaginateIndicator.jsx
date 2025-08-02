import React from 'react';

const PaginateIndicator = (props) => {
  const { movies, slideMovieIndex, setSlideMovieIndex } = props;

  return (
    <div className="absolute right-8 bottom-[10%]">
      <ul className="flex gap-1">
        {movies.map((movie, index) => {
          return (
            <li
              key={movie.id}
              className={`h-1 w-6 cursor-pointer ${index === slideMovieIndex ? 'bg-slate-100' : 'bg-slate-500'}`}
              onClick={() => setSlideMovieIndex(index)}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default PaginateIndicator;
