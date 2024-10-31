import{j as e}from"./index-CVz114jN.js";import{L as n}from"./LessonContent-BX53Ggud.js";const a=()=>{const s=[{title:"Development Environment Setup",code:`# Required software versions
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
npm run verify`,language:"bash"},{title:"Environment Configuration",code:`import { SwarmConfig } from '@unchained/swarm-types';

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

export default config;`,language:"typescript"}],i={title:"Lab Part 1: Introduction and Environment Preparation",duration:45,objectives:["Set up development environment","Configure swarm parameters","Initialize basic infrastructure","Verify installation"]};return e.jsxs(n,{metadata:i,children:[e.jsxs("section",{children:[e.jsx("h1",{children:"Lab Part 1: Introduction and Environment Preparation"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"In this hands-on lab, you'll build and manage an Unchained node swarm. Part 1 focuses on setting up your development environment and preparing the necessary infrastructure."})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Prerequisites"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-400 mt-2",children:[e.jsx("li",{children:"Basic command line knowledge"}),e.jsx("li",{children:"Understanding of Node.js"}),e.jsx("li",{children:"Familiarity with Docker"}),e.jsx("li",{children:"Git version control basics"})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Environment Setup"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"Follow these steps to set up your development environment:"}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{children:s[0].title}),e.jsx("pre",{className:"bg-surface-dark p-4 rounded-lg mt-2 overflow-x-auto",children:e.jsx("code",{className:`language-${s[0].language}`,children:s[0].code})})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Configuration"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"Configure your swarm environment with the following settings:"}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{children:s[1].title}),e.jsx("pre",{className:"bg-surface-dark p-4 rounded-lg mt-2 overflow-x-auto",children:e.jsx("code",{className:`language-${s[1].language}`,children:s[1].code})})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Directory Structure"}),e.jsxs("div",{className:"bg-surface-dark p-6 rounded-lg mt-2",children:[e.jsx("h3",{children:"Project Layout"}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{children:"1. Root Directory:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-400",children:[e.jsx("li",{children:"Configuration files"}),e.jsx("li",{children:"Environment settings"}),e.jsx("li",{children:"Package management"}),e.jsx("li",{children:"Documentation"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{children:"2. Data Directories:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-400",children:[e.jsx("li",{children:"Node data storage"}),e.jsx("li",{children:"Configuration files"}),e.jsx("li",{children:"Monitoring data"}),e.jsx("li",{children:"Log files"})]})]})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Verification Steps"}),e.jsxs("div",{className:"bg-surface-dark p-6 rounded-lg mt-2",children:[e.jsx("h3",{children:"Environment Checks"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-400 mt-2",children:[e.jsx("li",{children:"Software versions"}),e.jsx("li",{children:"Network connectivity"}),e.jsx("li",{children:"Docker configuration"}),e.jsx("li",{children:"Storage permissions"}),e.jsx("li",{children:"Port availability"})]})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Common Issues"}),e.jsxs("div",{className:"bg-surface-dark p-6 rounded-lg mt-2",children:[e.jsx("h3",{children:"Troubleshooting Guide"}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{children:"1. Port Conflicts:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-400",children:[e.jsx("li",{children:"Check port availability"}),e.jsx("li",{children:"Update port configuration"}),e.jsx("li",{children:"Stop conflicting services"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{children:"2. Permission Issues:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-400",children:[e.jsx("li",{children:"Verify user permissions"}),e.jsx("li",{children:"Check directory ownership"}),e.jsx("li",{children:"Update Docker permissions"})]})]})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Practice Exercise"}),e.jsxs("div",{className:"bg-surface-dark p-6 rounded-lg mt-2",children:[e.jsx("h3",{children:"Environment Setup Task"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"Complete the following tasks:"}),e.jsxs("ul",{className:"list-decimal list-inside text-gray-400 mt-2",children:[e.jsx("li",{children:"Install required software"}),e.jsx("li",{children:"Clone starter repository"}),e.jsx("li",{children:"Configure environment"}),e.jsx("li",{children:"Initialize development setup"}),e.jsx("li",{children:"Verify installation"})]})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Additional Resources"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-400 mt-2",children:[e.jsx("li",{children:e.jsx("a",{href:"https://docs.unchained.network/swarm-setup",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:text-primary-light",children:"Swarm Setup Documentation"})}),e.jsx("li",{children:e.jsx("a",{href:"https://github.com/unchained-network/swarm-starter",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:text-primary-light",children:"Starter Repository"})})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{children:"Summary"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"In this first part of the lab, we set up the development environment for building an Unchained swarm. We installed required software, configured the environment, and verified the installation. In the next part, we'll focus on configuring individual nodes for swarm participation."})]})]})};export{a as default};
