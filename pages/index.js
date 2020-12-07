import Head from "next/head";
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

export default function Home({
  avatar,
  url,
  twitter_username,
  github_username,
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
      Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`
    }
  };
  const user = await fetch("https://api.github.com/user", headers);
  const repos = await fetch(
    "https://api.github.com/users/medayz/repos",
    headers
  );
  const user_data = await user.json();
  const repos_data = await repos.json();

  return {
    props: {
      url: user_data.html_url,
      avatar: user_data.avatar_url,
      twitter_username: user_data.twitter_username,
      github_username: user_data.login,
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
