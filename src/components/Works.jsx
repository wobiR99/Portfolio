import { projects } from "../constants";
import { externalProps } from "../utils/links";
import Reveal from "./Reveal";
import Section from "./Section";
import { ArrowUpRightIcon } from "./Icons";

const ProjectCard = ({ name, description, tags, image, liveUrl, repoUrl }) => (
  <article className="group flex flex-col">
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

    <div className="mt-5 flex items-baseline justify-between gap-4">
      <h3 className="text-lg font-medium tracking-tight text-fg">
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
    <p className="mt-4 font-mono text-xs text-muted">
      <span className="sr-only">Built with </span>
      {tags.join(" · ")}
    </p>
  </article>
);

const Works = () => (
  <Section id="work" index={1} eyebrow="Work" title="Selected work">
    <div className="grid gap-14 md:grid-cols-2 md:gap-10">
      {projects.map((project, index) => (
        <Reveal key={project.name} delay={index * 0.08}>
          <ProjectCard {...project} />
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Works;
