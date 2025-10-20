import Loading from '@components/Loading';
import MovieCard from '@components/MovieCard';

const RelatedMediaList = ({ mediaList = [], isLoading }) => {
  if(isLoading) return <Loading/>;

  return (
    <section className="related-media-list mt-4 text-[1.2vw]">
      <p className="mb-4 text-[1.4vw] font-bold">More like this</p>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {mediaList.map((media) => (
          <MovieCard
            key={media.id}
            id={media.id}
            title={media.title || media.name}
            release_date={media.release_date || media.first_air_date}
            poster_path={media.poster_path}
            vote_average={media.vote_average}
            media_type={media.media_type}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedMediaList;
