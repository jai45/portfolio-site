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
      title: "Distributed File Storage System (Dropbox-like)",
      description:
        "A full-stack Dropbox-style file storage platform built with React + Vite and Java Spring Boot, focused on fast uploads, resumable large-file transfers, and efficient cloud-backed storage workflows.",
      highlights: [
        "Implements secure authentication with JWT access tokens and refresh token rotation using HttpOnly cookies.",
        "Uploads files directly from the browser to Cloudflare R2 using presigned URLs for efficient, scalable transfer flows.",
        "Supports multipart uploads for files larger than 10 MB with 5 MB parallel chunks and resumable recovery after interruptions.",
        "Uses SHA-256 deduplication with Web Worker-based hashing and stores metadata, refresh tokens, and multipart progress in Neon Postgres.",
      ],
      technologies: [
        "React 19",
        "Vite 7",
        "Java 17",
        "Spring Boot",
        "Spring Security",
        "Neon Postgres",
        "Cloudflare R2",
        "Docker",
      ],
      github: "https://github.com/jai45/Dropbox",
      live: "https://dropbox-mauve.vercel.app/",
      image: "☁️",
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
          <p className="section-subtitle">Recent projects I’ve built</p>
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
              {/* <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div> */}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.highlights && (
                  <ul className="project-highlights">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                )}
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
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                  )}
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
