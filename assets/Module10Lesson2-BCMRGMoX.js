import{j as e}from"./index-CNhVifHg.js";import{L as s}from"./LessonContent-B2obYQ4_.js";const r=()=>{const i=[{title:"Node Configuration",code:`{
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
}`,language:"json"},{title:"Node Configuration Script",code:`import { NodeConfigurator, KeyManager } from '@unchained/swarm-tools';
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
}`,language:"typescript"}],n={title:"Lab Part 2: Configuring Each Node",duration:45,objectives:["Configure individual nodes","Set up node networking","Configure consensus settings","Implement monitoring"]};return e.jsxs(s,{metadata:n,children:[e.jsxs("section",{children:[e.jsx("h1",{children:"Lab Part 2: Configuring Each Node"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"In this part of the lab, you'll learn how to configure individual nodes for participation in the Unchained swarm. We'll cover node configuration, networking setup, and monitoring implementation."})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Prerequisites"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-400 mt-2",children:[e.jsx("li",{children:"Completed Part 1 setup"}),e.jsx("li",{children:"Understanding of node architecture"}),e.jsx("li",{children:"Basic networking knowledge"}),e.jsx("li",{children:"Familiarity with configuration formats"})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Node Configuration"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"Configure each node with appropriate settings:"}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{children:i[0].title}),e.jsx("pre",{className:"bg-surface-dark p-4 rounded-lg mt-2 overflow-x-auto",children:e.jsx("code",{className:`language-${i[0].language}`,children:i[0].code})})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Configuration Implementation"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"Implement node configuration with proper validation and security:"}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{children:i[1].title}),e.jsx("pre",{className:"bg-surface-dark p-4 rounded-lg mt-2 overflow-x-auto",children:e.jsx("code",{className:`language-${i[1].language}`,children:i[1].code})})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Configuration Components"}),e.jsxs("div",{className:"bg-surface-dark p-6 rounded-lg mt-2",children:[e.jsx("h3",{children:"Key Configuration Areas"}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{children:"1. Node Identity:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-400",children:[e.jsx("li",{children:"Node keys"}),e.jsx("li",{children:"Role assignment"}),e.jsx("li",{children:"Network identity"}),e.jsx("li",{children:"Permissions"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{children:"2. Network Settings:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-400",children:[e.jsx("li",{children:"P2P configuration"}),e.jsx("li",{children:"RPC settings"}),e.jsx("li",{children:"Discovery options"}),e.jsx("li",{children:"Port mappings"})]})]})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Storage Configuration"}),e.jsxs("div",{className:"bg-surface-dark p-6 rounded-lg mt-2",children:[e.jsx("h3",{children:"Storage Settings"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-400 mt-2",children:[e.jsx("li",{children:"Data directory setup"}),e.jsx("li",{children:"Database configuration"}),e.jsx("li",{children:"Cache settings"}),e.jsx("li",{children:"Backup locations"}),e.jsx("li",{children:"Storage limits"})]})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Monitoring Setup"}),e.jsxs("div",{className:"bg-surface-dark p-6 rounded-lg mt-2",children:[e.jsx("h3",{children:"Monitoring Configuration"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-400 mt-2",children:[e.jsx("li",{children:"Metrics collection"}),e.jsx("li",{children:"Log configuration"}),e.jsx("li",{children:"Alert settings"}),e.jsx("li",{children:"Performance monitoring"}),e.jsx("li",{children:"Health checks"})]})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Practice Exercise"}),e.jsxs("div",{className:"bg-surface-dark p-6 rounded-lg mt-2",children:[e.jsx("h3",{children:"Node Configuration Task"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"Configure a swarm node that:"}),e.jsxs("ul",{className:"list-decimal list-inside text-gray-400 mt-2",children:[e.jsx("li",{children:"Sets up node identity"}),e.jsx("li",{children:"Configures networking"}),e.jsx("li",{children:"Implements storage"}),e.jsx("li",{children:"Enables monitoring"}),e.jsx("li",{children:"Validates configuration"})]})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Additional Resources"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-400 mt-2",children:[e.jsx("li",{children:e.jsx("a",{href:"https://docs.unchained.network/node-config",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:text-primary-light",children:"Node Configuration Guide"})}),e.jsx("li",{children:e.jsx("a",{href:"https://github.com/unchained-network/config-examples",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:text-primary-light",children:"Configuration Examples"})})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Summary"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"In this part of the lab, we configured individual nodes for swarm participation. We covered node configuration, networking setup, storage configuration, and monitoring implementation. In the next part, we'll focus on starting and managing the configured nodes."})]})]})};export{r as default};
