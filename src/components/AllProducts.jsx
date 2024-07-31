//data
import productBox from "../data/allProductsData";

//css
import styles from "./AllProducts.module.css";

//icons
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { CgHeart } from "react-icons/cg";
import { CgEye } from "react-icons/cg";
import discountPrice from "../helpful/discountFunction";

function AllProducts() {
  return (
    <>
      <div className={styles.allProductsBox}>
        <div className={styles.allProductsMainBox}>
          <div className={styles.topBox}>
            <div className={styles.ourProductsTitle}>
              <div className={styles.redBox}></div>
              <h4>Our Products</h4>
            </div>

            <div className={styles.ourProductsDetail}>
              <div className={styles.ourProductsTitle}>
                <h5>Explore Our Products</h5>
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

                    {product.isNew ? (
                      <div className={styles.newBox}>
                        <div>New</div>
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

                    {product.colorsBox.length !== 0 ? (
                      <div className={styles.colorCircle}>
                        {product.colorsBox.map((color, index) => {
                          // console.log(product, color);
                          return (
                            <div key={index} className={styles.outerCircle}>
                              <div style={{ backgroundColor: `"${ color }"` }}></div>
                            </div>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.allProductButton}>
        <div className={styles.mainButton}>
          <span>View All Products</span>
        </div>
      </div>
    </>
  );
}

export default AllProducts;
