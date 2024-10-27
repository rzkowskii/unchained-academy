import { BookOpen, Server, Network, Shield, Code } from 'lucide-react';

const modules = [
  {
    title: 'Introduction to Kenshi and Unchained',
    description: 'Learn the fundamentals of the Kenshi ecosystem and Unchained network architecture.',
    icon: BookOpen,
    lessons: 4,
  },
  {
    title: 'Setting Up and Running Nodes',
    description: 'Master the process of setting up and maintaining Unchained network nodes.',
    icon: Server,
    lessons: 4,
  },
  {
    title: 'Understanding Node Types',
    description: 'Deep dive into different node types and their roles in the network.',
    icon: Network,
    lessons: 4,
  },
  {
    title: 'Data Validation in Unchained',
    description: 'Learn about data validation mechanisms and BLS12-381 implementation.',
    icon: Shield,
    lessons: 4,
  },
  {
    title: 'Leveraging Unchained APIs',
    description: 'Master the Unchained API ecosystem and integration patterns.',
    icon: Code,
    lessons: 4,
  },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Unchained Academy</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Master blockchain development with hands-on tutorials and interactive labs.
          Learn to build and operate nodes in the Kenshi ecosystem.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, index) => (
          <div key={index} className="card hover:border-primary transition-colors">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-surface-dark rounded-lg">
                <module.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">{module.title}</h3>
                <p className="text-gray-400 text-sm">{module.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{module.lessons} Lessons</span>
                  <a href={`/module/${index + 1}`} className="btn btn-secondary text-sm">
                    Start Learning
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="card bg-surface-dark border-primary">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Ready to start learning?</h2>
            <p className="text-gray-400">
              Begin your journey into blockchain development with our comprehensive curriculum.
            </p>
          </div>
          <button className="btn btn-primary">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
