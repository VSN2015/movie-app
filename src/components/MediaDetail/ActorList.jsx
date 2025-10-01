import ActorInfo from "./ActorInfo";

const ActorList = () => {
  return (
    <div>
      <p className="font-bold text-[1.4vw] mb-4">Actors</p>
      <div className="grid grid-cols-3 sm:grid-cols-4">
        <ActorInfo/>
        <ActorInfo/>
        <ActorInfo/>
        <ActorInfo/>
        <ActorInfo/>
      </div>
    </div>
  )
}

export default ActorList;
