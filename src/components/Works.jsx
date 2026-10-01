import { projects } from "../constants";
import { externalProps } from "../utils/links";
import Reveal from "./Reveal";
import Section from "./Section";
import { ArrowUpRightIcon } from "./Icons";

const ProjectCard = ({
  name,
  description,
  highlights,
  tags,
  image,
  liveUrl,
  repoUrl,
  featured,
}) => (
  <article
    className={`group grid gap-5 ${
      featured
        ? "lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-center lg:gap-12"
        : ""
    }`}
  >
    {/* The title link below is the accessible one; the image is a larger mouse target. */}
    <a
      href={liveUrl}
      {...externalProps(liveUrl)}
      tabIndex={-1}
      aria-hidden="true"
      className="block aspect-video overflow-hidden rounded-xl border border-line bg-surface p-[5%] transition-colors duration-300 group-hover:border-white/20"
    >
      <img
        src={image}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full rounded-md object-cover object-top shadow-2xl shadow-black/50 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
      />
    </a>

    <div>
      <div className="flex items-baseline justify-between gap-4">
        <h3
          className={`${featured ? "text-xl" : "text-lg"} font-medium tracking-tight text-fg`}
        >
          <a
            href={liveUrl}
            {...externalProps(liveUrl)}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            {name}
            <ArrowUpRightIcon className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </h3>
        {repoUrl && (
          <a
            href={repoUrl}
            {...externalProps(repoUrl)}
            aria-label={`${name} source code`}
            className="font-mono text-xs text-muted transition-colors hover:text-fg"
          >
            Code
          </a>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      {highlights && (
        <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-subtle"
            >
              {highlight}
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4 font-mono text-xs text-muted">
        <span className="sr-only">Built with </span>
        {/* Non-breaking spaces keep a tag like "Claude API" on one line. */}
        {tags.map((tag) => tag.replaceAll(" ", "\u00a0")).join(" · ")}
      </p>
    </div>
  </article>
);

const Works = () => (
  <Section id="work" index={1} eyebrow="Work" title="Selected work">
    <div className="grid gap-14 md:grid-cols-2 md:gap-10">
      {projects.map((project, index) => (
        <Reveal
          key={project.name}
          delay={index * 0.08}
          className={project.featured ? "md:col-span-2" : undefined}
        >
          <ProjectCard {...project} />
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Works;
