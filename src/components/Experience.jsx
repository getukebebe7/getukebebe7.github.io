import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Atlas Computer Technology, Addis Ababa, Ethiopia',
      location: 'Addis Ababa, Ethiopia',
      period: 'March 2021 – Current',
      description: `Developed and implemented core banking features including account balance checks, fund transfers (within the bank, other banks, and Telebirr accounts), and top-up transactions (self-recharge and airtime for others). Ensured confidentiality and integrity of customer financial information.`,
      achievements: [
        'Developed robust backend services using Java, Spring Boot, and Apache Camel',
        'Integrated RESTful and SOAP web services for third-party communication',
        'Collaborated on WSO2 integration for improved system interoperability',
        'Managed databases with Oracle and MySQL ensuring efficient data storage and retrieval',
        'Deployed applications on WildFly server for optimal performance and scalability',
        'Conducted testing using Postman, SoapUI, and Jtest to ensure reliability and functionality',
        'Implemented log tracking and monitoring using ELK stack',
        'Leveraged Docker containerization for portable and scalable environments'
      ],
      technologies: [
        'Java', 'Spring Boot', 'Apache Camel', 'WSO2', 'REST API', 'SOAP', 
        'Oracle', 'MySQL', 'WildFly', 'Docker', 'ELK', 'Postman', 'SoapUI', 'Jtest'
      ]
    },
    {
      title: 'SMS Services Marketing for Financial Institutions (SMFI) - Backend Developer',
      company: 'Atlas Computer Technology, Addis Ababa, Ethiopia',
      location: 'Addis Ababa, Ethiopia',
      period: '2017 – 2021',
      description: `Customized and delivered backend services for SMS marketing tailored for financial institutions, including transactional messaging, bulk messaging, social media integration, and lottery services.`,
      achievements: [
        'Developed backend services with Java, Spring Boot, ActiveMQ, and microservices architecture',
        'Managed databases using MySQL and Oracle',
        'Integrated real-time messaging and secure delivery pipelines',
        'Ensured high availability and scalability for multi-institution usage'
      ],
      technologies: [
        'Java', 'Spring Boot', 'ActiveMQ', 'Microservices', 'MySQL', 'Oracle'
      ]
    },
    {
      title: 'Remittance Cybersource Integration',
      company: 'Atlas Computer Technology, Addis Ababa, Ethiopia',
      location: 'Addis Ababa, Ethiopia',
      period: '2022 – 2023',
      description: `Implemented card-to-bank transfers using Cybersource SDK, including capture context, payer setup, enrollment, and validation for both frictionless and OTP challenge flows.`,
      achievements: [
        'Built secure, reliable payment processing workflows',
        'Integrated with PostgreSQL and Redis for transactional storage and caching',
        'Developed REST APIs for seamless service communication',
        'Ensured frictionless and OTP challenge flows for end-users'
      ],
      technologies: [
        'Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'REST API', 'Cybersource SDK'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey in software development and backend integration, building secure and scalable banking solutions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-gray-900 rounded-xl p-6 card-hover border border-gray-800">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center text-sm text-primary-400 mb-2">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <div className="flex items-center text-gray-300 mb-2">
                        <Briefcase size={16} className="mr-2" />
                        {exp.company}
                      </div>
                      {exp.location && (
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    {exp.description && (
                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    )}

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-800 text-gray-200 rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
