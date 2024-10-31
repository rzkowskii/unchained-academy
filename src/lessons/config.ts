import { lazy } from 'react';
import { LucideIcon, BookOpen, Server, Network, Shield, Code, Cpu, Database, Globe, Brain, Cog } from 'lucide-react';

// Types
export interface Lesson {
  id: string;
  title: string;
  description: string;
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  unlocked: boolean;
  completed?: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  lessons: Lesson[];
  unlocked: boolean;
}

// Helper function to create lesson paths
const createLessonPath = (moduleId: string, lessonId: string) => 
  `/module/${moduleId}/lesson/${lessonId}`;

// Course Configuration
export const modules: Module[] = [
  {
    id: '1',
    title: 'Getting Started',
    description: 'Introduction to blockchain development fundamentals',
    icon: BookOpen,
    unlocked: true,
    lessons: [
      {
        id: '1.1',
        title: 'Welcome to Unchained Academy',
        description: 'Your first step into blockchain development',
        path: createLessonPath('1', '1'),
        component: lazy(() => import('../components/lessons/Module1Lesson1')),
        unlocked: true,
        completed: true
      }
    ]
  },
  {
    id: '2',
    title: 'Development Environment',
    description: 'Setting up your blockchain development environment',
    icon: Cog,
    unlocked: true,
    lessons: [
      {
        id: '2.1',
        title: 'Development Tools Setup',
        description: 'Essential tools for blockchain development',
        path: createLessonPath('2', '1'),
        component: lazy(() => import('../components/lessons/Module2Lesson1')),
        unlocked: true
      }
    ]
  },
  {
    id: '3',
    title: 'Blockchain Fundamentals',
    description: 'Core concepts and principles of blockchain technology',
    icon: Brain,
    unlocked: true,
    lessons: [
      {
        id: '3.1',
        title: 'Understanding Blockchain',
        description: 'Introduction to blockchain technology',
        path: createLessonPath('3', '1'),
        component: lazy(() => import('../components/lessons/Module3Lesson1')),
        unlocked: true
      }
    ]
  },
  {
    id: '4',
    title: 'Smart Contract Development',
    description: 'Learn to write and deploy smart contracts',
    icon: Code,
    unlocked: true,
    lessons: [
      {
        id: '4.1',
        title: 'Smart Contract Basics',
        description: 'Introduction to smart contract development',
        path: createLessonPath('4', '1'),
        component: lazy(() => import('../components/lessons/Module4Lesson1')),
        unlocked: true
      }
    ]
  },
  {
    id: '5',
    title: 'Decentralized Applications',
    description: 'Building full-stack decentralized applications',
    icon: Globe,
    unlocked: true,
    lessons: [
      {
        id: '5.1',
        title: 'DApp Architecture',
        description: 'Understanding DApp architecture and components',
        path: createLessonPath('5', '1'),
        component: lazy(() => import('../components/lessons/Module5Lesson1')),
        unlocked: true
      }
    ]
  },
  {
    id: '6',
    title: 'Network Architecture',
    description: 'Understanding blockchain network architecture',
    icon: Network,
    unlocked: true,
    lessons: [
      {
        id: '6.1',
        title: 'Network Components',
        description: 'Core components of blockchain networks',
        path: createLessonPath('6', '1'),
        component: lazy(() => import('../components/lessons/Module6Lesson1')),
        unlocked: true
      }
    ]
  },
  {
    id: '7',
    title: 'Consensus Mechanisms',
    description: 'Deep dive into blockchain consensus mechanisms',
    icon: Shield,
    unlocked: true,
    lessons: [
      {
        id: '7.1',
        title: 'Understanding Consensus',
        description: 'Introduction to blockchain consensus',
        path: createLessonPath('7', '1'),
        component: lazy(() => import('../components/lessons/Module7Lesson1')),
        unlocked: true
      }
    ]
  },
  {
    id: '8',
    title: 'Advanced Topics',
    description: 'Advanced blockchain development concepts',
    icon: Cpu,
    unlocked: true,
    lessons: [
      {
        id: '8.1',
        title: 'Advanced Concepts',
        description: 'Advanced blockchain development topics',
        path: createLessonPath('8', '1'),
        component: lazy(() => import('../components/lessons/Module8Lesson1')),
        unlocked: true
      }
    ]
  },
  {
    id: '10',
    title: 'Lab Exercise - Build an Unchained Swarm',
    description: 'Hands-on lab for building and managing an Unchained node swarm',
    icon: Server,
    unlocked: true,
    lessons: [
      {
        id: '10.1',
        title: 'Lab Part 1: Introduction and Environment Preparation',
        description: 'Set up your development environment for building an Unchained swarm',
        path: createLessonPath('10', '1'),
        component: lazy(() => import('../components/lessons/Module10Lesson1')),
        unlocked: true
      },
      {
        id: '10.2',
        title: 'Lab Part 2: Configuring Each Node',
        description: 'Learn to configure individual nodes for swarm participation',
        path: createLessonPath('10', '2'),
        component: lazy(() => import('../components/lessons/Module10Lesson2')),
        unlocked: true
      },
      {
        id: '10.3',
        title: 'Lab Part 3: Starting and Managing Nodes',
        description: 'Start your swarm and manage node operations effectively',
        path: createLessonPath('10', '3'),
        component: lazy(() => import('../components/lessons/Module10Lesson3')),
        unlocked: true
      },
      {
        id: '10.4',
        title: 'Lab Part 4: Maintenance and Scaling',
        description: 'Maintain and scale your Unchained swarm deployment',
        path: createLessonPath('10', '4'),
        component: lazy(() => import('../components/lessons/Module10Lesson4')),
        unlocked: true
      },
      {
        id: '10.5',
        title: 'Lab Part 5: Post-Deployment Insights',
        description: 'Analyze and optimize your swarm deployment',
        path: createLessonPath('10', '5'),
        component: lazy(() => import('../components/lessons/Module10Lesson5')),
        unlocked: true
      }
    ]
  }
];

// Helper functions
export const getAllLessons = () => 
  modules.flatMap(module => module.lessons);

export const getLessonById = (moduleId: string, lessonId: string) => {
  const module = modules.find(m => m.id === moduleId);
  return module?.lessons.find(l => l.id === `${moduleId}.${lessonId}`);
};

export const getNextLesson = (currentModuleId: string, currentLessonId: string) => {
  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex(
    lesson => lesson.id === `${currentModuleId}.${currentLessonId}`
  );
  return allLessons[currentIndex + 1];
};

export const getPreviousLesson = (currentModuleId: string, currentLessonId: string) => {
  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex(
    lesson => lesson.id === `${currentModuleId}.${currentLessonId}`
  );
  return allLessons[currentIndex - 1];
};

export const getTotalLessonsCount = () =>
  getAllLessons().length;

export const getCompletedLessonsCount = () =>
  getAllLessons().filter(lesson => lesson.completed).length;
