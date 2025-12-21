import ImageComponent from '@components/Image';
import { useModalContext } from '@context/ModalProvider';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAPIFetch from '@hooks/useFetch';
import { Link } from 'react-router';

const Movie = (props) => {
  const {
    data: { backdrop_path, title, release_date, overview, id },
  } = props;

  const { openPopup } = useModalContext();

  const { data: videoResponse } = useAPIFetch({
    url: `/movie/${id}/videos`,
  });
  const trailerVideoKey = (videoResponse?.results || []).find(
    (video) => video.type === 'Trailer' && video.site === 'YouTube'
  )?.key;

  return (
    <>
      <ImageComponent
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        width={1680}
        height={945}
        className="aspect-video w-full brightness-50"
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
          <p>{overview}</p>
        </article>
        <div className="mt-4">
          <button
            className="text-10px mr-2 rounded bg-white px-4 py-2 text-black lg:text-lg"
            onClick={() => {
              openPopup(
                <iframe
                  title="Trailer"
                  className="aspect-video w-[50vw]"
                  src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                />
              );
            }}
          >
            <FontAwesomeIcon icon={faPlay} />
            Trailer
          </button>
          <Link to={`/movie/${id}`}>
            <button className="text-10px rounded bg-slate-300/35 px-4 py-2 text-white lg:text-lg">
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Movie;
