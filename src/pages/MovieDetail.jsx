import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircularProgressBar from '../components/CircularProgressBar';

const MovieDetail = () => {
  return (
    <section className="movie-detail bg-black/70 bg-[url(https://image.tmdb.org/t/p/original/zNriRTr0kWwyaXPzdg1EIxf0BWk.jpg)] bg-cover bg-center [background-blend-mode:multiply]">
      <div className="mx-auto flex max-w-3xl gap-6 p-6">
        <div className="flex-1/3">
          <img
            src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/zNriRTr0kWwyaXPzdg1EIxf0BWk.jpg"
            alt=""
          />
        </div>
        <div className="flex-2/3 text-[1.2vw] text-white">
          <h2 className="mb-2 text-[2vw] font-bold">Test</h2>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">G</span>
            <p>2024-11-11</p>
            <p>The loai</p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar percent={90} size={3.5} strokeWidth={0.3} />{' '}
              Rating
            </div>
            <button className='cursor-pointer'>
              <FontAwesomeIcon icon={faPlay} className="mr-[.7]" /> Trailer
            </button>
          </div>
          <div className='mt-4'>
            <h3 className='font-bold text-[1.3vw] mb-2'>Overview</h3>
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              minima laudantium tempora ratione molestiae reiciendis ex
              voluptates inventore debitis! Voluptates reiciendis, et impedit
              recusandae ipsa ut eum sapiente asperiores. Sunt?
            </article>
          </div>
          <div className='mt-4 grid grid-cols-2 gap-2'>
            <div>
              <p className='font-bold'>Director</p>
              <p>Test name</p>
            </div>
            <div>
              <p className='font-bold'>Writer</p>
              <p>Test name</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
