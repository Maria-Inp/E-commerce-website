import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

//data
import slides from "../data/carouselData";

//components
import Category from "../components/Category";
import BestSellingProducts from "../components/BestSellingProducts";
import AllProducts from "../components/AllProducts";
import Featured from "../components/Featured";
import Banner from "../components/Banner";

//css
import styles from "./HomePage.module.css";
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

//images
import img1 from "../assets/home page products/1.png"
import img2 from "../assets/home page products/2.png"
import img3 from "../assets/home page products/3.png"
import img4 from "../assets/home page products/4.png"
import star5 from "../assets/Five star.png"
import star45 from "../assets/Four Half Star.png"
import star4 from "../assets/Four Star.png"

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
              {/* <img src="../src/assets/banner.png" alt="" /> */}
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
                // slidesPerView={4.5}
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
                <SwiperSlide>
                  <div className={styles.productBox}>
                    <div className={styles.imgDiv}>
                      <img
                        src={img1}
                        alt=""
                      />

                      <div className={styles.iconBox}>
                        <div>
                          <CgHeart fontSize="18px" />
                        </div>
                        <div>
                          <CgEye fontSize="18px" />
                        </div>
                      </div>

                      <div className={styles.discountBox}>
                        <div>-40%</div>
                      </div>

                      <div className={styles.addToCart}>Add To Cart</div>
                    </div>

                    <div className={styles.productDetail}>
                      <h5>HAVIT HV-G92 Gamepad</h5>

                      <div className={styles.price}>
                        <span className={styles.discountPrice}>$120</span>
                        <span className={styles.realPrice}>
                          <del>$160</del>
                        </span>
                      </div>

                      <div className={styles.starAndCommentCount}>
                        <img src={star5} alt="" />
                        <span>(88)</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.productBox}>
                    <div className={styles.imgDiv}>
                      <img
                        src={img2}
                        alt=""
                      />

                      <div className={styles.iconBox}>
                        <div>
                          <CgHeart fontSize="18px" />
                        </div>
                        <div>
                          <CgEye fontSize="18px" />
                        </div>
                      </div>

                      <div className={styles.discountBox}>
                        <div>-35%</div>
                      </div>

                      <div className={styles.addToCart}>Add To Cart</div>
                    </div>

                    <div className={styles.productDetail}>
                      <h5>AK-900 Wired Keyboard</h5>

                      <div className={styles.price}>
                        <span className={styles.discountPrice}>$960</span>
                        <span className={styles.realPrice}>
                          <del>$1160</del>
                        </span>
                      </div>

                      <div className={styles.starAndCommentCount}>
                        <img src={star4} alt="" />
                        <span>(75)</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.productBox}>
                    <div className={styles.imgDiv}>
                      <img
                        src={img3}
                        alt=""
                      />

                      <div className={styles.iconBox}>
                        <div>
                          <CgHeart fontSize="18px" />
                        </div>
                        <div>
                          <CgEye fontSize="18px" />
                        </div>
                      </div>

                      <div className={styles.discountBox}>
                        <div>-30%</div>
                      </div>

                      <div className={styles.addToCart}>Add To Cart</div>
                    </div>

                    <div className={styles.productDetail}>
                      <h5>IPS LCD Gaming Monitor</h5>

                      <div className={styles.price}>
                        <span className={styles.discountPrice}>$370</span>
                        <span className={styles.realPrice}>
                          <del>$400</del>
                        </span>
                      </div>

                      <div className={styles.starAndCommentCount}>
                        <img src={star5} alt="" />
                        <span>(99)</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.productBox}>
                    <div className={styles.imgDiv}>
                      <img
                        src={img4}
                        alt=""
                      />

                      <div className={styles.iconBox}>
                        <div>
                          <CgHeart fontSize="18px" />
                        </div>
                        <div>
                          <CgEye fontSize="18px" />
                        </div>
                      </div>

                      <div className={styles.discountBox}>
                        <div>-25%</div>
                      </div>

                      <div className={styles.addToCart}>Add To Cart</div>
                    </div>

                    <div className={styles.productDetail}>
                      <h5>S-Series Comfort Chair</h5>

                      <div className={styles.price}>
                        <span className={styles.discountPrice}>$375</span>
                        <span className={styles.realPrice}>
                          <del>$400</del>
                        </span>
                      </div>

                      <div className={styles.starAndCommentCount}>
                        <img src={star45} alt="" />
                        <span>(99)</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.productBox}>
                    <div className={styles.imgDiv}>
                      <img
                        src={img1}
                        alt=""
                      />

                      <div className={styles.iconBox}>
                        <div>
                          <CgHeart fontSize="18px" />
                        </div>
                        <div>
                          <CgEye fontSize="18px" />
                        </div>
                      </div>

                      <div className={styles.discountBox}>
                        <div>-25%</div>
                      </div>

                      <div className={styles.addToCart}>Add To Cart</div>
                    </div>

                    <div className={styles.productDetail}>
                      <h5>HAVIT HV-G92 Gamepad</h5>

                      <div className={styles.price}>
                        <span className={styles.discountPrice}>$120</span>
                        <span className={styles.realPrice}>
                          <del>$160</del>
                        </span>
                      </div>

                      <div className={styles.starAndCommentCount}>
                        <img src={star5} alt="" />
                        <span>(88)</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.productBox}>
                    <div className={styles.imgDiv}>
                      <img
                        src={img2}
                        alt=""
                      />

                      <div className={styles.iconBox}>
                        <div>
                          <CgHeart fontSize="18px" />
                        </div>
                        <div>
                          <CgEye fontSize="18px" />
                        </div>
                      </div>

                      <div className={styles.discountBox}>
                        <div>-25%</div>
                      </div>

                      <div className={styles.addToCart}>Add To Cart</div>
                    </div>

                    <div className={styles.productDetail}>
                      <h5>AK-900 Wired Keyboard</h5>

                      <div className={styles.price}>
                        <span className={styles.discountPrice}>$960</span>
                        <span className={styles.realPrice}>
                          <del>$1160</del>
                        </span>
                      </div>

                      <div className={styles.starAndCommentCount}>
                        <img src={star4} alt="" />
                        <span>(75)</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.productBox}>
                    <div className={styles.imgDiv}>
                      <img
                        src={img3}
                        alt=""
                      />

                      <div className={styles.iconBox}>
                        <div>
                          <CgHeart fontSize="18px" />
                        </div>
                        <div>
                          <CgEye fontSize="18px" />
                        </div>
                      </div>

                      <div className={styles.discountBox}>
                        <div>-25%</div>
                      </div>

                      <div className={styles.addToCart}>Add To Cart</div>
                    </div>

                    <div className={styles.productDetail}>
                      <h5>IPS LCD Gaming Monitor</h5>

                      <div className={styles.price}>
                        <span className={styles.discountPrice}>$370</span>
                        <span className={styles.realPrice}>
                          <del>$400</del>
                        </span>
                      </div>

                      <div className={styles.starAndCommentCount}>
                        <img src={star5} alt="" />
                        <span>(99)</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.productBox}>
                    <div className={styles.imgDiv}>
                      <img
                        src={img4}
                        alt=""
                      />

                      <div className={styles.iconBox}>
                        <div>
                          <CgHeart fontSize="18px" />
                        </div>
                        <div>
                          <CgEye fontSize="18px" />
                        </div>
                      </div>

                      <div className={styles.discountBox}>
                        <div>-25%</div>
                      </div>

                      <div className={styles.addToCart}>Add To Cart</div>
                    </div>

                    <div className={styles.productDetail}>
                      <h5>S-Series Comfort Chair</h5>

                      <div className={styles.price}>
                        <span className={styles.discountPrice}>$375</span>
                        <span className={styles.realPrice}>
                          <del>$400</del>
                        </span>
                      </div>

                      <div className={styles.starAndCommentCount}>
                        <img src={star45} alt="" />
                        <span>(99)</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
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
