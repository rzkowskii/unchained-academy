import Module1Lesson1 from '../components/lessons/Module1Lesson1';
import Module1Lesson2 from '../components/lessons/Module1Lesson2';
import Module1Lesson3 from '../components/lessons/Module1Lesson3';
import Module1Lesson4 from '../components/lessons/Module1Lesson4';
import Module2Lesson1 from '../components/lessons/Module2Lesson1';
import Module2Lesson2 from '../components/lessons/Module2Lesson2';

export const modules = [
  {
    title: 'Introduction to kenshi and Unchained',
    lessons: [
      {
        title: 'What is Unchained Network?',
        path: '/module1/lesson1',
        component: Module1Lesson1,
        unlocked: true
      },
      {
        title: 'Core Concepts and Architecture',
        path: '/module1/lesson2',
        component: Module1Lesson2,
        unlocked: true
      },
      {
        title: 'Network Participants and Roles',
        path: '/module1/lesson3',
        component: Module1Lesson3,
        unlocked: true
      },
      {
        title: 'Getting Started with Unchained',
        path: '/module1/lesson4',
        component: Module1Lesson4,
        unlocked: true
      }
    ],
    unlocked: true
  },
  {
    title: 'Setting Up and Running Nodes',
    lessons: [
      {
        title: 'Hardware and Software Requirements',
        path: '/module2/lesson1',
        component: Module2Lesson1,
        unlocked: true
      },
      {
        title: 'Unchained Client Installation',
        path: '/module2/lesson2',
        component: Module2Lesson2,
        unlocked: true
      }
    ],
    unlocked: true
  }
];
