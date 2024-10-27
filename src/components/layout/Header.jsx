import { Menu, X, BookOpen, Code, Activity, User } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Tutorials', href: '/tutorials', icon: BookOpen },
    { name: 'Labs', href: '/labs', icon: Code },
    { name: 'Node Monitor', href: '/monitor', icon: Activity },
  ];

  return (
    <header className="bg-surface border-b border-gray-800">
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold text-primary">
              Unchained Academy
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Profile Section */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="btn btn-primary">
                Get Started
              </button>
              <button className="p-2 rounded-full hover:bg-surface-dark transition-colors">
                <User className="w-6 h-6 text-gray-300" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-primary"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-4 border-t border-gray-800 pt-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors py-2"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </a>
            ))}
            <button className="btn btn-primary w-full">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
