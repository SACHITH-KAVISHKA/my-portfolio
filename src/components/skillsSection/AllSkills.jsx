import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BiLogoSpringBoot } from "react-icons/bi";
import { LiaJava } from "react-icons/lia";
import { FaPython } from "react-icons/fa6";

const skills = [
  {
    skill: "Java",
    icon: LiaJava,
  },
  {
    skill: "SpringBoot",
    icon: BiLogoSpringBoot,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },


];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
