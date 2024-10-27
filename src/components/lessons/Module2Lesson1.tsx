import React from 'react';
import LessonContent from './LessonContent';

const lessonMetadata = {
  title: "Hardware and Software Requirements",
  duration: 25,
  objectives: [
    "Understand the different types of nodes in the Unchained Network",
    "Learn about hardware requirements for each node type",
    "Explore software compatibility and dependencies",
    "Understand scalability considerations for node operation"
  ]
};

const Module2Lesson1: React.FC = () => {
  return (
    <LessonContent metadata={lessonMetadata}>
      <section id="introduction" className="mb-12">
        <h2>Introduction</h2>
        <p>
          In this lesson, we'll cover the hardware and software requirements for running an Unchained Network node. 
          Before setting up your node, it's essential to understand the specifications and resources needed for optimal performance.
        </p>
      </section>

      <section id="node-types" className="mb-12">
        <h2>1. Overview of Node Types and Their Requirements</h2>
        
        <div className="card mb-6">
          <h3>Worker Nodes</h3>
          <p><strong>Function:</strong> Responsible for processing and validating data within the network.</p>
          <div className="mt-4">
            <h4>Hardware Requirements:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Storage: Minimum 10 GB, with more recommended for higher loads</li>
              <li>Memory: 128 MB for simple operations, 16 GB for AI-intensive tasks</li>
              <li>CPU: At least 1 CPU core (AArch64 or AMD64 architecture)</li>
              <li>Network: 1 Mbps symmetric internet speed</li>
            </ul>
          </div>
        </div>

        <div className="card mb-6">
          <h3>Broker Nodes</h3>
          <p><strong>Function:</strong> Serve as intermediaries between worker and consumer nodes, routing data requests.</p>
          <div className="mt-4">
            <h4>Hardware Requirements:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Storage: Minimum 10 GB</li>
              <li>Memory: 256 MB</li>
              <li>CPU: At least 1 CPU core (AArch64 or AMD64)</li>
              <li>Network: 100 Mbps symmetric internet speed</li>
            </ul>
          </div>
        </div>

        <div className="card mb-6">
          <h3>Consumer Nodes</h3>
          <p><strong>Function:</strong> Access and retrieve data from the network, primarily used by data consumers.</p>
          <div className="mt-4">
            <h4>Hardware Requirements:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Storage: Minimum 1 TB SSD</li>
              <li>Memory: 16 GB for efficient data handling</li>
              <li>CPU: 8 CPU cores recommended</li>
              <li>Network: 100 Mbps symmetric internet speed</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="ai-requirements" className="mb-12">
        <h2>2. Hardware Specifications for Running AI-Powered Worker Nodes</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <h3>Additional Requirements for AI Tasks</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>GPU: NVIDIA, Vulkan, or Apple M-series with at least 24 GB VRAM</li>
              <li>Increased Storage: Recommended 100 GB</li>
              <li>Enhanced CPU: 8 cores for AI data processing</li>
            </ul>
          </div>
          <div className="card">
            <h3>Optimal Setup for Performance</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>High-speed SSD with ample VRAM and RAM</li>
              <li>Regular upgrades to storage and memory</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="software-compatibility" className="mb-12">
        <h2>3. Software Compatibility and Installation Needs</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <h3>Operating Systems</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Linux: Kernel v5.15+ with systemd support</li>
              <li>macOS: Version 12+ on Apple hardware</li>
              <li>Windows: Windows 10 (Vibranium) and above</li>
            </ul>
          </div>
          <div className="card">
            <h3>Dependencies</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>BLS12-381 Pairing Implementation</li>
              <li>mkcert for SSL certificates</li>
              <li>pyenv and Python 3.8.19</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="scalability" className="mb-12">
        <h2>4. Hardware Considerations for Scalability</h2>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <h3>Storage Expansion</h3>
            <p>Consider modular storage solutions and high-capacity SSDs for larger datasets</p>
          </div>
          <div className="card">
            <h3>Memory Management</h3>
            <p>Over-provision memory for worker nodes handling AI tasks</p>
          </div>
          <div className="card">
            <h3>Redundant Systems</h3>
            <p>Implement backup solutions and UPS for power outages</p>
          </div>
        </div>
      </section>

      <section id="knowledge-check" className="mb-12">
        <h2>Knowledge Check</h2>
        <div className="space-y-6">
          <div className="card">
            <h3>Question 1</h3>
            <p className="mb-4">Which type of node requires at least 1 TB of SSD storage?</p>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="q1" value="a" />
                <span>A) Worker Node</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="q1" value="b" />
                <span>B) Broker Node</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="q1" value="c" />
                <span>C) Consumer Node</span>
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
            <li>Different types of nodes and their specific requirements</li>
            <li>Additional hardware needs for AI-powered nodes</li>
            <li>Software compatibility and dependencies</li>
            <li>Considerations for scaling node operations</li>
          </ul>
        </div>
      </section>
    </LessonContent>
  );
};

export default Module2Lesson1;
