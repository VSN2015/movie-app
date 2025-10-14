import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import Loading from '@components/Loading';
import Banner from '@components/MediaDetail/Banner';
import ActorList from '@components/MediaDetail/ActorList';
import RelatedMediaList from '@components/MediaDetail/RelatedMediaList';
import MovieInformation from '@components/MediaDetail/MovieInformation';
import useAPIFetch from '@hooks/useFetch';

const MovieDetail = () => {
  const { id } = useParams();
  // const [movieInfo, setMovieInfo] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  // const [isRelatedMediaListLoading, setIsRelatedMediaListLoading] =
    // useState(false);
  const [relatedMediaList, setRelatedMediaList] = useState([]);
  const {isLoading, data: movieInfo} = useAPIFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits`
  })

  useEffect(() => {
    // setIsRelatedMediaListLoading(true);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, options)
      .then((res) => res.json())
      .then((data) => {
        let currentRelatedMediaList = data.results || [];
        currentRelatedMediaList = currentRelatedMediaList.slice(0, 12);
        setRelatedMediaList(currentRelatedMediaList);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        // setIsRelatedMediaListLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-white">
        <div className="mx-auto flex max-w-screen-xl gap-8 px-6 py-10">
          <div className="flex-2/3">
            <ActorList actors={movieInfo.credits?.cast || []} />
            <RelatedMediaList mediaList={relatedMediaList} />
          </div>
          <div className="flex-1/3">
            <MovieInformation movieInfo={movieInfo}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
