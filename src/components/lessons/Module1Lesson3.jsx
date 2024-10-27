import React from 'react';
import LessonContent from './LessonContent';

const lessonMetadata = {
  title: "KNS Token Functionality",
  duration: 15,
  objectives: [
    "Understand the core functions of the KNS token",
    "Learn about token uses in transactions and governance",
    "Grasp tokenomics and supply management",
    "Master the incentive model of the KNS token"
  ]
};

const Module1Lesson3 = () => {
  return (
    <LessonContent metadata={lessonMetadata}>
      <section id="introduction" className="mb-12">
        <p className="lead">
          In this lesson, we'll explore the KNS token and its crucial role within the Kenshi ecosystem. 
          The KNS token acts as the native currency in the Unchained Network, facilitating transactions, 
          incentivizing participation, and enabling governance. By understanding KNS token functionality, 
          you'll see how this utility token supports decentralized operations and aligns participant 
          incentives within the network.
        </p>
      </section>

      <section id="what-is-kns" className="mb-12">
        <h2>1. What is the KNS Token?</h2>
        <div className="card mb-6">
          <h3>Definition</h3>
          <p>The KNS token is the native utility token of the Kenshi ecosystem.</p>
        </div>
        
        <div className="card">
          <h3>Core Functions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Serves as a medium of exchange for transactions within the network</li>
            <li>Provides staking opportunities to support network security and earn rewards</li>
            <li>Enables governance, allowing token holders to participate in decision-making</li>
          </ul>
        </div>
      </section>

      <section id="key-uses" className="mb-12">
        <h2>2. Key Uses of the KNS Token</h2>
        
        <div className="card mb-6">
          <h3>Transactions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Data Purchases: Users can buy data from the Unchained Network by paying in KNS tokens</li>
            <li>Service Payments: Token is used to access premium services, such as high-speed data retrieval, or computational resources</li>
          </ul>
        </div>

        <div className="card mb-6">
          <h3>Staking and Rewards</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Staking: Users can lock KNS tokens to participate in network security</li>
            <li>Rewards: Participants earn rewards in KNS tokens based on their contributions and stake</li>
          </ul>
        </div>

        <div className="card">
          <h3>Governance</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Voting: Token holders can vote on proposed changes to network protocols and policies</li>
            <li>Proposals: Users with a certain amount of staked KNS tokens can propose new features or adjustments</li>
          </ul>
        </div>
      </section>

      <section id="tokenomics" className="mb-12">
        <h2>3. Tokenomics and Supply Management</h2>
        
        <div className="card mb-6">
          <h3>Fixed Total Supply</h3>
          <p>KNS has a capped total supply, creating scarcity and protecting the token's value over time.</p>
        </div>

        <div className="card mb-6">
          <h3>Distribution</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Initial Allocation: Tokens are allocated to founders, early supporters, community rewards, and reserves</li>
            <li>Ongoing Rewards: New tokens are periodically issued as staking rewards and incentives for network growth</li>
          </ul>
        </div>

        <div className="card">
          <h3>Value Drivers</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Platform Adoption: Increased usage of Kenshi services drives demand for KNS tokens</li>
            <li>Staking Demand: More tokens staked results in greater network security and token utility</li>
            <li>Active Governance: Participation in governance reinforces token value as the community steers development</li>
          </ul>
        </div>
      </section>

      <section id="incentives" className="mb-12">
        <h2>4. Incentives and Economics of the KNS Token</h2>
        
        <div className="card mb-6">
          <h3>Economic Incentives for Participation</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Node Operators: Earn KNS rewards for operating nodes and validating data</li>
            <li>Data Providers: Receive KNS tokens when their datasets are purchased or used within the network</li>
            <li>Data Consumers: Use KNS tokens to access high-quality data, incentivizing demand for the token</li>
          </ul>
        </div>

        <div className="card">
          <h3>Alignment of Interests</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>The token model aligns user incentives with network health by rewarding those who contribute to network security and growth</li>
            <li>By staking KNS tokens, users have a vested interest in maintaining the network's stability and reputation</li>
          </ul>
        </div>
      </section>

      <section id="interactive-elements" className="mb-12">
        <h2>Interactive Elements</h2>

        <div className="space-y-8">
          <div className="card">
            <h3>Quiz</h3>
            <div className="space-y-6">
              <div className="quiz-question">
                <p className="font-semibold mb-2">What is one of the primary functions of the KNS token within the Kenshi ecosystem?</p>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q1" value="a" />
                    <span>A) Solely for governance</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q1" value="b" />
                    <span>B) Only for staking</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q1" value="c" />
                    <span>C) As a medium of exchange, staking, and governance</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q1" value="d" />
                    <span>D) To serve as a stablecoin</span>
                  </label>
                </div>
                <p className="mt-4 text-green-500">Answer: C) As a medium of exchange, staking, and governance</p>
              </div>

              <div className="quiz-question">
                <p className="font-semibold mb-2">How do KNS tokens drive community participation?</p>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q2" value="a" />
                    <span>A) By being used only for payments</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q2" value="b" />
                    <span>B) By offering governance rights and staking rewards</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q2" value="c" />
                    <span>C) By functioning as a stablecoin</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q2" value="d" />
                    <span>D) By limiting transactions</span>
                  </label>
                </div>
                <p className="mt-4 text-green-500">Answer: B) By offering governance rights and staking rewards</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Flashcards</h3>
            <div className="space-y-4">
              <div className="bg-surface p-4 rounded-lg">
                <h4 className="font-semibold">Staking</h4>
                <p className="mt-2">The act of locking up KNS tokens to secure the network and earn rewards.</p>
              </div>
              <div className="bg-surface p-4 rounded-lg">
                <h4 className="font-semibold">Governance</h4>
                <p className="mt-2">A system allowing KNS token holders to vote on network policies and propose changes.</p>
              </div>
              <div className="bg-surface p-4 rounded-lg">
                <h4 className="font-semibold">Tokenomics</h4>
                <p className="mt-2">The economic model surrounding a token's supply, demand, and distribution.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Glossary</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Medium of Exchange</h4>
                <p>A system or token that facilitates transactions between parties within a network.</p>
              </div>
              <div>
                <h4 className="font-semibold">Fixed Supply</h4>
                <p>A limit on the total number of tokens that can ever be created, helping maintain value.</p>
              </div>
              <div>
                <h4 className="font-semibold">Incentive Model</h4>
                <p>A strategy used to encourage desired actions by providing rewards, aligning individual actions with broader network goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="summary" className="mb-12">
        <h2>Summary</h2>
        <div className="card">
          <p>
            The KNS token is the lifeblood of the Kenshi ecosystem, driving transactions, staking rewards, 
            and community governance. By acting as both a currency and a tool for stakeholder influence, 
            the KNS token ensures that the network remains secure, active, and community-driven. The tokenomics 
            behind KNS, with a capped supply and ongoing rewards, align user incentives with network health, 
            making it valuable for all participants.
          </p>
        </div>
      </section>
    </LessonContent>
  );
};

export default Module1Lesson3;
