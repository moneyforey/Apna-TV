import styles from "./Home.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cards from "../components/Home/Cards";
const Home = () => {
  return (
    <div className={styles.mainBody}>
      <Carousel
        showArrows={true}
        className={styles.cour}
        autoPlay={true}
        centerSlidePercentage={100}
        infiniteLoop
        swipeable
        showStatus={false}
        emulateTouch
        thumbWidth={100}
        interval={1500}
        transitionTime={2000}
        useKeyboardArrows
        stopOnHover
        showThumbs={false}
      >
        <div>
          <img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5173774/cover/1170x658withlogo57dfc1de69214590b284a06a59f605f840843f83f8dc4edcb1927553c61e9d7a.jpg" />

          <p className="legend">Rangbaaz</p>
        </div>
        <div>
          <img
            src="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5228525/cover/1920x7701789cd01c98a4b098ff87b399b61530c3e52cc15ff174f4689cc1ebefe5b40ff.jpg"
            alt=""
          />
          <p className="legend">Rakshaa Bandhan</p>
        </div>
        <div>
          <img
            src="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-4z5230436/cover/1920x770cd5550fd6fe64ed19f73339697501913a1ebe2567d824021883c08f193544046.jpg"
            alt=""
          />
          <p className="legend">Tripling</p>
        </div>
        <div>
          <img src="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5227565/cover/1920x7704ce388d5a6e74dac8ad9255657da588f.jpg" />
          <p className="legend">Kartikey</p>
        </div>
        <div>
          <img src="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5246147/cover/1920x7703c6105c0047c4e98848e930ff18b4e38.jpg" />
          <h1 className="legend">Tadka</h1>
        </div>
        <div>
          <img src="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5227565/cover/1920x7704ce388d5a6e74dac8ad9255657da588f.jpg" />
           <h1 className="legend">Kartikey</h1>
        </div>
      </Carousel>
      <Cards />
    </div>
  );
};

export default Home;
