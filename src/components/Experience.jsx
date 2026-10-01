import { experiences } from "../constants";
import Reveal from "./Reveal";
import Section from "./Section";

const Experience = () => (
  <Section id="experience" index={2} eyebrow="Experience" title="Where I've worked">
    <ol className="divide-y divide-line">
      {experiences.map((experience) => (
        <Reveal
          as="li"
          key={`${experience.company_name}-${experience.date}`}
          className="grid gap-3 py-10 first:pt-0 last:pb-0 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-10"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-muted md:pt-1.5">
            {experience.date}
          </p>
          <div>
            <h3 className="text-base font-medium text-fg">
              {experience.title}
              <span className="text-muted"> · {experience.company_name}</span>
            </h3>
            <ul className="mt-4 max-w-2xl space-y-2.5 text-sm leading-relaxed text-muted">
              {experience.points.map((point) => (
                <li
                  key={point}
                  className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-subtle"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </ol>
  </Section>
);

export default Experience;
