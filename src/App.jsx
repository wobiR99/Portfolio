import { MotionConfig } from "framer-motion";
import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Works,
} from "./components";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Works />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
