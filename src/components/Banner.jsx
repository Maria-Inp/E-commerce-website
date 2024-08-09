/* eslint-disable react/prop-types */
import { useState } from "react";

//data
import slides from "../data/carouselData";

//css
import "./Banner.css";

//icons
// import { IoMdArrowForward } from "react-icons/io";
// import { IoMdArrowBack } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";

function Banner() {
  const [slide, setSlide] = useState(0);

  // const nextSlide = () => {
  //   setSlide(slide === data.length - 1 ? 0 : slide + 1);
  // };

  // const prevSlide = () => {
  //   setSlide(slide === 0 ? data.length - 1 : slide - 1);
  // };

  return (
    <div className="carousel">
      {/* <IoMdArrowBack className="arrow arrow-left" onClick={prevSlide} /> */}

      {slides.map((item, index) => {
        return (
          <>
            <img
              src={item.src}
              alt={item.alt}
              key={index}
              className={slide === index ? "slide" : "slide slide-hidden"}
            />

            <div className="link">
              <a href="">Shop Now</a>
              <GoArrowRight />
            </div>
          </>
        );
      })}

      {/* <IoMdArrowForward className="arrow arrow-right" onClick={nextSlide} /> */}

      <span className="indicators">
        {slides.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={
                slide === index ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}

export default Banner;
