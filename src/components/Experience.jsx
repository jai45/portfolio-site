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
      period: "May 2023 - Present",
      description: [
        "Architected and deployed Spring Boot 3.x microservices with Spring Cloud, Kafka, and Redis, enabling near real-time ESG analytics and reducing data-processing latency by 90%.",
        "Led integration of React 18 Micro-Frontends using Webpack Module Federation, Redux Toolkit Query, and TypeScript, improving UI reusability and decreasing API calls by 60%.",
        "Deployed containerized services to AWS EKS using Helm Charts, CloudFront, and S3, achieving 40% faster global response times and zero-downtime releases via GitHub Actions CI/CD.",
        "Enhanced API performance through JPA/Hibernate ORM tuning, Redis caching, and query optimization, cutting REST API RTT from 3 seconds to under 100 ms.",
      ],
    },
    {
      title: "Software Development Engineer",
      company: "Lumen Technologies",
      period: "Aug 2021 - Jul 2022",
      description: [
        "Built and optimized multi-threaded Spring Boot microservices with Spring Cloud circuit breakers and retry patterns, boosting throughput and fault tolerance by 80%.",
        "Developed Angular 12 dashboards with NgRx state management and AWS Cognito RBAC, reducing ticket-resolution time by 40% while enhancing security and accessibility (WCAG 2.1).",
        "Automated deployments on AWS EKS using Helm Charts and Jenkins pipelines, accelerating release cycles by 35%.",
        "Refactored legacy Spring eBonding services into RESTful Spring Boot microservices, improving partner system interoperability and SLA compliance.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Cognizant",
      period: "Jan 2021 - Jul 2021",
      description: [
        "Delivered core modules for an inventory-management platform using Java 17, Spring Boot, React, and PostgreSQL hosted on Azure App Services, ensuring scalability and high availability.",
        "Implemented JWT authentication and Azure API Management for secure API gateway access across microservices.",
        "Built Node.js event-driven services with WebSocket integration for real-time inventory updates across warehouses.",
        "Automated build/test/deploy pipelines via Jenkins CI/CD, shortening delivery cycles from weeks to days and improving release reliability.",
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
