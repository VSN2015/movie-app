import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const MediaList = ({ title, tabs = [] }) => {
  const [mediaList, setMediaList] = useState([]);
  const [activeTrendingTabId, setActiveTrendingTabId] = useState(
    tabs.at(0)?.id
  );

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTgyYjQyYzMyZTExMDMyYTAyMmY3OTYzYzljNzIyMSIsIm5iZiI6MTc1MzYwNTI0My44MDMsInN1YiI6IjY4ODVlNDdiNmMwZGYzZGE5YjE2YzFkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pg2d9e2VMploGY60BUZFaEj3ueOFk1yuarjuf3JLyZc',
      },
    };
    const request_url = tabs.find(
      (tab) => tab.id === activeTrendingTabId
    )?.api_url;

    fetch(request_url, options)
      .then((res) => res.json())
      .then((res) => {
        const trendingMediaList = res.results.slice(0, 12);
        setMediaList(trendingMediaList);
      })
      .catch((err) => console.error(err));
  }, [activeTrendingTabId, tabs]);

  return (
    <section className="media-list bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex rounded border border-white">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer rounded-xs px-2 py-1 ${activeTrendingTabId === tab.id ? 'bg-white text-black' : ''}`}
              onClick={() => {
                setActiveTrendingTabId(tab.id);
              }}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
        {mediaList.map((media) => (
          <MovieCard
            id={media.id}
            key={media.id}
            title={media.title || media.name}
            release_date={media.release_date || media.first_air_date}
            poster_path={media.poster_path}
            vote_average={media.vote_average}
            media_type={media.media_type || activeTrendingTabId}
          />
        ))}
      </div>
    </section>
  );
};

export default MediaList;
