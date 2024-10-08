//data
import productBox from "../data/bestSellingData";

//css
import styles from "./BestSellingProducts.module.css";
import title from "../css/ProductsMainTitle.module.css";
import box from "../css/ProductBoxStyle.module.css";

//icons
import { CgHeart } from "react-icons/cg";
import { CgEye } from "react-icons/cg";

//Images
import bannerImg from "../assets/banner/second banner.png";
import discountPrice from "../helpful/discountFunction";
import CountdownTimer from "./CountdownTimer";

function BestSellingProducts() {
  return (
    <>
      <div className={styles.bestSellingBox}>
        <div className={styles.bestSellingMainBox}>
          <div className={title.topBox}>
            <div className={title.topBoxTitle}>
              <div className={title.redBox}></div>
              <h4>This Month</h4>
            </div>
          </div>

          <div className={styles.bestSellingDetail}>
            <div className={styles.BestSellingTitle}>
              <h5>Best Selling Products</h5>
            </div>
            <div className={styles.viewAllButton}>
              <div>View All</div>
            </div>
          </div>

          <div className={styles.bottomBox}>
            {productBox.map((product, index) => {
              return (
                <div key={index} className={box.productBox}>
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
              );
            })}
          </div>

          <div className={styles.viewAllButtonMin}>
            <div>View All</div>
          </div>
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
              <CountdownTimer />
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
