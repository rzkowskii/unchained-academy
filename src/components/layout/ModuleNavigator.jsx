import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, BookOpen, Server, Network, Shield, Code, CheckCircle, Loader2 } from 'lucide-react';
import Module1Lesson1 from '../lessons/Module1Lesson1';

const modules = [
  {
    title: 'Introduction to Kenshi and Unchained',
    icon: BookOpen,
    lessons: [
      {
        title: 'Understanding the Kenshi ecosystem',
        Component: Module1Lesson1,
        path: '/module/1/lesson/1',
        completed: true
      },
      {
        title: 'Exploring the Unchained network',
        Component: null,
        path: '/module/1/lesson/2',
        completed: false
      },
      {
        title: 'KNS token functionality',
        Component: null,
        path: '/module/1/lesson/3',
        completed: false
      },
      {
        title: 'Liquid Proof of Stake mechanics',
        Component: null,
        path: '/module/1/lesson/4',
        completed: false
      }
    ]
  },
  {
    title: 'Setting Up and Running Nodes',
    icon: Server,
    lessons: [
      {
        title: 'Hardware and software requirements',
        Component: null,
        path: '/module/2/lesson/1',
        completed: false
      },
      {
        title: 'Unchained client installation',
        Component: null,
        path: '/module/2/lesson/2',
        completed: false
      },
      {
        title: 'Running a local AI node',
        Component: null,
        path: '/module/2/lesson/3',
        completed: false
      },
      {
        title: 'Configuration and optimization',
        Component: null,
        path: '/module/2/lesson/4',
        completed: false
      }
    ]
  },
  {
    title: 'Understanding Node Types',
    icon: Network,
    lessons: [
      {
        title: 'Worker nodes deep dive',
        Component: null,
        path: '/module/3/lesson/1',
        completed: false
      },
      {
        title: 'Broker nodes configuration',
        Component: null,
        path: '/module/3/lesson/2',
        completed: false
      },
      {
        title: 'Consumer nodes setup',
        Component: null,
        path: '/module/3/lesson/3',
        completed: false
      },
      {
        title: 'Node interaction patterns',
        Component: null,
        path: '/module/3/lesson/4',
        completed: false
      }
    ]
  },
  {
    title: 'Data Validation in Unchained',
    icon: Shield,
    lessons: [
      {
        title: 'Data validation mechanisms',
        Component: null,
        path: '/module/4/lesson/1',
        completed: false
      },
      {
        title: 'BLS12-381 algorithm implementation',
        Component: null,
        path: '/module/4/lesson/2',
        completed: false
      },
      {
        title: 'Liquid Proof of Stake in practice',
        Component: null,
        path: '/module/4/lesson/3',
        completed: false
      },
      {
        title: 'Signature aggregation',
        Component: null,
        path: '/module/4/lesson/4',
        completed: false
      }
    ]
  },
  {
    title: 'Leveraging Unchained APIs',
    icon: Code,
    lessons: [
      {
        title: 'Unchained RPC protocol',
        Component: null,
        path: '/module/5/lesson/1',
        completed: false
      },
      {
        title: 'Deep Index services',
        Component: null,
        path: '/module/5/lesson/2',
        completed: false
      },
      {
        title: 'GraphQL and MQL usage',
        Component: null,
        path: '/module/5/lesson/3',
        completed: false
      },
      {
        title: 'API integration patterns',
        Component: null,
        path: '/module/5/lesson/4',
        completed: false
      }
    ]
  }
];

export default function ModuleNavigator({ isMobile = false, onNavigate }) {
  const [expandedModule, setExpandedModule] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { moduleId, lessonId } = useParams();
  const location = useLocation();

  useEffect(() => {
    // Simulate loading state
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Auto-expand current module
      if (moduleId) {
        setExpandedModule(parseInt(moduleId) - 1);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [moduleId]);

  // Calculate progress
  const totalLessons = modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = modules.reduce((acc, module) => 
    acc + module.lessons.filter(lesson => lesson.completed).length, 0
  );
  const progress = Math.round((completedLessons / totalLessons) * 100);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-6 h-6 text-primary animate-spin" />
      </div>
    );
  }

  const navigationContent = (
    <div className={`space-y-4 ${isMobile ? 'p-4' : 'p-6'}`}>
      {modules.map((module, moduleIndex) => {
        const isCurrentModule = moduleId === (moduleIndex + 1).toString();
        const moduleProgress = module.lessons.filter(lesson => lesson.completed).length;
        
        return (
          <div key={moduleIndex} className="space-y-2">
            <button
              onClick={() => setExpandedModule(expandedModule === moduleIndex ? null : moduleIndex)}
              className={`w-full flex items-center justify-between text-left p-2 rounded 
                ${isCurrentModule ? 'bg-primary/10' : 'hover:bg-surface'} transition-colors`}
            >
              <div className="flex items-center space-x-3">
                <module.icon className={`w-5 h-5 ${isCurrentModule ? 'text-primary' : 'text-gray-400'}`} />
                <span className={`font-medium ${isCurrentModule ? 'text-primary' : 'text-gray-300'}`}>
                  {module.title}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400">
                  {moduleProgress}/{module.lessons.length}
                </span>
                {expandedModule === moduleIndex ? (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </button>
            
            {expandedModule === moduleIndex && (
              <div className="ml-10 space-y-2">
                {module.lessons.map((lesson, lessonIndex) => {
                  const isCurrentLesson = 
                    isCurrentModule && 
                    lessonId === (lessonIndex + 1).toString();
                  
                  return (
                    <Link
                      key={lessonIndex}
                      to={lesson.path}
                      onClick={onNavigate}
                      className={`flex items-center justify-between py-2 px-3 rounded-md
                        ${isCurrentLesson ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:text-primary'} 
                        transition-colors`}
                    >
                      <span className="flex-grow">{lesson.title}</span>
                      {lesson.completed && (
                        <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                      )}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={`h-full bg-surface-dark ${isMobile ? 'rounded-lg' : ''}`}>
      {navigationContent}
    </div>
  );
}
