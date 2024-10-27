import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-gray-800">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            <p>© {currentYear} Unchained Academy. Community-driven educational initiative.</p>
            <p className="text-xs mt-1">
              Not affiliated with TimeLeap.Swiss or any of their products/ventures.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/rzkowskii/unchained-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="GitHub repository"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500 text-center">
            This is a community project aimed at making blockchain education more accessible.
            All content is provided for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
