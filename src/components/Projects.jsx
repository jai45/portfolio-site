import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      github: "https://github.com",
      live: "https://example.com",
      image: "🛒",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates. Built with modern web technologies and featuring drag-and-drop functionality.",
      technologies: ["React", "Firebase", "TypeScript", "Material-UI"],
      github: "https://github.com",
      live: "https://example.com",
      image: "✓",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather dashboard using OpenWeather API. Features include location search, forecast data, and interactive charts for weather visualization.",
      technologies: ["React", "Chart.js", "API Integration", "CSS3"],
      github: "https://github.com",
      live: "https://example.com",
      image: "🌤️",
    },
    {
      title: "Social Media App",
      description:
        "Social networking platform with posts, comments, likes, and real-time notifications. Implemented with microservices architecture.",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Docker"],
      github: "https://github.com",
      live: "https://example.com",
      image: "💬",
    },
    {
      title: "Portfolio Generator",
      description:
        "Automated portfolio website generator allowing users to create professional portfolios by inputting their information through an intuitive form.",
      technologies: ["Next.js", "TailwindCSS", "Markdown", "Vercel"],
      github: "https://github.com",
      live: "https://example.com",
      image: "🎨",
    },
    {
      title: "Fitness Tracker",
      description:
        "Mobile-responsive fitness tracking application with workout logging, progress charts, and goal setting features.",
      technologies: ["React Native", "Redux", "Firebase", "Chart.js"],
      github: "https://github.com",
      live: "https://example.com",
      image: "💪",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2 className="section-title">Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Some of my recent work</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="projects-grid"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="project-card"
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
