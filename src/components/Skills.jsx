import React from 'react'
import { motion } from 'framer-motion'
import { Cloud, Container, GitBranch, Server, BarChart3, Terminal } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Terminal,
      title: 'Backend & Programming',
      skills: [
        'Java / Java EE',
        'Spring Boot',
        'Apache Camel',
        'Enterprise Java Beans (EJB)',
        'OAuth 2.0',
        'Java Messaging Service',
        'Shell Scripting'
      ],
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: Server,
      title: 'Databases & Messaging',
      skills: [
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'ActiveMQ',
        'RabbitMQ',
        'Apache Kafka'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Container,
      title: 'DevOps & CI/CD',
      skills: [
        'Docker',
        'Kubernetes',
        'ArgoCD',
        'Jenkins',
        'Linux Administration',
        'CI/CD Automation'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Web Services & Integration',
      skills: [
        'WSO2 API',
        'SOAP Web Services',
        'RESTful Web Services (JAX-RS)',
        'CXF',
        'JAX-WS'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: GitBranch,
      title: 'Version Control & Project Management',
      skills: [
        'Git',
        'GitLab',
        'OpenProject',
        'JIRA',
        'Atlassian Confluence'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Frontend & Testing',
      skills: [
        'React Framework',
        'Postman (Manual & Automation)',
        'Newman',
        'Selenium (Python scripts)'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tools and technologies I use to build, deploy, and operate scalable and secure systems
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants} className="bg-gray-900 rounded-xl shadow-lg p-6 card-hover border border-gray-800">
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${category.color} rounded-lg p-3 mr-4`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
