import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const formRef = useRef();

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      // Replace these with your EmailJS credentials
      const serviceId = "service_wx3ki41";
      const templateId = "template_xybs8cx";
      const publicKey = "JoCKAq5I_9TQ7VUWe";

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setStatus("success");
      setFormData({ from_name: "", from_email: "", message: "" });
      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "jaideepch45@gmail.com",
      link: "mailto:jaideepch45@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+1 (410) 709-6464",
      link: "tel:+14107096464",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/jaideep-v41",
      link: "https://linkedin.com/in/jaideep-v41",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/jai45",
      link: "https://github.com/jai45",
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            I'm always open to discussing new projects, creative ideas, or
            opportunities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="contact-content"
        >
          <motion.div variants={itemVariants} className="contact-info">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  info.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="contact-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="contact-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <p>{info.value}</p>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="contact-form-container"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  disabled={isLoading}
                />
              </div>
              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: isLoading ? 1 : 1.05 }}
                whileTap={{ scale: isLoading ? 1 : 0.95 }}
                disabled={isLoading}
              >
                <FaPaperPlane /> {isLoading ? "Sending..." : "Send Message"}
              </motion.button>
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="status-message success"
                >
                  ✓ Message sent! I'll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="status-message error"
                >
                  ✗ Failed to send message. Please try again or email me
                  directly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
