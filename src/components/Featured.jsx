import styles from "./Featured.module.css";

//images
import img1 from "../assets/arrival product/1.png"
import img2 from "../assets/arrival product/2.png"
import img3 from "../assets/arrival product/3.png"
import img4 from "../assets/arrival product/4.png"

function Featured() {
  return (
    <div className={styles.featuredBox}>
      <div className={styles.featuredMainBox}>
        <div className={styles.topBox}>
          <div className={styles.topTitle}>
            <div className={styles.redBox}></div>
            <h4>Featured</h4>
          </div>

          <div className={styles.featuredTitle}>
            <h5>New Arrival</h5>
          </div>
        </div>

        <div className={styles.bottomBox}>
          <div className={styles.leftBox}>
            <img src={img1} alt="" />
            <div className={styles.imgDescription}>
              <h5>PlayStation 5</h5>
              <span>
                Black and White version of the PS5 coming out on sale.
              </span>
              <a href="">Shop Now</a>
            </div>
          </div>
          <div className={styles.rightBox}>
            <div className={styles.rightTopBox}>
              <img src={img2} alt="" />
              <div className={styles.imgDescription}>
                <h5>Women’s Collections</h5>
                <span>
                  Featured woman collections that give you another vibe.
                </span>
                <a href="">Shop Now</a>
              </div>
            </div>
            <div className={styles.rightBottomBox}>
              <div className={styles.rightBottomBoxLeft}>
                <img src={img3} alt="" />
                <div className={styles.imgDescription}>
                  <h5>Speakers</h5>
                  <span>Amazon wireless speakers</span>
                  <a href="">Shop Now</a>
                </div>
              </div>
              <div className={styles.rightBottomBoxRight}>
                <img src={img4} alt="" />
                <div className={styles.imgDescription}>
                  <h5>Perfume</h5>
                  <span>GUCCI INTENSE OUD EDP</span>
                  <a href="">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
