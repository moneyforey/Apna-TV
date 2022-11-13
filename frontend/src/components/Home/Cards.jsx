import "react-multi-carousel/lib/styles.css";
import TopRated from "./TopRated";
import PopularMovies from "./PopularMovies";
import UpcomingMobies from "./UpcomingMobies";

function Cards() {
  return (
    <div>
      <TopRated />
      <PopularMovies />
      <UpcomingMobies />
    </div>
  );
}

export default Cards;
