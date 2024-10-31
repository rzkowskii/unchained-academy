import React from 'react';
import LessonContent from './LessonContent';

const Module6Lesson4: React.FC = () => {
  const codeExamples = [
    {
      title: 'Task Validation Schema',
      code: `interface AITask {
  id: string;
  type: 'classification' | 'inference' | 'training';
  priority: 'low' | 'medium' | 'high';
  input: {
    data: unknown;
    format: string;
    validation: ValidationRule[];
  };
  resources: {
    maxMemory: string;
    maxGPU: number;
    timeout: number;
  };
  metadata: {
    created: number;
    owner: string;
    tags: string[];
  };
}

interface ValidationRule {
  type: string;
  params: Record<string, unknown>;
}

function validateAITask(task: unknown): task is AITask {
  if (!task || typeof task !== 'object') return false;
  
  const t = task as AITask;
  
  // Validate basic properties
  if (typeof t.id !== 'string') return false;
  if (!['classification', 'inference', 'training'].includes(t.type)) return false;
  if (!['low', 'medium', 'high'].includes(t.priority)) return false;
  
  // Validate input structure
  if (!t.input || typeof t.input !== 'object') return false;
  if (!Array.isArray(t.input.validation)) return false;
  
  // Validate resource constraints
  if (!t.resources || typeof t.resources !== 'object') return false;
  if (typeof t.resources.maxMemory !== 'string') return false;
  if (typeof t.resources.maxGPU !== 'number') return false;
  if (typeof t.resources.timeout !== 'number') return false;
  
  return true;
}`,
      language: 'typescript',
    },
    {
      title: 'Task Processing Implementation',
      code: `import { TaskProcessor, ValidationError } from '@unchained/ai-core';
import { MetricsCollector } from '@unchained/metrics';

class AITaskProcessor {
  private processor: TaskProcessor;
  private metrics: MetricsCollector;

  constructor() {
    this.processor = new TaskProcessor();
    this.metrics = new MetricsCollector();
  }

  async processTask(task: AITask): Promise<TaskResult> {
    try {
      // Start metrics collection
      const taskMetrics = this.metrics.startTaskMetrics(task.id);

      // Validate task
      if (!validateAITask(task)) {
        throw new ValidationError('Invalid task structure');
      }

      // Validate input data
      await this.validateInputData(task.input);

      // Check resource availability
      await this.checkResources(task.resources);

      // Process the task
      const result = await this.processor.execute(task, {
        onProgress: (progress) => {
          taskMetrics.updateProgress(progress);
        },
        onError: (error) => {
          taskMetrics.recordError(error);
        }
      });

      // Validate output
      await this.validateOutput(result);

      // Record completion metrics
      taskMetrics.recordCompletion(result);

      return result;
    } catch (error) {
      this.metrics.recordFailure(task.id, error);
      throw error;
    }
  }

  private async validateInputData(input: TaskInput): Promise<void> {
    for (const rule of input.validation) {
      const validator = await this.getValidator(rule.type);
      await validator.validate(input.data, rule.params);
    }
  }

  private async validateOutput(result: TaskResult): Promise<void> {
    // Implement output validation logic
    const schema = this.getOutputSchema(result.type);
    if (!schema.validate(result.data)) {
      throw new ValidationError('Invalid output format');
    }
  }
}`,
      language: 'typescript',
    }
  ];

  const metadata = {
    title: "AI Task Validation and Processing",
    duration: 45,
    objectives: [
      "Learn AI task validation patterns",
      "Implement robust processing workflows",
      "Master error handling and recovery",
      "Monitor and optimize task processing"
    ]
  };

  return (
    <LessonContent metadata={metadata}>
      <section>
        <h1>AI Task Validation and Processing</h1>
        <p className="text-gray-400 mt-2">
          Proper validation and processing of AI tasks is crucial for maintaining
          system reliability and performance. This lesson covers comprehensive
          approaches to task validation, processing workflows, and monitoring.
        </p>
      </section>

      <section className="mt-8">
        <h2>Prerequisites</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>Understanding of AI workload patterns</li>
          <li>Knowledge of TypeScript/JavaScript</li>
          <li>Familiarity with validation techniques</li>
          <li>Basic understanding of metrics collection</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Task Validation</h2>
        <p className="text-gray-400 mt-2">
          Implementing robust task validation ensures system stability and
          prevents resource waste. Here's a comprehensive validation schema:
        </p>
        
        <div className="mt-4">
          <h3>{codeExamples[0].title}</h3>
          <pre className="bg-surface-dark p-4 rounded-lg mt-2 overflow-x-auto">
            <code className={`language-${codeExamples[0].language}`}>
              {codeExamples[0].code}
            </code>
          </pre>
        </div>
      </section>

      <section className="mt-8">
        <h2>Task Processing</h2>
        <p className="text-gray-400 mt-2">
          Efficient task processing requires careful orchestration of validation,
          execution, and monitoring. Here's an implementation example:
        </p>
        
        <div className="mt-4">
          <h3>{codeExamples[1].title}</h3>
          <pre className="bg-surface-dark p-4 rounded-lg mt-2 overflow-x-auto">
            <code className={`language-${codeExamples[1].language}`}>
              {codeExamples[1].code}
            </code>
          </pre>
        </div>
      </section>

      <section className="mt-8">
        <h2>Validation Strategies</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Key Validation Areas</h3>
          <div className="mt-4">
            <h4>1. Input Validation:</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Data format verification</li>
              <li>Size and dimension checks</li>
              <li>Content type validation</li>
              <li>Schema compliance</li>
            </ul>
          </div>
          <div className="mt-4">
            <h4>2. Resource Validation:</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Memory requirements</li>
              <li>GPU availability</li>
              <li>Time constraints</li>
              <li>System capacity</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2>Error Handling</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Error Management Strategies</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Graceful degradation</li>
            <li>Retry mechanisms</li>
            <li>Error categorization</li>
            <li>Recovery procedures</li>
            <li>Error reporting</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Monitoring and Metrics</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Key Metrics to Track</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Task success rate</li>
            <li>Processing time</li>
            <li>Resource utilization</li>
            <li>Error frequency</li>
            <li>Validation failures</li>
            <li>System throughput</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Practice Exercise</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Task Processing System</h3>
          <p className="text-gray-400 mt-2">
            Implement a task processing system that:
          </p>
          <ul className="list-decimal list-inside text-gray-400 mt-2">
            <li>Validates input tasks</li>
            <li>Manages resource allocation</li>
            <li>Handles errors gracefully</li>
            <li>Collects performance metrics</li>
            <li>Implements recovery strategies</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Additional Resources</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>
            <a 
              href="https://docs.unchained.network/task-processing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light"
            >
              Task Processing Documentation
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/unchained-network/task-examples" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light"
            >
              Task Processing Examples
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Summary</h2>
        <p className="text-gray-400 mt-2">
          In this lesson, we covered comprehensive approaches to AI task
          validation and processing in the Unchained Network. We explored
          validation strategies, processing workflows, error handling, and
          monitoring practices. This concludes the AI Node Operations module,
          providing you with a solid foundation for managing AI workloads in
          the network.
        </p>
      </section>
    </LessonContent>
  );
};

export default Module6Lesson4;
