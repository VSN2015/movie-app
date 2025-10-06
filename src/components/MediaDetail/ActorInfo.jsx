
const ActorInfo = ({name, character, profilePath}) => {
  return (
    <div className="border border-slate-300 shadow-sm rounded-lg">
      <img className="rounded-lg" src={profilePath ? `https://media.themoviedb.org/t/p/w276_and_h350_face${profilePath}` : '/no_image.svg'} alt="" />
      <div className="p-3">
        <p className="font-bold text-[1.4vw]">{name}</p>
        <p className="text-[1vw]">{character}</p>
        {/* <p>Age</p> */}
      </div>
    </div>
  )
}

export default ActorInfo;
