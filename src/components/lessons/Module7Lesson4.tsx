import React from 'react';
import LessonContent from './LessonContent';

const Module7Lesson4: React.FC = () => {
  const codeExamples = [
    {
      title: 'Reverse API Configuration',
      code: `{
  "reverseApi": {
    "endpoints": {
      "data": {
        "path": "/api/v1/data",
        "methods": ["GET", "POST"],
        "rateLimit": {
          "window": "1m",
          "max": 100
        }
      },
      "events": {
        "path": "/api/v1/events",
        "methods": ["GET"],
        "streaming": true,
        "maxConnections": 1000
      }
    },
    "authentication": {
      "type": "jwt",
      "issuer": "unchained-network",
      "expiry": "24h",
      "refreshEnabled": true
    },
    "caching": {
      "enabled": true,
      "strategy": "adaptive",
      "ttl": "5m",
      "maxSize": "1GB"
    },
    "monitoring": {
      "metrics": true,
      "tracing": true,
      "logging": {
        "level": "info",
        "format": "json"
      }
    }
  }
}`,
      language: 'json',
    },
    {
      title: 'Reverse API Implementation',
      code: `import { ReverseApiServer, CacheManager } from '@unchained/reverse-api';
import { MetricsCollector } from '@unchained/metrics';
import { AuthProvider } from '@unchained/auth';

class ReverseApiManager {
  private server: ReverseApiServer;
  private cache: CacheManager;
  private metrics: MetricsCollector;
  private auth: AuthProvider;

  constructor(config: ReverseApiConfig) {
    this.server = new ReverseApiServer(config);
    this.cache = new CacheManager(config.caching);
    this.metrics = new MetricsCollector();
    this.auth = new AuthProvider(config.authentication);
  }

  async start(): Promise<void> {
    try {
      // Initialize components
      await this.initializeComponents();

      // Configure middleware
      this.configureMiddleware();

      // Set up routes
      this.configureRoutes();

      // Start server
      await this.server.start();

      console.log('Reverse API server started successfully');
    } catch (error) {
      console.error('Failed to start Reverse API server:', error);
      throw error;
    }
  }

  private async initializeComponents(): Promise<void> {
    // Initialize cache
    await this.cache.initialize();

    // Set up metrics collection
    this.metrics.startCollection('reverse_api');

    // Initialize auth provider
    await this.auth.initialize();
  }

  private configureMiddleware(): void {
    // Add authentication middleware
    this.server.use(async (req, res, next) => {
      try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
          throw new Error('No authentication token provided');
        }

        const user = await this.auth.validateToken(token);
        req.user = user;
        next();
      } catch (error) {
        res.status(401).json({ error: 'Authentication failed' });
      }
    });

    // Add caching middleware
    this.server.use(async (req, res, next) => {
      const cacheKey = this.generateCacheKey(req);
      const cachedResponse = await this.cache.get(cacheKey);

      if (cachedResponse) {
        res.json(cachedResponse);
        return;
      }

      // Store original send method
      const originalSend = res.send;
      res.send = async (body: any) => {
        await this.cache.set(cacheKey, body);
        return originalSend.call(res, body);
      };

      next();
    });

    // Add metrics middleware
    this.server.use((req, res, next) => {
      const start = Date.now();
      res.on('finish', () => {
        const duration = Date.now() - start;
        this.metrics.recordApiCall({
          path: req.path,
          method: req.method,
          status: res.statusCode,
          duration
        });
      });
      next();
    });
  }

  private configureRoutes(): void {
    // Configure data endpoint
    this.server.get('/api/v1/data', async (req, res) => {
      try {
        const data = await this.fetchData(req.query);
        res.json(data);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
      }
    });

    // Configure streaming events endpoint
    this.server.get('/api/v1/events', async (req, res) => {
      try {
        const stream = await this.createEventStream();
        stream.pipe(res);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create event stream' });
      }
    });
  }

  private generateCacheKey(req: Request): string {
    return \`\${req.method}:\${req.path}:\${JSON.stringify(req.query)}\`;
  }

  async stop(): Promise<void> {
    await this.server.stop();
    await this.cache.cleanup();
    this.metrics.stopCollection();
  }

  getMetrics(): ApiMetrics {
    return this.metrics.getMetrics('reverse_api');
  }
}

interface ReverseApiConfig {
  endpoints: Record<string, EndpointConfig>;
  authentication: AuthConfig;
  caching: CacheConfig;
  monitoring: MonitoringConfig;
}

interface EndpointConfig {
  path: string;
  methods: string[];
  streaming?: boolean;
  maxConnections?: number;
  rateLimit?: {
    window: string;
    max: number;
  };
}

interface ApiMetrics {
  requestCount: number;
  averageLatency: number;
  errorRate: number;
  activeConnections: number;
}`,
      language: 'typescript',
    }
  ];

  const metadata = {
    title: "Reverse API Configuration",
    duration: 45,
    objectives: [
      "Understand Reverse API architecture",
      "Learn configuration patterns",
      "Implement authentication and caching",
      "Master monitoring and metrics"
    ]
  };

  return (
    <LessonContent metadata={metadata}>
      <section>
        <h1>Reverse API Configuration</h1>
        <p className="text-gray-400 mt-2">
          Reverse APIs enable efficient data access and real-time updates in
          the Unchained Network. This lesson covers implementation strategies,
          configuration patterns, and best practices for reverse APIs.
        </p>
      </section>

      <section className="mt-8">
        <h2>Prerequisites</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>Understanding of API design</li>
          <li>Knowledge of authentication patterns</li>
          <li>Familiarity with caching strategies</li>
          <li>Basic understanding of streaming data</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Configuration Structure</h2>
        <p className="text-gray-400 mt-2">
          A well-structured configuration is essential for reliable reverse
          API operation:
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
          Implementing a robust reverse API requires careful handling of
          authentication, caching, and monitoring:
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
        <h2>Authentication Strategies</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Key Authentication Approaches</h3>
          <div className="mt-4">
            <h4>1. Token-based Authentication:</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>JWT implementation</li>
              <li>Token validation</li>
              <li>Refresh mechanisms</li>
              <li>Scope management</li>
            </ul>
          </div>
          <div className="mt-4">
            <h4>2. Security Measures:</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Rate limiting</li>
              <li>IP filtering</li>
              <li>Request validation</li>
              <li>Error handling</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2>Caching Strategies</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Effective Caching Approaches</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Response caching</li>
            <li>Cache invalidation</li>
            <li>TTL management</li>
            <li>Memory optimization</li>
            <li>Cache warming</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Monitoring and Metrics</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Key Metrics to Track</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Request latency</li>
            <li>Error rates</li>
            <li>Cache hit ratio</li>
            <li>Active connections</li>
            <li>Resource usage</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Practice Exercise</h2>
        <div className="bg-surface-dark p-6 rounded-lg mt-2">
          <h3>Reverse API Implementation</h3>
          <p className="text-gray-400 mt-2">
            Implement a reverse API system that:
          </p>
          <ul className="list-decimal list-inside text-gray-400 mt-2">
            <li>Handles authentication</li>
            <li>Implements caching</li>
            <li>Manages streaming data</li>
            <li>Collects metrics</li>
            <li>Provides error handling</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>Additional Resources</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>
            <a 
              href="https://docs.unchained.network/reverse-api" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light"
            >
              Reverse API Documentation
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/unchained-network/reverse-api-examples" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light"
            >
              Implementation Examples
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Summary</h2>
        <p className="text-gray-400 mt-2">
          In this lesson, we covered reverse API configuration and
          implementation in the Unchained Network. We explored authentication
          strategies, caching mechanisms, monitoring approaches, and best
          practices. This concludes the Advanced Data Indexing module,
          providing you with comprehensive knowledge of data management
          in the network.
        </p>
      </section>
    </LessonContent>
  );
};

export default Module7Lesson4;
