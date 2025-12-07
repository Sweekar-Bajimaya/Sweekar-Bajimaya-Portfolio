'use client'

import { certificates } from '../contents/certificates'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '../utils/animations'
import { FaLinkedin, FaDatabase, FaPython } from 'react-icons/fa'
import { SiCredly, SiKaggle, SiFreecodecamp } from 'react-icons/si'

function getIssuerIcon(issuer: string) {
  switch (issuer) {
    case 'IBM SkillsBuild':
      return <SiCredly className="text-orange-400 w-8 h-8" />;
    case 'LinkedIn Learning':
      return <FaLinkedin className="text-blue-600 w-8 h-8" />;
    case 'Kaggle':
      return <SiKaggle className="text-blue-400 w-8 h-8" />;
    case 'FreeCodeCamp':
      return <SiFreecodecamp className="text-black-900 w-8 h-8" />;
    default:
      return <FaDatabase className="text-gray-400 w-8 h-8" />;
  }
}

export default function Certifications() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Certifications
      </motion.h1>
      <motion.p 
        className="text-lg text-secondary mb-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Here are a collection of my verified certifications from online learning platforms.
      </motion.p>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.credentialURL + idx}
            className="bg-white dark:bg-dark/50 rounded-xl shadow-md p-6 flex flex-col gap-2 relative"
            variants={fadeInUp}
            whileHover={cardHoverSmall.whileHover}
            transition={cardHoverSmall.transition}
          >
            <div className="flex items-center gap-2 mb-2">
              {getIssuerIcon(cert.issuer)}
              <span className="font-semibold text-lg">{cert.title}</span>
            </div>
            <span className="text-sm font-medium text-gray-500 mb-1">{cert.issueDate}</span>
            <span className="text-primary-sm text-blue-500 mb-1">{cert.issuer}</span>
            <a
              href={cert.credentialURL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-6 right-6 text-gray-500 hover:text-primary"
              aria-label="View certificate"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0 0L10 21l-7-7 11-11z" />
              </svg>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}