import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full">
      {/* Logo and Title */}
      <Link to="/" className="flex items-center space-x-2">
        <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Unchained Academy
        </span>
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/module/1/lesson/1" className="nav-link">
          Start Learning
        </Link>
        <a
          href="https://github.com/rzkowskii/unchained-academy"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
          aria-label="GitHub repository"
        >
          <Github className="w-5 h-5" />
          <span className="sr-only">GitHub</span>
        </a>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center space-x-4">
        <Link 
          to="/module/1/lesson/1" 
          className="btn btn-primary btn-sm"
        >
          Start Learning
        </Link>
      </div>
    </div>
  );
};

export default Header;
