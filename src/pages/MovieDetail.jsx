import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircularProgressBar from '../components/CircularProgressBar';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Banner from '../components/MediaDetail/Banner';
import ActorList from '../components/MediaDetail/ActorList';

const MovieDetail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTgyYjQyYzMyZTExMDMyYTAyMmY3OTYzYzljNzIyMSIsIm5iZiI6MTc1MzYwNTI0My44MDMsInN1YiI6IjY4ODVlNDdiNmMwZGYzZGE5YjE2YzFkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pg2d9e2VMploGY60BUZFaEj3ueOFk1yuarjuf3JLyZc',
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`, options)
      .then((res) => res.json())
      .then((data) => {
        setMovieInfo(data)
        console.log(data)
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
      })
  }, [id])

  if(isLoading){
    return <Loading/>
  }

  return (
    <>
      <Banner mediaInfo={movieInfo}/>
      <div className='bg-black text-white'>
        <div className='mx-auto flex max-w-screen-xl px-6 py-10 gap-8'>
          <div className='flex-2/3'>
            <ActorList/>
          </div>
          <div className='flex-1/3'>
            <p className='font-bold text-[1.4vw] mb-4'>Information</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
