import { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const styles = {};

async function selectText(node) {
  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(node);
    range.select();
    document.execCommand("copy");
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
  }
  window.getSelection().removeAllRanges();
}

export default function Home({ avatar, repos }) {
  return (
    <div className="container mx-auto max-w-2xl p-6">
      <Head>
        <title>medayz</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <section>
          <img
            className="rounded-full border-solid border-2 border-gray-50 my-8"
            src={avatar}
            alt="my twitter picture"
            height={100}
            width={100}
          />
          <p className="mb-2">
            Hello, my full name is Mohamed Ayoub Zahir! too long right ? 😁
          </p>
          <p className="mb-2">
            Well you can call me Ayoub, and on internet I just use medayz
            everywhere as my username!
          </p>
          <div className="flex flex-row sm:items-center mb-2">
            <div className="flex sm:items-center flex-shrink-0">
              <Image
                src="/js.png"
                alt="JS logo"
                width={24}
                height={24}
                layout="fixed"
              />
            </div>
            <p className="ml-2">I'm a fullstack JS developer</p>
          </div>
          <div className="flex flex-row sm:items-center mb-2">
            <div className="flex sm:items-center flex-shrink-0">
              <Image
                src="/react.png"
                alt="React logo"
                width={24}
                height={24}
                layout="fixed"
              />
            </div>
            <p className="ml-2">
              I'm currently interested in JavaScript, React and the technologies
              of their ecosystem!
            </p>
          </div>
        </section>
        <section className="my-16">
          <div className="grid sm:grid-cols-2 gap-8 font-sans">
            {repos.map(function RepoCard({
              id,
              name,
              url,
              clone_url,
              lang,
              description
            }) {
              const [visibility, setVisibility] = useState("invisible");
              const urlSpanRef = useRef();

              const getLangLogo = (lang) => {
                console.log(lang);
                if (lang === "JavaScript") {
                  return "/js.png";
                } else if (lang === "PHP") {
                  return "/php.png";
                }

                return "";
              };

              return (
                <div
                  key={id}
                  className="border-solid border-2 border-blue-50 dark:border-gray-800 rounded-md"
                >
                  <div className="h-full flex flex-col justify-between">
                    <div className="flex justify-between bg-blue-50 dark:bg-gray-800 p-2">
                      <div className="flex items-center">
                        {lang ? (
                          <Image
                            className="rounded-sm"
                            src={getLangLogo(lang)}
                            width={21}
                            height={21}
                            layout="fixed"
                          />
                        ) : (
                          <FontAwesomeIcon icon={faGithub} />
                        )}
                        <span className="ml-2">{name}</span>
                      </div>
                      <a href={url} target="_blank">
                        <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                      </a>
                    </div>

                    {description && (
                      <p className="text-sm text-gray-400 dark:text-gray-300 px-3 py-4">
                        {description}
                      </p>
                    )}
                    <button
                      className="flex flex-row-reverse items-end flex-auto px-2 pb-2"
                      onClick={() =>
                        selectText(urlSpanRef.current).then(() =>
                          setVisibility("clicked")
                        )
                      }
                      onMouseEnter={() => {
                        setVisibility("visible");
                      }}
                      onMouseLeave={() => setVisibility("invisible")}
                    >
                      <div>
                        <FontAwesomeIcon
                          icon={faGitAlt}
                          size="lg"
                          className={clsx({
                            "text-purple-900": visibility === "invisible",
                            "dark:text-yellow-100": visibility === "invisible",
                            "text-purple-700": visibility !== "invisible",
                            "dark:text-yellow-200": visibility !== "invisible"
                          })}
                        />
                        <span
                          ref={urlSpanRef}
                          className={clsx(
                            {
                              invisible: visibility === "invisible",
                              visible: visibility === "visible",
                              "text-right text-purple-700 dark:text-yellow-200":
                                visibility === "clicked",
                              "bg-blue-100 dark:bg-gray-700": [
                                "visible",
                                "invisible"
                              ].includes(visibility)
                            },
                            "text-xs truncate",
                            "absolute -ml-64 mt-0.5",
                            "w-56 px-2 py-0.5",
                            "rounded-md"
                          )}
                        >
                          {visibility === "clicked"
                            ? "copied!"
                            : `git clone ${clone_url}`}
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <footer>2020</footer>
    </div>
  );
}

export async function getStaticProps() {
  const headers = {
    headers: {
      Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`
    }
  };
  const user = await fetch("https://api.github.com/users/medayz", headers);
  const repos = await fetch(
    "https://api.github.com/users/medayz/repos",
    headers
  );
  const user_data = await user.json();
  const repos_data = await repos.json();

  return {
    props: {
      avatar: user_data.avatar_url,
      repos: repos_data
        .filter(function is_not_a_fork(repo) {
          return !repo.fork;
        })
        .map((repo) => ({
          id: repo.id,
          name: repo.name,
          url: repo.html_url,
          clone_url: repo.clone_url,
          lang: repo.language,
          description: repo.description
        }))
    }
  };
}
