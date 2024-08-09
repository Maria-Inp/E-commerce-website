import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";

//css
import styles from "./Category.module.css";
import title from "../css/ProductsMainTitle.module.css";

//icons
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";
import { PiHeadphones } from "react-icons/pi";
import { LuGamepad } from "react-icons/lu";

function Category() {
  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });

  const SlideRef = useRef();

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const onSlideChange = (swiper) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  const { isFirst, isLast } = slideBegOrNot;

  return (
    <>
      <div className={styles.categoryBox}>
        <div className={styles.categoryMainBox}>
          <div className={title.topBox}>
            <div className={title.topBoxTitle}>
              <div className={title.redBox}></div>
              <h4>Categories</h4>
            </div>
          </div>

          <div className={styles.categoryDetail}>
            <h5>Browse By Category</h5>

            <div className={styles.arrows}>
              <div
                className={isFirst ? styles.disabledLeft : styles.arrowLeft}
                onClick={handlePrev}
              >
                <BsArrowLeft />
              </div>

              <div
                className={isLast ? styles.disabledRight : styles.arrowRight}
                onClick={handleNext}
              >
                <BsArrowRight />
              </div>
            </div>
          </div>

          <div className={styles.bottomBox}>
            <Swiper
              // slidesPerView={5.5}
              spaceBetween={10}
              className={"mySwiper"}
              ref={SlideRef}
              onSlideChange={onSlideChange}
              navigation={false}
              observer={true}
              observeParents={true}   
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                },
                350: {
                  slidesPerView: 2.25,
                },
                400: {
                  slidesPerView: 2.5,
                },
                481: {
                  slidesPerView: 3,
                },
                500: {
                  slidesPerView: 3.25,
                },
                550: {
                  slidesPerView: 3.5,
                },
                600: {
                  slidesPerView: 4,
                },
                700: {
                  slidesPerView: 4.25,
                },
                850: {
                  slidesPerView: 4.5,
                },
                950: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 5,
                },
                1150: {
                  slidesPerView: 5.5,
                },
                1500: {
                  slidesPerView: 6,
                },
              }}
              // navigation
              // pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className={styles.categoryCard}>
                  <BsPhone />
                  <div>Phones</div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.categoryCard}>
                  <HiOutlineComputerDesktop />
                  <div>Computers</div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.categoryCard}>
                  <BsSmartwatch />
                  <div>SmartWatch</div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.categoryCard}>
                  <FiCamera />
                  <div>Camera</div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.categoryCard}>
                  <PiHeadphones />
                  <div>HeadPhones</div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.categoryCard}>
                  <LuGamepad />
                  <div>Gaming</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className={styles.horizontalLine}>
        <div></div>
      </div>
    </>
  );
}

export default Category;
