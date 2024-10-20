"use client";
import { useState } from "react";
import styles from "../../user.module.css";
import Image from "next/image";
import Link from "next/link";
import { userValidation } from "@/app/actions/validation"; 
import { UserErrors } from "@/app/actions/validation";

const Register = () => {
  const [passwordVisibly, setPasswordVisibly] = useState(false);
  const [errors, setErrors] = useState<UserErrors>({}); 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    const formData = new FormData(event.currentTarget); 
    
    const result = await userValidation(formData); 

    if (result) {
      setErrors(result);
    } else {
      setErrors({}); 
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles["title-section"]}>
        <h1>Hey there,</h1>
        <h2>Create an Account</h2>
      </div>

      <div className={styles["label-section"]}>
        <div className={styles["input-wrapper"]}>
          <div className={styles["input-box"]}>
            <Image
              className={styles.icon}
              src="https://cdn.icon-icons.com/icons2/2941/PNG/512/profile_icon_183761.png"
              alt="Profile Icon"
              width={18}
              height={18}
            />
            <input type="text" placeholder="First Name" name="name" />
          </div>
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>

        <div className={styles["input-wrapper"]}>
          <div className={styles["input-box"]}>
            <Image
              className={styles.icon}
              src="https://cdn.icon-icons.com/icons2/2941/PNG/512/profile_icon_183761.png"
              alt="Profile Icon"
              width={18}
              height={18}
            />
            <input type="text" placeholder="Last Name" name="lastName" />
          </div>
          {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
        </div>

        <div className={styles["input-wrapper"]}>
          <div className={styles["input-box"]}>
            <Image
              className={styles.icon}
              src="https://cdn.icon-icons.com/icons2/2941/PNG/512/message_icon_183786.png"
              alt="Email Icon"
              width={18}
              height={18}
            />
            <input placeholder="Email" name="email" />
          </div>
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>

        <div className={styles["input-wrapper"]}>
          <div className={styles["input-box"]}>
            <Image
              className={styles.icon}
              src="https://cdn.icon-icons.com/icons2/1760/PNG/512/4105941-lock-login-password-security-sign-in-sign-out_113932.png"
              alt="Password Icon"
              width={18}
              height={18}
            />
            <input type={passwordVisibly ? "text" : "password"} placeholder="Password" name="password" />
            <Image
              className={styles.icon}
              src={passwordVisibly
                ? 'https://cdn.icon-icons.com/icons2/2941/PNG/512/hide_icon_183794.png'
                : '/displayed-Password.svg'}
              alt="Toggle Password Visibility Icon"
              width={18}
              height={18}
              onClick={(e) => {
                e.preventDefault();
                setPasswordVisibly(!passwordVisibly);
              }}
            />
          </div>
          {errors.password && <p className={styles.error}>{errors.password[0]}</p>}
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
              alt="Google Icon"
              width={20}
              height={20}
            />
          </div>
          <div>
            <Image
              src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202107facebookfblogosocialsocialmedia-115710_115591.png"
              alt="Facebook Icon"
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
  );
};

export default Register;
