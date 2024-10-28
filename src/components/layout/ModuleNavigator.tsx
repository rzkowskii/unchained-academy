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

const ProgressRing = ({ progress, size = 24 }: { progress: number; size?: number }) => {
  const strokeWidth = 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className="transform -rotate-90" width={size} height={size}>
      <circle
        className="text-surface stroke-current"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        className="text-primary stroke-current transition-all duration-500 ease-out"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
    </svg>
  );
};

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
      },
      {
        title: 'Unchained Client Installation',
        path: '/module/2/lesson/2',
        duration: 25,
      },
      {
        title: 'Understanding Node Types',
        path: '/module/2/lesson/3',
        duration: 30,
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
  const [touchStart, setTouchStart] = useState<number | null>(null);
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

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent, moduleIndex: number) => {
    if (!touchStart) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Swipe threshold of 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left - expand
        setExpandedModule(moduleIndex);
      } else {
        // Swipe right - collapse
        setExpandedModule(null);
      }
    }
    setTouchStart(null);
  };

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
    const completedCount = module.lessons.filter((_, lessonIndex) => 
      completedLessons[`complete-${moduleIndex + 1}-${lessonIndex + 1}`]
    ).length;
    const progress = (completedCount / module.lessons.length) * 100;
    
    return (
      <div 
        key={moduleIndex} 
        className="space-y-2"
        onTouchStart={handleTouchStart}
        onTouchEnd={(e) => handleTouchEnd(e, moduleIndex)}
      >
        <button
          onClick={() => setExpandedModule(expandedModule === moduleIndex ? null : moduleIndex)}
          onKeyDown={(e) => handleKeyDown(e, moduleIndex)}
          className={`w-full flex items-center justify-between text-left p-2 rounded 
            ${isCurrentModule ? 'bg-primary/10' : 'hover:bg-surface'} 
            transition-all duration-300 ease-in-out transform hover:scale-[1.02]
            focus:outline-none focus:ring-2 focus:ring-primary`}
          aria-expanded={expandedModule === moduleIndex}
          aria-controls={`module-${moduleIndex}-lessons`}
          aria-label={`${module.title} - ${completedCount} of ${module.lessons.length} lessons completed`}
          role="button"
          tabIndex={0}
        >
          <div className="flex items-center space-x-3">
            <module.icon className={`w-5 h-5 ${isCurrentModule ? 'text-primary' : 'text-gray-400'}`} />
            <span className={`font-medium ${isCurrentModule ? 'text-primary' : 'text-gray-300'}`}>
              {module.title}
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <ProgressRing progress={progress} />
            {expandedModule === moduleIndex ? (
              <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-400 transition-transform duration-300" />
            )}
          </div>
        </button>
        
        <div
          id={`module-${moduleIndex}-lessons`}
          className={`ml-10 space-y-2 transition-all duration-300 ease-in-out
            ${expandedModule === moduleIndex ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}
          role="list"
          aria-label={`Lessons for ${module.title}`}
        >
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
                  transition-all duration-300 ease-in-out transform hover:translate-x-2
                  focus:outline-none focus:ring-2 focus:ring-primary`}
                role="listitem"
                tabIndex={0}
                aria-current={isCurrentLesson ? 'page' : undefined}
                aria-label={`${lesson.title} - ${lesson.duration} minutes${isCompleted ? ' - Completed' : ''}`}
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
      </div>
    );
  };

  return (
    <div 
      className={`h-full bg-surface-dark ${isMobile ? 'rounded-lg' : ''}`}
      role="navigation"
      aria-label="Course modules navigation"
    >
      <div className={`space-y-4 ${isMobile ? 'p-4' : 'p-6'}`}>
        {modules.map((module, index) => renderModule(module, index))}
      </div>
    </div>
  );
}
