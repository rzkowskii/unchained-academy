export const metadata = {
  title: 'Unchained Client Installation',
  description: 'Learn how to install and configure the Unchained client on different operating systems.'
};

export const content = `
# Introduction

In this lesson, we'll walk through the steps needed to install the Unchained client on your system. The Unchained client software is the primary tool that allows you to run and manage nodes within the Unchained Network. By the end of this lesson, you'll understand how to install the client on different operating systems, configure it for your node type, and prepare it for seamless operation within the Unchained ecosystem.

# Prerequisites for Installing the Unchained Client

## System Requirements:
- Operating System: Ensure you are running a compatible OS:
  - Linux: Kernel version 5.15+ with systemd.
  - macOS: Version 12+ on official Apple hardware.
  - Windows: Windows 10 (Vibranium) and above, or Windows Server 20H2 and above.
- Network Access: Ensure stable internet connectivity for downloading necessary files and connecting to the Unchained Network.
- Required Dependencies:
  - Python 3.8.19 and pyenv: Needed for running the AI plugin and client scripts.
  - Git: For cloning the Unchained client repository.
  - mkcert: Used to create SSL certificates for local testing and secure connections.

# Step-by-Step Installation on Different Operating Systems

## Installation on Linux:
1. Download the Unchained client by running:
\`\`\`bash
curl -s https://old.timeleap.swiss/unchained/install | sh
\`\`\`

2. Make the binary executable:
\`\`\`bash
chmod +x PATH_TO_UNCHAINED
\`\`\`

3. Install dependencies (if not already installed):
\`\`\`bash
sudo apt install git python3 python3-pip mkcert
\`\`\`

## Installation on macOS:
1. Clone the Unchained client repository:
\`\`\`bash
git clone https://github.com/TimeleapLabs/unchained-client.git
\`\`\`

2. Install pyenv:
\`\`\`bash
brew install pyenv
\`\`\`

3. Set up Python version:
\`\`\`bash
pyenv install 3.8.19
\`\`\`

4. Activate the client:
\`\`\`bash
cd unchained-client
pyenv local 3.8.19
\`\`\`

## Installation on Windows:
1. Download the Unchained client installer from the official website.
2. Run the installer and follow the prompts to complete the setup.
3. Install Git and mkcert:
   - Git: Download and install Git for Windows.
   - mkcert: Install mkcert following Windows-specific instructions.
4. Verify Installation:
   - Open a Command Prompt and check the installation by running:
\`\`\`bash
unchained --version
\`\`\`

# Configuring the Unchained Client

## Generating SSL Certificates with mkcert:
1. Install mkcert if not already installed:
\`\`\`bash
mkcert -install
\`\`\`

2. Generate local certificates:
\`\`\`bash
mkcert localhost
\`\`\`

## Creating Configuration Files:
- Broker Configuration: Set up broker.yaml for communication between nodes.
\`\`\`yaml
system:
  log: info
  name: YOUR_BROKER_NAME

network:
  bind: 127.0.0.1:9123
  certFile: localhost.pem
  keyFile: localhost-key.pem
\`\`\`

- Worker Configuration: Customize worker.yaml for data processing tasks.
\`\`\`yaml
system:
  log: info
  name: YOUR_WORKER_NAME

network:
  brokerUri: wss://localhost:9123
\`\`\`

## Verifying Configuration:
- Ensure that each configuration file is correctly set up based on node type.
- Test the connection by starting the Unchained client in test mode to confirm connectivity and initial setup.

# Running Initial Tests and Troubleshooting

## Testing the Client Installation:
- Run Test Mode:
\`\`\`bash
unchained --test
\`\`\`
- Check Logs: Monitor logs for any errors during initialization.

## Common Issues and Fixes:
- Dependency Issues: Ensure all dependencies are installed and up-to-date.
- SSL Certificate Errors: Verify the SSL certificates are correctly generated and linked in the configuration files.
- Connectivity Problems: Check network settings and firewall configurations if the node cannot connect to the broker.

# Quiz

Q1: Which command is used to download the Unchained client on Linux?
A) sudo apt install unchained
B) curl -s https://old.timeleap.swiss/unchained/install | sh
C) apt-get install unchained
D) brew install unchained
Answer: B) curl -s https://old.timeleap.swiss/unchained/install | sh

Q2: Which tool is required for generating SSL certificates for secure connections?
A) pyenv
B) Git
C) mkcert
D) pip
Answer: C) mkcert

# Flashcards

Term: SSL Certificates
Definition: Digital certificates that ensure encrypted and secure communication between nodes.

Term: mkcert
Definition: A tool used for creating local SSL certificates to secure network connections.

Term: Configuration File
Definition: A file (e.g., broker.yaml or worker.yaml) that specifies settings and parameters for running a node within the Unchained Network.

# Glossary

- Unchained Client: The software used to run nodes on the Unchained Network, enabling data processing, validation, and communication between nodes.
- pyenv: A Python version management tool that allows installation and management of multiple Python versions.
- Test Mode: A mode that verifies the Unchained client installation and configuration by running a connection and dependency check.

# Summary

This lesson provided a comprehensive guide to installing the Unchained client on various operating systems, configuring SSL certificates, and setting up initial configuration files. By following these steps, you can ensure that your node is ready to join the Unchained Network and perform its designated tasks securely and efficiently. Testing and troubleshooting tips ensure you have a solid foundation to keep your node running smoothly.
`;

export default { metadata, content };
