import React from 'react';
import LessonContent from './LessonContent';

const Module8Lesson2: React.FC = () => {
  const codeExamples = [
    {
      title: 'Custom Ruleset Configuration',
      code: `{
  "federation": {
    "rulesets": [
      {
        "id": "validator-rules",
        "name": "Validator Ruleset",
        "priority": 1,
        "rules": [
          {
            "id": "min-stake",
            "type": "threshold",
            "parameter": "stake",
            "condition": ">=",
            "value": "100000",
            "action": "ALLOW"
          },
          {
            "id": "uptime-requirement",
            "type": "performance",
            "parameter": "uptime",
            "condition": ">=",
            "value": "0.95",
            "action": "ALLOW",
            "grace_period": "24h"
          }
        ],
        "enforcement": {
          "mode": "strict",
          "violations": {
            "max": 3,
            "window": "7d",
            "action": "SUSPEND"
          }
        }
      },
      {
        "id": "network-rules",
        "name": "Network Ruleset",
        "priority": 2,
        "rules": [
          {
            "id": "peer-limit",
            "type": "network",
            "parameter": "peer_count",
            "condition": "<=",
            "value": "50",
            "action": "ENFORCE"
          },
          {
            "id": "bandwidth-limit",
            "type": "resource",
            "parameter": "bandwidth",
            "condition": "<=",
            "value": "100MB/s",
            "action": "THROTTLE"
          }
        ]
      }
    ],
    "evaluation": {
      "interval": "1m",
      "parallel": true,
      "logging": {
        "level": "info",
        "retention": "30d"
      }
    }
  }
}`,
      language: 'json',
    },
    {
      title: 'Ruleset Implementation',
      code: `import { RuleEngine, Rule, RuleContext } from '@unchained/rules';
import { MetricsCollector } from '@unchained/metrics';

class FederationRuleManager {
  private ruleEngine: RuleEngine;
  private metrics: MetricsCollector;

  constructor(config: FederationConfig) {
    this.ruleEngine = new RuleEngine(config);
    this.metrics = new MetricsCollector();
  }

  async evaluateRules(context: RuleContext): Promise<RuleResult> {
    try {
      // Start evaluation metrics
      const evaluationId = this.metrics.startEvaluation();

      // Get applicable rulesets
      const rulesets = await this.getRulesets(context);

      // Evaluate rules in order of priority
      const results = await Promise.all(
        rulesets.map(ruleset => this.evaluateRuleset(ruleset, context))
      );

      // Aggregate results
      const finalResult = this.aggregateResults(results);

      // Record metrics
      this.metrics.recordEvaluation(evaluationId, {
        rulesets: rulesets.length,
        passed: finalResult.passed,
        violations: finalResult.violations
      });

      return finalResult;
    } catch (error) {
      console.error('Rule evaluation failed:', error);
      throw error;
    }
  }

  private async evaluateRuleset(
    ruleset: Ruleset,
    context: RuleContext
  ): Promise<RulesetResult> {
    const results = await Promise.all(
      ruleset.rules.map(rule => this.evaluateRule(rule, context))
    );

    return {
      rulesetId: ruleset.id,
      passed: results.every(r => r.passed),
      results
    };
  }

  private async evaluateRule(
    rule: Rule,
    context: RuleContext
  ): Promise<RuleResult> {
    // Start rule evaluation metrics
    const startTime = Date.now();

    try {
      // Get current value for rule parameter
      const currentValue = await this.getParameterValue(
        rule.parameter,
        context
      );

      // Evaluate condition
      const passed = this.evaluateCondition(
        rule.condition,
        currentValue,
        rule.value
      );

      // Apply action if needed
      if (!passed) {
        await this.applyAction(rule.action, context);
      }

      // Record rule metrics
      this.metrics.recordRuleExecution({
        ruleId: rule.id,
        duration: Date.now() - startTime,
        passed,
        value: currentValue
      });

      return {
        ruleId: rule.id,
        passed,
        value: currentValue,
        threshold: rule.value,
        action: passed ? null : rule.action
      };
    } catch (error) {
      console.error(\`Rule \${rule.id} evaluation failed:\`, error);
      throw error;
    }
  }

  private async getParameterValue(
    parameter: string,
    context: RuleContext
  ): Promise<any> {
    switch (parameter) {
      case 'stake':
        return this.getValidatorStake(context.validatorId);
      case 'uptime':
        return this.getValidatorUptime(context.validatorId);
      case 'peer_count':
        return this.getNetworkPeerCount();
      case 'bandwidth':
        return this.getNetworkBandwidth();
      default:
        throw new Error(\`Unknown parameter: \${parameter}\`);
    }
  }

  private evaluateCondition(
    condition: string,
    current: any,
    threshold: any
  ): boolean {
    switch (condition) {
      case '>=':
        return current >= threshold;
      case '<=':
        return current <= threshold;
      case '==':
        return current === threshold;
      default:
        throw new Error(\`Unknown condition: \${condition}\`);
    }
  }

  private async applyAction(
    action: string,
    context: RuleContext
  ): Promise<void> {
    switch (action) {
      case 'SUSPEND':
        await this.suspendValidator(context.validatorId);
        break;
      case 'ENFORCE':
        await this.enforceLimit(context);
        break;
      case 'THROTTLE':
        await this.throttleNetwork(context);
        break;
      default:
        throw new Error(\`Unknown action: \${action}\`);
    }
  }

  async getRuleViolations(
    validatorId: string,
    window: string
  ): Promise<Violation[]> {
    return this.ruleEngine.getViolations(validatorId, window);
  }

  async getRuleMetrics(): Promise<RuleMetrics> {
    return this.metrics.getRuleMetrics();
  }
}

interface Ruleset {
  id: string;
  name: string;
  priority: number;
  rules: Rule[];
  enforcement: EnforcementConfig;
}

interface RuleResult {
  ruleId: string;
  passed: boolean;
  value: any;
  threshold: any;
  action: string | null;
}

interface RulesetResult {
  rulesetId: string;
  passed: boolean;
  results: RuleResult[];
}

interface RuleMetrics {
  totalEvaluations: number;
  passRate: number;
  averageDuration: number;
  violationsByRule: Record<string, number>;
}`,
      language: 'typescript',
    }
  ];

  const metadata = {
    title: "Custom Ruleset Implementation",
    duration: 45,
    objectives: [
      "Understand federation ruleset concepts",
      "Learn ruleset implementation patterns",
      "Master rule evaluation strategies",
      "Implement monitoring and enforcement"
    ]
  };

  return (
    <LessonContent metadata={metadata}>
      <section>
        <h1>Custom Ruleset Implementation</h1>
        <p className="text-gray-400 mt-2">
          Custom rulesets enable flexible and powerful federation control in
          the Unchained Network. This lesson covers ruleset implementation,
          evaluation strategies, and enforcement mechanisms.
        </p>
      </section>

      <section className="mt-8">
        <h2>Prerequisites</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>Understanding of federation concepts</li>
          <li>Knowledge of validation rules</li>
          <li>Familiarity with TypeScript</li>
          <li>Basic understanding of metrics collection</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Ruleset Configuration</h2>
        <p className="text-gray-400 mt-2">
          Well-structured ruleset configuration is essential for effective
          federation control:
        </p>
        
        <div className="mt-4">
          <h3>{codeExamples[0].title}</h3>
          <pre className="bg-surface-dark p-4 rounded-lg mt-2 overflow-x-auto">
            <code className={`language-${codeExamples[0].language}`}>
              {codeExamples[0].code}
            </code>
          </pre>
        </div>
      </section>

      <section className="mt-8">
        <h2>Implementation</h2>
        <p className="text-gray-400 mt-2">
          Implementing robust ruleset evaluation and enforcement
          mechanisms:
        </p>
        
        <div className="mt-4">
          <h3>{codeExamples[1].title}</h3>
          <pre className="bg-surface-dark p-4 rounded-lg mt-2 overflow-x-auto">
            <code className={`language-${codeExamples[1].language}`}>
              {codeExamples[1].code}
            </code>
          </pre>
        </div>
      </section>

      <section className="mt-8">
        <h2>Rule Types</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Common Rule Categories</h3>
          <div className="mt-4">
            <h4>1. Performance Rules:</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Uptime requirements</li>
              <li>Response time limits</li>
              <li>Resource utilization</li>
              <li>Error rate thresholds</li>
            </ul>
          </div>
          <div className="mt-4">
            <h4>2. Security Rules:</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Authentication requirements</li>
              <li>Access controls</li>
              <li>Network restrictions</li>
              <li>Validation checks</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2>Enforcement Strategies</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Key Enforcement Approaches</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Immediate enforcement</li>
            <li>Grace period allowance</li>
            <li>Progressive penalties</li>
            <li>Automatic recovery</li>
            <li>Manual intervention</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Monitoring and Metrics</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Key Metrics to Track</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Rule evaluation rate</li>
            <li>Violation frequency</li>
            <li>Enforcement actions</li>
            <li>Performance impact</li>
            <li>Recovery times</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Practice Exercise</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Ruleset Implementation Task</h3>
          <p className="text-gray-400 mt-2">
            Implement a custom ruleset that:
          </p>
          <ul className="list-decimal list-inside text-gray-400 mt-2">
            <li>Defines performance rules</li>
            <li>Implements evaluation logic</li>
            <li>Handles enforcement</li>
            <li>Collects metrics</li>
            <li>Provides reporting</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Additional Resources</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>
            <a 
              href="https://docs.unchained.network/federation-rules" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light"
            >
              Federation Rules Documentation
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/unchained-network/ruleset-examples" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light"
            >
              Ruleset Examples
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Summary</h2>
        <p className="text-gray-400 mt-2">
          In this lesson, we covered custom ruleset implementation in the
          Unchained Network. We explored configuration patterns,
          implementation strategies, enforcement mechanisms, and monitoring
          practices. In the next lesson, we'll focus on optimizing network
          topology for better performance.
        </p>
      </section>
    </LessonContent>
  );
};

export default Module8Lesson2;
