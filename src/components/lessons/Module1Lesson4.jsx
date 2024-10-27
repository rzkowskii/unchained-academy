import React from 'react';
import LessonContent from './LessonContent';

const lessonMetadata = {
  title: "Liquid Proof of Stake Mechanics",
  duration: 30,
  objectives: [
    "Understand the basics of Proof of Stake (PoS)",
    "Learn about Liquid Proof of Stake and its benefits",
    "Grasp how LPoS works in the Unchained Network",
    "Master the advantages of LPoS in the Kenshi ecosystem"
  ]
};

const Module1Lesson4 = () => {
  return (
    <LessonContent metadata={lessonMetadata}>
      <section id="introduction" className="mb-12">
        <p className="lead">
          In this lesson, we'll examine Liquid Proof of Stake (LPoS), the consensus mechanism that powers 
          the Unchained Network. Unlike traditional Proof of Stake models, Liquid Proof of Stake offers 
          enhanced flexibility, allowing users to delegate their tokens to validators while maintaining control. 
          By understanding LPoS mechanics, you'll see how the Unchained Network maintains security, 
          decentralization, and community participation through a unique, token-based governance model.
        </p>
      </section>

      <section id="what-is-pos" className="mb-12">
        <h2>1. What is Proof of Stake (PoS)?</h2>
        <div className="card mb-6">
          <h3>Definition</h3>
          <p>
            Proof of Stake (PoS) is a consensus mechanism where validators are selected based on the 
            number of tokens they hold and are willing to "stake" as collateral.
          </p>
        </div>
        
        <div className="card">
          <h3>Core Concepts</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Validator Selection: Validators are chosen based on their staked tokens, with higher stakes increasing the likelihood of selection</li>
            <li>Energy Efficiency: Unlike Proof of Work (PoW), PoS does not require intensive computational resources</li>
            <li>Network Security: Validators have a financial incentive to act honestly, as malicious behavior could lead to a loss of staked tokens</li>
          </ul>
        </div>
      </section>

      <section id="introducing-lpos" className="mb-12">
        <h2>2. Introducing Liquid Proof of Stake (LPoS)</h2>
        
        <div className="card mb-6">
          <h3>Enhanced Flexibility</h3>
          <p>
            LPoS allows token holders to delegate their tokens to trusted validators without giving up ownership.
          </p>
        </div>

        <div className="card">
          <h3>Core Benefits</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Delegation: Users can delegate their staking power to validators, making it accessible to those without technical expertise</li>
            <li>Liquidity: Token holders maintain the ability to unstake or reassign their tokens, providing flexibility</li>
            <li>Decentralization: Broadens participation by allowing more users to contribute to network security</li>
          </ul>
        </div>
      </section>

      <section id="how-lpos-works" className="mb-12">
        <h2>3. How Liquid Proof of Stake Works in the Unchained Network</h2>
        
        <div className="card mb-6">
          <h3>Staking and Delegation</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Token Holders: Users with KNS tokens can stake them or delegate them to validators</li>
            <li>Delegation Process: Users choose a validator, delegate their tokens, and earn a share of the rewards without actively running a node</li>
          </ul>
        </div>

        <div className="card mb-6">
          <h3>Validator Selection and Rewards</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Voting Power: Validator influence is based on the total tokens staked or delegated to them</li>
            <li>Reward Distribution: Validators earn rewards for securing the network, which are shared with their delegators</li>
          </ul>
        </div>

        <div className="card">
          <h3>Security Mechanisms</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Slashing: Validators who act maliciously or fail to perform duties lose a portion of their staked tokens</li>
            <li>Incentivization: Honest validators and delegators receive rewards in KNS tokens, promoting good behavior</li>
          </ul>
        </div>
      </section>

      <section id="advantages" className="mb-12">
        <h2>4. Advantages of Liquid Proof of Stake in the Kenshi Ecosystem</h2>
        
        <div className="card mb-6">
          <h3>Increased Decentralization</h3>
          <p>
            Allows anyone with tokens to participate in staking by delegating, promoting a diverse validator pool.
          </p>
        </div>

        <div className="card mb-6">
          <h3>Greater Security and Stability</h3>
          <p>
            By distributing voting power, the network reduces the risk of centralization and makes it more resilient to attacks.
          </p>
        </div>

        <div className="card mb-6">
          <h3>Enhanced User Empowerment</h3>
          <p>
            LPoS enables token holders to participate in network security and governance, even if they lack technical expertise to run a validator node.
          </p>
        </div>

        <div className="card">
          <h3>Scalability and Efficiency</h3>
          <p>
            LPoS is more scalable and energy-efficient than Proof of Work, supporting the Unchained Network's growth without excessive resource consumption.
          </p>
        </div>
      </section>

      <section id="interactive-elements" className="mb-12">
        <h2>Interactive Elements</h2>

        <div className="space-y-8">
          <div className="card">
            <h3>Quiz</h3>
            <div className="space-y-6">
              <div className="quiz-question">
                <p className="font-semibold mb-2">What is one primary benefit of Liquid Proof of Stake (LPoS)?</p>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q1" value="a" />
                    <span>A) Requires high computational power</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q1" value="b" />
                    <span>B) Allows token holders to delegate without giving up ownership</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q1" value="c" />
                    <span>C) Only large holders can participate</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q1" value="d" />
                    <span>D) Uses a lot of energy</span>
                  </label>
                </div>
                <p className="mt-4 text-green-500">Answer: B) Allows token holders to delegate without giving up ownership</p>
              </div>

              <div className="quiz-question">
                <p className="font-semibold mb-2">What happens if a validator acts maliciously in an LPoS system?</p>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q2" value="a" />
                    <span>A) They receive additional rewards</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q2" value="b" />
                    <span>B) They are removed from the network immediately</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q2" value="c" />
                    <span>C) Their staked tokens may be slashed</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q2" value="d" />
                    <span>D) Nothing happens</span>
                  </label>
                </div>
                <p className="mt-4 text-green-500">Answer: C) Their staked tokens may be slashed</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Flashcards</h3>
            <div className="space-y-4">
              <div className="bg-surface p-4 rounded-lg">
                <h4 className="font-semibold">Liquid Proof of Stake (LPoS)</h4>
                <p className="mt-2">A consensus mechanism allowing token holders to delegate their staking power to validators without transferring ownership, supporting network security and decentralization.</p>
              </div>
              <div className="bg-surface p-4 rounded-lg">
                <h4 className="font-semibold">Delegation</h4>
                <p className="mt-2">The process of assigning one's staking power to a validator, enabling participation without direct node operation.</p>
              </div>
              <div className="bg-surface p-4 rounded-lg">
                <h4 className="font-semibold">Slashing</h4>
                <p className="mt-2">A penalty in which validators lose part of their staked tokens if they act maliciously or fail to perform their duties, ensuring network security.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Glossary</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Validator</h4>
                <p>An entity responsible for verifying transactions and maintaining network security in a Proof of Stake system.</p>
              </div>
              <div>
                <h4 className="font-semibold">Delegator</h4>
                <p>A token holder who assigns their staking power to a validator, sharing in the rewards without running a node.</p>
              </div>
              <div>
                <h4 className="font-semibold">Consensus Mechanism</h4>
                <p>A method for achieving agreement on the state of a network among distributed participants, essential for network security and reliability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="summary" className="mb-12">
        <h2>Summary</h2>
        <div className="card">
          <p>
            Liquid Proof of Stake (LPoS) brings enhanced flexibility, scalability, and security to the Kenshi 
            ecosystem. By allowing token holders to delegate their tokens to validators, LPoS enables wider 
            participation and more robust network security. This model encourages responsible behavior through 
            rewards and penalties, aligning participant incentives with network health. LPoS ensures that the 
            Unchained Network is decentralized, accessible, and efficient, making it an ideal solution for a 
            growing and resilient ecosystem.
          </p>
        </div>
      </section>
    </LessonContent>
  );
};

export default Module1Lesson4;
