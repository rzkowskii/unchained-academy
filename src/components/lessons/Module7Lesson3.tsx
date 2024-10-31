import React from 'react';
import LessonContent from './LessonContent';

const Module7Lesson3: React.FC = () => {
  const codeExamples = [
    {
      title: 'Advanced MQL Query Examples',
      code: `// Complex aggregation pipeline for validator statistics
db.validators.aggregate([
  // Match active validators
  {
    $match: {
      status: "active",
      totalStake: { $gt: 1000 }
    }
  },
  // Lookup delegator information
  {
    $lookup: {
      from: "delegators",
      localField: "address",
      foreignField: "validatorAddress",
      as: "delegations"
    }
  },
  // Calculate statistics
  {
    $addFields: {
      delegatorCount: { $size: "$delegations" },
      totalDelegated: {
        $reduce: {
          input: "$delegations",
          initialValue: 0,
          in: { $add: ["$$value", "$$this.amount"] }
        }
      }
    }
  },
  // Group by performance tier
  {
    $bucket: {
      groupBy: "$uptime",
      boundaries: [0, 90, 95, 98, 100],
      default: "unknown",
      output: {
        validators: { $push: "$$ROOT" },
        avgStake: { $avg: "$totalStake" },
        count: { $sum: 1 }
      }
    }
  }
]);

// Efficient index usage example
db.transactions.find({
  blockNumber: { $gt: 1000000 },
  from: "0x123...",
  status: "success"
}).hint({ blockNumber: 1, from: 1 }).explain("executionStats");

// Complex update with array operators
db.nodes.updateMany(
  {
    type: "validator",
    "performance.uptime": { $lt: 95 }
  },
  {
    $push: {
      warnings: {
        $each: [{
          type: "uptime",
          message: "Low uptime detected",
          timestamp: new Date()
        }],
        $slice: -10 // Keep only last 10 warnings
      }
    },
    $inc: { "stats.warningCount": 1 },
    $set: { lastChecked: new Date() }
  }
);`,
      language: 'javascript',
    },
    {
      title: 'Query Optimization Implementation',
      code: `import { MongoClient, Collection } from 'mongodb';

class QueryOptimizer {
  private collection: Collection;

  constructor(collection: Collection) {
    this.collection = collection;
  }

  async optimizeQuery(query: any, options: QueryOptions = {}): Promise<any> {
    // Analyze query pattern
    const queryPattern = this.analyzeQueryPattern(query);
    
    // Get existing indexes
    const indexes = await this.collection.indexes();
    
    // Suggest index improvements
    const indexSuggestions = this.suggestIndexes(queryPattern, indexes);
    
    // Add query hints if applicable
    if (indexSuggestions.bestIndex) {
      options.hint = indexSuggestions.bestIndex;
    }

    // Add projection optimization
    if (!options.projection) {
      options.projection = this.optimizeProjection(queryPattern);
    }

    // Execute with explain plan
    const explainPlan = await this.collection
      .find(query, options)
      .explain('executionStats');

    // Analyze execution metrics
    const metrics = this.analyzeQueryMetrics(explainPlan);

    return {
      query,
      options,
      metrics,
      suggestions: indexSuggestions
    };
  }

  private analyzeQueryPattern(query: any): QueryPattern {
    return {
      fields: Object.keys(query),
      operators: this.extractOperators(query),
      complexity: this.calculateComplexity(query)
    };
  }

  private suggestIndexes(pattern: QueryPattern, existing: any[]): IndexSuggestions {
    const suggestions = [];

    // Check for range queries
    if (pattern.operators.includes('$gt') || pattern.operators.includes('$lt')) {
      suggestions.push({
        type: 'range',
        fields: pattern.fields,
        priority: 'high'
      });
    }

    // Check for sort operations
    if (pattern.operators.includes('$sort')) {
      suggestions.push({
        type: 'compound',
        fields: [...pattern.fields, pattern.sort],
        priority: 'medium'
      });
    }

    // Check for text search
    if (pattern.operators.includes('$text')) {
      suggestions.push({
        type: 'text',
        fields: pattern.fields,
        priority: 'high'
      });
    }

    return {
      suggestions,
      bestIndex: this.selectBestIndex(suggestions, existing)
    };
  }

  private optimizeProjection(pattern: QueryPattern): any {
    const projection = {};
    
    // Include only necessary fields
    pattern.fields.forEach(field => {
      projection[field] = 1;
    });

    // Always include _id unless explicitly excluded
    if (!pattern.fields.includes('_id')) {
      projection['_id'] = 0;
    }

    return projection;
  }

  private analyzeQueryMetrics(explainPlan: any): QueryMetrics {
    const { executionStats } = explainPlan;
    
    return {
      executionTimeMs: executionStats.executionTimeMillis,
      docsExamined: executionStats.totalDocsExamined,
      docsReturned: executionStats.nReturned,
      indexUsage: executionStats.indexUsage,
      inMemorySort: executionStats.totalKeysExamined === 0
    };
  }
}

interface QueryOptions {
  projection?: any;
  sort?: any;
  limit?: number;
  hint?: any;
}

interface QueryPattern {
  fields: string[];
  operators: string[];
  complexity: number;
  sort?: string;
}

interface IndexSuggestions {
  suggestions: Array<{
    type: string;
    fields: string[];
    priority: string;
  }>;
  bestIndex?: any;
}

interface QueryMetrics {
  executionTimeMs: number;
  docsExamined: number;
  docsReturned: number;
  indexUsage: any;
  inMemorySort: boolean;
}`,
      language: 'typescript',
    }
  ];

  const metadata = {
    title: "MongoDB Query Language (MQL) Usage",
    duration: 45,
    objectives: [
      "Master advanced MQL query patterns",
      "Learn query optimization techniques",
      "Implement efficient indexing strategies",
      "Optimize query performance"
    ]
  };

  return (
    <LessonContent metadata={metadata}>
      <section>
        <h1>MongoDB Query Language (MQL) Usage</h1>
        <p className="text-gray-400 mt-2">
          Efficient use of MongoDB Query Language (MQL) is essential for
          optimal data retrieval and manipulation in the Unchained Network.
          This lesson covers advanced query patterns, optimization techniques,
          and best practices.
        </p>
      </section>

      <section className="mt-8">
        <h2>Prerequisites</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>Basic knowledge of MongoDB</li>
          <li>Understanding of database indexing</li>
          <li>Familiarity with aggregation pipelines</li>
          <li>Basic TypeScript/JavaScript knowledge</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Advanced Query Patterns</h2>
        <p className="text-gray-400 mt-2">
          Complex queries require careful optimization and proper use of
          MongoDB's aggregation framework:
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
        <h2>Query Optimization</h2>
        <p className="text-gray-400 mt-2">
          Implementing robust query optimization requires careful analysis
          and intelligent index usage:
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
        <h2>Indexing Strategies</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Key Indexing Approaches</h3>
          <div className="mt-4">
            <h4>1. Single Field Indexes:</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Basic query optimization</li>
              <li>Range query support</li>
              <li>Sort operations</li>
              <li>Equality matches</li>
            </ul>
          </div>
          <div className="mt-4">
            <h4>2. Compound Indexes:</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Multi-field queries</li>
              <li>Sort optimization</li>
              <li>Covered queries</li>
              <li>Prefix matching</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2>Performance Optimization</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Optimization Techniques</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Query pattern analysis</li>
            <li>Index utilization</li>
            <li>Projection optimization</li>
            <li>Aggregation optimization</li>
            <li>Memory usage control</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Monitoring and Analysis</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Key Metrics to Track</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Query execution time</li>
            <li>Index usage statistics</li>
            <li>Document scan patterns</li>
            <li>Memory utilization</li>
            <li>Cache hit rates</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Practice Exercise</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Query Optimization Task</h3>
          <p className="text-gray-400 mt-2">
            Implement a query optimization system that:
          </p>
          <ul className="list-decimal list-inside text-gray-400 mt-2">
            <li>Analyzes query patterns</li>
            <li>Suggests optimal indexes</li>
            <li>Optimizes query structure</li>
            <li>Monitors performance</li>
            <li>Provides optimization suggestions</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Additional Resources</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>
            <a 
              href="https://docs.unchained.network/mql-optimization" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light"
            >
              MQL Optimization Guide
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/unchained-network/query-examples" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light"
            >
              Query Optimization Examples
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Summary</h2>
        <p className="text-gray-400 mt-2">
          In this lesson, we covered advanced MongoDB Query Language usage
          in the Unchained Network. We explored complex query patterns,
          optimization techniques, indexing strategies, and performance
          monitoring. In the next lesson, we'll focus on implementing
          reverse API functionality.
        </p>
      </section>
    </LessonContent>
  );
};

export default Module7Lesson3;
