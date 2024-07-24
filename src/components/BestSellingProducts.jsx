//css
import styles from "./BestSellingProducts.module.css";

//icons
import { CgHeart } from "react-icons/cg";
import { CgEye } from "react-icons/cg";

function BestSellingProducts() {
  return (
    <>
      <div className={styles.bestSellingBox}>
        <div className={styles.bestSellingMainBox}>
          <div className={styles.topBox}>
            <div className={styles.thisMonthTitle}>
              <div className={styles.redBox}></div>
              <h4>This Month</h4>
            </div>

            <div className={styles.bestSellingDetail}>
              <div className={styles.BestSellingTitle}>
                <h5>Best Selling Products</h5>
              </div>
              <div className={styles.viewAllButton}>
                <div>View All</div>
              </div>
            </div>
          </div>

          <div className={styles.bottomBox}>
            {/* 1 */}
            <div className={styles.productBox}>
              <div className={styles.imgDiv}>
                <img src="../src/assets/this month products/1.png" alt="" />

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
                <h5>The north coat</h5>

                <div className={styles.price}>
                  <span className={styles.discountPrice}>$260</span>
                  <span className={styles.realPrice}>
                    <del>$360</del>
                  </span>
                </div>

                <div className={styles.starAndCommentCount}>
                  <img src="../src/assets/Five star.png" alt="" />
                  <span>(65)</span>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className={styles.productBox}>
              <div className={styles.imgDiv}>
                <img src="../src/assets/this month products/2.png" alt="" />

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
                <h5>Gucci duffle bag</h5>

                <div className={styles.price}>
                  <span className={styles.discountPrice}>$960</span>
                  <span className={styles.realPrice}>
                    <del>$1160</del>
                  </span>
                </div>

                <div className={styles.starAndCommentCount}>
                  <img src="../src/assets/Four half star.png" alt="" />
                  <span>(65)</span>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className={styles.productBox}>
              <div className={styles.imgDiv}>
                <img src="../src/assets/this month products/3.png" alt="" />

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
                <h5>RGB liquid CPU Cooler</h5>

                <div className={styles.price}>
                  <span className={styles.discountPrice}>$160</span>
                  <span className={styles.realPrice}>
                    <del>$170</del>
                  </span>
                </div>

                <div className={styles.starAndCommentCount}>
                  <img src="../src/assets/Four half star.png" alt="" />
                  <span>(65)</span>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className={styles.productBox}>
              <div className={styles.imgDiv}>
                <img src="../src/assets/this month products/4.png" alt="" />

                <div className={styles.iconBox}>
                  <div>
                    <CgHeart fontSize="18px" />
                  </div>
                  <div>
                    <CgEye fontSize="18px" />
                  </div>
                </div>

                {/* <div className={styles.discountBox}>
                  <div>-25%</div>
                </div> */}

                <div className={styles.addToCart}>Add To Cart</div>
              </div>

              <div className={styles.productDetail}>
                <h5>Small BookSelf</h5>

                <div className={styles.price}>
                  <span className={styles.discountPrice}>$360</span>
                  <span className={styles.realPrice}>
                    <del></del>
                  </span>
                </div>

                <div className={styles.starAndCommentCount}>
                  <img src="../src/assets/Five star.png" alt="" />
                  <span>(65)</span>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={styles.viewAllButton}>
            <div>View All</div>
          </div> */}
        </div>
      </div>

      <div className={styles.bannerBox}>
        <div className={styles.bannerBoxImage}>
          <div className={styles.leftBox}>
            <div className={styles.firstTitle}>Categories</div>
            <div className={styles.secondTitle}>
              Enhance Your Music Experience
            </div>
            <div className={styles.clockBox}>
              <div className={styles.clockCircle}>
                <h6>23</h6>
                <span>Hours</span>
              </div>

              <div className={styles.clockCircle}>
                <h6>05</h6>
                <span>Days</span>
              </div>

              <div className={styles.clockCircle}>
                <h6>59</h6>
                <span>Minutes</span>
              </div>

              <div className={styles.clockCircle}>
                <h6>35</h6>
                <span>Seconds</span>
              </div>
            </div>
            <div className={styles.buyNowButton}>
              <div>Buy Now!</div>
            </div>
          </div>

          <div className={styles.rightBox}>
            <img src="../src/assets/banner/second banner.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSellingProducts;
