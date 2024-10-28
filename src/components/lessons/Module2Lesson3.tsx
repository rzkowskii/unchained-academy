import React from 'react';
import LessonContent from './LessonContent';

const Module2Lesson3: React.FC = () => {
  const metadata = {
    title: "Understanding Node Types",
    duration: 30,
    objectives: [
      "Understand the different types of nodes in the Unchained Network",
      "Learn the roles and responsibilities of Worker, Broker, and Consumer nodes",
      "Comprehend how nodes interact within the network architecture",
      "Master the key features and capabilities of each node type"
    ]
  };

  return (
    <LessonContent metadata={metadata}>
      {/* Introduction */}
      <section>
        <h1>Understanding Node Types</h1>
        <p className="text-gray-400 mt-2">
          This lesson introduces you to the different types of nodes within the Unchained Network and their unique roles. Each node type—Worker, Broker, and Consumer—has distinct responsibilities that contribute to the network's decentralized architecture, ensuring efficient data validation, storage, and retrieval.
        </p>
      </section>

      {/* Main Content */}
      <section className="mt-8">
        <h2>Overview of Node Types in the Unchained Network</h2>
        <div className="mt-4">
          <h3>Worker Nodes</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Primary Role: Process, validate, and store data within the network</li>
            <li>Functionality:
              <ul className="list-disc list-inside ml-6">
                <li>Responsible for executing data validation tasks</li>
                <li>Store validated data that can be retrieved by consumer nodes</li>
              </ul>
            </li>
            <li>Unique Features:
              <ul className="list-disc list-inside ml-6">
                <li>Can handle computational tasks, especially useful for AI applications within the network</li>
                <li>Can vary in resource requirements based on tasks</li>
              </ul>
            </li>
          </ul>

          <h3 className="mt-4">Broker Nodes</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Primary Role: Route data and messages between Worker and Consumer nodes</li>
            <li>Functionality:
              <ul className="list-disc list-inside ml-6">
                <li>Manage connections and communication within the network</li>
                <li>Balance load across multiple Worker and Consumer nodes</li>
              </ul>
            </li>
            <li>Unique Features:
              <ul className="list-disc list-inside ml-6">
                <li>Dynamic load balancing capabilities</li>
                <li>Support high network throughput</li>
              </ul>
            </li>
          </ul>

          <h3 className="mt-4">Consumer Nodes</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Primary Role: Access and retrieve data from the network</li>
            <li>Functionality:
              <ul className="list-disc list-inside ml-6">
                <li>Serve as endpoints for applications and users</li>
                <li>Provide data for real-time applications and analytics</li>
              </ul>
            </li>
            <li>Unique Features:
              <ul className="list-disc list-inside ml-6">
                <li>Powerful storage and memory resources</li>
                <li>API interface capabilities</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Worker Nodes: A Deep Dive</h2>
        <div className="mt-4">
          <h3>Data Validation</h3>
          <p className="text-gray-400 mt-2">
            Worker nodes are the backbone of data integrity in the network. They perform validation checks on incoming data, ensuring that only accurate and reliable information is stored.
          </p>
          <p className="text-gray-400 mt-2">
            Example: A Worker node may validate temperature data from IoT sensors before storing it, ensuring consistency and accuracy across sources.
          </p>

          <h3 className="mt-4">Data Processing</h3>
          <p className="text-gray-400 mt-2">
            Worker nodes handle computational tasks. For tasks requiring high processing power, Worker nodes with advanced hardware specifications (like GPUs) can handle AI-driven analysis.
          </p>
          <p className="text-gray-400 mt-2">
            Example: Processing satellite imagery or performing facial recognition for a security application.
          </p>

          <h3 className="mt-4">Storage and Security</h3>
          <p className="text-gray-400 mt-2">
            Validated data is securely stored on Worker nodes, ensuring that data retrieval remains efficient and reliable. Worker nodes follow strict security protocols to maintain data integrity and prevent unauthorized access.
          </p>
        </div>
      </section>

      <section className="mt-8">
        <h2>Broker Nodes: Configuring and Managing Data Flow</h2>
        <div className="mt-4">
          <h3>Load Balancing</h3>
          <p className="text-gray-400 mt-2">
            Broker nodes distribute data requests evenly across Worker nodes, ensuring efficient processing and preventing any single node from being overloaded.
          </p>
          <p className="text-gray-400 mt-2">
            Example: In high-traffic situations, a Broker node will route requests to multiple Worker nodes to handle data validation tasks simultaneously.
          </p>

          <h3 className="mt-4">Routing and Connectivity</h3>
          <p className="text-gray-400 mt-2">
            Brokers handle communication between nodes. They are responsible for routing data from Worker nodes to Consumer nodes and vice versa.
          </p>
          <p className="text-gray-400 mt-2">
            Example: A Broker node routes validated environmental data from Worker nodes to a Consumer node used by a weather forecasting application.
          </p>

          <h3 className="mt-4">Efficiency and Scalability</h3>
          <p className="text-gray-400 mt-2">
            By managing network connections and routing data, Broker nodes help the network scale. They allow for the addition of more Worker and Consumer nodes as the network grows.
          </p>
          <p className="text-gray-400 mt-2">
            Example: As new Consumer nodes are added to the network, Brokers adapt to route data effectively without compromising performance.
          </p>
        </div>
      </section>

      <section className="mt-8">
        <h2>Consumer Nodes: Accessing and Utilizing Network Data</h2>
        <div className="mt-4">
          <h3>Data Retrieval</h3>
          <p className="text-gray-400 mt-2">
            Consumer nodes access and retrieve data that has been validated and stored within the network. They serve as data endpoints for various applications.
          </p>
          <p className="text-gray-400 mt-2">
            Example: A Consumer node retrieves real-time traffic data for a city planning application.
          </p>

          <h3 className="mt-4">API Integration</h3>
          <p className="text-gray-400 mt-2">
            Consumer nodes can be integrated with external applications via APIs, allowing seamless data access for third-party services.
          </p>
          <p className="text-gray-400 mt-2">
            Example: A business intelligence tool connects to a Consumer node via API to retrieve data for analysis and visualization.
          </p>

          <h3 className="mt-4">Data Storage and Management</h3>
          <p className="text-gray-400 mt-2">
            Consumer nodes are typically equipped with high storage capacity and fast read/write capabilities to support data-intensive applications.
          </p>
          <p className="text-gray-400 mt-2">
            Example: A Consumer node stores large datasets needed for a machine learning model, allowing quick data access for training and inference.
          </p>
        </div>
      </section>

      <section className="mt-8">
        <h2>Interaction Patterns Between Nodes</h2>
        <div className="mt-4">
          <h3>Request-Response Flow</h3>
          <p className="text-gray-400 mt-2">
            Flow: Consumer nodes request data from Worker nodes via Broker nodes. Broker nodes facilitate the exchange, ensuring efficient data routing.
          </p>
          <p className="text-gray-400 mt-2">
            Example: A Consumer node requests validated IoT data from a Worker node, with a Broker node managing the transaction.
          </p>

          <h3 className="mt-4">Load Distribution</h3>
          <p className="text-gray-400 mt-2">
            Flow: Broker nodes distribute tasks evenly among Worker nodes, optimizing network resources.
          </p>
          <p className="text-gray-400 mt-2">
            Example: During peak hours, a Broker node allocates data requests to multiple Worker nodes to prevent overload.
          </p>

          <h3 className="mt-4">Data Validation Cycle</h3>
          <p className="text-gray-400 mt-2">
            Flow: Worker nodes validate incoming data, store it, and communicate its status back to the network via Broker nodes.
          </p>
          <p className="text-gray-400 mt-2">
            Example: A Worker node validates weather data, stores it, and sends a validation confirmation to the Broker node for network access.
          </p>
        </div>
      </section>

      {/* Knowledge Check */}
      <section className="mt-8">
        <h2>Knowledge Check</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Quiz</h3>
          <div className="mt-4">
            <p className="font-semibold">Question 1:</p>
            <p className="text-gray-400">Which type of node is primarily responsible for processing and validating data within the Unchained Network?</p>
            <ul className="list-disc list-inside text-gray-400 mt-2 ml-4">
              <li>A) Consumer Node</li>
              <li>B) Broker Node</li>
              <li>C) Worker Node</li>
              <li>D) Validator Node</li>
            </ul>
            <p className="text-primary mt-2">Answer: C) Worker Node</p>
          </div>

          <div className="mt-6">
            <p className="font-semibold">Question 2:</p>
            <p className="text-gray-400">What is the main function of Broker nodes within the Unchained Network?</p>
            <ul className="list-disc list-inside text-gray-400 mt-2 ml-4">
              <li>A) Validating data</li>
              <li>B) Retrieving data for applications</li>
              <li>C) Routing data and balancing load between nodes</li>
              <li>D) Storing large datasets</li>
            </ul>
            <p className="text-primary mt-2">Answer: C) Routing data and balancing load between nodes</p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="mt-8">
        <h2>Summary</h2>
        <p className="text-gray-400 mt-2">
          In this lesson, we explored the three primary node types within the Unchained Network: Worker, Broker, and Consumer nodes. Each type plays a crucial role in maintaining the network's efficiency and reliability. Worker nodes handle data validation and processing, Broker nodes manage network communication and load balancing, and Consumer nodes provide access points for applications and users. Understanding these node types and their interactions is fundamental to working with the Unchained Network effectively.
        </p>
      </section>

      {/* Glossary */}
      <section className="mt-8">
        <h2>Glossary</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li><span className="font-semibold">Load Balancing:</span> The process of distributing tasks evenly across multiple nodes to prevent any single node from being overwhelmed.</li>
          <li><span className="font-semibold">Data Validation:</span> The act of ensuring that incoming data is accurate, consistent, and reliable before it is stored and used.</li>
          <li><span className="font-semibold">API Integration:</span> The ability of a node to connect with external applications, allowing seamless data access and retrieval.</li>
        </ul>
      </section>
    </LessonContent>
  );
};

export default Module2Lesson3;
