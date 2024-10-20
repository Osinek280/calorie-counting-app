import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <span>
          <h1>Dobre zdrowie zaczyna się od tego, co jesz.</h1>
          <p>Chcesz odżywiać się bardziej świadomie? Monitoruj posiłki, poznaj swoje nawyki i osiągaj wyznaczone cele dzięki aplikacji MyFitnessPal.</p>
          <Link href='/register' className={styles.btn}>Zacznij korzystać za darmo</Link>
        </span>
        <span>
          <Image src="/hero-slice@2x.webp" alt="" width="476" height="476" priority={true}/>
        </span>
      </main>
    </div>
  );
}
