// Open off-site links in a new tab; leave in-page and mailto links alone.
export const externalProps = (href) =>
  href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {};
