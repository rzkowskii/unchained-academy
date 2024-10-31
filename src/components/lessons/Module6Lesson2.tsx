import React from 'react';
import LessonContent from './LessonContent';

const Module6Lesson2: React.FC = () => {
  const codeExamples = [
    {
      title: 'Model Management Configuration',
      code: `{
  "modelManager": {
    "storageConfig": {
      "localPath": "/models",
      "remoteEndpoint": "https://models.unchained.network",
      "cachePath": "/tmp/model-cache"
    },
    "versionControl": {
      "enableVersioning": true,
      "maxVersionsKept": 3,
      "autoUpdate": true
    },
    "resourceLimits": {
      "maxModelSize": "5GB",
      "maxTotalSize": "20GB",
      "cleanupThreshold": "90%"
    }
  }
}`,
      language: 'json',
    },
    {
      title: 'Resource Management Implementation',
      code: `import { ResourceManager } from '@unchained/ai-core';

class AIModelManager {
  private resourceManager: ResourceManager;
  
  constructor() {
    this.resourceManager = new ResourceManager({
      maxMemory: '16GB',
      maxGPUMemory: '8GB',
      enableSwapping: true
    });
  }

  async loadModel(modelId: string): Promise<AIModel> {
    try {
      // Check resource availability
      await this.resourceManager.checkResources({
        requiredMemory: '4GB',
        requiredGPU: true
      });

      // Load model with resource constraints
      const model = await this.resourceManager.loadWithConstraints(
        modelId,
        {
          maxBatchSize: 32,
          timeout: 5000,
          priority: 'high'
        }
      );

      return model;
    } catch (error) {
      console.error('Failed to load model:', error);
      throw error;
    }
  }

  async unloadModel(modelId: string): Promise<void> {
    await this.resourceManager.releaseResources(modelId);
  }

  getResourceMetrics(): ResourceMetrics {
    return this.resourceManager.getCurrentMetrics();
  }
}`,
      language: 'typescript',
    }
  ];

  const metadata = {
    title: "Managing AI Models and Resources",
    duration: 45,
    objectives: [
      "Learn effective AI model management strategies",
      "Master resource allocation and optimization",
      "Implement version control for AI models",
      "Monitor and optimize resource usage"
    ]
  };

  return (
    <LessonContent metadata={metadata}>
      <section>
        <h1>Managing AI Models and Resources</h1>
        <p className="text-gray-400 mt-2">
          Effective management of AI models and system resources is crucial for
          maintaining optimal performance in an Unchained node. This lesson covers
          strategies for managing models, allocating resources, and monitoring
          system health.
        </p>
      </section>

      <section className="mt-8">
        <h2>Prerequisites</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>Completion of AI Plugin Configuration lesson</li>
          <li>Understanding of system resource management</li>
          <li>Basic knowledge of ML model deployment</li>
          <li>Familiarity with monitoring systems</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Model Management Overview</h2>
        <p className="text-gray-400 mt-2">
          Model management in Unchained involves several key aspects:
        </p>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>Model storage and versioning</li>
          <li>Resource allocation and constraints</li>
          <li>Load balancing and scaling</li>
          <li>Performance monitoring</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Model Management Configuration</h2>
        <p className="text-gray-400 mt-2">
          Proper configuration ensures efficient model management and resource
          utilization. Here's an example configuration:
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
        <h2>Resource Management Implementation</h2>
        <p className="text-gray-400 mt-2">
          Implementing robust resource management ensures optimal performance
          and prevents resource exhaustion:
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
        <h2>Resource Optimization Strategies</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Key Optimization Areas</h3>
          <div className="mt-4">
            <h4>1. Memory Management:</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Implement model unloading strategies</li>
              <li>Use memory-mapped files when appropriate</li>
              <li>Enable GPU memory optimization</li>
              <li>Implement caching mechanisms</li>
            </ul>
          </div>
          <div className="mt-4">
            <h4>2. Load Balancing:</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Distribute workloads across GPUs</li>
              <li>Implement request queuing</li>
              <li>Scale resources dynamically</li>
              <li>Monitor resource utilization</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2>Version Control and Updates</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Version Management Best Practices</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Maintain model version history</li>
            <li>Implement rollback capabilities</li>
            <li>Automate update processes</li>
            <li>Validate model versions</li>
            <li>Monitor version performance</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Practice Exercise</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Resource Management Implementation</h3>
          <p className="text-gray-400 mt-2">
            Implement a resource management system that:
          </p>
          <ul className="list-decimal list-inside text-gray-400 mt-2">
            <li>Manages multiple AI models</li>
            <li>Implements resource constraints</li>
            <li>Handles version control</li>
            <li>Monitors resource usage</li>
            <li>Implements cleanup strategies</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Monitoring and Metrics</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Key Metrics to Track</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Model load times</li>
            <li>Memory usage patterns</li>
            <li>GPU utilization</li>
            <li>Cache hit rates</li>
            <li>Version update success rates</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Additional Resources</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>
            <a 
              href="https://docs.unchained.network/model-management" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light"
            >
              Model Management Documentation
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/unchained-network/resource-management" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light"
            >
              Resource Management Examples
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Summary</h2>
        <p className="text-gray-400 mt-2">
          In this lesson, we covered essential aspects of AI model and resource
          management in the Unchained Network. We explored configuration options,
          implementation strategies, optimization techniques, and monitoring
          practices. In the next lesson, we'll focus on GPU optimization for
          AI workloads.
        </p>
      </section>
    </LessonContent>
  );
};

export default Module6Lesson2;
