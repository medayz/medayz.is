import Section from "../library/Section";
import TechsGrid from "./TechsGrid";
import TechItem from "./TechItem";
import TechItemLogo from "./TechItemLogo";
import Stars from "../library/Stars";

export function TechnologiesSection({ title, techs }) {
  return (
    <Section title={title}>
      <TechsGrid>
        {techs.map(
          (
            { name, logo, domain, description, familiarity = 0, tags = [] },
            index
          ) => (
            <a key={index} href={domain} target="_blank">
              <TechItem name={name} description={description} tags={tags}>
                <TechItemLogo name={name} logo={logo} />
                <Stars stars={familiarity} />
              </TechItem>
            </a>
          )
        )}
      </TechsGrid>
    </Section>
  );
}
