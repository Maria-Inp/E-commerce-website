//components
import SideMenu from "../components/SideMenu";
import TodayProducts from "../components/TodayProducts";
import Category from "../components/Category";
import BestSellingProducts from "../components/BestSellingProducts";
import AllProducts from "../components/AllProducts";
import Featured from "../components/Featured";

//css
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      <div className={styles.maxWidth}>
        {/* banner   line   sideMenu */}
        <SideMenu />

        <TodayProducts />

        <Category />

        <BestSellingProducts />

        <AllProducts />

        <Featured />
      </div>
    </>
  );
}

export default HomePage;
