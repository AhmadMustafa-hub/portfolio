import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCode, FaLaptopCode } from 'react-icons/fa'
import '../styles/experience.css'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const experiences = [
    {
      title: 'Backend Engineer',
      company: 'Disty',
      period: 'August 2025 - Present',
      duration: 'Current',
      icon: FaBriefcase,
      responsibilities: [
        'Designing and maintaining scalable Laravel multi-tenant backend architectures',
        'Implementing REST API endpoints with structured validation and authentication',
        'Managing Dockerized environments and AWS services for deployment reliability',
        'Enhancing performance through query optimization and PostgreSQL indexing',
        'Enforcing clean-architecture principles across modules',
      ],
    },
    {
      title: 'Full-stack Developer',
      company: 'Softylus Technologies',
      period: 'November 2021 - August 2025',
      duration: '4 Years',
      icon: FaCode,
      responsibilities: [
        'Developed and maintained WordPress themes and plugins with custom code and page builders',
        'Delivered numerous websites under tight deadlines with high performance and security',
        'Expanded expertise to React.js, Gatsby, and Laravel for enhanced functionality',
        'Led website migrations, deployments, and server management on Plesk and cPanel',
        'Provided technical guidance and onboarding support to new developers',
        'Collaborated with mobile developers for unified web and app experiences',
      ],
    },
    {
      title: 'Customer Success Representative',
      company: 'Extensya',
      period: 'May 2021 - November 2021',
      duration: '6 Months',
      icon: FaLaptopCode,
      responsibilities: [
        'Proactively contacted clients to provide timely support and enhance satisfaction',
        'Acted as liaison between clients and internal departments for seamless communication',
        'Implemented effective follow-up procedures for comprehensive issue resolution',
        'Collaborated with cross-functional teams to identify root causes and implement solutions',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="experience" className="experience" ref={ref}>
      <motion.div
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Work Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-icon">
                <exp.icon />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-company">{exp.company}</span>
                  <div className="timeline-meta">
                    <span className="timeline-period">{exp.period}</span>
                    <span className="timeline-duration">{exp.duration}</span>
                  </div>
                </div>
                <ul className="timeline-responsibilities">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
