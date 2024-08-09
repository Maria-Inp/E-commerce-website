//components
import Banner from "../components/Banner";

//css
import styles from "./SideMenu.module.css";

//icons
import { BsChevronRight } from "react-icons/bs";

function SideMenu() {
  return (
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
          <Banner />
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
