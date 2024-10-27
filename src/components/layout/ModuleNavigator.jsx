import { useState } from 'react';
import { ChevronDown, ChevronRight, BookOpen, Server, Network, Shield, Code } from 'lucide-react';

const modules = [
  {
    title: 'Introduction to Kenshi and Unchained',
    icon: BookOpen,
    lessons: [
      'Understanding the Kenshi ecosystem',
      'Exploring the Unchained network',
      'KNS token functionality',
      'Liquid Proof of Stake mechanics'
    ]
  },
  {
    title: 'Setting Up and Running Nodes',
    icon: Server,
    lessons: [
      'Hardware and software requirements',
      'Unchained client installation',
      'Running a local AI node',
      'Configuration and optimization'
    ]
  },
  {
    title: 'Understanding Node Types',
    icon: Network,
    lessons: [
      'Worker nodes deep dive',
      'Broker nodes configuration',
      'Consumer nodes setup',
      'Node interaction patterns'
    ]
  },
  {
    title: 'Data Validation in Unchained',
    icon: Shield,
    lessons: [
      'Data validation mechanisms',
      'BLS12-381 algorithm implementation',
      'Liquid Proof of Stake in practice',
      'Signature aggregation'
    ]
  },
  {
    title: 'Leveraging Unchained APIs',
    icon: Code,
    lessons: [
      'Unchained RPC protocol',
      'Deep Index services',
      'GraphQL and MQL usage',
      'API integration patterns'
    ]
  }
];

export default function ModuleNavigator() {
  const [expandedModule, setExpandedModule] = useState(0);

  return (
    <nav className="bg-surface-dark p-4 h-full overflow-y-auto">
      <div className="space-y-4">
        {modules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="space-y-2">
            <button
              onClick={() => setExpandedModule(expandedModule === moduleIndex ? -1 : moduleIndex)}
              className="w-full flex items-center justify-between text-left p-2 rounded hover:bg-surface transition-colors"
            >
              <div className="flex items-center space-x-3">
                <module.icon className="w-5 h-5 text-primary" />
                <span className="text-gray-200 font-medium">{module.title}</span>
              </div>
              {expandedModule === moduleIndex ? (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
            </button>
            
            {expandedModule === moduleIndex && (
              <div className="ml-10 space-y-2">
                {module.lessons.map((lesson, lessonIndex) => (
                  <a
                    key={lessonIndex}
                    href={`/module/${moduleIndex + 1}/lesson/${lessonIndex + 1}`}
                    className="block text-gray-400 hover:text-primary transition-colors py-1"
                  >
                    {lesson}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
