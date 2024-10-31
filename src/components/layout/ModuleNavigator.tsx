import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { modules, getLessonById } from '../../lessons/config';
import ProgressRing from '../ui/ProgressRing';

interface ModuleNavigatorProps {
  isMobile?: boolean;
  onNavigate?: () => void;
}

const ModuleNavigator: React.FC<ModuleNavigatorProps> = ({
  isMobile = false,
  onNavigate
}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Calculate module progress
  const calculateModuleProgress = (moduleId: string) => {
    const module = modules.find(m => m.id === moduleId);
    if (!module) return 0;
    
    const completedLessons = module.lessons.filter(lesson => lesson.completed).length;
    return (completedLessons / module.lessons.length) * 100;
  };

  // Get current module and lesson
  const getCurrentLesson = () => {
    const match = currentPath.match(/\/module\/(\d+)\/lesson\/(\d+)/);
    if (!match) return null;
    
    const [, moduleId, lessonId] = match;
    return getLessonById(moduleId, lessonId);
  };

  const currentLesson = getCurrentLesson();

  const handleLessonClick = () => {
    if (isMobile && onNavigate) {
      onNavigate();
    }
  };

  return (
    <nav className="bg-surface p-4 rounded-lg shadow-lg">
      {/* Mobile View Progress */}
      <div className="lg:hidden mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Course Progress</h2>
          <ProgressRing
            progress={75}
            size={60}
            strokeWidth={6}
            className="text-primary"
          />
        </div>
      </div>

      {/* Module List */}
      <div className="space-y-4">
        {modules.map(module => {
          const progress = calculateModuleProgress(module.id);
          const isCurrentModule = currentLesson && 
            currentLesson.path.startsWith(`/module/${module.id}`);

          return (
            <div
              key={module.id}
              className={`rounded-lg transition-all duration-200 ${
                isCurrentModule ? 'bg-surface-light' : 'hover:bg-surface-light'
              }`}
            >
              {/* Module Header */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white">
                    Module {module.id}: {module.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {module.description}
                  </p>
                </div>
                <div className="ml-4 hidden lg:block">
                  <ProgressRing
                    progress={progress}
                    size={48}
                    strokeWidth={4}
                    className="text-primary"
                  />
                </div>
              </div>

              {/* Lesson List */}
              <div className="px-4 pb-4 space-y-2">
                {module.lessons.map(lesson => {
                  const isCurrentLesson = currentLesson && 
                    currentLesson.path === lesson.path;

                  return (
                    <Link
                      key={lesson.id}
                      to={lesson.path}
                      onClick={handleLessonClick}
                      className={`block p-3 rounded-md transition-all duration-200 ${
                        isCurrentLesson
                          ? 'bg-primary text-white'
                          : 'text-gray-400 hover:bg-surface-dark'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          lesson.completed
                            ? 'bg-green-500'
                            : lesson.unlocked
                            ? 'bg-yellow-500'
                            : 'bg-red-500'
                        }`} />
                        <span>
                          Lesson {lesson.id}: {lesson.title}
                        </span>
                      </div>
                      <p className={`ml-5 mt-1 text-sm ${
                        isCurrentLesson ? 'text-gray-200' : 'text-gray-500'
                      }`}>
                        {lesson.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Keyboard Navigation Help */}
      <div className="mt-6 p-4 bg-surface-dark rounded-lg">
        <h4 className="text-sm font-medium text-white mb-2">
          Keyboard Shortcuts
        </h4>
        <div className="text-sm text-gray-400 space-y-1">
          <div className="flex items-center">
            <kbd className="px-2 py-1 bg-surface rounded text-xs mr-2">←</kbd>
            <span>Previous lesson</span>
          </div>
          <div className="flex items-center">
            <kbd className="px-2 py-1 bg-surface rounded text-xs mr-2">→</kbd>
            <span>Next lesson</span>
          </div>
          <div className="flex items-center">
            <kbd className="px-2 py-1 bg-surface rounded text-xs mr-2">Space</kbd>
            <span>Toggle sidebar</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ModuleNavigator;
