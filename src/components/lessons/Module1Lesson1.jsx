import React from 'react';

const Module1Lesson1 = () => {
  return (
    <div className="lesson-content">
      <section className="module-introduction mb-12">
        <h1 className="text-3xl font-bold mb-6">Module 1: Introduction to Kenshi and Unchained</h1>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="mb-4">
            Welcome to the first module of the Unchained Academy! This module will provide you with a comprehensive 
            introduction to the Kenshi ecosystem and the Unchained network. Over four lessons, you'll learn about:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Understanding the Kenshi Ecosystem (Lesson 1)</li>
            <li>Exploring the Unchained Network (Lesson 2)</li>
            <li>KNS Token Functionality (Lesson 3)</li>
            <li>Liquid Proof of Stake Mechanics (Lesson 4)</li>
          </ul>
          <p>
            By the end of this module, you'll have a solid foundation in the core concepts that make Kenshi 
            and Unchained powerful tools in the blockchain space.
          </p>
        </div>
      </section>

      <section className="lesson-content mb-12">
        <h2 className="text-2xl font-semibold mb-4">Lesson 2: Exploring the Unchained Network</h2>
        
        <div className="lesson-introduction bg-blue-50 p-6 rounded-lg mb-8">
          <p>
            In this lesson, we'll dive deep into the Unchained Network, exploring its architecture, 
            key components, and the innovative features that make it a powerful foundation for 
            decentralized applications. You'll learn how the network operates, its security mechanisms, 
            and how it enables scalable blockchain solutions.
          </p>
        </div>

        <div className="lesson-section mb-8">
          <h3 className="text-xl font-semibold mb-4">Network Architecture</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-3">
              <strong>Node Types</strong>
              <ul className="list-circle pl-6 mt-2">
                <li>Validator Nodes: Responsible for transaction validation and block creation</li>
                <li>Full Nodes: Maintain complete blockchain history and verify transactions</li>
                <li>Light Nodes: Access network services with minimal resource requirements</li>
              </ul>
            </li>
            <li className="mb-3">
              <strong>Consensus Layer</strong>
              <ul className="list-circle pl-6 mt-2">
                <li>Implements Liquid Proof of Stake for efficient decision-making</li>
                <li>Ensures network security and transaction finality</li>
                <li>Enables fast block confirmation times</li>
              </ul>
            </li>
            <li className="mb-3">
              <strong>Data Layer</strong>
              <ul className="list-circle pl-6 mt-2">
                <li>Distributed storage system for blockchain data</li>
                <li>Efficient data indexing and retrieval mechanisms</li>
                <li>Advanced compression techniques for scalability</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="lesson-section mb-8">
          <h3 className="text-xl font-semibold mb-4">Network Features</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-3">
              <strong>High Throughput</strong>
              <p className="mt-1">Capable of processing thousands of transactions per second</p>
            </li>
            <li className="mb-3">
              <strong>Low Latency</strong>
              <p className="mt-1">Fast transaction confirmation and block finalization</p>
            </li>
            <li className="mb-3">
              <strong>Cross-Chain Compatibility</strong>
              <p className="mt-1">Built-in support for interoperability with other blockchain networks</p>
            </li>
            <li className="mb-3">
              <strong>Smart Contract Support</strong>
              <p className="mt-1">Advanced smart contract capabilities for decentralized applications</p>
            </li>
          </ul>
        </div>

        <div className="lesson-section mb-8">
          <h3 className="text-xl font-semibold mb-4">Security Mechanisms</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-3">
              <strong>Cryptographic Security</strong>
              <p className="mt-1">State-of-the-art encryption and digital signature schemes</p>
            </li>
            <li className="mb-3">
              <strong>Slashing Conditions</strong>
              <p className="mt-1">Penalties for malicious or faulty validator behavior</p>
            </li>
            <li className="mb-3">
              <strong>Byzantine Fault Tolerance</strong>
              <p className="mt-1">Resilience against network attacks and node failures</p>
            </li>
          </ul>
        </div>

        <div className="interactive-elements bg-gray-50 p-6 rounded-lg">
          <div className="glossary mb-8">
            <h3 className="text-xl font-semibold mb-4">Glossary Terms</h3>
            <div className="grid gap-4">
              <div className="term-card bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold">Validator Node</h4>
                <p>A network participant responsible for validating transactions and creating new blocks</p>
              </div>
              <div className="term-card bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold">Byzantine Fault Tolerance</h4>
                <p>The ability of a distributed system to continue functioning correctly even when some nodes fail or act maliciously</p>
              </div>
            </div>
          </div>

          <div className="quiz mb-8">
            <h3 className="text-xl font-semibold mb-4">Knowledge Check</h3>
            <div className="quiz-question bg-white p-4 rounded shadow-sm">
              <p className="font-semibold mb-2">What are the three main types of nodes in the Unchained Network?</p>
              <ul className="list-disc pl-6">
                <li>A) Master, Slave, and Backup nodes</li>
                <li>B) Validator, Full, and Light nodes</li>
                <li>C) Primary, Secondary, and Tertiary nodes</li>
                <li>D) Mining, Storage, and Processing nodes</li>
              </ul>
              <p className="mt-4 text-green-600 font-semibold">Correct Answer: B) Validator, Full, and Light nodes</p>
            </div>
          </div>

          <div className="flashcards">
            <h3 className="text-xl font-semibold mb-4">Flashcards</h3>
            <div className="flashcard bg-white p-4 rounded shadow-sm">
              <div className="front mb-2">
                <h4 className="font-semibold">What is the Unchained Network?</h4>
              </div>
              <div className="back">
                <p>A high-performance blockchain network that uses Liquid Proof of Stake consensus, featuring validator nodes, full nodes, and light nodes to provide secure and scalable decentralized services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Module1Lesson1;
