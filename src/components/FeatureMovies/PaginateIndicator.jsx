import React from "react";

const PaginateIndicator = (props) => {
  const {movies, activeMovieId, setActiveMovieId} = props;

  return (
    <div className="absolute right-8 bottom-[10%]">
      <ul className="flex gap-1">
        {
          movies.map((movie) => {
            return <li 
            key={movie.id} 
            className={`h-1 w-6 cursor-pointer bg-slate-${movie.id === activeMovieId ? '100' : '600'}`}
            onClick={() => setActiveMovieId(movie.id) }></li>
          })
        }
      </ul>
    </div>
  );
};

export default PaginateIndicator;
