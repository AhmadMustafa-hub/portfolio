import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../styles/about.css'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          About Me
        </motion.h2>

        <motion.div className="about-content" variants={itemVariants}>
          <div className="about-text">
            <p>
              I'm <strong>Ahmad Mustafa</strong>, a dedicated Full Stack Developer
              based in Amman, Jordan with over 3 years of professional experience.
              I specialize in creating high-quality WordPress websites, custom plugins and themes,
              and modern web applications that help businesses grow.
            </p>
            <p>
              As a Backend Engineer at Disty and former Full-stack Developer at Softylus Technologies,
              I've mastered WordPress development, Laravel backend systems, and modern frontend frameworks.
              I'm proficient in popular plugins like WooCommerce, Elementor, LearnDash, and Dokan Multi-Vendor,
              and I excel at delivering projects on time and within budget.
            </p>
            <p>
              My approach focuses on understanding your unique needs and building the right solution
              for your goals. I offer affordable rates, unlimited revisions, and fast turnaround times.
              Whether you need a complete website from scratch or maintenance for an existing site,
              I'm committed to exceeding your expectations.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-number">3+</div>
              <div className="highlight-label">Years Experience</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">50+</div>
              <div className="highlight-label">Projects Completed</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">100%</div>
              <div className="highlight-label">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
