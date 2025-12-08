'use client'

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '../utils/animations'

export default function Contact() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInUp}
      >
        Contact Me
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Contact Information */}
        <motion.div 
          className="space-y-8"
          {...slideInLeft}
        >
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-secondary">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:sweekarbajimaya10@gmail.com" className="text-secondary hover:text-primary">
                  sweekarbajimaya10@gmail.com
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPhone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href="tel:+9779861494202" className="text-secondary hover:text-primary">
                  +977 9861494202
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-secondary">Kathmandu, Nepal</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Social Media Links - aligned right */}
        <motion.div 
          className="space-y-8 flex flex-col justify-start"
          {...slideInRight}
        >
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-semibold mb-4 ">Connect on Social Media</h2>
            <p className="text-secondary ">Feel free to reach out to me on any of these platforms.</p>
          </motion.div>
          <motion.div
            className="space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.a
              href="https://www.linkedin.com/in/sweekar-bajimaya/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-secondary hover:text-primary"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaLinkedin className="h-6 w-6 text-blue-700" />
              <span className="font-semibold">LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com/Sweekar-Bajimaya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-secondary hover:text-primary"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaGithub className="h-6 w-6 text-gray-800 dark:text-white" />
              <span className="font-semibold">GitHub</span>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/_swicar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-secondary hover:text-primary"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaInstagram className="h-6 w-6 text-pink-500" />
              <span className="font-semibold">Instagram</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}