import React from 'react';
import LessonContent from './LessonContent';

const Module10Lesson1: React.FC = () => {
  const codeExamples = [
    {
      title: 'Development Environment Setup',
      code: `# Required software versions
node >= 18.0.0
docker >= 20.10.0
git >= 2.30.0

# Clone the Unchained Swarm repository
git clone https://github.com/unchained-network/swarm-starter.git
cd swarm-starter

# Install dependencies
npm install

# Create environment configuration
cat > .env << EOL
NETWORK_NAME=unchained-swarm
NODE_COUNT=5
VALIDATOR_COUNT=3
P2P_PORT=30303
RPC_PORT=8545
MONITORING_PORT=9090
EOL

# Initialize development environment
npm run init

# Verify installation
npm run verify`,
      language: 'bash',
    },
    {
      title: 'Environment Configuration',
      code: `import { SwarmConfig } from '@unchained/swarm-types';

const config: SwarmConfig = {
  network: {
    name: process.env.NETWORK_NAME || 'unchained-swarm',
    chainId: 1337,
    consensus: 'poa'
  },
  nodes: {
    count: parseInt(process.env.NODE_COUNT || '5'),
    validators: parseInt(process.env.VALIDATOR_COUNT || '3'),
    ports: {
      p2p: parseInt(process.env.P2P_PORT || '30303'),
      rpc: parseInt(process.env.RPC_PORT || '8545'),
      monitoring: parseInt(process.env.MONITORING_PORT || '9090')
    }
  },
  docker: {
    image: 'unchained/node:latest',
    volumes: {
      data: './data',
      config: './config'
    },
    networks: ['swarm-net']
  },
  monitoring: {
    enabled: true,
    prometheus: true,
    grafana: true,
    alerting: {
      slack: process.env.SLACK_WEBHOOK,
      email: process.env.ALERT_EMAIL
    }
  }
};

export default config;`,
      language: 'typescript',
    }
  ];

  const metadata = {
    title: "Lab Part 1: Introduction and Environment Preparation",
    duration: 45,
    objectives: [
      "Set up development environment",
      "Configure swarm parameters",
      "Initialize basic infrastructure",
      "Verify installation"
    ]
  };

  return (
    <LessonContent metadata={metadata}>
      <section>
        <h1>Lab Part 1: Introduction and Environment Preparation</h1>
        <p className="text-gray-400 mt-2">
          In this hands-on lab, you'll build and manage an Unchained node
          swarm. Part 1 focuses on setting up your development environment
          and preparing the necessary infrastructure.
        </p>
      </section>

      <section className="mt-8">
        <h2>Prerequisites</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>Basic command line knowledge</li>
          <li>Understanding of Node.js</li>
          <li>Familiarity with Docker</li>
          <li>Git version control basics</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Environment Setup</h2>
        <p className="text-gray-400 mt-2">
          Follow these steps to set up your development environment:
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
        <h2>Configuration</h2>
        <p className="text-gray-400 mt-2">
          Configure your swarm environment with the following settings:
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
        <h2>Directory Structure</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Project Layout</h3>
          <div className="mt-4">
            <h4>1. Root Directory:</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Configuration files</li>
              <li>Environment settings</li>
              <li>Package management</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div className="mt-4">
            <h4>2. Data Directories:</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Node data storage</li>
              <li>Configuration files</li>
              <li>Monitoring data</li>
              <li>Log files</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2>Verification Steps</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Environment Checks</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Software versions</li>
            <li>Network connectivity</li>
            <li>Docker configuration</li>
            <li>Storage permissions</li>
            <li>Port availability</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Common Issues</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Troubleshooting Guide</h3>
          <div className="mt-4">
            <h4>1. Port Conflicts:</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Check port availability</li>
              <li>Update port configuration</li>
              <li>Stop conflicting services</li>
            </ul>
          </div>
          <div className="mt-4">
            <h4>2. Permission Issues:</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Verify user permissions</li>
              <li>Check directory ownership</li>
              <li>Update Docker permissions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2>Practice Exercise</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Environment Setup Task</h3>
          <p className="text-gray-400 mt-2">
            Complete the following tasks:
          </p>
          <ul className="list-decimal list-inside text-gray-400 mt-2">
            <li>Install required software</li>
            <li>Clone starter repository</li>
            <li>Configure environment</li>
            <li>Initialize development setup</li>
            <li>Verify installation</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Additional Resources</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>
            <a 
              href="https://docs.unchained.network/swarm-setup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light"
            >
              Swarm Setup Documentation
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/unchained-network/swarm-starter" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light"
            >
              Starter Repository
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Summary</h2>
        <p className="text-gray-400 mt-2">
          In this first part of the lab, we set up the development
          environment for building an Unchained swarm. We installed
          required software, configured the environment, and verified
          the installation. In the next part, we'll focus on configuring
          individual nodes for swarm participation.
        </p>
      </section>
    </LessonContent>
  );
};

export default Module10Lesson1;
