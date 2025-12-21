import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { groupBy } from 'lodash';
import CircularProgressBar from '@components/CircularProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageComponent from '@components/Image';
import { useModalContext } from '@context/ModalProvider';

const Banner = ({
  title,
  releaseDate,
  voteAverage,
  certificationLabel,
  backdropPath,
  posterPath,
  overview,
  genres = [],
  crews = [],
  videos = [],
}) => {
  const { openPopup } = useModalContext();

  if (!title) return null;

  const mediaGenres = genres.map((genre) => genre.name).join(', ');
  const groupedCrews = groupBy(crews, 'job');
  const groupedCrewKeys = Object.keys(groupedCrews);
  const trailerVideoKey = videos.find((video) => video.type === 'Trailer')?.key;

  return (
    <section
      className="media-detail bg-black/70 bg-cover bg-center [background-blend-mode:multiply]"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdropPath})`,
      }}
    >
      <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1/3">
          <ImageComponent
            src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${posterPath}`}
            alt=""
            width={600}
            height={900}
          />
        </div>
        <div className="flex-2/3 text-[1.2vw] text-white">
          <h2 className="mb-2 text-[2vw] font-bold">{title}</h2>
          <div className="flex items-center gap-4">
            {certificationLabel && (
              <span className="border border-gray-400 p-1 text-gray-400">
                {certificationLabel}
              </span>
            )}
            <p>{releaseDate}</p>
            <p>{mediaGenres}</p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.round((voteAverage || 0) * 10)}
                size={3.5}
                strokeWidth={0.3}
              />{' '}
              Rating
            </div>
            <button
              className="cursor-pointer"
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
              <FontAwesomeIcon icon={faPlay} className="mr-[.7]" /> Trailer
            </button>
          </div>
          <div className="mt-4">
            <h3 className="mb-2 text-[1.3vw] font-bold">Overview</h3>
            <article>{overview}</article>
          </div>
          <div
            className={`mt-4 grid grid-cols-${groupedCrewKeys.length} gap-2`}
          >
            {groupedCrewKeys.map((job) => (
              <div key={job}>
                <p className="font-bold">{job}</p>
                <p>{groupedCrews[job].map((crew) => crew.name).join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
