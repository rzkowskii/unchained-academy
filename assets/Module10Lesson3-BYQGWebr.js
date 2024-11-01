import{j as e}from"./index-B0IARw92.js";import{L as i}from"./LessonContent-8j15sELS.js";const a=()=>{const t=[{title:"Node Management Commands",code:`# Start the swarm
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
npm run swarm:restart node-1`,language:"bash"},{title:"Node Management Implementation",code:`import { SwarmManager, NodeMonitor } from '@unchained/swarm-tools';
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
}`,language:"typescript"}],s={title:"Lab Part 3: Starting and Managing Nodes",duration:45,objectives:["Start and initialize nodes","Monitor node operations","Manage running nodes","Handle operational issues"]};return e.jsxs(i,{metadata:s,children:[e.jsxs("section",{children:[e.jsx("h1",{children:"Lab Part 3: Starting and Managing Nodes"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"In this part of the lab, you'll learn how to start, manage, and monitor nodes in your Unchained swarm. We'll cover operational procedures, monitoring practices, and troubleshooting techniques."})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Prerequisites"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-400 mt-2",children:[e.jsx("li",{children:"Completed Parts 1 and 2"}),e.jsx("li",{children:"Configured nodes ready"}),e.jsx("li",{children:"Basic command line skills"}),e.jsx("li",{children:"Understanding of node operations"})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Node Management"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"Essential commands for managing your swarm nodes:"}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{children:t[0].title}),e.jsx("pre",{className:"bg-surface-dark p-4 rounded-lg mt-2 overflow-x-auto",children:e.jsx("code",{className:`language-${t[0].language}`,children:t[0].code})})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Management Implementation"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"Implementing robust node management and monitoring:"}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{children:t[1].title}),e.jsx("pre",{className:"bg-surface-dark p-4 rounded-lg mt-2 overflow-x-auto",children:e.jsx("code",{className:`language-${t[1].language}`,children:t[1].code})})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Operational Procedures"}),e.jsxs("div",{className:"bg-surface-dark p-6 rounded-lg mt-2",children:[e.jsx("h3",{children:"Key Operations"}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{children:"1. Node Startup:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-400",children:[e.jsx("li",{children:"Pre-start checks"}),e.jsx("li",{children:"Initialization sequence"}),e.jsx("li",{children:"Peer discovery"}),e.jsx("li",{children:"Status verification"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{children:"2. Runtime Management:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-400",children:[e.jsx("li",{children:"Performance monitoring"}),e.jsx("li",{children:"Resource management"}),e.jsx("li",{children:"Log analysis"}),e.jsx("li",{children:"Issue resolution"})]})]})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Monitoring Practices"}),e.jsxs("div",{className:"bg-surface-dark p-6 rounded-lg mt-2",children:[e.jsx("h3",{children:"Key Metrics to Monitor"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-400 mt-2",children:[e.jsx("li",{children:"Node health status"}),e.jsx("li",{children:"Network connectivity"}),e.jsx("li",{children:"Resource utilization"}),e.jsx("li",{children:"Consensus participation"}),e.jsx("li",{children:"Error rates"})]})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Troubleshooting"}),e.jsxs("div",{className:"bg-surface-dark p-6 rounded-lg mt-2",children:[e.jsx("h3",{children:"Common Issues"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-400 mt-2",children:[e.jsx("li",{children:"Network connectivity"}),e.jsx("li",{children:"Peer discovery"}),e.jsx("li",{children:"Resource exhaustion"}),e.jsx("li",{children:"Consensus problems"}),e.jsx("li",{children:"Performance degradation"})]})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Practice Exercise"}),e.jsxs("div",{className:"bg-surface-dark p-6 rounded-lg mt-2",children:[e.jsx("h3",{children:"Node Management Task"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"Complete the following operations:"}),e.jsxs("ul",{className:"list-decimal list-inside text-gray-400 mt-2",children:[e.jsx("li",{children:"Start the swarm"}),e.jsx("li",{children:"Verify node status"}),e.jsx("li",{children:"Monitor operations"}),e.jsx("li",{children:"Handle issues"}),e.jsx("li",{children:"Manage nodes"})]})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Additional Resources"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-400 mt-2",children:[e.jsx("li",{children:e.jsx("a",{href:"https://docs.unchained.network/operations",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:text-primary-light",children:"Operations Guide"})}),e.jsx("li",{children:e.jsx("a",{href:"https://github.com/unchained-network/operation-examples",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:text-primary-light",children:"Operation Examples"})})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Summary"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"In this part of the lab, we covered starting and managing nodes in your Unchained swarm. We explored operational procedures, monitoring practices, and troubleshooting techniques. In the next part, we'll focus on maintaining and scaling your swarm deployment."})]})]})};export{a as default};
