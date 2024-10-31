import React from 'react';
import LessonContent from './LessonContent';

const Module10Lesson2: React.FC = () => {
  const codeExamples = [
    {
      title: 'Node Configuration',
      code: `{
  "nodes": [
    {
      "id": "node-1",
      "role": "validator",
      "networking": {
        "p2p": {
          "port": 30303,
          "address": "0.0.0.0",
          "maxPeers": 50,
          "discovery": true
        },
        "rpc": {
          "port": 8545,
          "address": "127.0.0.1",
          "apis": ["eth", "net", "web3"]
        }
      },
      "consensus": {
        "role": "validator",
        "address": "0x...",
        "keystore": "/keys/validator1",
        "password": "/keys/password.txt"
      },
      "storage": {
        "path": "/data/node1",
        "engine": "leveldb",
        "cache": "512MB"
      },
      "limits": {
        "cpu": "2",
        "memory": "4G",
        "storage": "100G"
      },
      "monitoring": {
        "metrics": true,
        "logging": {
          "level": "info",
          "file": "/logs/node1.log"
        }
      }
    }
  ],
  "genesis": {
    "chainId": 1337,
    "timestamp": "2024-01-01T00:00:00Z",
    "gasLimit": "0x1fffffffffffff",
    "difficulty": "0x1",
    "alloc": {
      "0x...": {
        "balance": "0x200000000000000000000000000000000000000000000000000000000000000"
      }
    },
    "config": {
      "chainId": 1337,
      "homesteadBlock": 0,
      "eip150Block": 0,
      "eip155Block": 0,
      "eip158Block": 0,
      "byzantiumBlock": 0,
      "constantinopleBlock": 0,
      "petersburgBlock": 0,
      "istanbulBlock": 0,
      "berlinBlock": 0,
      "londonBlock": 0,
      "clique": {
        "period": 5,
        "epoch": 30000
      }
    }
  }
}`,
      language: 'json',
    },
    {
      title: 'Node Configuration Script',
      code: `import { NodeConfigurator, KeyManager } from '@unchained/swarm-tools';
import { generateGenesis } from '@unchained/genesis';
import { validateConfig } from '@unchained/validator';

class SwarmConfigurator {
  private configurator: NodeConfigurator;
  private keyManager: KeyManager;

  constructor(config: SwarmConfig) {
    this.configurator = new NodeConfigurator(config);
    this.keyManager = new KeyManager();
  }

  async configureNodes(): Promise<void> {
    try {
      // Generate node keys
      await this.generateNodeKeys();

      // Configure each node
      await this.configureIndividualNodes();

      // Generate genesis block
      await this.generateGenesisBlock();

      // Validate configuration
      await this.validateConfigurations();

      console.log('Node configuration completed successfully');
    } catch (error) {
      console.error('Node configuration failed:', error);
      throw error;
    }
  }

  private async generateNodeKeys(): Promise<void> {
    for (const node of this.configurator.getNodes()) {
      // Generate node key pair
      const keys = await this.keyManager.generateNodeKeys();

      // Store keys securely
      await this.keyManager.storeKeys(node.id, keys);

      // Update node configuration
      await this.configurator.updateNodeKeys(node.id, keys);
    }
  }

  private async configureIndividualNodes(): Promise<void> {
    for (const node of this.configurator.getNodes()) {
      // Configure networking
      await this.configurator.configureNetworking(node);

      // Configure consensus
      if (node.role === 'validator') {
        await this.configurator.configureConsensus(node);
      }

      // Configure storage
      await this.configurator.configureStorage(node);

      // Configure monitoring
      await this.configurator.configureMonitoring(node);
    }
  }

  private async generateGenesisBlock(): Promise<void> {
    // Get validator addresses
    const validators = this.configurator.getValidatorAddresses();

    // Generate genesis configuration
    const genesis = await generateGenesis({
      validators,
      chainId: this.configurator.getChainId(),
      timestamp: new Date()
    });

    // Store genesis configuration
    await this.configurator.storeGenesis(genesis);
  }

  private async validateConfigurations(): Promise<void> {
    // Validate node configurations
    for (const node of this.configurator.getNodes()) {
      const isValid = await validateConfig(node);
      if (!isValid) {
        throw new Error(\`Invalid configuration for node \${node.id}\`);
      }
    }

    // Validate genesis configuration
    const genesis = await this.configurator.getGenesis();
    const isValidGenesis = await validateConfig(genesis);
    if (!isValidGenesis) {
      throw new Error('Invalid genesis configuration');
    }
  }

  async getNodeStatus(nodeId: string): Promise<NodeStatus> {
    return {
      config: await this.configurator.getNodeConfig(nodeId),
      keys: await this.keyManager.getNodeKeyStatus(nodeId),
      storage: await this.configurator.getStorageStatus(nodeId)
    };
  }
}

interface SwarmConfig {
  nodes: NodeConfig[];
  genesis: GenesisConfig;
}

interface NodeStatus {
  config: any;
  keys: any;
  storage: any;
}`,
      language: 'typescript',
    }
  ];

  const metadata = {
    title: "Lab Part 2: Configuring Each Node",
    duration: 45,
    objectives: [
      "Configure individual nodes",
      "Set up node networking",
      "Configure consensus settings",
      "Implement monitoring"
    ]
  };

  return (
    <LessonContent metadata={metadata}>
      <section>
        <h1>Lab Part 2: Configuring Each Node</h1>
        <p className="text-gray-400 mt-2">
          In this part of the lab, you'll learn how to configure individual
          nodes for participation in the Unchained swarm. We'll cover node
          configuration, networking setup, and monitoring implementation.
        </p>
      </section>

      <section className="mt-8">
        <h2>Prerequisites</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>Completed Part 1 setup</li>
          <li>Understanding of node architecture</li>
          <li>Basic networking knowledge</li>
          <li>Familiarity with configuration formats</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Node Configuration</h2>
        <p className="text-gray-400 mt-2">
          Configure each node with appropriate settings:
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
        <h2>Configuration Implementation</h2>
        <p className="text-gray-400 mt-2">
          Implement node configuration with proper validation and security:
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
        <h2>Configuration Components</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Key Configuration Areas</h3>
          <div className="mt-4">
            <h4>1. Node Identity:</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Node keys</li>
              <li>Role assignment</li>
              <li>Network identity</li>
              <li>Permissions</li>
            </ul>
          </div>
          <div className="mt-4">
            <h4>2. Network Settings:</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>P2P configuration</li>
              <li>RPC settings</li>
              <li>Discovery options</li>
              <li>Port mappings</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2>Storage Configuration</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Storage Settings</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Data directory setup</li>
            <li>Database configuration</li>
            <li>Cache settings</li>
            <li>Backup locations</li>
            <li>Storage limits</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Monitoring Setup</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Monitoring Configuration</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Metrics collection</li>
            <li>Log configuration</li>
            <li>Alert settings</li>
            <li>Performance monitoring</li>
            <li>Health checks</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Practice Exercise</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Node Configuration Task</h3>
          <p className="text-gray-400 mt-2">
            Configure a swarm node that:
          </p>
          <ul className="list-decimal list-inside text-gray-400 mt-2">
            <li>Sets up node identity</li>
            <li>Configures networking</li>
            <li>Implements storage</li>
            <li>Enables monitoring</li>
            <li>Validates configuration</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Additional Resources</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>
            <a 
              href="https://docs.unchained.network/node-config" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light"
            >
              Node Configuration Guide
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/unchained-network/config-examples" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light"
            >
              Configuration Examples
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Summary</h2>
        <p className="text-gray-400 mt-2">
          In this part of the lab, we configured individual nodes for
          swarm participation. We covered node configuration, networking
          setup, storage configuration, and monitoring implementation.
          In the next part, we'll focus on starting and managing the
          configured nodes.
        </p>
      </section>
    </LessonContent>
  );
};

export default Module10Lesson2;
