import React from 'react';
import LessonContent from './LessonContent';

const Module7Lesson2: React.FC = () => {
  const codeExamples = [
    {
      title: 'Optimized GraphQL Query Example',
      code: `import { gql } from '@apollo/client';

// Define fragment for reusable fields
const VALIDATOR_FIELDS = gql\`
  fragment ValidatorFields on Validator {
    address
    status
    totalStake
    commission
    uptime
  }
\`;

// Optimized query with pagination and field selection
const GET_VALIDATORS = gql\`
  query GetValidators(
    $first: Int!
    $after: String
    $status: ValidatorStatus
  ) {
    validators(
      first: $first
      after: $after
      status: $status
      orderBy: { field: "totalStake", direction: DESC }
    ) {
      edges {
        node {
          ...ValidatorFields
          delegators(first: 5) {
            totalCount
            edges {
              node {
                address
                amount
              }
            }
          }
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
    }
  }
  \${VALIDATOR_FIELDS}
\`;`,
      language: 'typescript',
    },
    {
      title: 'Query Optimization Implementation',
      code: `import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BatchHttpLink } from '@apollo/client/link/batch-http';
import { RetryLink } from '@apollo/client/link/retry';

// Import the queries defined above
import { GET_VALIDATORS } from './queries';

interface QueryVariables {
  first: number;
  after?: string;
  status?: string;
}

class QueryOptimizer {
  private client: ApolloClient<any>;

  constructor() {
    // Configure Apollo Client with optimizations
    this.client = new ApolloClient({
      link: this.createOptimizedLink(),
      cache: this.createOptimizedCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
          nextFetchPolicy: 'cache-first',
          notifyOnNetworkStatusChange: true
        }
      }
    });
  }

  private createOptimizedLink() {
    // Create batch HTTP link for request batching
    const batchLink = new BatchHttpLink({
      uri: 'https://api.unchained.network/graphql',
      batchMax: 5, // Max operations per batch
      batchInterval: 20 // Wait time in ms
    });

    // Add retry logic for failed requests
    const retryLink = new RetryLink({
      delay: {
        initial: 300,
        max: 3000,
        jitter: true
      },
      attempts: {
        max: 3,
        retryIf: (error, _operation) => !!error
      }
    });

    return retryLink.concat(batchLink);
  }

  private createOptimizedCache() {
    return new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            validators: {
              // Merge function for paginated data
              keyArgs: ['status'],
              merge(existing, incoming, { args: { after } }) {
                if (!existing) return incoming;
                if (!after) return incoming;

                return {
                  ...incoming,
                  edges: [...existing.edges, ...incoming.edges]
                };
              }
            }
          }
        },
        Validator: {
          // Unique identifier for cache
          keyFields: ['address']
        }
      }
    });
  }

  async fetchValidators(variables: QueryVariables) {
    return this.client.query({
      query: GET_VALIDATORS,
      variables,
      // Enable field-level updates
      returnPartialData: true
    });
  }

  // Cache manipulation methods
  updateCache(id: string, data: any) {
    this.client.cache.modify({
      id,
      fields: {
        totalStake: (current) => current + data.amount
      }
    });
  }

  // Cache eviction for stale data
  evictStaleData(age: number) {
    const cutoff = Date.now() - age;
    this.client.cache.evict({
      predicate: (obj) => obj.timestamp < cutoff
    });
  }
}`,
      language: 'typescript',
    }
  ];

  const metadata = {
    title: "GraphQL Query Optimization",
    duration: 45,
    objectives: [
      "Master GraphQL query optimization techniques",
      "Learn efficient caching strategies",
      "Implement pagination and batching",
      "Optimize network performance"
    ]
  };

  return (
    <LessonContent metadata={metadata}>
      <section>
        <h1>GraphQL Query Optimization</h1>
        <p className="text-gray-400 mt-2">
          Optimizing GraphQL queries is crucial for maintaining high performance
          in the Unchained Network. This lesson covers advanced optimization
          techniques, caching strategies, and best practices for efficient
          data retrieval.
        </p>
      </section>

      <section className="mt-8">
        <h2>Prerequisites</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>Understanding of GraphQL basics</li>
          <li>Knowledge of Apollo Client</li>
          <li>Familiarity with caching concepts</li>
          <li>Basic understanding of network optimization</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Query Structure Optimization</h2>
        <p className="text-gray-400 mt-2">
          Well-structured queries with proper field selection and pagination
          are essential for optimal performance:
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
        <h2>Client Implementation</h2>
        <p className="text-gray-400 mt-2">
          Implementing an optimized GraphQL client with proper caching and
          batching strategies:
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
        <h2>Optimization Techniques</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Key Optimization Areas</h3>
          <div className="mt-4">
            <h4>1. Query Structure:</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Field selection</li>
              <li>Fragment usage</li>
              <li>Pagination implementation</li>
              <li>Proper nesting</li>
            </ul>
          </div>
          <div className="mt-4">
            <h4>2. Network Optimization:</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Request batching</li>
              <li>Automatic retries</li>
              <li>Connection pooling</li>
              <li>Compression</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2>Caching Strategies</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Effective Caching Approaches</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Field-level caching</li>
            <li>Normalized caching</li>
            <li>Cache policies</li>
            <li>Cache invalidation</li>
            <li>Partial updates</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Performance Monitoring</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Key Metrics to Track</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Query response time</li>
            <li>Cache hit rate</li>
            <li>Network payload size</li>
            <li>Error rates</li>
            <li>Resource utilization</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Practice Exercise</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Query Optimization Implementation</h3>
          <p className="text-gray-400 mt-2">
            Implement an optimized GraphQL client that:
          </p>
          <ul className="list-decimal list-inside text-gray-400 mt-2">
            <li>Uses proper field selection</li>
            <li>Implements pagination</li>
            <li>Configures caching</li>
            <li>Handles batching</li>
            <li>Monitors performance</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Additional Resources</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>
            <a 
              href="https://docs.unchained.network/graphql-optimization" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light"
            >
              GraphQL Optimization Guide
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/unchained-network/graphql-examples" 
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
          In this lesson, we covered advanced GraphQL query optimization
          techniques for the Unchained Network. We explored query structure,
          caching strategies, network optimization, and performance monitoring.
          In the next lesson, we'll focus on using MongoDB Query Language (MQL)
          for efficient data retrieval.
        </p>
      </section>
    </LessonContent>
  );
};

export default Module7Lesson2;
