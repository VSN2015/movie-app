import ImageComponent from "@components/Image";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Movie = (props) => {
  const {data: {backdrop_path, title, release_date, overview}} = props;
  return (
    <>
      <ImageComponent
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        width={1680}
        height={945}
        className="aspect-video brightness-50 w-full"
        alt="Movie Background"
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{title}</p>
        <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG13
          </p>
          <p className="text-[1.2vw]">{release_date}</p>
        </div>
        <article className="mt-4 hidden text-[1.2vw] sm:block">
          <h3 className="mb-2 font-bold">Overview</h3>
          <p>
            {overview}
          </p>
        </article>
        <div className="mt-4">
          <button className="text-10px mr-2 rounded bg-white px-4 py-2 text-black lg:text-lg">
            <FontAwesomeIcon icon={faPlay} />
            Trailer
          </button>
          <button className="text-10px rounded bg-slate-300/35 px-4 py-2 text-white lg:text-lg">
            View Detail
          </button>
        </div>
      </div>
    </>
  );
};

export default Movie;
