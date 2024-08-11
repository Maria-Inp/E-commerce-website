import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";

// components
import CountdownTimer from "./CountdownTimer";

// data
import productBox from "../data/todayProductsData";

//helpful
import discountPrice from "../helpful/discountFunction";

//css
import styles from "./TodayProducts.module.css";
import title from "../css/ProductsMainTitle.module.css";
import box from "../css/ProductBoxStyle.module.css";
import redButton from "../css/RedButton.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//icons
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { CgHeart } from "react-icons/cg";
import { CgEye } from "react-icons/cg";

function TodayProducts() {
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
      <div className={styles.todayProductsBox}>
        <div className={styles.todayMainBox}>
          <div className={title.topBox}>
            <div className={title.topBoxTitle}>
              <div className={title.redBox}></div>
              <h4>Today’s</h4>
            </div>
          </div>

          <div className={styles.todayDetail}>
            <div className={styles.leftDetailBox}>
              <div className={styles.saleTitle}>
                <h5>Flash Sales</h5>
              </div>

              <div className={styles.saleClock}>
                <CountdownTimer />
              </div>
            </div>

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
              slidesPerView={4}
              spaceBetween={30}
              className={"mySwiper"}
              ref={SlideRef}
              onSlideChange={onSlideChange}
              navigation={false}
              observer={true}
              observeParents={true}              
              modules={[Navigation, Pagination]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                360: {
                  slidesPerView: 1.25,
                },
                470: {
                  slidesPerView: 1.5,
                },
                520: {
                  slidesPerView: 2,
                },
                600: {
                  slidesPerView: 2.25,
                },
                700: {
                  slidesPerView: 2.5,
                },
                900: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3.5,
                },
                1100: {
                  slidesPerView: 3.5,
                },
                1200: {
                  slidesPerView: 4,
                },
                1350: {
                  slidesPerView: 4,
                },
                1500: {
                  slidesPerView: 5,
                },
              }}
            >
              {productBox.map((product, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className={box.productBox}>
                      <div className={box.imgDiv}>
                        <img src={product.src} alt={product.alt} />

                        <div className={box.iconBox}>
                          <div className={box.heartIcon}>
                            <CgHeart fontSize="18px" />
                          </div>
                          <div className={box.eyeIcon}>
                            <CgEye fontSize="18px" />
                          </div>
                        </div>

                        {product.discount !== 0 ? (
                          <div className={box.discountBox}>
                            <div>-{product.discount}%</div>
                          </div>
                        ) : null}

                        <div className={box.addToCart}>Add To Cart</div>
                      </div>

                      <div className={box.productDetail}>
                        <h5>{product.title}</h5>

                        <div className={box.price}>
                          {product.discount !== 0 ? (
                            <span className={box.discountPrice}>
                              ${discountPrice(product.price, product.discount)}
                            </span>
                          ) : null}

                          <span className={box.realPrice}>
                            {product.discount !== 0 ? (
                              <del>${product.price}</del>
                            ) : (
                              <span className={box.priceWithoutDiscount}>
                                ${product.price}
                              </span>
                            )}
                          </span>
                        </div>

                        <div className={box.starAndCommentCount}>
                          <img src={product.star} alt="" />
                          <span>({product.numOfComments})</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>

      <div className={redButton.allProductButton}>
        <div className={redButton.mainButton}>
          <span>View All Products</span>
        </div>
      </div>

      <div className={redButton.horizontalLine}>
        <div></div>
      </div>
    </>
  );
}

export default TodayProducts;
