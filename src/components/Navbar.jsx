import { useEffect, useState } from "react";
import { navLinks, profile } from "../constants";
import { CloseIcon, LogoMark, MenuIcon } from "./Icons";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-30 border-b transition-colors duration-300 ${
        solid ? "border-line bg-bg/80 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 sm:px-8"
      >
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 text-sm font-medium tracking-tight text-fg"
        >
          <LogoMark className="h-4 w-4" />
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 rounded-md p-2 text-muted transition-colors hover:text-fg sm:hidden"
        >
          {open ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-line sm:hidden">
        <ul className="mx-auto flex max-w-5xl flex-col px-6 py-3">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-base text-muted transition-colors hover:text-fg"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
