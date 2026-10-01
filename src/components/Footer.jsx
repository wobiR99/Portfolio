import { profile, socials } from "../constants";
import { externalProps } from "../utils/links";
import { ArrowUpIcon } from "./Icons";

const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-5xl flex-col gap-5 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {socials.map((social) => (
          <li key={social.name}>
            <a
              href={social.href}
              {...externalProps(social.href)}
              className="transition-colors hover:text-fg"
            >
              {social.name}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-fg"
          >
            Back to top
            <ArrowUpIcon className="h-3.5 w-3.5" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
