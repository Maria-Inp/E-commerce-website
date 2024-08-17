import { NavLink } from "react-router-dom";

//images
import sidePic from "../assets/signup and login/Side Image.png";
import googleLogo from "../assets/signup and login/Icon-Google.png";

//css
import styles from "./SignUp.module.css";

function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.sideImage}>
        <img src={sidePic} alt="" />
      </div>

      <div className={styles.rightBox}>
        <div className={styles.rightMainBox}>
          <div className={styles.title}>
            <h5>Create an account</h5>
            <span>
              Enter your details below
            </span>
          </div>

          <div className={styles.inputs}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email or Phone Number" />
            <input type="password" placeholder="Password" />
          </div>

          <div className={styles.buttons}>
            <div className={styles.createButton}>
              <span>Create Account</span>
            </div>
            <div className={styles.googleButton}>
              <img src={googleLogo} alt="" />
              <span>Sign up with Google</span>
            </div>
          </div>

          <div className={styles.login}>
            <span>Already have account?</span>
            <NavLink to="/E-commerce-website/login">Log in</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
