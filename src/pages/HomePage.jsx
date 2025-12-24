import FeatureMovies from "@components/FeatureMovies";
import MediaList from "@components/MediaList";
import { TOP_RATED_TABS, TRENDING_TABS } from "@libs/constants";

function HomePage() {
  return (
    <>
      <main>
        <FeatureMovies/>
        <MediaList name={'Trending'} title={'Trending'} tabs={TRENDING_TABS}/>
        <MediaList name={'TopRated'} title={'Top Rated'} tabs={TOP_RATED_TABS}/>
      </main>
    </>
  );
}

export default HomePage;
