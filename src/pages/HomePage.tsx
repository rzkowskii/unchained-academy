import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { modules, getTotalLessonsCount, getCompletedLessonsCount } from '../lessons/config';

interface ModuleCardProps {
  module: typeof modules[0];
}

function ModuleCard({ module }: ModuleCardProps) {
  const isLocked = !module.unlocked;
  const totalLessons = module.lessons.length || 4; // Default to 4 if no lessons yet
  const completedLessons = module.lessons.filter(lesson => lesson.completed).length;
  const isCompleted = completedLessons === totalLessons && totalLessons > 0;
  const progress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  return (
    <div className={`card group transition-all duration-300 ${
      isLocked ? 'opacity-50' : 'hover:border-primary'
    }`}>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start space-x-4">
          <div className={`p-3 rounded-lg ${
            isLocked ? 'bg-surface' : 'bg-surface-dark group-hover:bg-primary/10'
          } transition-colors`}>
            <module.icon className={`w-6 h-6 ${
              isLocked ? 'text-gray-400' : 'text-primary'
            }`} />
          </div>
          <div className="space-y-1 flex-grow">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold">{module.title}</h3>
              {isCompleted && (
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
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
          <div className="h-1.5 bg-surface-dark rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Action Button */}
        <Link
          to={module.lessons[0]?.path || `/module/${module.id}/lesson/1`}
          className={`btn w-full ${
            isLocked 
              ? 'btn-secondary cursor-not-allowed' 
              : 'btn-primary'
          }`}
          onClick={e => isLocked && e.preventDefault()}
        >
          <span className="flex-grow text-center">
            {isLocked ? 'Coming Soon' : isCompleted ? 'Review Module' : 'Continue Learning'}
          </span>
          <ArrowRight className="w-4 h-4" />
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
      <section className="text-center space-y-6 py-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Welcome to Unchained Academy
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Master blockchain development with hands-on tutorials and interactive labs.
          Learn to build and operate nodes in the Kenshi ecosystem.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Link to="/module/1/lesson/1" className="btn btn-primary">
            Start Learning
          </Link>
          <a 
            href="https://github.com/rzkowskii/unchained-academy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="card bg-surface-dark border-primary/50">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold">Your Progress</h2>
            <p className="text-gray-400">
              You've completed {completedLessons} of {totalLessons} lessons ({progressPercentage}%)
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm text-gray-400">Overall Progress</div>
              <div className="text-2xl font-bold text-primary">{progressPercentage}%</div>
            </div>
            <div className="h-12 w-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Course Modules</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="card bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Ready to become a blockchain expert?</h2>
            <p className="text-gray-400">
              Begin your journey into blockchain development with our comprehensive curriculum.
            </p>
          </div>
          <Link
            to="/module/1/lesson/1"
            className="btn btn-primary whitespace-nowrap"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
