import Head from "next/head";
import Image from "next/image";

const styles = {};

export default function Home() {
  return (
    <div className="md:container md:mx-auto bg-gradient-to-r from-emerald-50 to-teal-100 font-mono text-green-600 px-6 dark:bg-gray-900 dark:text-green-200">
      <Head>
        <title>medayz</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <section className={styles.bio}>
          <div className="mb-2">
            Hello, my full name is Mohamed Ayoub Zahir! too long right ? 😁
          </div>
          <div className="mb-2">
            Well you can call me Ayoub, and on the internet I just use medayz
            everywhere as my username!
          </div>
          <div className="flex flex-row sm:items-center mb-2">
            <div className="flex-shrink-0">
              <Image
                src="/js.png"
                alt="JS logo"
                width={21}
                height={21}
                layout="fixed"
              />
            </div>
            <span className="ml-2">I'm a fullstack JS developer</span>
          </div>
          <div className="flex flex-row sm:items-center mb-2">
            <div className="flex-shrink-0">
              <Image
                src="/react.png"
                alt="React logo"
                width={21}
                height={21}
                layout="fixed"
              />
            </div>
            <span className="ml-2">
              I'm currently interested in JavaScript, React and the technologies
              of their ecosystem!
            </span>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>2020</footer>
    </div>
  );
}
