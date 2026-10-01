import { profile, skills } from "../constants";
import Reveal from "./Reveal";
import Section from "./Section";

const About = () => (
  <Section id="about" index={3} eyebrow="About" title="A bit about me">
    <Reveal className="max-w-2xl space-y-5 text-base leading-relaxed text-muted sm:text-[17px]">
      {profile.bio.map((paragraph, index) => (
        <p key={paragraph} className={index === 0 ? "text-fg" : undefined}>
          {paragraph}
        </p>
      ))}
    </Reveal>

    <Reveal delay={0.1} className="mt-16 border-t border-line pt-10">
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        Stack
      </h3>
      <dl className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill.group}>
            <dt className="text-sm text-fg">{skill.group}</dt>
            <dd className="mt-3">
              <ul className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Reveal>
  </Section>
);

export default About;
