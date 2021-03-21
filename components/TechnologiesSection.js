import Section from "../library/Section";
import TechsGrid from "./TechsGrid";
import TechItem from "./TechItem";
import TechItemLogo from "./TechItemLogo";

export function TechnologiesSection({ title, techs }) {
  return (
    <Section title={title}>
      <TechsGrid>
        {techs.map(
          (
            { name, logo, domain, description, tags = [], type = "" },
            index
          ) => (
            <a key={index} href={domain} target="_blank">
              <TechItem type={type} description={description} tags={tags}>
                <TechItemLogo name={name} logo={logo} />
                <span className="text-xs font-bold dark:text-gray-50 flex-grow text-blue-800">
                  {name}
                </span>
              </TechItem>
            </a>
          )
        )}
      </TechsGrid>
    </Section>
  );
}
