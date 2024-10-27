import React, { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';

interface CommandResult {
  output: string;
  error?: string;
  timestamp: number;
}

interface CodePlaygroundProps {
  initialCode?: string;
  language?: string;
  title?: string;
  description?: string;
  validation?: (code: string) => { isValid: boolean; message?: string };
  onRun?: (code: string) => Promise<CommandResult>;
}

const CodePlayground: React.FC<CodePlaygroundProps> = ({
  initialCode = '',
  language = 'javascript',
  title = 'Interactive Code Playground',
  description = 'Try out the code below:',
  validation,
  onRun
}) => {
  const [code, setCode] = useState<string>(initialCode);
  const [output, setOutput] = useState<CommandResult | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setCode(newCode);
    setError(null);

    if (validation) {
      const result = validation(newCode);
      if (!result.isValid) {
        setError(result.message || 'Invalid code');
      }
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput(null);
    setError(null);
  };

  const handleRun = async () => {
    if (!onRun) return;

    setIsRunning(true);
    setError(null);

    try {
      const result = await onRun(code);
      setOutput(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="bg-surface-dark rounded-lg overflow-hidden border border-gray-800">
      {/* Header */}
      <div className="p-4 border-b border-gray-800">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
      </div>

      {/* Code Editor */}
      <div className="p-4">
        <div className="relative">
          <textarea
            value={code}
            onChange={handleCodeChange}
            className="w-full h-48 bg-surface font-mono text-sm p-4 rounded-lg
                     text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary
                     resize-none"
            placeholder="Enter your code here..."
            spellCheck="false"
          />
          <div className="absolute top-2 right-2 space-x-2">
            <span className="text-xs text-gray-500 bg-surface-dark px-2 py-1 rounded">
              {language}
            </span>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-2 text-red-500 text-sm">
            {error}
          </div>
        )}

        {/* Controls */}
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={handleReset}
            className="btn btn-secondary btn-sm"
            disabled={isRunning}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </button>

          <button
            onClick={handleRun}
            className="btn btn-primary"
            disabled={isRunning || !!error || !onRun}
          >
            <Play className="w-4 h-4 mr-2" />
            {isRunning ? 'Running...' : 'Run Code'}
          </button>
        </div>
      </div>

      {/* Output */}
      {output && (
        <div className="border-t border-gray-800 p-4">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Output:</h4>
          <pre className="bg-surface p-4 rounded-lg text-sm overflow-x-auto">
            <code>{output.output}</code>
          </pre>
          {output.error && (
            <div className="mt-2 text-red-500 text-sm">
              Error: {output.error}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CodePlayground;
