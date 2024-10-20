import Image from 'next/image';
import styles from '../user.module.css'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <div className={styles['container']}>
        <h1>Stay Fit Forever</h1>
        <Image src='/11663387_1262.svg' alt="" fill />
      </div>
    </>
  );
}