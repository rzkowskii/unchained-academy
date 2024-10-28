import React from 'react';
import LessonContent from './LessonContent';

const lessonMetadata = {
  title: "Unchained Client Installation",
  duration: 25,
  objectives: [
    "Learn how to install the Unchained client on different operating systems",
    "Configure SSL certificates and secure connections",
    "Set up and verify client configuration files",
    "Understand troubleshooting and testing procedures"
  ]
};

const Module2Lesson2: React.FC = () => {
  return (
    <LessonContent metadata={lessonMetadata}>
      <section id="introduction" className="mb-12">
        <h2>Introduction</h2>
        <p>
          In this lesson, we'll walk through the steps needed to install the Unchained client on your system. 
          The Unchained client software is the primary tool that allows you to run and manage nodes within the Unchained Network.
        </p>
      </section>

      <section id="prerequisites" className="mb-12">
        <h2>Prerequisites for Installing the Unchained Client</h2>
        
        <div className="card mb-6">
          <h3>System Requirements</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Operating System:
              <ul className="list-disc pl-6 mt-2">
                <li>Linux: Kernel version 5.15+ with systemd</li>
                <li>macOS: Version 12+ on official Apple hardware</li>
                <li>Windows: Windows 10 (Vibranium) and above</li>
              </ul>
            </li>
            <li>Network Access: Stable internet connectivity</li>
            <li>Required Dependencies:
              <ul className="list-disc pl-6 mt-2">
                <li>Python 3.8.19 and pyenv</li>
                <li>Git</li>
                <li>mkcert</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section id="installation" className="mb-12">
        <h2>Step-by-Step Installation on Different Operating Systems</h2>
        
        <div className="card mb-6">
          <h3>Installation on Linux</h3>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <p>Download the Unchained client:</p>
              <pre className="bg-surface-dark p-4 rounded-lg mt-2">
                <code>curl -s https://old.timeleap.swiss/unchained/install | sh</code>
              </pre>
            </li>
            <li>
              <p>Make the binary executable:</p>
              <pre className="bg-surface-dark p-4 rounded-lg mt-2">
                <code>chmod +x PATH_TO_UNCHAINED</code>
              </pre>
            </li>
            <li>
              <p>Install dependencies:</p>
              <pre className="bg-surface-dark p-4 rounded-lg mt-2">
                <code>sudo apt install git python3 python3-pip mkcert</code>
              </pre>
            </li>
          </ol>
        </div>

        <div className="card mb-6">
          <h3>Installation on macOS</h3>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <p>Clone the repository:</p>
              <pre className="bg-surface-dark p-4 rounded-lg mt-2">
                <code>git clone https://github.com/TimeleapLabs/unchained-client.git</code>
              </pre>
            </li>
            <li>
              <p>Install pyenv:</p>
              <pre className="bg-surface-dark p-4 rounded-lg mt-2">
                <code>brew install pyenv</code>
              </pre>
            </li>
            <li>
              <p>Set up Python:</p>
              <pre className="bg-surface-dark p-4 rounded-lg mt-2">
                <code>pyenv install 3.8.19</code>
              </pre>
            </li>
            <li>
              <p>Activate the client:</p>
              <pre className="bg-surface-dark p-4 rounded-lg mt-2">
                <code>cd unchained-client
pyenv local 3.8.19</code>
              </pre>
            </li>
          </ol>
        </div>

        <div className="card mb-6">
          <h3>Installation on Windows</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Download the Unchained client installer from the official website</li>
            <li>Run the installer and follow the prompts</li>
            <li>Install Git and mkcert</li>
            <li>
              <p>Verify installation:</p>
              <pre className="bg-surface-dark p-4 rounded-lg mt-2">
                <code>unchained --version</code>
              </pre>
            </li>
          </ol>
        </div>
      </section>

      <section id="configuration" className="mb-12">
        <h2>Configuring the Unchained Client</h2>
        
        <div className="card mb-6">
          <h3>Generating SSL Certificates</h3>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <p>Install mkcert:</p>
              <pre className="bg-surface-dark p-4 rounded-lg mt-2">
                <code>mkcert -install</code>
              </pre>
            </li>
            <li>
              <p>Generate certificates:</p>
              <pre className="bg-surface-dark p-4 rounded-lg mt-2">
                <code>mkcert localhost</code>
              </pre>
            </li>
          </ol>
        </div>

        <div className="card mb-6">
          <h3>Configuration Files</h3>
          <div className="space-y-4">
            <div>
              <p className="mb-2">Broker Configuration (broker.yaml):</p>
              <pre className="bg-surface-dark p-4 rounded-lg">
                <code>{`system:
  log: info
  name: YOUR_BROKER_NAME

network:
  bind: 127.0.0.1:9123
  certFile: localhost.pem
  keyFile: localhost-key.pem`}</code>
              </pre>
            </div>
            <div>
              <p className="mb-2">Worker Configuration (worker.yaml):</p>
              <pre className="bg-surface-dark p-4 rounded-lg">
                <code>{`system:
  log: info
  name: YOUR_WORKER_NAME

network:
  brokerUri: wss://localhost:9123`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section id="testing" className="mb-12">
        <h2>Running Initial Tests and Troubleshooting</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <h3>Testing the Installation</h3>
            <p className="mb-4">Run test mode to verify the setup:</p>
            <pre className="bg-surface-dark p-4 rounded-lg">
              <code>unchained --test</code>
            </pre>
          </div>
          <div className="card">
            <h3>Common Issues and Fixes</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dependency Issues: Check all dependencies are installed</li>
              <li>SSL Certificate Errors: Verify certificate configuration</li>
              <li>Connectivity Problems: Check network settings</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="knowledge-check" className="mb-12">
        <h2>Knowledge Check</h2>
        <div className="space-y-6">
          <div className="card">
            <h3>Question 1</h3>
            <p className="mb-4">Which command is used to download the Unchained client on Linux?</p>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="q1" value="a" />
                <span>A) sudo apt install unchained</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="q1" value="b" />
                <span>B) curl -s https://old.timeleap.swiss/unchained/install | sh</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="q1" value="c" />
                <span>C) apt-get install unchained</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <section id="summary" className="mb-12">
        <h2>Summary</h2>
        <div className="bg-surface-dark p-6 rounded-lg">
          <p className="mb-4">In this lesson, we covered:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Installation steps for different operating systems</li>
            <li>SSL certificate generation and configuration</li>
            <li>Setting up configuration files</li>
            <li>Testing and troubleshooting procedures</li>
          </ul>
        </div>
      </section>
    </LessonContent>
  );
};

export default Module2Lesson2;
