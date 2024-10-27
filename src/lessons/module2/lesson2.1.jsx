export const metadata = {
  title: 'Hardware and Software Requirements',
  description: 'Understanding the hardware and software requirements for running an Unchained Network node.'
};

export const content = `
# Introduction

In this lesson, we'll cover the hardware and software requirements for running an Unchained Network node. Before setting up your node, it's essential to understand the specifications and resources needed for optimal performance. By the end of this lesson, you'll have a clear picture of what type of hardware and software setup is suitable for different types of nodes within the Unchained ecosystem.

## 1. Overview of Node Types and Their Requirements

### Worker Nodes
- **Function**: Responsible for processing and validating data within the network.
- **Hardware Requirements**:
  - Storage: Minimum 10 GB, with more recommended for higher loads.
  - Memory: 128 MB for simple operations, 16 GB for AI-intensive tasks.
  - CPU: At least 1 CPU core (AArch64 or AMD64 architecture).
  - Network: 1 Mbps symmetric internet speed.
- **Software Requirements**: Compatible with Linux (Kernel v5.15+), macOS v12+, or Windows 10 (Vibranium) and above.

### Broker Nodes
- **Function**: Serve as intermediaries between worker and consumer nodes, routing data requests.
- **Hardware Requirements**:
  - Storage: Minimum 10 GB.
  - Memory: 256 MB.
  - CPU: At least 1 CPU core (AArch64 or AMD64).
  - Network: 100 Mbps symmetric internet speed.
- **Software Requirements**: Same as worker nodes, with additional dependencies for networking.

### Consumer Nodes
- **Function**: Access and retrieve data from the network, primarily used by data consumers.
- **Hardware Requirements**:
  - Storage: Minimum 1 TB SSD.
  - Memory: 16 GB for efficient data handling.
  - CPU: 8 CPU cores recommended.
  - Network: 100 Mbps symmetric internet speed.
- **Software Requirements**: Requires a compatible OS, with Postgres database installed for efficient data management.

## 2. Hardware Specifications for Running AI-Powered Worker Nodes

### Additional Requirements for AI Tasks
- GPU: NVIDIA, Vulkan, or Apple M-series with at least 24 GB VRAM for heavy computational tasks.
- Increased Storage: Recommended 100 GB to support large datasets.
- Enhanced CPU: 8 cores to handle AI data processing.

### Optimal Setup for Performance
- Combining a high-speed SSD with ample VRAM and RAM ensures smooth operation for AI-driven processes.
- Regular upgrades to storage and memory are advised to keep up with expanding datasets and computational loads.

## 3. Software Compatibility and Installation Needs

### Operating Systems
- Linux: Any Linux distribution running Kernel v5.15+ with systemd support.
- macOS: Version 12+ on Apple hardware.
- Windows: Windows 10 (Vibranium) and above, or Windows Server 20H2 and above.

### Unchained Client Dependencies
- BLS12-381 Pairing Implementation: Ensures compatibility for cryptographic operations.
- mkcert: Required for generating local SSL certificates for secure connections.
- pyenv and Python 3.8.19: Needed for Python-based AI plugins.

### Network Requirements
- Ensure symmetric internet speeds according to node type to avoid data bottlenecks.
- Use a reliable internet service provider with minimal downtime for smooth operation.

## 4. Hardware Considerations for Scalability

### Storage Expansion
- Consider modular storage solutions to handle increased data loads as the node scales.
- For larger datasets, high-capacity SSDs with fast read/write speeds are recommended.

### Memory Management
- Aim to over-provision memory, especially for worker nodes handling AI tasks, to avoid performance degradation.

### Redundant Systems
- Implement backup solutions for critical data in case of hardware failure.
- Use UPS (Uninterruptible Power Supply) to prevent data corruption during power outages.

## Quiz

1. Which type of node requires at least 1 TB of SSD storage?
   - A) Worker Node
   - B) Broker Node
   - C) Consumer Node
   - D) Validator Node
   - **Answer**: C) Consumer Node

2. For AI-intensive tasks, what is the minimum recommended VRAM?
   - A) 4 GB
   - B) 8 GB
   - C) 16 GB
   - D) 24 GB
   - **Answer**: D) 24 GB

## Flashcards

1. **Term**: Worker Node
   **Definition**: A node responsible for processing and validating data, requiring minimal storage and memory for basic operations.

2. **Term**: Consumer Node
   **Definition**: A node that retrieves and processes data from the Unchained Network, with high storage and memory requirements.

3. **Term**: Symmetric Internet Speed
   **Definition**: Equal upload and download speeds, crucial for efficient data handling in decentralized networks.

## Glossary

- **BLS12-381**: A cryptographic pairing function used for secure and efficient operations within the Unchained Network.
- **mkcert**: A tool for generating local SSL certificates, ensuring secure connections within the network.
- **VRAM**: Video Random Access Memory, essential for handling large AI-driven computations on GPUs.

## Summary

This lesson outlined the hardware and software requirements for running different types of nodes within the Unchained Network. Understanding these requirements is crucial for setting up nodes that are efficient, scalable, and capable of supporting a range of data processing tasks. With the right hardware and software, your node will operate seamlessly, contributing to the network's overall reliability and performance.
`;
