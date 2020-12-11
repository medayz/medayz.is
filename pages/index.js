import Head from "next/head";
import Image from "next/image";
import {
  faGithub,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import SocialLink from "./library/SocialLink";
import Header from "./library/Header";
import Section from "./library/Section";
import Container from "./library/Container";

import Bio from "./components/Bio";
import RepoCard from "./components/RepoCard";
import ReposGrid from "./components/ReposGrid";
import TechsGrid from "./components/TechsGrid";
import TechItem from "./components/TechItem";

import { getTechs } from "./api";

export default function Home({
  avatar,
  blog,
  url,
  twitter_username,
  github_username,
  techs,
  repos
}) {
  return (
    <Container>
      <Head>
        <title>medayz</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Header avatar={{ src: avatar, alt: "my github avatar" }}>
          <SocialLink
            link={blog}
            text="Blog:"
            image={"/hashnode.svg"}
            username="medayz"
          />
          <SocialLink link={url} icon={faGithub} username={github_username} />
          <SocialLink
            link={`https://linkedin.com/in/medayz`}
            icon={faLinkedin}
            username="medayz"
          />
          <SocialLink
            link={`https://twitter.com/${twitter_username}`}
            icon={faTwitter}
            username={`@${twitter_username}`}
          />
        </Header>

        <Bio />

        <Section title="Technologies I prefer or use the most:">
          <TechsGrid>
            {[
              {
                name: "JavaScript",
                logo: "/js.png"
              },
              ...techs
            ].map(({ name, logo }) => (
              <TechItem name={name}>
                <img className="rounded-md" src={logo} alt={`${name} logo`} />
              </TechItem>
            ))}
          </TechsGrid>
        </Section>

        <Section title="Public repositories:">
          <ReposGrid>
            {repos.map(({ id, ...props }) => (
              <RepoCard key={id} {...props} />
            ))}
          </ReposGrid>
        </Section>
      </main>

      <footer>2020</footer>
    </Container>
  );
}

export async function getStaticProps() {
  const headers = {
    headers: {
      Authorization: `token ${process.env.GITHUB_API_TOKEN}`
    }
  };
  const user = await fetch("https://api.github.com/user", headers);
  const repos = await fetch(
    "https://api.github.com/users/medayz/repos",
    headers
  );
  const user_data = await user.json();
  const repos_data = await repos.json();
  const techs_data = await getTechs([
    {
      name: "React.js",
      query: "react",
      url: "https://reactjs.org"
    },
    {
      name: "Next.js",
      query: "next.js",
      url: "https://nextjs.org"
    },
    {
      name: "NodeJS",
      query: "nodejs",
      url: "https://nodejs.org"
    },
    {
      name: "Express.js",
      query: "expressjs",
      url: "https://expressjs.com"
    },
    {
      name: "RxJS",
      query: "rxjs",
      url: "https://rxjs.dev"
    },
    {
      name: "Neo4j",
      query: "neo4j",
      url: "https://neo4j.com"
    },
    {
      name: "Tailwind CSS",
      query: "tailwindcss",
      url: "https://tailwindcss.com"
    },
    {
      name: "styled components",
      query: "styled-components",
      url: "https://www.styled-components.com"
    }
  ]);

  return {
    props: {
      blog: user_data.blog,
      url: user_data.html_url,
      avatar: user_data.avatar_url,
      twitter_username: user_data.twitter_username,
      github_username: user_data.login,
      techs: techs_data,
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
