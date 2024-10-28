import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { modules, getTotalLessonsCount, getCompletedLessonsCount } from '../lessons/config';

const ProgressRing = ({ progress, size = 64 }: { progress: number; size?: number }) => {
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className="transform -rotate-90" width={size} height={size}>
      <circle
        className="text-primary/30 stroke-current"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        className="text-primary stroke-current transition-all duration-1000 ease-out"
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

interface ModuleCardProps {
  module: typeof modules[0];
  index: number;
}

function ModuleCard({ module, index }: ModuleCardProps) {
  const isLocked = !module.unlocked;
  const totalLessons = module.lessons.length || 4;
  const completedLessons = module.lessons.filter(lesson => lesson.completed).length;
  const isCompleted = completedLessons === totalLessons && totalLessons > 0;
  const progress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  return (
    <div 
      className={`card group transition-all duration-500 animate-fadeIn hover:shadow-lg
        ${isLocked ? 'opacity-50' : 'hover:border-primary hover:scale-[1.02]'}`}
      style={{ animationDelay: `${index * 150}ms` }}
      role="article"
      aria-label={`${module.title} - ${isLocked ? 'Coming Soon' : `${completedLessons} of ${totalLessons} lessons completed`}`}
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start space-x-4">
          <div className={`p-3 rounded-lg transform transition-all duration-300 ${
            isLocked ? 'bg-surface' : 'bg-surface-dark group-hover:bg-primary/10 group-hover:scale-110'
          }`}>
            <module.icon className={`w-6 h-6 ${
              isLocked ? 'text-gray-400' : 'text-primary'
            }`} />
          </div>
          <div className="space-y-1 flex-grow">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold group-hover:text-primary transition-colors">{module.title}</h3>
              {isCompleted && (
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 animate-scaleIn" />
              )}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {module.description}
            </p>
          </div>
        </div>

        {/* Progress Section */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">
              {completedLessons} of {totalLessons} lessons completed
            </span>
            <span className="text-gray-400">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 bg-surface-dark rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-1000 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {progress > 0 && (
                <div className="absolute top-0 right-0 h-full w-2 bg-white/20 animate-shimmer" />
              )}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Link
          to={module.lessons[0]?.path || `/module/${module.id}/lesson/1`}
          className={`btn w-full group-hover:shadow-md transition-all duration-300 ${
            isLocked 
              ? 'btn-secondary cursor-not-allowed' 
              : 'btn-primary hover:translate-y-[-2px]'
          }`}
          onClick={e => isLocked && e.preventDefault()}
          aria-disabled={isLocked}
        >
          <span className="flex-grow text-center">
            {isLocked ? 'Coming Soon' : isCompleted ? 'Review Module' : 'Continue Learning'}
          </span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

const HomePage: React.FC = () => {
  const totalLessons = getTotalLessonsCount();
  const completedLessons = getCompletedLessonsCount();
  const progressPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12 animate-fadeInUp">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Welcome to Unchained Academy
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Master blockchain development with hands-on tutorials and interactive labs.
          Learn to build and operate nodes in the Kenshi ecosystem.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Link 
            to="/module/1/lesson/1" 
            className="btn btn-primary hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Start Learning
          </Link>
          <a 
            href="https://github.com/rzkowskii/unchained-academy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary hover:bg-surface-dark transition-colors duration-300"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Progress Overview */}
      <section 
        className="card bg-surface-dark border-primary/50 animate-fadeIn"
        role="region"
        aria-label="Learning Progress Overview"
      >
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold">Your Progress</h2>
            <p className="text-gray-400">
              You've completed {completedLessons} of {totalLessons} lessons ({progressPercentage}%)
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <div className="text-sm text-gray-400">Overall Progress</div>
              <div className="text-2xl font-bold text-primary transition-all duration-1000">
                {progressPercentage}%
              </div>
            </div>
            <ProgressRing progress={progressPercentage} />
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="space-y-6" role="region" aria-label="Course Modules">
        <h2 className="text-2xl font-bold">Course Modules</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <ModuleCard key={module.id} module={module} index={index} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="card bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 animate-fadeIn"
        role="region"
        aria-label="Get Started Call to Action"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Ready to become a blockchain expert?</h2>
            <p className="text-gray-400">
              Begin your journey into blockchain development with our comprehensive curriculum.
            </p>
          </div>
          <Link
            to="/module/1/lesson/1"
            className="btn btn-primary whitespace-nowrap hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
