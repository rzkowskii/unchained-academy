import React from 'react';
import LessonContent from './LessonContent';

const Module10Lesson3: React.FC = () => {
  const codeExamples = [
    {
      title: 'Node Management Commands',
      code: `# Start the swarm
npm run swarm:start

# Check node status
npm run swarm:status

# View node logs
npm run swarm:logs node-1

# Connect to node console
npm run swarm:console node-1

# Common node management commands
# List peers
admin.peers

# Node info
admin.nodeInfo

# Network info
net.peerCount
net.listening

# Blockchain info
eth.blockNumber
eth.syncing

# Validator commands
# Check if node is validating
clique.getSigners()

# Get validator status
clique.status

# Propose new validator
clique.propose("0x...", true)

# Stop the swarm
npm run swarm:stop

# Restart specific node
npm run swarm:restart node-1`,
      language: 'bash',
    },
    {
      title: 'Node Management Implementation',
      code: `import { SwarmManager, NodeMonitor } from '@unchained/swarm-tools';
import { MetricsCollector } from '@unchained/metrics';
import { LogAggregator } from '@unchained/logging';

class SwarmOperator {
  private manager: SwarmManager;
  private monitor: NodeMonitor;
  private metrics: MetricsCollector;
  private logs: LogAggregator;

  constructor(config: SwarmConfig) {
    this.manager = new SwarmManager(config);
    this.monitor = new NodeMonitor();
    this.metrics = new MetricsCollector();
    this.logs = new LogAggregator();
  }

  async startSwarm(): Promise<void> {
    try {
      // Initialize monitoring
      await this.initializeMonitoring();

      // Start nodes in sequence
      await this.startNodes();

      // Verify network formation
      await this.verifyNetwork();

      console.log('Swarm started successfully');
    } catch (error) {
      console.error('Failed to start swarm:', error);
      throw error;
    }
  }

  private async initializeMonitoring(): Promise<void> {
    // Start metrics collection
    await this.metrics.start();

    // Initialize log aggregation
    await this.logs.initialize();

    // Set up monitoring alerts
    await this.monitor.setupAlerts({
      cpu: 80,
      memory: 90,
      disk: 85,
      peers: 5
    });
  }

  private async startNodes(): Promise<void> {
    const nodes = this.manager.getNodes();
    
    for (const node of nodes) {
      try {
        // Start the node
        await this.manager.startNode(node.id);

        // Wait for node initialization
        await this.waitForNodeInit(node.id);

        // Start monitoring
        await this.monitor.startNodeMonitoring(node.id);

        console.log(\`Node \${node.id} started successfully\`);
      } catch (error) {
        console.error(\`Failed to start node \${node.id}:\`, error);
        throw error;
      }
    }
  }

  private async waitForNodeInit(nodeId: string): Promise<void> {
    const maxAttempts = 30;
    let attempts = 0;

    while (attempts < maxAttempts) {
      const status = await this.manager.getNodeStatus(nodeId);
      
      if (status.initialized) {
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      attempts++;
    }

    throw new Error(\`Node \${nodeId} initialization timeout\`);
  }

  private async verifyNetwork(): Promise<void> {
    // Check peer connections
    const networkStatus = await this.manager.getNetworkStatus();
    if (networkStatus.peerCount < this.manager.getMinPeers()) {
      throw new Error('Insufficient peer connections');
    }

    // Verify consensus
    if (!await this.verifyConsensus()) {
      throw new Error('Consensus verification failed');
    }
  }

  private async verifyConsensus(): Promise<boolean> {
    const validators = this.manager.getValidators();
    
    for (const validator of validators) {
      const status = await this.manager.getValidatorStatus(validator);
      if (!status.active) {
        return false;
      }
    }

    return true;
  }

  async stopSwarm(): Promise<void> {
    try {
      // Stop all nodes
      await this.manager.stopAllNodes();

      // Stop monitoring
      await this.monitor.stop();

      // Stop metrics collection
      await this.metrics.stop();

      console.log('Swarm stopped successfully');
    } catch (error) {
      console.error('Failed to stop swarm:', error);
      throw error;
    }
  }

  async getSwarmStatus(): Promise<SwarmStatus> {
    return {
      nodes: await this.manager.getAllNodeStatus(),
      network: await this.manager.getNetworkStatus(),
      metrics: await this.metrics.getMetrics(),
      alerts: await this.monitor.getActiveAlerts()
    };
  }
}

interface SwarmConfig {
  nodes: NodeConfig[];
  monitoring: MonitoringConfig;
}

interface SwarmStatus {
  nodes: Record<string, NodeStatus>;
  network: NetworkStatus;
  metrics: MetricsData;
  alerts: Alert[];
}`,
      language: 'typescript',
    }
  ];

  const metadata = {
    title: "Lab Part 3: Starting and Managing Nodes",
    duration: 45,
    objectives: [
      "Start and initialize nodes",
      "Monitor node operations",
      "Manage running nodes",
      "Handle operational issues"
    ]
  };

  return (
    <LessonContent metadata={metadata}>
      <section>
        <h1>Lab Part 3: Starting and Managing Nodes</h1>
        <p className="text-gray-400 mt-2">
          In this part of the lab, you'll learn how to start, manage, and
          monitor nodes in your Unchained swarm. We'll cover operational
          procedures, monitoring practices, and troubleshooting techniques.
        </p>
      </section>

      <section className="mt-8">
        <h2>Prerequisites</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>Completed Parts 1 and 2</li>
          <li>Configured nodes ready</li>
          <li>Basic command line skills</li>
          <li>Understanding of node operations</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Node Management</h2>
        <p className="text-gray-400 mt-2">
          Essential commands for managing your swarm nodes:
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
        <h2>Management Implementation</h2>
        <p className="text-gray-400 mt-2">
          Implementing robust node management and monitoring:
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
        <h2>Operational Procedures</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Key Operations</h3>
          <div className="mt-4">
            <h4>1. Node Startup:</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Pre-start checks</li>
              <li>Initialization sequence</li>
              <li>Peer discovery</li>
              <li>Status verification</li>
            </ul>
          </div>
          <div className="mt-4">
            <h4>2. Runtime Management:</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Performance monitoring</li>
              <li>Resource management</li>
              <li>Log analysis</li>
              <li>Issue resolution</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2>Monitoring Practices</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Key Metrics to Monitor</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Node health status</li>
            <li>Network connectivity</li>
            <li>Resource utilization</li>
            <li>Consensus participation</li>
            <li>Error rates</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Troubleshooting</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Common Issues</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Network connectivity</li>
            <li>Peer discovery</li>
            <li>Resource exhaustion</li>
            <li>Consensus problems</li>
            <li>Performance degradation</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Practice Exercise</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Node Management Task</h3>
          <p className="text-gray-400 mt-2">
            Complete the following operations:
          </p>
          <ul className="list-decimal list-inside text-gray-400 mt-2">
            <li>Start the swarm</li>
            <li>Verify node status</li>
            <li>Monitor operations</li>
            <li>Handle issues</li>
            <li>Manage nodes</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Additional Resources</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>
            <a 
              href="https://docs.unchained.network/operations" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light"
            >
              Operations Guide
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/unchained-network/operation-examples" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light"
            >
              Operation Examples
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Summary</h2>
        <p className="text-gray-400 mt-2">
          In this part of the lab, we covered starting and managing nodes
          in your Unchained swarm. We explored operational procedures,
          monitoring practices, and troubleshooting techniques. In the
          next part, we'll focus on maintaining and scaling your swarm
          deployment.
        </p>
      </section>
    </LessonContent>
  );
};

export default Module10Lesson3;
