import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaAws,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiKubernetes,
  SiSpring,
  SiAngular,
  SiVuedotjs,
  SiSwift,
  SiMysql,
  SiOracle,
  SiAmazondynamodb,
  SiTerraform,
  SiJenkins,
  SiGithubactions,
  SiJavascript,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import { TbBrandReactNative, TbTerminal2 } from "react-icons/tb";
import "./Skills.css";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <FaJava />, level: 95 },
        { name: "Python", icon: <FaPython />, level: 85 },
        { name: "JavaScript (ES6+)", icon: <SiJavascript />, level: 90 },
        { name: "TypeScript", icon: <SiTypescript />, level: 90 },
        { name: "C++", icon: <SiCplusplus />, level: 80 },
        { name: "C", icon: <SiC />, level: 75 },
        { name: "SQL", icon: <FaDatabase />, level: 90 },
        { name: "Shell Script", icon: <TbTerminal2 />, level: 82 },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "Oracle", icon: <SiOracle />, level: 85 },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 88 },
        { name: "MySQL", icon: <SiMysql />, level: 85 },
        { name: "MongoDB", icon: <SiMongodb />, level: 82 },
        { name: "DynamoDB", icon: <SiAmazondynamodb />, level: 78 },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Spring Boot", icon: <SiSpring />, level: 92 },
        { name: "Spring MVC", icon: <SiSpring />, level: 90 },
        { name: "React", icon: <FaReact />, level: 90 },
        { name: "React Native", icon: <TbBrandReactNative />, level: 80 },
        { name: "Angular", icon: <SiAngular />, level: 85 },
        { name: "Vue", icon: <SiVuedotjs />, level: 75 },
        { name: "SwiftUI", icon: <SiSwift />, level: 72 },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: <FaAws />, level: 90 },
        { name: "Docker", icon: <FaDocker />, level: 88 },
        { name: "Kubernetes", icon: <SiKubernetes />, level: 85 },
        { name: "Terraform", icon: <SiTerraform />, level: 80 },
        { name: "Jenkins", icon: <SiJenkins />, level: 85 },
        { name: "GitHub Actions", icon: <SiGithubactions />, level: 88 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="skills-container"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={itemVariants}
              className="skill-category"
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="skill-header">
                      <div className="skill-name">
                        <span className="skill-icon">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: catIndex * 0.2 + skillIndex * 0.1,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
