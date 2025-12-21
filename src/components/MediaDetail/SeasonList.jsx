import CircularProgressBar from '@components/CircularProgressBar';
import ImageComponent from '@components/Image';
import pluralize from 'pluralize';
import React, { useState } from 'react';

const SeasonList = ({ seasons = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const numberOfItems = isShowMore ? seasons.length : 2;
  const currentSeasons = seasons.slice(0, numberOfItems);

  return (
    <div className="season-list mt-4">
      <p className="mb-2 text-[1.4vw] font-bold">Seasons</p>
      <div className="space-y-2">
        {currentSeasons.map((season) => (
          <div
            key={season.id}
            className="flex gap-4 rounded-lg border border-slate-200 p-3 shadow-md"
          >
            <ImageComponent
              width={130}
              height={195}
              src={
                season.poster_path
                  ? `https://media.themoviedb.org/t/p/w300${season.poster_path}`
                  : 'https://placehold.co/130x195'
              }
              className="w-1/4 rounded-lg"
            />
            <div className="space-y-1 text-[1.2vw]">
              <p className="text-[1.4vw] font-bold">{season.name}</p>
              <div className="flex items-center gap-2">
                <p className="font-bold">Rating</p>
                <CircularProgressBar
                  percent={Math.round(season.vote_average) * 10}
                  size={3}
                  strokeWidth={0.2}
                />
              </div>
              <p>
                <span className="font-bold">Release Date: </span>
                {season.air_date}
              </p>
              <p>
                {season.episode_count}{' '}
                {pluralize('Episode', season.episode_count || 0)}
              </p>
              <p>{season.overview}</p>
            </div>
          </div>
        ))}
      </div>
      {
        seasons.length > 1 && (
          <p
            className="mt-2 cursor-pointer text-[1.2vw] underline"
            onClick={() => setIsShowMore(!isShowMore)}
          >
            {isShowMore ? '< Show less' : 'Show more >'}
          </p>
        ) 
      }
      
    </div>
  );
};

export default SeasonList;
