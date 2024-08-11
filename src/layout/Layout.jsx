/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

//icons
import { BsChevronDown } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";
import { RiFacebookLine } from "react-icons/ri";
import { LuTwitter } from "react-icons/lu";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiLinkedinLine } from "react-icons/ri";
import { MdCopyright } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";
import { BsArrowUp } from "react-icons/bs";

//css
import styles from "./Layout.module.css";
import "./Layout.css";

//images
import qrCode from "../assets/download app/Qr Code.png";
import googlePlay from "../assets/download app/GooglePlay.png";
import appStore from "../assets/download app/download-appstore.png";

function Layout({ children }) {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 450) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={styles.maxWidth}>
        <header className={styles.header}>
          <div className={styles.topHeader}>
            <div className={styles.mainBox}>
              <div className={styles.saleBox}>
                <span>
                  Summer Sale For All Swim Suits And Free Express Delivary - OFF
                  50%!
                </span>
                <a href="">ShopNow</a>
              </div>

              <div className={styles.language}>
                <div>
                  English
                </div>
                <BsChevronDown
                  className={styles.chevronIcon}
                  strokeWidth="1.5px"
                />
              </div>
            </div>
          </div>

          <div className={styles.navbar}>
            <div className={styles.leftNav}>
              <div className={styles.companyName}>
                <h2>Exclusive</h2>
              </div>

              <div className={styles.navbarLinks}>
                <NavLink to="/E-commerce-website/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/signup">SignUp</NavLink>
              </div>
            </div>

            <div className={styles.rightNav}>
              <div className={styles.searchBox}>
                <div className={styles.searchInput}>
                  <input type="text" placeholder="What are you looking for?" />
                </div>
                <div className={styles.searchIcon}>
                  <BsSearch />
                </div>
              </div>

              <div className={styles.icons}>
                <div className={styles.heart}>
                  <BsHeart />
                </div>
                <div className={styles.shoppingCart}>
                  <AiOutlineShoppingCart />
                </div>
                <div className={styles.menuIcon}>
                  <IoMenu />
                </div>
              </div>
            </div>
          </div>

          <div></div>

          <div className={styles.line}></div>
        </header>

        {children}

        <footer>
          <div className={styles.servicesBox}>
            <div className={styles.servicesMainBox}>
              <div className={styles.services1}>
                <div className={styles.serviceIcon}>
                  <TbTruckDelivery />
                </div>
                <div className={styles.serviceDetail}>
                  <h5>FREE AND FAST DELIVERY</h5>
                  <span>Free delivery for all orders over $140</span>
                </div>
              </div>

              <div className={styles.services2}>
                <div className={styles.serviceIcon}>
                  <MdOutlineHeadsetMic />
                </div>
                <div className={styles.serviceDetail}>
                  <h5>24/7 CUSTOMER SERVICE</h5>
                  <span>Friendly 24/7 customer support</span>
                </div>
              </div>

              <div className={styles.services3}>
                <div className={styles.serviceIcon}>
                  <RiShieldCheckLine />
                </div>
                <div className={styles.serviceDetail}>
                  <h5>MONEY BACK GUARANTEE</h5>
                  <span>We reurn money within 30 days</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.moveUpBox}>
            <div className={styles.moveUpMainBox}>
              {showTopBtn && (
                <div className={styles.moveUpIcon} onClick={scrollToTop}>
                  <BsArrowUp />
                </div>
              )}
            </div>
          </div>

          <div className={styles.footerBox}>
            <div className={styles.mainFooterBox}>
              <div className={styles.box1}>
                <h5>Exclusive</h5>
                <span>Subscribe</span>
                <p>Get 10% off your first order</p>
                <div>
                  <input type="text" placeholder="Enter your email" />
                  <VscSend fontSize="20px" />
                </div>
              </div>

              <div className={styles.box2}>
                <h5>Support</h5>
                <span>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</span>
                <span>exclusive@gmail.com</span>
                <span>+88015-88888-9999</span>
              </div>

              <div className={styles.box3}>
                <h5>Account</h5>
                <span>
                  <a href="">My Account</a>
                </span>
                <span>
                  <a href="">Login / Register</a>
                </span>
                <span>
                  <a href="">Cart</a>
                </span>
                <span>
                  <a href="">Wishlist</a>
                </span>
                <span>
                  <a href="">Shop</a>
                </span>
              </div>

              <div className={styles.box4}>
                <h5>Quick Link</h5>
                <span>
                  <a href="">Privacy Policy</a>
                </span>
                <span>
                  <a href="">Terms Of Use</a>
                </span>
                <span>
                  <a href="">FAQ</a>
                </span>
                <span>
                  <a href="">Contact</a>
                </span>
              </div>

              <div className={styles.box5}>
                <h5>Download App</h5>
                <span>Save $3 with App New User Only</span>
                <div className={styles.downloadApp}>
                  <div>
                    <img src={qrCode} alt="" />
                  </div>
                  <div className={styles.appStore}>
                    <img src={googlePlay} alt="" />
                    <img src={appStore} alt="" />
                  </div>
                </div>

                <div className={styles.footerIcons}>
                  <RiFacebookLine />
                  <LuTwitter />
                  <AiOutlineInstagram />
                  <RiLinkedinLine />
                </div>
              </div>
            </div>

            <div className={styles.copyRight}>
              <MdCopyright />
              <p>Copyright Rimel 2022. All right reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
