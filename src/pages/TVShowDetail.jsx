import { useParams } from 'react-router';
import Loading from '@components/Loading';
import Banner from '@components/MediaDetail/Banner';
import ActorList from '@components/MediaDetail/ActorList';
import RelatedMediaList from '@components/MediaDetail/RelatedMediaList';
import useAPIFetch from '@hooks/useFetch';
import _ from 'lodash';
import TVShowInformation from '@components/MediaDetail/TVShowInformation';
import SeasonList from '@components/MediaDetail/SeasonList';

const TVShowDetail = () => {
  const { id } = useParams();

  const { data: tvInfo, isLoading } = useAPIFetch({
    url: `/tv/${id}?append_to_response=content_ratings,aggregate_credits,videos`,
  });

  const {
    data: movieRecommendationsResponse,
    isLoading: isRelatedMediaListLoading,
  } = useAPIFetch({
    url: `/tv/${id}/recommendations`,
  });
  const relatedMediaList = (movieRecommendationsResponse.results || []).slice(
    0,
    12
  );

  const contentRatingsResult = tvInfo.content_ratings?.results || [];
  const certificationLabel =
    contentRatingsResult.find((result) => result.iso_3166_1 == 'US')
      ?.rating

  const aggregateCreditsCrew = tvInfo.aggregate_credits?.crew || []
  const crews = aggregateCreditsCrew.filter((crew) => {
    const crewJobs = _.map(crew.jobs, 'job')
    return _.intersection(['Director', 'Writer'], crewJobs).length > 0
  })
  const filteredCrews = crews.map((crew) => ({
    id: crew.id,
    job: crew.jobs[0].job,
    name: crew.name
  }))

  const actors = tvInfo.aggregate_credits?.cast || []
  const filteredActors = actors.map((actor) => ({
    ...actor,
    character: (actor.roles || [])[0]?.character
  }))

  console.log(filteredActors)
  if (isLoading) return <Loading />;
  return (
    <>
      <Banner
        title={tvInfo.name}
        releaseDate={tvInfo.first_air_date}
        voteAverage={tvInfo.vote_average}
        certificationLabel={certificationLabel}
        backdropPath={tvInfo.backdrop_path}
        posterPath={tvInfo.poster_path}
        overview={tvInfo.overview}
        genres={tvInfo.genres}
        crews={filteredCrews}
        videos={tvInfo.videos?.results || []}
      />
      <div className="bg-black text-white">
        <div className="mx-auto flex max-w-screen-xl gap-8 px-6 py-10">
          <div className="flex-2/3">
            <ActorList actors={filteredActors} />
            <SeasonList seasons={(tvInfo.seasons || []).reverse()}/>
            <RelatedMediaList
              mediaList={relatedMediaList}
              isLoading={isRelatedMediaListLoading}
            />
          </div>
          <div className="flex-1/3">
            <TVShowInformation tvInfo={tvInfo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TVShowDetail;
