import Section from "../library/Section";
import ReposGrid from "./ReposGrid";
import RepoCard from "./RepoCard";

export function PublicReposSection({ repos }) {
  return (
    <Section title="Public repositories:">
      <ReposGrid>
        {repos.map(({ id, ...props }) => (
          <RepoCard key={id} {...props} />
        ))}
      </ReposGrid>
    </Section>
  );
}
