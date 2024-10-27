import { Github, Twitter, BookOpen } from 'lucide-react';

export default function Footer() {
  const navigation = {
    main: [
      { name: 'About', href: '/about' },
      { name: 'Documentation', href: '/docs' },
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

  return (
    <footer className="bg-surface mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-primary">Unchained Academy</h3>
            <p className="mt-4 text-gray-400">
              Learn blockchain development with hands-on tutorials and interactive labs.
              Master the Kenshi blockchain and Unchained network.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Resources
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Connect
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.social.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
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
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Unchained Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
