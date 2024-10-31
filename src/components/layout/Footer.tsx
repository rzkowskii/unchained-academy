import React from 'react';
import { Github, Book, Heart, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Tooltip from '../ui/Tooltip';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    }
  };

  return (
    <footer className="bg-surface border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Unchained Academy is a community-driven educational platform dedicated to making blockchain development accessible to everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Tooltip content="View all available courses">
                  <motion.div whileHover="hover" variants={linkVariants}>
                    <Link 
                      to="/" 
                      className="text-gray-400 hover:text-primary text-sm flex items-center transition-colors group"
                    >
                      <Book className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                      Course Overview
                    </Link>
                  </motion.div>
                </Tooltip>
              </li>
              <li>
                <Tooltip content="Learn more about our mission">
                  <motion.div whileHover="hover" variants={linkVariants}>
                    <Link 
                      to="/about" 
                      className="text-gray-400 hover:text-primary text-sm flex items-center transition-colors group"
                    >
                      <Heart className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                      About Us
                    </Link>
                  </motion.div>
                </Tooltip>
              </li>
              <li>
                <Tooltip content="View our source code">
                  <motion.div whileHover="hover" variants={linkVariants}>
                    <a 
                      href="https://github.com/rzkowskii/unchained-academy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary text-sm flex items-center transition-colors group"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                      GitHub Repository
                    </a>
                  </motion.div>
                </Tooltip>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Tooltip content="Learn how to contribute">
                  <motion.div whileHover="hover" variants={linkVariants}>
                    <a 
                      href="https://github.com/rzkowskii/unchained-academy/blob/main/CONTRIBUTING.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary text-sm flex items-center transition-colors group"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                      Contribution Guide
                    </a>
                  </motion.div>
                </Tooltip>
              </li>
              <li>
                <Tooltip content="Report bugs or suggest features">
                  <motion.div whileHover="hover" variants={linkVariants}>
                    <a 
                      href="https://github.com/rzkowskii/unchained-academy/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary text-sm flex items-center transition-colors group"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                      Report Issues
                    </a>
                  </motion.div>
                </Tooltip>
              </li>
              <li>
                <Tooltip content="Join our community discussions">
                  <motion.div whileHover="hover" variants={linkVariants}>
                    <a 
                      href="https://github.com/rzkowskii/unchained-academy/discussions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary text-sm flex items-center transition-colors group"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                      Community Discussions
                    </a>
                  </motion.div>
                </Tooltip>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">Join the Community</h3>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-surface-dark rounded-lg p-4 border border-gray-800 transition-shadow hover:shadow-lg"
            >
              <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                Get involved in our open-source community and help make blockchain education accessible to everyone.
              </p>
              <Tooltip content="Join our GitHub community">
                <a
                  href="https://github.com/rzkowskii/unchained-academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium 
                           text-white bg-primary hover:bg-primary-dark transition-all duration-300 w-full
                           hover:shadow-md hover:-translate-y-0.5 transform"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Join on GitHub
                </a>
              </Tooltip>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>© {currentYear} Unchained Academy. Community-driven educational initiative.</p>
              <p className="text-xs mt-1 text-gray-500">
                Not affiliated with TimeLeap.Swiss or any of their products/ventures.
              </p>
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6">
              <Tooltip content="View our license">
                <motion.a
                  whileHover="hover"
                  variants={linkVariants}
                  href="https://github.com/rzkowskii/unchained-academy/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-400 text-xs transition-colors"
                >
                  License
                </motion.a>
              </Tooltip>
              <Tooltip content="Read our code of conduct">
                <motion.a
                  whileHover="hover"
                  variants={linkVariants}
                  href="https://github.com/rzkowskii/unchained-academy/blob/main/CODE_OF_CONDUCT.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-400 text-xs transition-colors"
                >
                  Code of Conduct
                </motion.a>
              </Tooltip>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8">
            <p className="text-xs text-gray-500 text-center max-w-2xl mx-auto leading-relaxed">
              This is a community project aimed at making blockchain education more accessible.
              All content is provided for educational purposes only.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
