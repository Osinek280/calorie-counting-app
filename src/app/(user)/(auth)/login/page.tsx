"use client";
import { useState } from "react";
import styles from "../../user.module.css";
import Image from "next/image";
import Link from "next/link";
import { userValidation } from "@/app/actions/validation"; 
import { UserErrors } from "@/app/actions/validation";

const Login = () => {
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
        <h2>Welcome Back</h2>
      </div>

      <div className={styles["label-section"]}>
        <div className={styles["input-wrapper"]}>
          <div className={styles["input-box"]}>
            <Image
              className={styles.icon}
              src="/icons/email.svg"
              alt="Email Icon"
              width={18}
              height={18}
            />
            <input placeholder="Email" name="email" />
          </div>
          {errors.email && <p className={styles.error}>{errors.email[0]}</p>}
        </div>

        <div className={styles["input-wrapper"]}>
          <div className={styles["input-box"]}>
            <Image
              className={styles.icon}
              src="/icons/lock.svg"
              alt="Password Icon"
              width={18}
              height={18}
            />
            <input type={passwordVisibly ? "text" : "password"} placeholder="Password" name="password" />
            <Image
              className={styles.icon}
              src={passwordVisibly
                ? '/icons/show-password.svg'
                : '/icons/hide-password.svg'}
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
        <Link href={'/'} className={styles['forgot-password-label']}>Forgot your password?</Link>
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
              src="/icons/google.svg"
              alt="Google Icon"
              width={20}
              height={20}
            />
          </div>
          <div>
            <Image
              src="/icons/facebook.svg"
              alt="Facebook Icon"
              width={20}
              height={20}
            />
          </div>
        </div>

        <div className={styles.foot}>
          <p>Don’t have an account yet? <Link href="/register">Register</Link></p>
        </div>
      </div>
    </form>
  );
};

export default Login;
