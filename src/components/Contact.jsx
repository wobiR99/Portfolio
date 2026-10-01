import { useState } from "react";
import emailjs from "@emailjs/browser";
import { profile, socials } from "../constants";
import { externalProps } from "../utils/links";
import Reveal from "./Reveal";
import Section from "./Section";
import { SocialIcon } from "./Icons";

const emptyForm = { name: "", email: "", message: "" };

const statusMessages = {
  sent: "Thanks, your message is on its way. I'll get back to you soon.",
  error: `Something went wrong. Please try again, or email me at ${profile.email}.`,
};

const fieldClass =
  "w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-fg placeholder:text-subtle transition-colors hover:border-white/15 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

const Field = ({ label, name, children }) => (
  <label htmlFor={name} className="flex flex-col gap-2">
    <span className="text-sm text-fg">{label}</span>
    {children}
  </label>
);

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_xirpr0r",
        "template_k9z291l",
        {
          from_name: form.name,
          to_name: "Ifeanyi",
          from_email: form.email,
          to_email: profile.email,
          message: form.message,
        },
        "hndbwSIXlqtTDDoIF"
      );
      setStatus("sent");
      setForm(emptyForm);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const sending = status === "sending";

  return (
    <Section id="contact" index={4} eyebrow="Contact" title="Let's work together">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
        <Reveal>
          <p className="max-w-md text-base leading-relaxed text-muted sm:text-[17px]">
            Have a project in mind, or want to talk about a role? Send me a
            message and I’ll reply as soon as I can.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block break-all text-lg font-medium tracking-tight text-fg underline decoration-line decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent sm:text-xl"
          >
            {profile.email}
          </a>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  {...externalProps(social.href)}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
                >
                  <SocialIcon name={social.icon} className="h-4 w-4" />
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={fieldClass}
                />
              </Field>
              <Field label="Email" name="email">
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </Field>
            </div>
            <Field label="Message" name="message">
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to talk about?"
                className={`${fieldClass} resize-y`}
              />
            </Field>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <button
                type="submit"
                disabled={sending}
                className="inline-flex h-11 items-center rounded-full bg-fg px-6 text-sm font-medium text-bg transition-colors hover:bg-white/85 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending…" : "Send message"}
              </button>
              <p
                role="status"
                className={`text-sm ${status === "error" ? "text-red-400" : "text-muted"}`}
              >
                {statusMessages[status]}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
