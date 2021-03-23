import Head from "next/head";
import {
  faGithub,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import SocialLink from "../library/SocialLink";
import Header from "../library/Header";
import Container from "../library/Container";

import Bio from "../components/Bio";
import { PublicReposSection } from "../components/PublicReposSection";
import { TechnologiesSection } from "../components/TechnologiesSection";

// import { getTechs } from "../utils/api";
// import { fetcher } from "../utils/helpers";
// import techStack from "../data/techstack.json";

function HomeHead() {
  return (
    <Head>
      <title>medayz</title>
      {/* <link rel="icon" href="/favicon.ico" /> */}
      <script async data-api="/_hive" src="/bee.js"></script>
    </Head>
  );
}

export default function Home({
  avatar = "",
  blog = "",
  url = "",
  twitter_username = "medayz1337",
  github_username = "medayz",
  frontend_techs = [],
  backend_techs = [],
  other_techs = [],
  databases = [],
  repos = []
}) {
  const socialLinks = [
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
  ];

  return (
    <Container>
      <HomeHead />

      <main>
        <Header avatar={{ src: avatar, alt: "my github avatar" }}>
          {socialLinks.map(({ ...props }, index) => (
            <SocialLink key={index} {...props} />
          ))}
        </Header>
        <Bio />
        <PublicReposSection repos={repos} />
        <TechnologiesSection
          title="Frontend Technologies:"
          techs={frontend_techs}
        />
        <TechnologiesSection
          title="Backend Technologies:"
          techs={backend_techs}
        />
        <TechnologiesSection title="Databases:" techs={databases} />
        <TechnologiesSection title="Other technologies:" techs={other_techs} />
      </main>

      <footer className="text-center">{new Date().getFullYear()}</footer>
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {}
  };
}
// export async function getStaticProps() {
//   const getJSON = fetcher({
//     headers: {
//       Authorization: `token ${process.env.GITHUB_API_TOKEN}`
//     }
//   });

//   const user_data = await getJSON("https://api.github.com/user");
//   const repos_data = await getJSON("https://api.github.com/users/medayz/repos");
//   const backend_techs = await getTechs(techStack.backend);
//   const frontend_techs = await getTechs(techStack.frontend);
//   const databases = await getTechs(techStack.databases);
//   const other_techs = await getTechs(techStack.other);

//   return {
//     props: {
//       blog: user_data.blog,
//       url: user_data.html_url,
//       avatar: user_data.avatar_url,
//       twitter_username: user_data.twitter_username,
//       github_username: user_data.login,
//       frontend_techs: frontend_techs,
//       backend_techs: backend_techs,
//       databases: databases,
//       other_techs: other_techs,
//       repos: repos_data
//         .filter(function isNotFork(repo) {
//           return !repo.fork;
//         })
//         .filter(function isNotBio(repo) {
//           return repo.full_name !== "medayz/medayz";
//         })
//         .map((repo) => ({
//           id: repo.id,
//           name: repo.name,
//           url: repo.html_url,
//           clone_url: repo.clone_url,
//           lang: repo.language,
//           description: repo.description
//         }))
//     }
//   };
// }
