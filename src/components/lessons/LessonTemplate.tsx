import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import TransitionWrapper from '../ui/TransitionWrapper';
import { getNextLesson, getPreviousLesson } from '../../lessons/config';

interface LessonTemplateProps {
  title: string;
  description: string;
  content: React.ReactNode;
  moduleId?: string;
  lessonId?: string;
}

const LessonTemplate: React.FC<LessonTemplateProps> = ({
  title,
  description,
  content,
  moduleId,
  lessonId
}) => {
  const navigate = useNavigate();

  const handleNext = () => {
    if (moduleId && lessonId) {
      const nextLesson = getNextLesson(moduleId, lessonId);
      if (nextLesson) {
        navigate(nextLesson.path);
      }
    }
  };

  const handlePrevious = () => {
    if (moduleId && lessonId) {
      const prevLesson = getPreviousLesson(moduleId, lessonId);
      if (prevLesson) {
        navigate(prevLesson.path);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <TransitionWrapper>
        <div className="mb-8">
          <motion.h1
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>
        </div>
      </TransitionWrapper>

      <TransitionWrapper delay={0.3}>
        <div className="prose prose-invert max-w-none">
          {content}
        </div>
      </TransitionWrapper>

      <TransitionWrapper delay={0.6}>
        <div className="mt-12 flex justify-between items-center">
          <button
            className="px-4 py-2 rounded-lg bg-surface hover:bg-surface-light transition-colors duration-200"
            onClick={handlePrevious}
          >
            ← Previous Lesson
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-light transition-colors duration-200"
            onClick={handleNext}
          >
            Next Lesson →
          </button>
        </div>
      </TransitionWrapper>
    </div>
  );
};

export default LessonTemplate;
