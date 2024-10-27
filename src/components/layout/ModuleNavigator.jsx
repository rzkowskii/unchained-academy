import { useState, useEffect, useCallback } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, BookOpen, Server, Network, Shield, Code, CheckCircle } from 'lucide-react';

const modules = [
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
  // ... other modules remain the same
];

export default function ModuleNavigator({ isMobile = false, onNavigate }) {
  const [expandedModule, setExpandedModule] = useState(null);
  const [completedLessons, setCompletedLessons] = useState({});
  const { moduleId, lessonId } = useParams();
  const location = useLocation();

  // Load completed lessons from localStorage
  useEffect(() => {
    const loadCompletedLessons = () => {
      const completed = {};
      modules.forEach((module, moduleIndex) => {
        module.lessons.forEach((lesson, lessonIndex) => {
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
  const handleKeyDown = useCallback((event, moduleIndex, lessonIndex) => {
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
        if (expandedModule === moduleIndex && lessonIndex < modules[moduleIndex].lessons.length - 1) {
          const nextLesson = document.querySelector(`[data-lesson="${moduleIndex}-${lessonIndex + 1}"]`);
          nextLesson?.focus();
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (expandedModule === moduleIndex && lessonIndex > 0) {
          const prevLesson = document.querySelector(`[data-lesson="${moduleIndex}-${lessonIndex - 1}"]`);
          prevLesson?.focus();
        }
        break;
    }
  }, [expandedModule]);

  const renderModule = (module, moduleIndex) => {
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
