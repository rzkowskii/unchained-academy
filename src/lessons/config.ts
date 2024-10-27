import { lazy } from 'react';
import { LucideIcon, BookOpen, Server, Network, Shield, Code, Cpu, Database, Globe } from 'lucide-react';

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

// Helper function to create lesson IDs
const createLessonId = (moduleIndex: number, lessonIndex: number) =>
  `${moduleIndex + 1}.${lessonIndex + 1}`;

// Course Configuration
export const modules: Module[] = [
  {
    id: '1',
    title: 'Introduction to Kenshi and Unchained',
    description: 'Learn the fundamentals of the Kenshi ecosystem and Unchained network architecture.',
    icon: BookOpen,
    unlocked: true,
    lessons: [
      {
        id: '1.1',
        title: 'What is Unchained Network?',
        description: 'Introduction to the Unchained Network and its core concepts.',
        path: createLessonPath('1', '1'),
        component: lazy(() => import('../components/lessons/Module1Lesson1')),
        unlocked: true,
        completed: true
      },
      {
        id: '1.2',
        title: 'Core Concepts and Architecture',
        description: 'Understanding the fundamental architecture and concepts.',
        path: createLessonPath('1', '2'),
        component: lazy(() => import('../components/lessons/Module1Lesson2')),
        unlocked: true
      },
      {
        id: '1.3',
        title: 'Network Participants and Roles',
        description: 'Learn about different participants and their roles in the network.',
        path: createLessonPath('1', '3'),
        component: lazy(() => import('../components/lessons/Module1Lesson3')),
        unlocked: true
      },
      {
        id: '1.4',
        title: 'Getting Started with Unchained',
        description: 'Your first steps into the Unchained ecosystem.',
        path: createLessonPath('1', '4'),
        component: lazy(() => import('../components/lessons/Module1Lesson4')),
        unlocked: true
      }
    ]
  },
  {
    id: '2',
    title: 'Setting Up and Running Nodes',
    description: 'Master the process of setting up and maintaining Unchained network nodes.',
    icon: Server,
    unlocked: true,
    lessons: [
      {
        id: '2.1',
        title: 'Hardware and Software Requirements',
        description: 'Learn about the requirements for running an Unchained node.',
        path: createLessonPath('2', '1'),
        component: lazy(() => import('../components/lessons/Module2Lesson1')),
        unlocked: true
      }
    ]
  },
  {
    id: '3',
    title: 'Understanding Node Types',
    description: 'Deep dive into different node types and their roles in the network.',
    icon: Network,
    unlocked: true,
    lessons: []
  },
  {
    id: '4',
    title: 'Data Validation in Unchained',
    description: 'Learn about data validation mechanisms and BLS12-381 implementation.',
    icon: Shield,
    unlocked: true,
    lessons: []
  },
  {
    id: '5',
    title: 'Leveraging Unchained APIs',
    description: 'Master the Unchained API ecosystem and integration patterns.',
    icon: Code,
    unlocked: true,
    lessons: []
  },
  {
    id: '6',
    title: 'AI Node Operations',
    description: 'Learn advanced AI operations and optimizations for node management.',
    icon: Cpu,
    unlocked: true,
    lessons: [
      {
        id: '6.1',
        title: 'Detailed AI plugin configuration',
        description: 'Configure and optimize AI plugins for node operations.',
        path: createLessonPath('6', '1'),
        component: lazy(() => import('../components/lessons/LessonTemplate')),
        unlocked: true
      },
      {
        id: '6.2',
        title: 'Managing AI models and resources',
        description: 'Learn to effectively manage AI models and system resources.',
        path: createLessonPath('6', '2'),
        component: lazy(() => import('../components/lessons/LessonTemplate')),
        unlocked: true
      },
      {
        id: '6.3',
        title: 'GPU optimization for AI workloads',
        description: 'Optimize GPU usage for AI-related node operations.',
        path: createLessonPath('6', '3'),
        component: lazy(() => import('../components/lessons/LessonTemplate')),
        unlocked: true
      },
      {
        id: '6.4',
        title: 'AI task validation and processing',
        description: 'Implement and validate AI task processing workflows.',
        path: createLessonPath('6', '4'),
        component: lazy(() => import('../components/lessons/LessonTemplate')),
        unlocked: true
      }
    ]
  },
  {
    id: '7',
    title: 'Advanced Data Indexing',
    description: 'Master advanced data indexing techniques and query optimization.',
    icon: Database,
    unlocked: true,
    lessons: [
      {
        id: '7.1',
        title: 'Deep Index Sync implementation',
        description: 'Implement and manage deep index synchronization.',
        path: createLessonPath('7', '1'),
        component: lazy(() => import('../components/lessons/LessonTemplate')),
        unlocked: true
      },
      {
        id: '7.2',
        title: 'GraphQL query optimization',
        description: 'Optimize GraphQL queries for better performance.',
        path: createLessonPath('7', '2'),
        component: lazy(() => import('../components/lessons/LessonTemplate')),
        unlocked: true
      },
      {
        id: '7.3',
        title: 'MQL (MongoDB Query Language) usage',
        description: 'Master MongoDB Query Language for efficient data retrieval.',
        path: createLessonPath('7', '3'),
        component: lazy(() => import('../components/lessons/LessonTemplate')),
        unlocked: true
      },
      {
        id: '7.4',
        title: 'Reverse API configuration',
        description: 'Configure and implement reverse API functionality.',
        path: createLessonPath('7', '4'),
        component: lazy(() => import('../components/lessons/LessonTemplate')),
        unlocked: true
      }
    ]
  },
  {
    id: '8',
    title: 'Federation Patterns',
    description: 'Learn advanced federation patterns and network optimization techniques.',
    icon: Globe,
    unlocked: true,
    lessons: [
      {
        id: '8.1',
        title: 'Private network deployment',
        description: 'Deploy and manage private federated networks.',
        path: createLessonPath('8', '1'),
        component: lazy(() => import('../components/lessons/LessonTemplate')),
        unlocked: true
      },
      {
        id: '8.2',
        title: 'Custom ruleset implementation',
        description: 'Implement custom rulesets for federation.',
        path: createLessonPath('8', '2'),
        component: lazy(() => import('../components/lessons/LessonTemplate')),
        unlocked: true
      },
      {
        id: '8.3',
        title: 'Network topology optimization',
        description: 'Optimize network topology for better performance.',
        path: createLessonPath('8', '3'),
        component: lazy(() => import('../components/lessons/LessonTemplate')),
        unlocked: true
      },
      {
        id: '8.4',
        title: 'Federation security practices',
        description: 'Implement security best practices for federation.',
        path: createLessonPath('8', '4'),
        component: lazy(() => import('../components/lessons/LessonTemplate')),
        unlocked: true
      }
    ]
  },
  {
    id: '10',
    title: 'Lab Exercise - Build an Unchained Swarm',
    description: 'Hands-on lab for building and managing an Unchained node swarm.',
    icon: Network,
    unlocked: true,
    lessons: [
      {
        id: '10.1',
        title: 'Lab Part 1: Introduction and Environment Preparation',
        description: 'Set up your development environment for building an Unchained swarm.',
        path: createLessonPath('10', '1'),
        component: lazy(() => import('../components/lessons/LessonTemplate')),
        unlocked: true
      },
      {
        id: '10.2',
        title: 'Lab Part 2: Configuring Each Node',
        description: 'Learn to configure individual nodes for swarm participation.',
        path: createLessonPath('10', '2'),
        component: lazy(() => import('../components/lessons/LessonTemplate')),
        unlocked: true
      },
      {
        id: '10.3',
        title: 'Lab Part 3: Starting and Managing Nodes',
        description: 'Start your swarm and manage node operations effectively.',
        path: createLessonPath('10', '3'),
        component: lazy(() => import('../components/lessons/LessonTemplate')),
        unlocked: true
      },
      {
        id: '10.4',
        title: 'Lab Part 4: Maintenance and Scaling',
        description: 'Maintain and scale your Unchained swarm deployment.',
        path: createLessonPath('10', '4'),
        component: lazy(() => import('../components/lessons/LessonTemplate')),
        unlocked: true
      },
      {
        id: '10.5',
        title: 'Lab Part 5: Post-Deployment Insights',
        description: 'Analyze and optimize your swarm deployment.',
        path: createLessonPath('10', '5'),
        component: lazy(() => import('../components/lessons/LessonTemplate')),
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

// Instructions for adding a new lesson:
/*
To add a new lesson:

1. Create a new lesson component in src/components/lessons/ following the naming convention:
   Module{moduleId}Lesson{lessonNumber}.tsx

2. Add the lesson to the appropriate module in the modules array above:

   {
     id: '{moduleId}.{lessonNumber}',
     title: 'Lesson Title',
     description: 'Lesson Description',
     path: createLessonPath('{moduleId}', '{lessonNumber}'),
     component: lazy(() => import('../components/lessons/Module{moduleId}Lesson{lessonNumber}')),
     unlocked: true
   }

3. The routing will be automatically handled by App.tsx
*/
