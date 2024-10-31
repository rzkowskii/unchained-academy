import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from '../lessons/config';
import TransitionWrapper from '../components/ui/TransitionWrapper';
import ProgressRing from '../components/ui/ProgressRing';

const HomePage: React.FC = () => {
  // Calculate overall course progress
  const calculateOverallProgress = () => {
    const totalLessons = modules.reduce(
      (total, module) => total + module.lessons.length,
      0
    );
    const completedLessons = modules.reduce(
      (total, module) =>
        total + module.lessons.filter(lesson => lesson.completed).length,
      0
    );
    return (completedLessons / totalLessons) * 100;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <TransitionWrapper>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to Unchained Academy
          </h1>
          <p className="text-xl text-gray-400">
            Master the fundamentals of blockchain development with our
            comprehensive curriculum.
          </p>
        </div>
      </TransitionWrapper>

      <TransitionWrapper delay={0.2}>
        <div className="bg-surface-dark rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Your Progress
              </h2>
              <p className="text-gray-400 mt-1">
                Track your learning journey
              </p>
            </div>
            <ProgressRing
              progress={calculateOverallProgress()}
              size={80}
              strokeWidth={8}
              className="text-primary"
            />
          </div>
        </div>
      </TransitionWrapper>

      <div className="grid gap-6 md:grid-cols-2">
        {modules.map((module, index) => {
          const progress = (
            module.lessons.filter(lesson => lesson.completed).length /
            module.lessons.length
          ) * 100;

          return (
            <TransitionWrapper key={module.id} delay={0.3 + index * 0.1}>
              <Link
                to={module.lessons[0]?.path || '#'}
                className="block bg-surface rounded-lg p-6 hover:bg-surface-light transition-colors duration-200"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Module {module.id}: {module.title}
                    </h3>
                    <p className="text-gray-400 mt-2">
                      {module.description}
                    </p>
                    <div className="mt-4 text-sm text-gray-400">
                      {module.lessons.length} lessons
                    </div>
                  </div>
                  <ProgressRing
                    progress={progress}
                    size={48}
                    strokeWidth={4}
                    className="text-primary"
                  />
                </div>
              </Link>
            </TransitionWrapper>
          );
        })}
      </div>

      <TransitionWrapper delay={0.8}>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Ready to Begin?
          </h2>
          <Link
            to={modules[0]?.lessons[0]?.path || '#'}
            className="inline-block bg-primary hover:bg-primary-light text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Start Learning
          </Link>
        </div>
      </TransitionWrapper>
    </div>
  );
};

export default HomePage;
