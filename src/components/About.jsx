import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaRocket, FaLightbulb } from "react-icons/fa";
import "./About.css";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const highlights = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code following best practices",
    },
    {
      icon: <FaRocket />,
      title: "Fast Learner",
      description:
        "Quick to adapt to new technologies and frameworks in the ever-evolving tech landscape",
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solver",
      description:
        "Analytical thinking and creative solutions to complex technical challenges",
    },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="about-content"
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title">About Me</h2>
            <div className="title-underline"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="about-text">
            <p>
              I’m a Full-Stack Engineer who loves turning complex ideas into
              scalable, elegant software. My work blends backend efficiency with
              frontend craftsmanship, using technologies like Spring Boot,
              React, and AWS to build distributed systems that perform
              beautifully under load.
            </p>
            <p>
            I believe great software is all about balance — clean code that scales, 
            intuitive design that connects, and technology that actually 
            solves problems. I’m driven by curiosity and a desire to constantly 
            improve how things work under the hood, from optimizing performance 
            to refining the tiniest UI details. Every project is an opportunity 
            to learn, innovate, and create something that makes a real impact.
            </p>
            <p>
              When I’m not coding, you’ll probably find me experimenting with AI
              tools, working on side projects, or deep-diving into system design and
              architecture blogs. For me, development isn’t just a career — it’s
              a craft, and I’m always looking for ways to refine it.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="highlights-grid">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 212, 255, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
