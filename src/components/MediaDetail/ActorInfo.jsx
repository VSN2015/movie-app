const ActorInfo = ({ name, character, profilePath }) => {
  return (
    <div className="rounded-lg border border-slate-300 shadow-sm">
      <img
        className="rounded-lg"
        src={
          profilePath
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face${profilePath}`
            : '/no_image.svg'
        }
        alt=""
        width={276}
        height={350}
      />
      <div className="p-3">
        <p className="text-[1.4vw] font-bold">{name}</p>
        <p className="text-[1vw]">{character}</p>
        {/* <p>Age</p> */}
      </div>
    </div>
  );
};

export default ActorInfo;
