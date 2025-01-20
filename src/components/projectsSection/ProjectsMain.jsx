import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Color Detection Application",
    year: "Sep2024",
    align: "right",
    image: "https://i.pinimg.com/1200x/a9/bf/b1/a9bfb1163e57e106806313c3cac932ce.jpg",
    link: "https://github.com/SACHITH-KAVISHKA/color-detection-application.git",
  },
  {
    name: "Cricket Management System",
    year: "Oug2024",
    align: "left",
    image: "https://i.pinimg.com/736x/e5/6e/b0/e56eb0ca4f76c8d175b1b4499f104cd2.jpg",
    link: 'https://github.com/SandaruAbey/ITP_Project_Update',
  },
  {
    name: "School Web",
    year: "Jul2024",
    align: "right",
    image: "images/website-img-3.jpg",
    link: "https://github.com/SACHITH-KAVISHKA/School-Web-Spring-boot.git",
  },
  {
    name: "Register Form",
    year: "May2024",
    align: "left",
    image: "images/regForm.png",
    link: "https://github.com/SACHITH-KAVISHKA/Login-and-Register-In-Kotlin.git",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
