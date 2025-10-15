import { useParams } from 'react-router';
import Loading from '@components/Loading';
import Banner from '@components/MediaDetail/Banner';
import ActorList from '@components/MediaDetail/ActorList';
import RelatedMediaList from '@components/MediaDetail/RelatedMediaList';
import MovieInformation from '@components/MediaDetail/MovieInformation';
import useAPIFetch from '@hooks/useFetch';

const MovieDetail = () => {
  const { id } = useParams();

  const { data: movieInfo, isLoading } = useAPIFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits`,
  });

  const { data: movieRecommendationsResponse, isLoading: isRelatedMediaListLoading } =
    useAPIFetch({
      url: `/movie/${id}/recommendations`,
    });
  const relatedMediaList = (movieRecommendationsResponse.results || []).slice(
    0,
    12
  );

  if (isLoading) return <Loading />;

  return (
    <>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-white">
        <div className="mx-auto flex max-w-screen-xl gap-8 px-6 py-10">
          <div className="flex-2/3">
            <ActorList actors={movieInfo.credits?.cast || []} />
            <RelatedMediaList
              mediaList={relatedMediaList}
              isLoading={isRelatedMediaListLoading}
            />
          </div>
          <div className="flex-1/3">
            <MovieInformation movieInfo={movieInfo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
