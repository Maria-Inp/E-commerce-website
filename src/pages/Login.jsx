//images
import sidePic from "../assets/signup and login/Side Image.png";

//css
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.sideImage}>
        <img src={sidePic} alt="" />
      </div>

      <div className={styles.rightBox}>
        <div className={styles.rightMainBox}>
          <div className={styles.title}>
            <h5>Login in to Exclusive</h5>
            <span>Enter your details below</span>
          </div>

          <div className={styles.inputs}>
            <input type="text" placeholder="Email or Phone Number" />
            <input type="password" placeholder="Password" />
          </div>

          <div className={styles.buttons}>
            <div className={styles.loginButton}>
              <span>Log in</span>
            </div>
            <div className={styles.passwordButton}>
              <span>Forget Password?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
