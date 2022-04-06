import { Children } from "react";
import Head from "next/head";
import Link from "next/link";

import styles from './MainLayout.module.scss'

const MainLayout = (props) => {
  const { children, title } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="diabet" />
        <meta name="description" content="assistant for diabetes mellitus" />
        <meta charSet="utf-8" />
      </Head>
      <header className={styles.header}>
        <div className={`container ${styles.header__container}`}>
          <h1 className={styles.header__title}>{title}</h1>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}><Link href='/'>Main Page</Link></li>
              <li className={styles.item}><Link href='/about'>About</Link></li>
              <li className={styles.item}><Link href='/calculator'>Calculator</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          {children}
        </div>
      </main>
    </>
  )
}

export default MainLayout;
