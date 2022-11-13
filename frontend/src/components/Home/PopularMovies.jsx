import { useEffect, useState } from "react";
import styles from "./Cards.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box, Heading, Stack, Feature, Image, Text } from "@chakra-ui/react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function PopularMovies() {
  const [data, setData] = useState([]);

  const getPopularmovies = async () => {
    let res = await axios.get("https://zeebackend-production.up.railway.app/popularmovies");
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPopularmovies();
  }, []);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 6 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 6 },
  };

  return (
    <div>
      <div>
        <h2 className={styles.divHeading}>Blockbuster Films</h2>
        <div id="main-slide" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <Carousel
              responsive={responsive}
              arrows
              autoPlaySpeed={2000}
              className={styles.last}
              draggable
              minimumTouchDrag={200}
              swipeable
              infinite
              autoPlay={true}
            >
              {data.map((el) => {
                return (
                 <Link to={`/detailpop/${el._id}`}>
                  <Box className={styles.card}>
                    <img className="d-block w-100" src={el.poster_path} />;
                    <Box className={styles.cardoverlay}>
                      <h1 className={styles.cardName}>{el.title}</h1> <br />
                      <button className={styles.cardBtn}>Watch</button>
                    </Box>
                  </Box>
                 </Link>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default PopularMovies;
