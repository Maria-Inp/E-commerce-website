//data
import productBox from "../data/allProductsData";

//css
import styles from "./AllProducts.module.css";
import title from "../css/ProductsMainTitle.module.css";
import box from "../css/ProductBoxStyle.module.css";
import redButton from "../css/RedButton.module.css"

//icons
// import { BsArrowRight } from "react-icons/bs";
// import { BsArrowLeft } from "react-icons/bs";
import { CgHeart } from "react-icons/cg";
import { CgEye } from "react-icons/cg";
import discountPrice from "../helpful/discountFunction";

function AllProducts() {
  return (
    <>
      <div className={styles.allProductsBox}>
        <div className={styles.allProductsMainBox}>
          <div className={title.topBox}>
            <div className={title.topBoxTitle}>
              <div className={title.redBox}></div>
              <h4>Our Products</h4>
            </div>
          </div>

          <div className={styles.ourProductsDetail}>
            <div className={styles.ourProductsTitle}>
              <h5>Explore Our Products</h5>
            </div>

            {/* <div className={styles.arrows}>
              <div className={styles.arrowLeft}>
                <BsArrowLeft />
              </div>

              <div className={styles.arrowRight}>
                <BsArrowRight />
              </div>
            </div> */}
          </div>

          <div className={styles.bottomBox}>
            {productBox.map((product, index) => {
              return (
                <div key={index} className={box.productBox}>
                  <div className={box.imgDiv}>
                    <img src={product.src} alt={product.alt} />

                    <div className={box.iconBox}>
                      <div>
                        <CgHeart fontSize="18px" />
                      </div>
                      <div>
                        <CgEye fontSize="18px" />
                      </div>
                    </div>

                    {product.discount !== 0 ? (
                      <div className={box.discountBox}>
                        <div>-{product.discount}%</div>
                      </div>
                    ) : null}

                    {product.isNew ? (
                      <div className={box.newBox}>
                        <div>New</div>
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

                    {product.colorsBox.length !== 0 ? (
                      <div className={box.colorCircle}>
                        {product.colorsBox.map((color, index) => {
                          // console.log({color});
                          return (
                            <div key={index} className={box.outerCircle}>
                              <div
                                style={{ backgroundColor: color}}
                              ></div>
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

      <div className={redButton.allProductButton}>
        <div className={redButton.mainButton}>
          <span>View All Products</span>
        </div>
      </div>
    </>
  );
}

export default AllProducts;
