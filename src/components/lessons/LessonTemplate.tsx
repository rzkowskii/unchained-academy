import React from 'react';
import LessonContent from './LessonContent';

interface CodeExample {
  title: string;
  code: string;
  language: string;
}

const LessonTemplate: React.FC = () => {
  // Example code snippets for the lesson
  const codeExamples: CodeExample[] = [
    {
      title: 'Example 1',
      code: `// Your code here
console.log('Hello World');`,
      language: 'javascript',
    }
  ];

  // Lesson metadata required by LessonContent
  const metadata = {
    title: "Lesson Title",
    duration: 30, // Duration in minutes
    objectives: [
      "Understand concept X",
      "Learn how to implement Y",
      "Be able to explain Z"
    ]
  };

  return (
    <LessonContent metadata={metadata}>
      {/* Introduction */}
      <section>
        <h1>Lesson Title</h1>
        <p className="text-gray-400 mt-2">
          Brief introduction to the lesson and what will be covered.
        </p>
      </section>

      {/* Prerequisites */}
      <section className="mt-8">
        <h2>Prerequisites</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>Prerequisite 1</li>
          <li>Prerequisite 2</li>
        </ul>
      </section>

      {/* Main Content */}
      <section className="mt-8">
        <h2>Main Topic</h2>
        <p className="text-gray-400 mt-2">
          Main content explanation goes here. You can include multiple paragraphs,
          code examples, and other elements.
        </p>

        {/* Code Example */}
        <div className="mt-4">
          <h3>{codeExamples[0].title}</h3>
          <pre className="bg-surface-dark p-4 rounded-lg mt-2 overflow-x-auto">
            <code className={`language-${codeExamples[0].language}`}>
              {codeExamples[0].code}
            </code>
          </pre>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="mt-8">
        <h2>Key Concepts</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>Key concept 1</li>
          <li>Key concept 2</li>
        </ul>
      </section>

      {/* Practice Exercise */}
      <section className="mt-8">
        <h2>Practice Exercise</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Exercise Title</h3>
          <p className="text-gray-400 mt-2">
            Exercise description and instructions go here.
          </p>
          <div className="mt-4">
            <h4>Task:</h4>
            <ul className="list-decimal list-inside text-gray-400">
              <li>Step 1</li>
              <li>Step 2</li>
              <li>Step 3</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="mt-8">
        <h2>Additional Resources</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light"
            >
              Resource 1
            </a>
          </li>
          <li>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light"
            >
              Resource 2
            </a>
          </li>
        </ul>
      </section>

      {/* Summary */}
      <section className="mt-8">
        <h2>Summary</h2>
        <p className="text-gray-400 mt-2">
          Brief recap of what was covered in the lesson and what's coming next.
        </p>
      </section>
    </LessonContent>
  );
};

export default LessonTemplate;

/*
Instructions for using this template:

1. Copy this file and rename it to Module{X}Lesson{Y}.tsx where X is the module number
   and Y is the lesson number (e.g., Module1Lesson5.tsx)

2. Update the component name to match the file name

3. Update the metadata:
   - Set an appropriate title
   - Set the estimated duration in minutes
   - List 3-5 specific learning objectives

4. Fill in the content sections:
   - Update the lesson title and introduction
   - Add prerequisites specific to this lesson
   - Write the main content
   - Add relevant code examples
   - List key concepts
   - Create a practice exercise
   - Add links to additional resources
   - Write a summary

5. Add the lesson to src/lessons/config.ts following the existing pattern:

   {
     id: '{moduleId}.{lessonNumber}',
     title: 'Your Lesson Title',
     description: 'Brief description of the lesson',
     path: createLessonPath('{moduleId}', '{lessonNumber}'),
     component: lazy(() => import('./Module{X}Lesson{Y}')),
     unlocked: false
   }

6. The routing will be automatically handled by App.tsx
*/
