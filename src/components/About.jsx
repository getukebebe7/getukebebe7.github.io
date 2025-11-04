import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Software Engineer & DevOps specialist with a passion for building scalable, secure, and efficient systems. Experienced in Java, Spring Boot, Apache Camel, CI/CD pipelines, and cloud-native DevOps tools.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              I am a dedicated Software Engineer and Arba Minch University graduate specializing in software development and system integration. Experienced in Java, J2EE, Spring Boot, Apache Camel, and WSO2 integration for banking and enterprise applications. Skilled in database management (Oracle, MySQL, PostgreSQL, Redis), application deployment (WildFly, Docker, Kubernetes), and CI/CD automation using Jenkins, ArgoCD, and Ansible. Passionate about building secure, high-performance, and scalable systems while ensuring smooth deployments and observability with ELK, Prometheus, and Grafana.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-6"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            I have led backend development for USSD banking and SMS marketing projects, integrating instant payment systems, RESTful and SOAP services, and microservices architectures. I ensure high-quality, secure, and reliable systems while collaborating with cross-functional teams.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            My DevOps expertise includes containerization with Docker, orchestration with Kubernetes, CI/CD pipelines with Jenkins and ArgoCD, infrastructure automation with Ansible, and monitoring with ELK and Prometheus/Grafana. I aim to deliver efficient, automated, and production-ready solutions.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            With experience in enterprise banking systems, mobile banking, and government digital platforms, I am committed to building scalable and maintainable software that meets business and technical requirements.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
