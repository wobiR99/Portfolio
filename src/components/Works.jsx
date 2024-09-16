import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[450px]"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => {
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.565 14.546a1 1 0 0 1-.709-1.7l1.968-1.978a4.028 4.028 0 0 0 0-5.687 4.025 4.025 0 0 0-5.686 0l-1.964 1.971a1 1 0 1 1-1.418-1.411l1.968-1.978A6.017 6.017 0 0 1 22 8.023a5.935 5.935 0 0 1-1.764 4.256l-1.962 1.973a1 1 0 0 1-.709.294Zm-5.291 5.694 1.979-1.968a1 1 0 0 0-1.41-1.418l-1.981 1.97a4.02 4.02 0 0 1-5.688-5.683l1.978-1.968a1 1 0 1 0-1.41-1.418l-1.98 1.97a6.02 6.02 0 0 0 8.512 8.515Zm-2.567-4.533 6.026-6.025a1 1 0 0 0-1.414-1.414l-6.026 6.025a1 1 0 1 0 1.414 1.414Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex flex-col flex-wrap">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>

        <div
          className={`mt-20 flex flex-wrap gap-7 ${
            projects.length == 1 && "self-center"
          }`}
        >
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
