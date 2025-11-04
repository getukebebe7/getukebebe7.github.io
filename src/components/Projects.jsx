import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Container, Cloud, Shield, BarChart3 } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'USSD & Mobile Banking Solutions',
      description: 'Developed and maintained secure mobile banking applications enabling account balance checks, fund transfers, and top-ups for multiple banks.',
      icon: Container,
      technologies: ['Java', 'Spring Boot', 'Apache Camel', 'REST API', 'SOAP', 'WSO2', 'Oracle', 'MySQL', 'WildFly', 'Docker', 'Kubernetes', 'Keycloak', 'ELK', 'Jenkins'],
      features: [
        'Team lead of ACT Service Division',
        'Secure account access and transaction processing via USSD',
        'Integrated RESTful and SOAP web services for third-party communication',
        'Deployment on WildFly with scalable containerized environments',
        'Logging and monitoring with ELK stack'
      ],
      github: '#',
      demo: '#',
      image: '📱'
    },
    {
      title: 'Instant Payment System (IPS) Integration',
      description: 'Implemented IPS for handling incoming and outgoing payments including account verification and transfers in real-time.',
      icon: Cloud,
      technologies: ['Java', 'Spring Boot', 'Apache Camel', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
      features: [
        'Secure, reliable, real-time transaction processing',
        'Integration with multiple banking endpoints',
        'Monitoring and logging for operational reliability',
        'Containerized deployment for portability and scalability'
      ],
      github: '#',
      demo: '#',
      image: '💳'
    },
    {
      title: 'SMS Services Marketing for Financial Institutions (SMFI)',
      description: 'Backend system for delivering transactional, bulk, and social media integrated messaging services for banks and financial institutions.',
      icon: BarChart3,
      technologies: ['Java', 'Spring Boot', 'ActiveMQ', 'MySQL', 'Oracle', 'Microservices Architecture'],
      features: [
        'Customizable SMS delivery for banking clients',
        'Supports transactional, bulk, and lottery messaging',
        'Secure integration with third-party messaging gateways',
        'High-availability backend infrastructure'
      ],
      github: '#',
      demo: '#',
      image: '📡'
    },
    {
      title: 'Remittance Cybersource Integration',
      description: 'Implemented card-to-bank transfer using Cybersource, including capture context, payer setup, enrollment, and validation for frictionless and OTP challenge flows.',
      icon: Shield,
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'REST API', 'Cybersource SDK'],
      features: [
        'Secure and reliable card-to-bank payment processing',
        'Supports frictionless and OTP challenge flows',
        'Capture context and payer setup for seamless transfers',
        'Integrated with existing banking backend services',
        'High availability and monitoring for transaction reliability'
      ],
      github: '#',
      demo: '#',
      image: '💸'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  }

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Key projects demonstrating backend development, system integration, and DevOps expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-lg overflow-hidden card-hover border border-gray-800"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{project.image}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        className="text-gray-300 hover:text-primary-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        className="text-gray-300 hover:text-primary-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>

              {/* Technologies */}
              <div className="p-6 border-b border-gray-800">
                <h4 className="font-semibold text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="p-6">
                <h4 className="font-semibold text-white mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
