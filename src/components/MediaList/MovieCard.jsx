import { Link } from 'react-router';
import CircularProgressBar from '../CircularProgressBar';

const MovieCard = ({
  id,
  title,
  release_date,
  poster_path,
  vote_average,
  media_type,
}) => {
  let strokeColor = '';
  if (vote_average > 7) {
    strokeColor = 'green';
  } else if (vote_average > 5) {
    strokeColor = 'yellow';
  } else {
    strokeColor = 'red';
  }

  return (
    <Link to={`/movie/${id}`}>
      <div className="relative rounded-lg border border-slate-800">
        {media_type === 'tv' && (
          <p className="absolute top-1 right-1 rounded bg-black p-1 text-xs font-bold text-white shadow">
            TV Show
          </p>
        )}
        <img
          className="rounded-lg"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
        />
        <div className="relative -top-[1.5vw] px-4">
          <CircularProgressBar
            percent={Math.round(vote_average * 10)}
            strokeColor={strokeColor}
          />
          <p className="mt-2 font-bold">{title}</p>
          <p className="text-slate-300">{release_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
