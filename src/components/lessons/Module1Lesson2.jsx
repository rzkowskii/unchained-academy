import React from 'react';
import LessonContent from './LessonContent';

const lessonMetadata = {
  title: "Exploring the Unchained Network",
  duration: 25,
  objectives: [
    "Understand the core components of the Unchained Network",
    "Learn about different node types and their roles",
    "Grasp the benefits of decentralized network architecture",
    "Master the concepts of data sharding and replication"
  ]
};

const Module1Lesson2 = () => {
  return (
    <LessonContent metadata={lessonMetadata}>
      <section id="introduction" className="mb-12">
        <p className="lead">
          In this lesson, we dive into the architecture, purpose, and functionality of the Unchained Network, 
          which forms the backbone of the Kenshi ecosystem. You'll learn about how the network supports 
          decentralized storage, data validation, and efficient retrieval of data, along with the roles of 
          different nodes within the network. By the end of this lesson, you'll understand how the Unchained 
          Network maintains security, transparency, and scalability across all data interactions.
        </p>
      </section>

      <section id="what-is-unchained" className="mb-12">
        <h2>1. What is the Unchained Network?</h2>
        <div className="card mb-6">
          <h3>Definition</h3>
          <p>
            The Unchained Network is a decentralized infrastructure within the Kenshi ecosystem, 
            enabling secure and transparent data storage and validation.
          </p>
        </div>
        
        <div className="card">
          <h3>Key Functions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provides decentralized storage of data</li>
            <li>Facilitates data validation and retrieval</li>
            <li>Supports secure communication and data sharing across nodes</li>
          </ul>
        </div>
      </section>

      <section id="network-architecture" className="mb-12">
        <h2>2. Network Architecture</h2>
        
        <div className="card mb-6">
          <h3>Decentralized Nodes</h3>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Worker Nodes:</strong>
              <p>Responsible for data storage, processing, and validation</p>
            </li>
            <li>
              <strong>Broker Nodes:</strong>
              <p>Manage communication between workers and consumers, ensuring efficient data delivery</p>
            </li>
            <li>
              <strong>Consumer Nodes:</strong>
              <p>Access data for various applications and analytical purposes</p>
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Data Sharding and Replication</h3>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Sharding:</strong>
              <p>Data is split into manageable sections, enabling efficient storage and retrieval</p>
            </li>
            <li>
              <strong>Replication:</strong>
              <p>Each shard is duplicated across multiple nodes to ensure data availability and resilience</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="benefits" className="mb-12">
        <h2>3. Benefits of a Decentralized Network</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3>Security</h3>
            <p>No central storage point, reducing vulnerability to attacks</p>
          </div>
          <div className="card">
            <h3>Resilience</h3>
            <p>Redundancy and replication ensure the network remains operational, even if nodes fail</p>
          </div>
          <div className="card">
            <h3>Transparency</h3>
            <p>The decentralized nature enables transparent data handling and access logs</p>
          </div>
          <div className="card">
            <h3>Scalability</h3>
            <p>New nodes can easily join the network, adding resources and storage capacity</p>
          </div>
        </div>
      </section>

      <section id="node-roles" className="mb-12">
        <h2>4. Roles of Nodes within the Unchained Network</h2>
        
        <div className="space-y-6">
          <div className="card">
            <h3>Worker Nodes</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and validate data, ensuring it meets specified requirements</li>
              <li>Store data securely, ready for retrieval by consumers</li>
            </ul>
          </div>

          <div className="card">
            <h3>Broker Nodes</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Act as intermediaries, routing data requests and responses between nodes</li>
              <li>Balance load across the network for optimal performance</li>
            </ul>
          </div>

          <div className="card">
            <h3>Consumer Nodes</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request and access validated data from the network</li>
              <li>Utilize data for applications, such as machine learning models, analysis, or real-time decision-making</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="interactive-elements" className="mb-12">
        <h2>Interactive Elements</h2>

        <div className="space-y-8">
          {/* Quiz Section */}
          <div className="card">
            <h3>Quiz</h3>
            <div className="space-y-6">
              <div className="quiz-question">
                <p className="font-semibold mb-2">What is the primary role of Worker Nodes in the Unchained Network?</p>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q1" value="a" />
                    <span>A) Storing data only</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q1" value="b" />
                    <span>B) Acting as intermediaries</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q1" value="c" />
                    <span>C) Processing and validating data</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q1" value="d" />
                    <span>D) Retrieving data for consumers</span>
                  </label>
                </div>
                <p className="mt-4 text-green-500">Answer: C) Processing and validating data</p>
              </div>

              <div className="quiz-question">
                <p className="font-semibold mb-2">Which node type is responsible for routing data requests within the Unchained Network?</p>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q2" value="a" />
                    <span>A) Worker Nodes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q2" value="b" />
                    <span>B) Broker Nodes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q2" value="c" />
                    <span>C) Consumer Nodes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q2" value="d" />
                    <span>D) Validator Nodes</span>
                  </label>
                </div>
                <p className="mt-4 text-green-500">Answer: B) Broker Nodes</p>
              </div>
            </div>
          </div>

          {/* Flashcards Section */}
          <div className="card">
            <h3>Flashcards</h3>
            <div className="space-y-4">
              <div className="bg-surface p-4 rounded-lg">
                <h4 className="font-semibold">Worker Node</h4>
                <p className="mt-2">A type of node within the Unchained Network that processes and validates data, ensuring it meets required standards before storage.</p>
              </div>
              <div className="bg-surface p-4 rounded-lg">
                <h4 className="font-semibold">Broker Node</h4>
                <p className="mt-2">A node responsible for routing data requests between Worker Nodes and Consumer Nodes, balancing network load.</p>
              </div>
              <div className="bg-surface p-4 rounded-lg">
                <h4 className="font-semibold">Data Sharding</h4>
                <p className="mt-2">The process of dividing data into smaller, manageable pieces for more efficient storage and retrieval in a decentralized network.</p>
              </div>
            </div>
          </div>

          {/* Glossary Section */}
          <div className="card">
            <h3>Glossary</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Decentralized Network</h4>
                <p>A network without a single controlling entity, where each node operates independently.</p>
              </div>
              <div>
                <h4 className="font-semibold">Replication</h4>
                <p>The duplication of data across multiple nodes to ensure high availability and redundancy.</p>
              </div>
              <div>
                <h4 className="font-semibold">Sharding</h4>
                <p>A technique that divides data into smaller, manageable chunks, improving storage efficiency and retrieval speed.</p>
              </div>
              <div>
                <h4 className="font-semibold">Transparency</h4>
                <p>In this context, the ability of users to track and verify all data interactions within the network.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="summary" className="mb-12">
        <h2>Summary</h2>
        <div className="card">
          <p className="mb-4">
            The Unchained Network is an essential part of the Kenshi ecosystem, providing a secure and 
            decentralized framework for storing, validating, and accessing data. By using different types 
            of nodes and implementing techniques like data sharding and replication, the network ensures 
            resilience, scalability, and transparency.
          </p>
          <p>
            With this knowledge, you're now better equipped to understand the Unchained Network's 
            capabilities and its role in supporting various applications.
          </p>
        </div>
      </section>
    </LessonContent>
  );
};

export default Module1Lesson2;
