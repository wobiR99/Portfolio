import { lazy, Suspense } from "react";
import { profile, socials } from "../constants";
import Reveal from "./Reveal";
import { externalProps } from "../utils/links";
import { ArrowRightIcon, SocialIcon } from "./Icons";

// three.js is only needed for the background, so keep it out of the main bundle.
const StarsCanvas = lazy(() => import("./canvas/Stars"));

const Hero = () => (
  <section className="relative isolate -mt-16 overflow-hidden pt-16">
    <Suspense fallback={null}>
      <StarsCanvas />
    </Suspense>

    <div className="mx-auto flex min-h-[86vh] max-w-5xl flex-col justify-center px-6 py-24 sm:px-8">
      <Reveal
        as="p"
        className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-muted"
      >
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
        {profile.name} — {profile.role}
      </Reveal>

      <h1 className="mt-6 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-fg [text-wrap:balance]">
        {profile.headline}
      </h1>

      <Reveal
        as="p"
        delay={0.1}
        className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
      >
        {profile.summary}
      </Reveal>

      <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#work"
          className="group inline-flex h-11 items-center gap-2 rounded-full bg-fg px-5 text-sm font-medium text-bg transition-colors hover:bg-white/85"
        >
          View work
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <a
          href="#contact"
          className="inline-flex h-11 items-center rounded-full border border-line px-5 text-sm font-medium text-fg transition-colors hover:border-white/25 hover:bg-white/[0.03]"
        >
          Get in touch
        </a>
        <ul className="-ml-2.5 flex items-center gap-1 sm:ml-1">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                aria-label={social.name}
                {...externalProps(social.href)}
                className="inline-flex rounded-full p-2.5 text-muted transition-colors hover:text-fg"
              >
                <SocialIcon name={social.icon} className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default Hero;
