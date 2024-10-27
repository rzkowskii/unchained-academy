import { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronDown, ChevronRight, BookOpen, Server, Network, Shield, Code, CheckCircle, LucideIcon } from 'lucide-react';

interface Lesson {
  title: string;
  path: string;
  duration: number;
}

interface Module {
  title: string;
  description: string;
  icon: LucideIcon;
  lessons: Lesson[];
}

interface ModuleNavigatorProps {
  isMobile?: boolean;
  onNavigate?: () => void;
}

const modules: Module[] = [
  {
    title: 'Introduction to Kenshi and Unchained',
    description: 'Learn the fundamentals of the Kenshi ecosystem and Unchained network architecture.',
    icon: BookOpen,
    lessons: [
      {
        title: 'Understanding the Kenshi ecosystem',
        path: '/module/1/lesson/1',
        duration: 20,
      },
      {
        title: 'Exploring the Unchained network',
        path: '/module/1/lesson/2',
        duration: 25,
      },
      {
        title: 'KNS token functionality',
        path: '/module/1/lesson/3',
        duration: 15,
      },
      {
        title: 'Liquid Proof of Stake mechanics',
        path: '/module/1/lesson/4',
        duration: 30,
      }
    ]
  },
  {
    title: 'Setting Up and Running Nodes',
    description: 'Learn how to set up and operate different types of nodes in the Unchained network.',
    icon: Server,
    lessons: [
      {
        title: 'Hardware and Software Requirements',
        path: '/module/2/lesson/1',
        duration: 25,
      }
    ]
  },
  {
    title: 'Network Operations',
    description: 'Master the operational aspects of running nodes in the Unchained network.',
    icon: Network,
    lessons: [
      {
        title: 'Coming Soon',
        path: '/module/3/lesson/1',
        duration: 0,
      }
    ]
  },
  {
    title: 'Security Best Practices',
    description: 'Learn essential security practices for node operation and network participation.',
    icon: Shield,
    lessons: [
      {
        title: 'Coming Soon',
        path: '/module/4/lesson/1',
        duration: 0,
      }
    ]
  },
  {
    title: 'Advanced Topics',
    description: 'Explore advanced concepts and techniques in the Unchained network.',
    icon: Code,
    lessons: [
      {
        title: 'Coming Soon',
        path: '/module/5/lesson/1',
        duration: 0,
      }
    ]
  }
];

export default function ModuleNavigator({ isMobile = false, onNavigate }: ModuleNavigatorProps) {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>();

  // Load completed lessons from localStorage
  useEffect(() => {
    const loadCompletedLessons = () => {
      const completed: Record<string, boolean> = {};
      modules.forEach((module, moduleIndex) => {
        module.lessons.forEach((_lesson, lessonIndex) => {
          const key = `complete-${moduleIndex + 1}-${lessonIndex + 1}`;
          if (localStorage.getItem(key) === 'true') {
            completed[key] = true;
          }
        });
      });
      setCompletedLessons(completed);
    };

    loadCompletedLessons();
    window.addEventListener('storage', loadCompletedLessons);
    return () => window.removeEventListener('storage', loadCompletedLessons);
  }, []);

  // Auto-expand current module
  useEffect(() => {
    if (moduleId) {
      setExpandedModule(parseInt(moduleId) - 1);
    }
  }, [moduleId]);

  // Keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent, moduleIndex: number, lessonIndex?: number) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (lessonIndex === undefined) {
          setExpandedModule(expandedModule === moduleIndex ? null : moduleIndex);
        }
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (expandedModule === moduleIndex && lessonIndex !== undefined && lessonIndex < modules[moduleIndex].lessons.length - 1) {
          const nextLesson = document.querySelector(`[data-lesson="${moduleIndex}-${lessonIndex + 1}"]`);
          (nextLesson as HTMLElement)?.focus();
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (expandedModule === moduleIndex && lessonIndex !== undefined && lessonIndex > 0) {
          const prevLesson = document.querySelector(`[data-lesson="${moduleIndex}-${lessonIndex - 1}"]`);
          (prevLesson as HTMLElement)?.focus();
        }
        break;
    }
  }, [expandedModule]);

  const renderModule = (module: Module, moduleIndex: number) => {
    const isCurrentModule = moduleId === (moduleIndex + 1).toString();
    const moduleProgress = module.lessons.filter((_, lessonIndex) => 
      completedLessons[`complete-${moduleIndex + 1}-${lessonIndex + 1}`]
    ).length;
    
    return (
      <div key={moduleIndex} className="space-y-2">
        <button
          onClick={() => setExpandedModule(expandedModule === moduleIndex ? null : moduleIndex)}
          onKeyDown={(e) => handleKeyDown(e, moduleIndex)}
          className={`w-full flex items-center justify-between text-left p-2 rounded 
            ${isCurrentModule ? 'bg-primary/10' : 'hover:bg-surface'} 
            transition-colors focus:outline-none focus:ring-2 focus:ring-primary`}
          aria-expanded={expandedModule === moduleIndex}
          role="button"
          tabIndex={0}
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
          <div className="ml-10 space-y-2" role="list">
            {module.lessons.map((lesson, lessonIndex) => {
              const isCurrentLesson = 
                isCurrentModule && 
                lessonId === (lessonIndex + 1).toString();
              const isCompleted = completedLessons[`complete-${moduleIndex + 1}-${lessonIndex + 1}`];
              
              return (
                <Link
                  key={lessonIndex}
                  to={lesson.path}
                  onClick={onNavigate}
                  data-lesson={`${moduleIndex}-${lessonIndex}`}
                  onKeyDown={(e) => handleKeyDown(e, moduleIndex, lessonIndex)}
                  className={`flex items-center justify-between py-2 px-3 rounded-md
                    ${isCurrentLesson ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:text-primary'} 
                    transition-colors focus:outline-none focus:ring-2 focus:ring-primary`}
                  role="listitem"
                  tabIndex={0}
                  aria-current={isCurrentLesson ? 'page' : undefined}
                >
                  <div className="flex items-center space-x-2">
                    <span className="flex-grow">{lesson.title}</span>
                    <span className="text-xs text-gray-500">{lesson.duration}m</span>
                  </div>
                  {isCompleted && (
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div 
      className={`h-full bg-surface-dark ${isMobile ? 'rounded-lg' : ''}`}
      role="navigation"
      aria-label="Course modules"
    >
      <div className={`space-y-4 ${isMobile ? 'p-4' : 'p-6'}`}>
        {modules.map((module, index) => renderModule(module, index))}
      </div>
    </div>
  );
}