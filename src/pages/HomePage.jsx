import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

//data
import slides from "../data/carouselData";
import productBox from "../data/homePageData";

//components
import Category from "../components/Category";
import BestSellingProducts from "../components/BestSellingProducts";
import AllProducts from "../components/AllProducts";
import Featured from "../components/Featured";
import Banner from "../components/Banner";

//helpful
import discountPrice from "../helpful/discountFunction";

//css
import styles from "./HomePage.module.css";
import "./HomePage.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//icons
import { BsChevronRight } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { CgHeart } from "react-icons/cg";
import { CgEye } from "react-icons/cg";

function HomePage() {
  return (
    <>
      <div className={styles.maxWidth}>
        <div className={styles.bannerBox}>
          <div className={styles.mainBox}>
            <div className={styles.sideMenu}>
              <div className={styles.womanFashion}>
                <div className={styles.menuTitle}>
                  <span>Woman’s Fashion</span>
                </div>

                <div className={styles.chevronRight}>
                  <BsChevronRight strokeWidth="1px" />

                  <div className={styles.dropdown1}>
                    <ul>
                      <li>
                        <a href="">item 1</a>
                      </li>
                      <li>
                        <a href="">item 2</a>
                      </li>
                      <li>
                        <a href="">item 3</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.menFashion}>
                <div className={styles.menuTitle}>
                  <span>Men’s Fashion</span>
                </div>

                <div className={styles.chevronRight}>
                  <BsChevronRight strokeWidth="1px" />

                  <div className={styles.dropdown1}>
                    <ul>
                      <li>
                        <a href="">item a</a>
                      </li>
                      <li>
                        <a href="">item b</a>
                      </li>
                      <li>
                        <a href="">item c</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.menuTitle}>
                <span>Electronics</span>
              </div>

              <div className={styles.menuTitle}>
                <span>Home & Lifestyle</span>
              </div>

              <div className={styles.menuTitle}>
                <span>Medicine</span>
              </div>

              <div className={styles.menuTitle}>
                <span>Sports & Outdoor</span>
              </div>

              <div className={styles.menuTitle}>
                <span>Baby’s & Toys</span>
              </div>

              <div className={styles.menuTitle}>
                <span>Groceries & Pets</span>
              </div>

              <div className={styles.menuTitle}>
                <span>Health & Beauty</span>
              </div>
            </div>

            <div className={styles.line}></div>

            <div className={styles.bannerImage}>
              <Banner data={slides} />
            </div>
          </div>
        </div>

        <div className={styles.todayProductsBox}>
          <div className={styles.todayMainBox}>
            <div className={styles.topBox}>
              <div className={styles.todayTitle}>
                <div className={styles.redBox}></div>
                <h4>Today’s</h4>
              </div>

              <div className={styles.todayDetail}>
                <div className={styles.leftDetailBox}>
                  <div className={styles.saleTitle}>
                    <h5>Flash Sales</h5>
                  </div>

                  <div className={styles.saleClock}>
                    <div>
                      <span>Days</span>
                      <h3>03</h3>
                    </div>
                    <div>:</div>
                    <div>
                      <span>Hours</span>
                      <h3>23</h3>
                    </div>
                    <div>:</div>
                    <div>
                      <span>Minutes</span>
                      <h3>19</h3>
                    </div>
                    <div>:</div>
                    <div>
                      <span>Seconds</span>
                      <h3>56</h3>
                    </div>
                  </div>
                </div>

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
                spaceBetween={30}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  360: {
                    slidesPerView: 1.25,
                  },
                  400: {
                    slidesPerView: 1.5,
                  },
                  440: {
                    slidesPerView: 1.75,
                  },
                  520: {
                    slidesPerView: 2,
                  },
                  600: {
                    slidesPerView: 2.25,
                  },
                  650: {
                    slidesPerView: 2.5,
                  },
                  700: {
                    slidesPerView: 2.75,
                  },
                  769: {
                    slidesPerView: 2.75,
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
                    slidesPerView: 3.75,
                  },
                  1350: {
                    slidesPerView: 4,
                  },
                  1500: {
                    slidesPerView: 5,
                  },
                }}
                // navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {productBox.map((product, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className={styles.productBox}>
                        <div className={styles.imgDiv}>
                          <img src={product.src} alt={product.alt} />

                          <div className={styles.iconBox}>
                            <div>
                              <CgHeart fontSize="18px" />
                            </div>
                            <div>
                              <CgEye fontSize="18px" />
                            </div>
                          </div>

                          {product.discount !== 0 ? (
                            <div className={styles.discountBox}>
                              <div>-{product.discount}%</div>
                            </div>
                          ) : null}

                          <div className={styles.addToCart}>Add To Cart</div>
                        </div>

                        <div className={styles.productDetail}>
                          <h5>{product.title}</h5>

                          <div className={styles.price}>
                            {product.discount !== 0 ? (
                              <span className={styles.discountPrice}>
                                $
                                {discountPrice(product.price, product.discount)}
                              </span>
                            ) : null}

                            <span className={styles.realPrice}>
                              {product.discount !== 0 ? (
                                <del>${product.price}</del>
                              ) : (
                                <span className={styles.priceWithoutDiscount}>
                                  ${product.price}
                                </span>
                              )}
                            </span>
                          </div>

                          <div className={styles.starAndCommentCount}>
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

        <div className={styles.allProductButton}>
          <div className={styles.mainButton}>
            <span>View All Products</span>
          </div>
        </div>

        <div className={styles.horizontalLine}>
          <div></div>
        </div>

        <Category />

        <BestSellingProducts />

        <AllProducts />

        <Featured />
      </div>
    </>
  );
}

export default HomePage;
