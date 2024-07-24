import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

//css
import styles from "./Category.module.css";

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
  return (
    <>
      <div className={styles.categoryBox}>
        <div className={styles.categoryMainBox}>
          <div className={styles.topBox}>
            <div className={styles.categoryTitle}>
              <div className={styles.redBox}></div>
              <h4>Categories</h4>
            </div>

            <div className={styles.categorySecondTitle}>
              <h5>Browse By Category</h5>

              <div className={styles.arrows}>
                <div className={styles.arrowLeft}>
                  <BsArrowLeft />
                </div>

                <div className={styles.arrowRight}>
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bottomBox}>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={6}
              breakpoints={{
                320: {
                  slidesPerView: 2.25
                },
                350: {
                  slidesPerView: 2.5
                },
                400: {
                  slidesPerView: 3
                },
                481: {
                  slidesPerView: 3.25
                },
                500: {
                  slidesPerView: 3.5
                },
                550: {
                  slidesPerView: 3.75
                },
                600: {
                  slidesPerView: 4.5
                },
                650: {
                  slidesPerView: 4.75
                },
                700: {
                  slidesPerView: 5
                },
                769: {
                  slidesPerView: 4.25
                },
                850: {
                  slidesPerView: 4.5
                },
                950: {
                  slidesPerView: 4.75
                },
                1024: {
                  slidesPerView: 5
                },
                1150: {
                  slidesPerView: 6
                },
                1500: {
                  slidesPerView: 6
                }
              }}
              // navigation
              // pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
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
