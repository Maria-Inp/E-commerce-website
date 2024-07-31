//data
import productBox from "../data/bestSellingData";

//css
import styles from "./BestSellingProducts.module.css";

//icons
import { CgHeart } from "react-icons/cg";
import { CgEye } from "react-icons/cg";

//Images
import bannerImg from "../assets/banner/second banner.png";
import discountPrice from "../helpful/discountFunction";

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
            {productBox.map((product, index) => {
              return (
                <div key={index} className={styles.productBox}>
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
                          ${discountPrice(product.price, product.discount)}
                        </span>
                      ) : null}

                      <span className={styles.realPrice}>
                        {product.discount !== 0 ? (
                          <del>${product.price}</del>
                        ) : (
                          <span className={styles.priceWithoutDiscount}>${product.price}</span>
                        )}
                      </span>
                    </div>

                    <div className={styles.starAndCommentCount}>
                      <img src={product.star} alt="" />
                      <span>({product.numOfComments})</span>
                    </div>
                  </div>
                </div>
              );
            })}
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
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSellingProducts;
