import { Github, Twitter, BookOpen, Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');

  const navigation = {
    learn: [
      { name: 'Introduction to Kenshi', href: '/module/1/lesson/1' },
      { name: 'Setting Up Nodes', href: '/module/2/lesson/1' },
      { name: 'Node Types', href: '/module/3/lesson/1' },
      { name: 'Data Validation', href: '/module/4/lesson/1' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Community', href: '/community' },
      { name: 'Blog', href: '/blog' },
    ],
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/unchained-network',
        icon: Github,
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/unchainednet',
        icon: Twitter,
      },
      {
        name: 'Documentation',
        href: '/docs',
        icon: BookOpen,
      },
    ],
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    setEmail('');
  };

  return (
    <footer className="bg-surface mt-auto border-t border-gray-800">
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand and Newsletter */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <Link to="/" className="text-2xl font-bold text-primary">
                Unchained Academy
              </Link>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Learn blockchain development with hands-on tutorials and interactive labs.
                Master the Kenshi blockchain and Unchained network.
              </p>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                Subscribe to our newsletter
              </h3>
              <p className="text-sm text-gray-400">
                Get the latest updates and tutorials delivered to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="flex-grow">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    type="email"
                    required
                    className="w-full px-4 py-2 text-sm bg-surface-dark border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {navigation.learn.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="group flex items-center text-gray-400 hover:text-primary transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
                  Resources
                </h3>
                <ul className="space-y-3">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="group flex items-center text-gray-400 hover:text-primary transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
                  Connect
                </h3>
                <ul className="space-y-3">
                  {navigation.social.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-primary transition-colors"
                      >
                        <item.icon className="h-5 w-5 mr-2" />
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Unchained Academy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-primary">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
