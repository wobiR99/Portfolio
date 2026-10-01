import { motion } from "framer-motion";

const fadeUp = (delay) => ({
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98], delay },
  },
});

// Fades its content up into place the first time it scrolls into view.
const Reveal = ({ as = "div", delay = 0, children, ...props }) => {
  const Component = motion[as];
  return (
    <Component
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Reveal;
