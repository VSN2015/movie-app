import { useState } from 'react';
import ActorInfo from './ActorInfo';

const ActorList = ({ actors = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const numberOfItems = isShowMore ? 12 : 4
  const currentActors = actors.slice(0, numberOfItems);

  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Actors</p>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {currentActors.map((actor) => (
          <ActorInfo
            key={actor.id}
            character={actor.character}
            name={actor.name}
            profilePath={actor.profile_path}
          />
        ))}
      </div>
      <p
        className="mt-2 cursor-pointer text-[1.2vw] underline"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {
          isShowMore ?
          '< Show less' :
          'Show more >'
        }
        
      </p>
    </div>
  );
};

export default ActorList;
