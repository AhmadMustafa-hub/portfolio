import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Ahmad Mustafa - Full Stack Developer</title>
    <meta
      name="description"
      content="Professional portfolio of Ahmad Mustafa, a Full Stack Developer with 4+ years of experience specializing in WordPress, Laravel, React, and E-commerce solutions from Jordan"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content="Full Stack Developer, WordPress Developer, Laravel Developer, React Developer, Web Developer, Jordan, Amman, E-commerce, WooCommerce, Elementor" />
    <meta name="author" content="Ahmad Mustafa" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Ahmad Mustafa - Full Stack Developer" />
    <meta property="og:description" content="Professional portfolio showcasing expertise in WordPress, Laravel, React, and E-commerce solutions" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Ahmad Mustafa - Full Stack Developer" />
    <meta name="twitter:description" content="Professional portfolio showcasing expertise in WordPress, Laravel, React, and E-commerce solutions" />
  </>
)
