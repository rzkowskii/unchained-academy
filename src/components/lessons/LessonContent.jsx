import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock, BookOpen, CheckCircle, AlertCircle } from 'lucide-react';

export default function LessonContent({ children, metadata }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  
  // Load saved progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem(`progress-${moduleId}-${lessonId}`);
    if (savedProgress) {
      setProgress(parseInt(savedProgress));
      setIsComplete(localStorage.getItem(`complete-${moduleId}-${lessonId}`) === 'true');
    }
  }, [moduleId, lessonId]);

  // Save progress to localStorage
  const updateProgress = (newProgress) => {
    setProgress(newProgress);
    localStorage.setItem(`progress-${moduleId}-${lessonId}`, newProgress.toString());
    if (newProgress === 100) {
      setIsComplete(true);
      localStorage.setItem(`complete-${moduleId}-${lessonId}`, 'true');
    }
  };

  const nextLesson = () => {
    const nextLessonId = parseInt(lessonId) + 1;
    navigate(`/module/${moduleId}/lesson/${nextLessonId}`);
  };

  const prevLesson = () => {
    const prevLessonId = parseInt(lessonId) - 1;
    if (prevLessonId > 0) {
      navigate(`/module/${moduleId}/lesson/${prevLessonId}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="py-4 text-sm">
        <ol className="flex items-center space-x-2">
          <li>
            <Link to="/" className="text-gray-400 hover:text-primary">
              Home
            </Link>
          </li>
          <span className="text-gray-600">/</span>
          <li>
            <Link to={`/module/${moduleId}/lesson/1`} className="text-gray-400 hover:text-primary">
              Module {moduleId}
            </Link>
          </li>
          <span className="text-gray-600">/</span>
          <li className="text-primary" aria-current="page">
            Lesson {lessonId}
          </li>
        </ol>
      </nav>

      {/* Lesson Header */}
      <header className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">{metadata.title}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-400">
              <Clock className="w-4 h-4 mr-2" />
              <span>{metadata.duration} min</span>
            </div>
            {isComplete ? (
              <div className="flex items-center text-green-500">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>Completed</span>
              </div>
            ) : (
              <div className="flex items-center text-gray-400">
                <BookOpen className="w-4 h-4 mr-2" />
                <span>In Progress</span>
              </div>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2 bg-surface-dark rounded-full overflow-hidden">
          <div 
            className="absolute h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>

        {/* Learning Objectives */}
        <div className="mt-6 p-4 bg-surface-dark rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Learning Objectives</h2>
          <ul className="space-y-2">
            {metadata.objectives.map((objective, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Main Content */}
      <main className="prose prose-invert max-w-none">
        <div className="lesson-content">
          {children}
        </div>
      </main>

      {/* Navigation Footer */}
      <footer className="mt-12 border-t border-gray-800 pt-6">
        <div className="flex justify-between items-center">
          <button
            onClick={prevLesson}
            className={`btn btn-secondary flex items-center ${parseInt(lessonId) === 1 ? 'invisible' : ''}`}
            disabled={parseInt(lessonId) === 1}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous Lesson
          </button>
          
          <button
            onClick={() => updateProgress(100)}
            className={`btn ${isComplete ? 'btn-secondary' : 'btn-primary'}`}
          >
            {isComplete ? 'Completed' : 'Mark as Complete'}
          </button>

          <button
            onClick={nextLesson}
            className="btn btn-primary flex items-center"
          >
            Next Lesson
            <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </footer>

      {/* Mobile Navigation Drawer */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-surface border-t border-gray-800">
        <div className="flex justify-between p-4">
          <button
            onClick={prevLesson}
            className={`btn btn-secondary btn-sm ${parseInt(lessonId) === 1 ? 'invisible' : ''}`}
            disabled={parseInt(lessonId) === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">Lesson {lessonId}</span>
            <div className="w-20 h-1 bg-surface-dark rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <button
            onClick={nextLesson}
            className="btn btn-primary btn-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
