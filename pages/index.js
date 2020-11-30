import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>medayz</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <section className={styles.bio}>
          Hello, my full name is Mohamed Ayoub Zahir! too long right ? 😁
          <br />
          Well you can call me Ayoub, and on the internet I just use medayz everywhere as my username!
          <br />
          <div className={styles.icon_text}>
            <Image
              src="/js.png"
              alt="JS logo"
              width={21}
              height={21}
            />
            <span>
              I'm a fullstack JS developer
            </span>
          </div>
          <div className={styles.icon_text}>
            <Image
              src="/react.svg"
              alt="React logo"
              width={21}
              height={21}
            />
            <span>
              I'm currently interested in JavaScript, React and the technologies of their ecosystem!
            </span>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        2020
      </footer>
    </div>
  )
}
