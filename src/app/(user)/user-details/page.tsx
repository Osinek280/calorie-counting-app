"use client"
import { useState } from 'react';
import styles from '../user.module.css'
import Image from 'next/image'
import { UserDetailsErrors, userDetailsValidation } from '@/app/actions/validation';


const UserDetails = () => {
  const [errors, setErrors] = useState<UserDetailsErrors>({}); 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    const formData = new FormData(event.currentTarget); 
    console.log(formData.get('heightUnit'))

    const result = await userDetailsValidation(formData); 

    if (result) {
      setErrors(result);
    } else {
      setErrors({}); 
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles['img-box']}>
        <Image
          src="/Vector-Section.svg" 
          alt="Vector Section"
          layout="responsive"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className={styles["title-section"]}>
        <h2>Let’s complete your profile</h2>
        <h1>It will help us to know more about you!</h1>
      </div>

      <div className={styles["label-section"]}>
        <div className={styles["input-wrapper"]}>
          <div className={styles["input-box"]}>
            <Image
              src="https://cdn.icon-icons.com/icons2/2946/PNG/512/user_icon_184286.png"
              alt="Profile Icon"
              width={18}
              height={18}
            />
            <select className={styles["gender-select"]} name="gender" defaultValue="">
              <option value="" disabled hidden>Choose Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          {errors.gender && <p className={styles.error}>{errors.gender}</p>}
        </div>

        <div className={styles["input-wrapper"]}>
          <div className={styles["input-box"]}>
            <Image
              src="https://cdn.icon-icons.com/icons2/3691/PNG/512/year_month_date_calendar_icon_229493.png"
              alt="Calendar Icon"
              width={18}
              height={18}
            />
            <input type="date" className={styles['date-input']} name="dateOfBirth" />
          </div>
          {errors.dateOfBirth && <p className={styles.error}>{errors.dateOfBirth}</p>}
        </div>

        <div className={styles["input-wrapper"]}>
          <div className={styles["input-container"]}>
            <div className={styles["input-box"]}>
              <Image
                src="https://cdn.icon-icons.com/icons2/3292/PNG/512/weight_medical_health_icon_208447.png"
                alt="Weight Icon"
                width={18}
                height={18}
              />
              <input type="text" placeholder="Your Weight" name="weight" />
            </div>
            <select className={styles['unit-selector']} name="weightUnit">
              <option value="kg">kg</option>
              <option value="lbs">lbs</option>
            </select>
          </div>
          {errors.weight && <p className={styles.error}>{errors.weight}</p>}
        </div>

        <div className={styles["input-wrapper"]}>
          <div className={styles["input-container"]}> 
            <div className={styles["input-box"]}>
              <Image
                src="https://cdn.icon-icons.com/icons2/1206/PNG/512/1491254499-twowayarrowgoupdown_82937.png"
                alt="Height Icon"
                width={18}
                height={18}
              />
              <input type="text" placeholder="Your Height" name="height" />
            </div>
            <select className={styles['unit-selector']} name="heightUnit">
              <option value="cm">cm</option>
              <option value="ft">ft</option>
            </select>
          </div>
          {errors.height && <p className={styles.error}>{errors.height}</p>}
        </div>
      </div>

      <button type="submit" className={styles.btn}>Register</button>
    </form>
  );
}

export default UserDetails;
