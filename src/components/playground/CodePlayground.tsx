import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface CommandResult {
  success: boolean;
  output: string;
  error?: string;
}

export interface CodePlaygroundProps {
  code: string;
  language: string;
  readOnly?: boolean;
  onRun?: (code: string) => Promise<CommandResult>;
}

const CodePlayground: React.FC<CodePlaygroundProps> = ({
  code: initialCode,
  language,
  readOnly = false,
  onRun
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = async () => {
    if (!onRun) return;
    
    setIsRunning(true);
    setOutput('');
    setError('');

    try {
      const result = await onRun(code);
      if (result.success) {
        setOutput(result.output);
      } else {
        setError(result.error || 'An error occurred while running the code');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <motion.div
      className="rounded-lg overflow-hidden bg-surface-dark"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-surface border-b border-surface-light">
        <div className="text-sm text-gray-400">
          {language}
        </div>
        {!readOnly && onRun && (
          <button
            onClick={handleRun}
            disabled={isRunning}
            className={`
              px-4 py-1 rounded-md text-sm font-medium
              ${isRunning
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-primary hover:bg-primary-light'}
              transition-colors duration-200
            `}
          >
            {isRunning ? 'Running...' : 'Run'}
          </button>
        )}
      </div>

      {/* Code editor */}
      <div className="p-4">
        <textarea
          value={code}
          onChange={(e) => !readOnly && setCode(e.target.value)}
          readOnly={readOnly}
          className={`
            w-full h-48 bg-transparent text-white font-mono text-sm
            resize-none focus:outline-none
            ${readOnly ? 'cursor-default' : ''}
          `}
          style={{
            lineHeight: '1.5',
            tabSize: 2
          }}
        />
      </div>

      {/* Output panel */}
      {(output || error) && (
        <motion.div
          className="border-t border-surface-light"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4">
            <div className="text-sm font-medium mb-2">
              {error ? 'Error' : 'Output'}
            </div>
            <pre className={`
              text-sm font-mono whitespace-pre-wrap
              ${error ? 'text-red-400' : 'text-green-400'}
            `}>
              {error || output}
            </pre>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CodePlayground;
