import Head from "next/head";
import Image from "next/image";

const styles = {};

export default function Home({ avatar }) {
    return (
        <div className="container mx-auto max-w-2xl p-6">
            <Head>
                <title>medayz</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main>
                <section className={styles.bio}>
                    <img
                        className="rounded-full border-solid border-2 border-gray-50 my-8"
                        src={avatar}
                        alt="my twitter picture"
                        height={100}
                        width={100}
                    />
                    <p className="mb-2">
                        Hello, my full name is Mohamed Ayoub Zahir! too long
                        right ? 😁
                    </p>
                    <p className="mb-2">
                        Well you can call me Ayoub, and on internet I just use
                        medayz everywhere as my username!
                    </p>
                    <p className="flex flex-row sm:items-center mb-2">
                        <span className="flex sm:items-center flex-shrink-0">
                            <Image
                                src="/js.png"
                                alt="JS logo"
                                width={24}
                                height={24}
                                layout="fixed"
                            />
                        </span>
                        <span className="ml-2">
                            I'm a fullstack JS developer
                        </span>
                    </p>
                    <p className="flex flex-row sm:items-center mb-2">
                        <span className="flex sm:items-center flex-shrink-0">
                            <Image
                                src="/react.png"
                                alt="React logo"
                                width={24}
                                height={24}
                                layout="fixed"
                            />
                        </span>
                        <span className="ml-2">
                            I'm currently interested in JavaScript, React and
                            the technologies of their ecosystem!
                        </span>
                    </p>
                </section>
            </main>

            <footer className={styles.footer}>2020</footer>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://api.github.com/users/medayz");
    const data = await res.json();

    return {
        props: {
            avatar: data.avatar_url,
        },
    };
}
