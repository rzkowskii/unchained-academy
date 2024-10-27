import React from 'react';
import LessonContent from './LessonContent';

const lessonMetadata = {
  title: "Understanding the Kenshi Ecosystem",
  duration: 20,
  objectives: [
    "Understand the core components of the Kenshi ecosystem",
    "Learn about the relationship between Kenshi and Unchained",
    "Explore the key features and benefits of the platform",
    "Grasp the fundamental concepts of blockchain technology"
  ]
};

const Module1Lesson1: React.FC = () => {
  return (
    <LessonContent metadata={lessonMetadata}>
      <section id="introduction" className="mb-12">
        <h2>Introduction to the Kenshi Ecosystem</h2>
        <p>
          The Kenshi ecosystem represents a groundbreaking approach to blockchain technology,
          combining scalability, security, and ease of use. In this lesson, we'll explore
          the fundamental components that make Kenshi unique in the blockchain space.
        </p>
      </section>

      <section id="core-components" className="mb-12">
        <h2>Core Components</h2>
        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <div className="card">
            <h3>Blockchain Layer</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>High-performance consensus mechanism</li>
              <li>Advanced smart contract capabilities</li>
              <li>Scalable transaction processing</li>
            </ul>
          </div>
          <div className="card">
            <h3>Network Layer</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Distributed node architecture</li>
              <li>Peer-to-peer communication</li>
              <li>Network security protocols</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="kenshi-unchained" className="mb-12">
        <h2>Kenshi and Unchained Relationship</h2>
        <div className="bg-surface-dark p-6 rounded-lg mb-6">
          <p>
            Kenshi and Unchained work together to provide a comprehensive blockchain solution:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Kenshi provides the core blockchain infrastructure</li>
            <li>Unchained offers the development framework and tools</li>
            <li>Together they enable rapid deployment of decentralized applications</li>
          </ul>
        </div>
      </section>

      <section id="key-features" className="mb-12">
        <h2>Key Features and Benefits</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <h3>Scalability</h3>
            <p>High throughput and low latency transaction processing</p>
          </div>
          <div className="card">
            <h3>Security</h3>
            <p>Advanced cryptographic protocols and consensus mechanisms</p>
          </div>
          <div className="card">
            <h3>Usability</h3>
            <p>Developer-friendly tools and comprehensive documentation</p>
          </div>
        </div>
      </section>

      <section id="practical-exercise" className="mb-12">
        <h2>Practical Exercise</h2>
        <div className="interactive-demo">
          <h3>Exploring the Network</h3>
          <p className="mb-4">
            Let's examine how different components of the Kenshi ecosystem interact:
          </p>
          <div className="bg-surface p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              {`// Example interaction with Kenshi network
const kenshi = new KenshiNetwork();

// Connect to the network
await kenshi.connect();

// Check network status
const status = await kenshi.getNetworkStatus();
console.log("Network Status:", status);`}
            </pre>
          </div>
        </div>
      </section>

      <section id="knowledge-check" className="mb-12">
        <h2>Knowledge Check</h2>
        <div className="space-y-6">
          <div className="card">
            <h3>Question 1</h3>
            <p className="mb-4">What are the two main components of the Kenshi ecosystem?</p>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="q1" value="a" />
                <span>A) Frontend and Backend</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="q1" value="b" />
                <span>B) Blockchain Layer and Network Layer</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="q1" value="c" />
                <span>C) Smart Contracts and DApps</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <section id="summary" className="mb-12">
        <h2>Summary</h2>
        <div className="bg-surface-dark p-6 rounded-lg">
          <p className="mb-4">In this lesson, we covered:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The fundamental structure of the Kenshi ecosystem</li>
            <li>How Kenshi and Unchained work together</li>
            <li>Key features and benefits of the platform</li>
            <li>Practical examples of network interaction</li>
          </ul>
        </div>
      </section>

      <section id="additional-resources" className="mb-12">
        <h2>Additional Resources</h2>
        <div className="grid gap-4">
          <a href="/docs/kenshi-whitepaper" className="card hover:border-primary transition-colors">
            <h3>Kenshi Whitepaper</h3>
            <p>Deep dive into the technical specifications</p>
          </a>
          <a href="/docs/getting-started" className="card hover:border-primary transition-colors">
            <h3>Getting Started Guide</h3>
            <p>Step-by-step guide to building on Kenshi</p>
          </a>
        </div>
      </section>
    </LessonContent>
  );
};

export default Module1Lesson1;
