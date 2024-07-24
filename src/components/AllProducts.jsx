//css
import styles from "./AllProducts.module.css";

//icons
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { CgHeart } from "react-icons/cg";
import { CgEye } from "react-icons/cg";

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
            {/* 1 */}
            <div className={styles.productBox}>
              <div className={styles.imgDiv}>
                <img src="../src/assets/all products/1.png" alt="" />

                <div className={styles.iconBox}>
                  <div>
                    <CgHeart fontSize="18px" />
                  </div>
                  <div>
                    <CgEye fontSize="18px" />
                  </div>
                </div>

                {/* <div className={styles.discountBox}>
                  <div>-40%</div>
                </div> */}

                <div className={styles.addToCart}>Add To Cart</div>
              </div>

              <div className={styles.productDetail}>
                <h5>Breed Dry Dog Food</h5>

                <div className={styles.price}>
                  <span className={styles.discountPrice}>$100</span>
                  <span className={styles.realPrice}>
                    <del></del>
                  </span>
                </div>

                <div className={styles.starAndCommentCount}>
                  <img src="../src/assets/Four Half star.png" alt="" />
                  <span>(35)</span>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className={styles.productBox}>
              <div className={styles.imgDiv}>
                <img src="../src/assets/all products/2.png" alt="" />

                <div className={styles.iconBox}>
                  <div>
                    <CgHeart fontSize="18px" />
                  </div>
                  <div>
                    <CgEye fontSize="18px" />
                  </div>
                </div>

                {/* <div className={styles.discountBox}>
                  <div>-40%</div>
                </div> */}

                <div className={styles.addToCart}>Add To Cart</div>
              </div>

              <div className={styles.productDetail}>
                <h5>CANON EOS DSLR Camera</h5>

                <div className={styles.price}>
                  <span className={styles.discountPrice}>$360</span>
                  <span className={styles.realPrice}>
                    <del></del>
                  </span>
                </div>

                <div className={styles.starAndCommentCount}>
                  <img src="../src/assets/Four Half star.png" alt="" />
                  <span>(95)</span>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className={styles.productBox}>
              <div className={styles.imgDiv}>
                <img src="../src/assets/all products/3.png" alt="" />

                <div className={styles.iconBox}>
                  <div>
                    <CgHeart fontSize="18px" />
                  </div>
                  <div>
                    <CgEye fontSize="18px" />
                  </div>
                </div>

                {/* <div className={styles.discountBox}>
                      <div>-40%</div>
                    </div> */}

                <div className={styles.addToCart}>Add To Cart</div>
              </div>

              <div className={styles.productDetail}>
                <h5>ASUS FHD Gaming Laptop</h5>

                <div className={styles.price}>
                  <span className={styles.discountPrice}>$700</span>
                  <span className={styles.realPrice}>
                    <del></del>
                  </span>
                </div>

                <div className={styles.starAndCommentCount}>
                  <img src="../src/assets/Four Half star.png" alt="" />
                  <span>(325)</span>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className={styles.productBox}>
              <div className={styles.imgDiv}>
                <img src="../src/assets/all products/4.png" alt="" />

                <div className={styles.iconBox}>
                  <div>
                    <CgHeart fontSize="18px" />
                  </div>
                  <div>
                    <CgEye fontSize="18px" />
                  </div>
                </div>

                {/* <div className={styles.discountBox}>
                      <div>-40%</div>
                    </div> */}

                <div className={styles.addToCart}>Add To Cart</div>
              </div>

              <div className={styles.productDetail}>
                <h5>Curology Product Set</h5>

                <div className={styles.price}>
                  <span className={styles.discountPrice}>$500</span>
                  <span className={styles.realPrice}>
                    <del></del>
                  </span>
                </div>

                <div className={styles.starAndCommentCount}>
                  <img src="../src/assets/Four Half star.png" alt="" />
                  <span>(145)</span>
                </div>
              </div>
            </div>

            {/* 5 */}
            <div className={styles.productBox}>
              <div className={styles.imgDiv}>
                <img src="../src/assets/all products/5.png" alt="" />

                <div className={styles.iconBox}>
                  <div>
                    <CgHeart fontSize="18px" />
                  </div>
                  <div>
                    <CgEye fontSize="18px" />
                  </div>
                </div>

                {/* <div className={styles.discountBox}>
                      <div>-40%</div>
                    </div> */}

                <div className={styles.newBox}>
                  <div>New</div>
                </div>

                <div className={styles.addToCart}>Add To Cart</div>
              </div>

              <div className={styles.productDetail}>
                <h5>Kids Electric Car</h5>

                <div className={styles.price}>
                  <span className={styles.discountPrice}>$960</span>
                  <span className={styles.realPrice}>
                    <del></del>
                  </span>
                </div>

                <div className={styles.starAndCommentCount}>
                  <img src="../src/assets/Four Half star.png" alt="" />
                  <span>(65)</span>
                </div>

                <div className={styles.colorCircle}>
                  <div className={styles.outerCircle}>
                    <div style={{ backgroundColor: "#FB1314" }}></div>
                  </div>
                  <div
                    className={styles.outerCircle}
                    style={{ backgroundColor: "#DB4444" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* 6 */}
            <div className={styles.productBox}>
              <div className={styles.imgDiv}>
                <img src="../src/assets/all products/6.png" alt="" />

                <div className={styles.iconBox}>
                  <div>
                    <CgHeart fontSize="18px" />
                  </div>
                  <div>
                    <CgEye fontSize="18px" />
                  </div>
                </div>

                {/* <div className={styles.discountBox}>
                      <div>-40%</div>
                    </div> */}

                <div className={styles.addToCart}>Add To Cart</div>
              </div>

              <div className={styles.productDetail}>
                <h5>Jr. Zoom Soccer Cleats</h5>

                <div className={styles.price}>
                  <span className={styles.discountPrice}>$1160</span>
                  <span className={styles.realPrice}>
                    <del></del>
                  </span>
                </div>

                <div className={styles.starAndCommentCount}>
                  <img src="../src/assets/Four Half star.png" alt="" />
                  <span>(35)</span>
                </div>

                <div className={styles.colorCircle}>
                  <div className={styles.outerCircle}>
                    <div style={{ backgroundColor: "#EEFF61" }}></div>
                  </div>
                  <div
                    className={styles.outerCircle}
                    style={{ backgroundColor: "#DB4444" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* 7 */}
            <div className={styles.productBox}>
              <div className={styles.imgDiv}>
                <img src="../src/assets/all products/7.png" alt="" />

                <div className={styles.iconBox}>
                  <div>
                    <CgHeart fontSize="18px" />
                  </div>
                  <div>
                    <CgEye fontSize="18px" />
                  </div>
                </div>

                {/* <div className={styles.discountBox}>
                      <div>-40%</div>
                    </div> */}
                    
                <div className={styles.newBox}>
                  <div>New</div>
                </div>

                <div className={styles.addToCart}>Add To Cart</div>
              </div>

              <div className={styles.productDetail}>
                <h5>GP11 Shooter USB Gamepad</h5>

                <div className={styles.price}>
                  <span className={styles.discountPrice}>$660</span>
                  <span className={styles.realPrice}>
                    <del></del>
                  </span>
                </div>

                <div className={styles.starAndCommentCount}>
                  <img src="../src/assets/Four Half star.png" alt="" />
                  <span>(55)</span>
                </div>

                <div className={styles.colorCircle}>
                  <div className={styles.outerCircle}>
                    <div style={{ backgroundColor: "#000000" }}></div>
                  </div>
                  <div
                    className={styles.outerCircle}
                    style={{ backgroundColor: "#DB4444" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* 8 */}
            <div className={styles.productBox}>
              <div className={styles.imgDiv}>
                <img src="../src/assets/all products/8.png" alt="" />

                <div className={styles.iconBox}>
                  <div>
                    <CgHeart fontSize="18px" />
                  </div>
                  <div>
                    <CgEye fontSize="18px" />
                  </div>
                </div>

                {/* <div className={styles.discountBox}>
                      <div>-40%</div>
                    </div> */}

                <div className={styles.addToCart}>Add To Cart</div>
              </div>

              <div className={styles.productDetail}>
                <h5>Quilted Satin Jacket</h5>

                <div className={styles.price}>
                  <span className={styles.discountPrice}>$660</span>
                  <span className={styles.realPrice}>
                    <del></del>
                  </span>
                </div>

                <div className={styles.starAndCommentCount}>
                  <img src="../src/assets/Four Half star.png" alt="" />
                  <span>(55)</span>
                </div>

                <div className={styles.colorCircle}>
                  <div className={styles.outerCircle}>
                    <div style={{ backgroundColor: "#184A48" }}></div>
                  </div>
                  <div
                    className={styles.outerCircle}
                    style={{ backgroundColor: "#DB4444" }}
                  ></div>
                </div>
              </div>
            </div>
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
