/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";

//data
import slides from "../data/carouselData";

//css
import "./Banner.css";

//icons
import { GoArrowRight } from "react-icons/go";

const delay = 2000;
//2s

function Banner() {
  const [slide, setSlide] = useState(0);

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlide((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [slide]);

  return (
    <div className="carousel">
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
