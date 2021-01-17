import Head from "next/head";
import {
  faGithub,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import SocialLink from "../library/SocialLink";
import Header from "../library/Header";
import Section from "../library/Section";
import Container from "../library/Container";
import Stars from "../library/Stars"

import Bio from "../components/Bio";
import RepoCard from "../components/RepoCard";
import ReposGrid from "../components/ReposGrid";
import TechsGrid from "../components/TechsGrid";
import TechItem from "../components/TechItem";

import { getTechs } from "../utils/api";
import techStack from "../data/techstack.json";
import TechItemLogo from "../components/TechItemLogo";

export default function Home({
  avatar,
  blog,
  url,
  twitter_username,
  github_username,
  frontend_techs,
  backend_techs,
  other_techs,
  databases,
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
          {[
            {
              link: blog,
              text: "Blog:",
              image: "/hashnode.svg",
              username: "medayz"
            },
            { link: url, icon: faGithub, username: github_username },
            {
              link: "https://linkedin.com/in/medayz",
              icon: faLinkedin,
              username: "medayz"
            },
            {
              link: `https://twitter.com/${twitter_username}`,
              icon: faTwitter,
              username: `@${twitter_username}`
            }
          ].map(({ ...props }, index) => (
            <SocialLink key={index} {...props} />
          ))}
        </Header>

        <Bio />

        <Section title="Public repositories:">
          <ReposGrid>
            {repos.map(({ id, ...props }) => (
              <RepoCard key={id} {...props} />
            ))}
          </ReposGrid>
        </Section>

        <Section title="Frontend Technologies:">
          <TechsGrid>
            {frontend_techs.map(({ name, logo, domain, description, familiarity=0, tags=[] }, index) => (
              <a key={index} href={domain} target="_blank">
                <TechItem name={name} description={description} tags={tags}>
                  <TechItemLogo name={name} logo={logo} />
                  <Stars stars={familiarity} />
                </TechItem>
              </a>
            ))}
          </TechsGrid>
        </Section>

        <Section title="Backend Technologies:">
          <TechsGrid>
            {backend_techs.map(({ name, logo, domain, description, familiarity=0, tags=[] }, index) => (
              <a key={index} href={domain} target="_blank">
                <TechItem name={name} description={description} tags={tags}>
                  <TechItemLogo name={name} logo={logo} />
                  <Stars stars={familiarity} />
                </TechItem>
              </a>
            ))}
          </TechsGrid>
        </Section>

        <Section title="Databases:">
          <TechsGrid>
            {databases.map(({ name, logo, domain, description, familiarity=0, tags=[] }, index) => (
              <a key={index} href={domain} target="_blank">
                <TechItem name={name} description={description} tags={tags}>
                  <TechItemLogo name={name} logo={logo} />
                  <Stars stars={familiarity} />
                </TechItem>
              </a>
            ))}
          </TechsGrid>
        </Section>

        <Section title="Other technologies:">
          <TechsGrid>
            {other_techs.map(({ name, logo, domain, description, familiarity=0, tags=[] }, index) => (
              <a key={index} href={domain} target="_blank">
                <TechItem name={name} description={description} tags={tags}>
                  <TechItemLogo name={name} logo={logo} />
                  <Stars stars={familiarity} />
                </TechItem>
              </a>
            ))}
          </TechsGrid>
        </Section>
      </main>

      <footer className="text-center">{new Date().getFullYear()}</footer>
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
  const backend_techs = await getTechs(techStack.backend);
  const frontend_techs = await getTechs(techStack.frontend);
  const databases = await getTechs(techStack.databases);
  const other_techs = await getTechs(techStack.other);

  return {
    props: {
      blog: user_data.blog,
      url: user_data.html_url,
      avatar: user_data.avatar_url,
      twitter_username: user_data.twitter_username,
      github_username: user_data.login,
      frontend_techs: frontend_techs,
      backend_techs: backend_techs,
      databases: databases,
      other_techs: other_techs,
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
