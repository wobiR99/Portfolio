import Reveal from "./Reveal";

const Section = ({ id, index, eyebrow, title, children }) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    className="scroll-mt-16 border-t border-line"
  >
    <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8 sm:py-28">
      <Reveal as="header" className="mb-12 sm:mb-16">
        <p
          aria-hidden="true"
          className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
        >
          <span className="text-accent">{String(index).padStart(2, "0")}</span>
          {" / "}
          {eyebrow}
        </p>
        <h2
          id={`${id}-title`}
          className="mt-3 text-2xl font-semibold tracking-tight text-fg sm:text-3xl"
        >
          {title}
        </h2>
      </Reveal>
      {children}
    </div>
  </section>
);

export default Section;
