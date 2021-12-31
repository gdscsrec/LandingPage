import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./slider.css";
import SliderImages from "./SliderImages.json";
const sliderH = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        swipeable="true"
        emulateTouch="true"
        showThumbs={false}
        renderThumbs={false}
        showStatus={false}
      >
        {SliderImages.map((val, key) => {
          return (
            <div className="image">
              <img src={val.image} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default sliderH;
