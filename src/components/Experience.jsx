import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import "./Experience.css";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "TD Bank",
      period: "July 2024 - Present",
      description: [
        "Engineered and deployed Java Spring Boot microservices with Apache Kafka, REST, and GraphQL APIs to process millions of analyst events per day with sub-second latency.",
        "Led the integration of React micro-frontends using Webpack Module Federation and a shared message bus, enabling independent deployments and reducing API requests by 60% through reusable UI architecture.",
        "Improved ESG search and reporting by combining Elasticsearch with Oracle, while building MongoDB-to-Snowflake ETL workflows and Python-based validation scripts for accurate, real-time KPI insights.",
        "Boosted platform resilience and performance through AWS API Gateway, ALB routing, disaster recovery planning, caching, CDN integration, and lazy loading, lowering response latency and supporting traffic growth.",
      ],
    },
    {
      title: "Software Development Engineer",
      company: "Lumen Technologies",
      period: "Aug 2021 - Jul 2022",
      description: [
        "Optimized a Java Spring Boot backend by converting synchronous payroll workflows into multi-threaded batch processes, reducing execution time by 75% and increasing throughput 3x.",
        "Cut REST API response times from seconds to under 100ms by tuning JPA/Hibernate mappings, adding database indexes, introducing Redis caching, and enabling server-side pagination.",
        "Designed a React application for support agents with Redux-based state management, improving responsiveness and reducing ticket resolution time by 40%.",
        "Modernized payroll ingestion with AWS S3 and Lambda workflows and deployed microservices on Kubernetes (EKS) with Helm, shortening release cycles and improving scalability.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Cognizant",
      period: "Jan 2021 - Jul 2021",
      description: [
        "Developed and deployed core modules of an inventory management platform using Java, Spring Boot, Node.js, React, PostgreSQL, and Elasticsearch on Azure App Services.",
        "Built React frontends with TypeScript and Material UI, improving component performance and reducing load times across key user workflows.",
        "Implemented Node.js backend services with asynchronous event handling and WebSocket communication to deliver near real-time inventory updates.",
        "Built and optimized Jenkins CI/CD pipelines for RESTful microservices, accelerating build, test, and deployment cycles from weeks to days.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "ADP India Pvt Ltd",
      period: "Sep 2020 - Dec 2020",
      description: [
        "Automated infrastructure provisioning with Terraform (IaC) on AWS, ensuring consistent environments across Dev and Staging.",
        "Developed Python and Ansible scripts for server data collection, increasing Splunk log ingestion throughput 5×.",
        "Implemented real-time system monitoring and alerts across 100+ nodes, reducing MTTR by over 50%.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2 className="section-title">Experience</h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="timeline"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="timeline-item"
              whileHover={{ scale: 1.02 }}
            >
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  <div className="experience-period">
                    <FaCalendarAlt />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="experience-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
