"use client";
import styles from "./login.module.css";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <div className={styles["title-section"]}>
          <h1>Hey there,</h1>
          <h2>Create an Account</h2>
        </div>

        <div className={styles["label-section"]}>
          <div className={styles["input-wrapper"]}> {/* New wrapper div */}
            <div className={styles["input-box"]}>
              <Image
                src="https://cdn.icon-icons.com/icons2/2941/PNG/512/profile_icon_183761.png"
                alt="Profile Icon"
                width={18}
                height={18}
              />
              <input type="text" placeholder="First Name" />
            </div>
          </div>

          <div className={styles["input-wrapper"]}> {/* New wrapper div */}
            <div className={styles["input-box"]}>
              <Image
                src="https://cdn.icon-icons.com/icons2/2941/PNG/512/profile_icon_183761.png"
                alt="Profile Icon"
                width={18}
                height={18}
              />
              <input type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className={styles["input-wrapper"]}> {/* New wrapper div */}
            <div className={styles["input-box"]}>
              <Image
                src="https://cdn.icon-icons.com/icons2/2941/PNG/512/message_icon_183786.png"
                alt="Profile Icon"
                width={18}
                height={18}
              />
              <input type="email" placeholder="Email" />
            </div>
          </div>

          <div className={styles["input-wrapper"]}> {/* New wrapper div */}
            <div className={styles["input-box"]}>
              <Image
                src="https://cdn.icon-icons.com/icons2/1760/PNG/512/4105941-lock-login-password-security-sign-in-sign-out_113932.png"
                alt="Profile Icon"
                width={18}
                height={18}
              />
              <input type="text" placeholder="Password" />
              <Image
                src="https://cdn.icon-icons.com/icons2/2941/PNG/512/hide_icon_183794.png"
                alt="Profile Icon"
                width={18}
                height={18}
              />
            </div>
          </div>

          <div className={styles["privacy-policy"]}>
            <label className={styles.checkbox}>
              <input type="checkbox" /> By continuing you accept our <u>Privacy Policy</u> and <br />
              <u>Term of Use</u>
            </label>
          </div>
        </div>

        <div className={styles.footer}>
          <button type="submit" className={styles.btn}>Register</button>

          <div className={styles.divider}>
            <div className={styles["divider-line"]}></div>
            <div className={styles["divider-text"]}>Or</div>
            <div className={styles["divider-line"]}></div>
          </div>

          <div className={styles["login-social-media"]}>
            <div>
              <Image
                src="https://cdn.icon-icons.com/icons2/729/PNG/512/google_icon-icons.com_62736.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
            <div>
              <Image
                src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202107facebookfblogosocialsocialmedia-115710_115591.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={styles.foot}>
            <p>Already have an account? <Link href="/login">Login</Link></p>
          </div>
        </div>
      </form>

      <form className={styles.form}>
        <div className={styles['img-box']}>
          <Image src="Vector-Section.svg" alt="" layout="responsive" width="100" height="100" />
        </div>
        <div className={styles["title-section"]}>
          <h2>Let’s complete your profile</h2>
          <h1>It will help us to know more about you!</h1>
        </div>

        <div className={styles["label-section"]}>
          <div className={styles["input-wrapper"]}> {/* New wrapper div */}
            <div className={styles["input-box"]}>
              <Image
                src="https://cdn.icon-icons.com/icons2/2946/PNG/512/user_icon_184286.png"
                alt="Profile Icon"
                width={18}
                height={18}
              />
              <input type="text" placeholder="Gender" />
            </div>
          </div>

          <div className={styles["input-wrapper"]}> {/* New wrapper div */}
            <div className={styles["input-box"]}>
              <Image
                src="https://cdn.icon-icons.com/icons2/3691/PNG/512/year_month_date_calendar_icon_229493.png"
                alt="Profile Icon"
                width={18}
                height={18}
              />
              <input type="date" />
            </div>
          </div>

          <div className={styles["input-wrapper"]}> {/* New wrapper div */}
            <div className={styles["input-box"]}>
              <Image
                src="https://cdn.icon-icons.com/icons2/3292/PNG/512/weight_medical_health_icon_208447.png"
                alt="Profile Icon"
                width={18}
                height={18}
              />
              <input type="email" placeholder="Your Weight" />
            </div>
          </div>

          <div className={styles["input-wrapper"]}> {/* New wrapper div */}
            <div className={styles["input-box"]}>
              <Image
                src="https://cdn.icon-icons.com/icons2/1206/PNG/512/1491254499-twowayarrowgoupdown_82937.png"
                alt="Profile Icon"
                width={18}
                height={18}
              />
              <input type="text" placeholder="Your Height" />
            </div>
            <span>CM</span>
          </div>
        </div>

        <button type="submit" className={styles.btn}>Register</button>
      </form>
    </main>
  );
};

export default Register;
