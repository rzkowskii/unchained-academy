import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ShortcutProps {
  isOpen: boolean;
  onClose: () => void;
}

const KeyboardShortcuts: React.FC<ShortcutProps> = ({ isOpen, onClose }) => {
  const shortcuts = [
    { key: '/', description: 'Focus search' },
    { key: 'ESC', description: 'Close modal / Clear search' },
    { key: '←/→', description: 'Navigate between lessons' },
    { key: 'CTRL + B', description: 'Toggle sidebar' },
    { key: 'CTRL + K', description: 'Command palette' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-0 top-20 mx-auto max-w-lg bg-white rounded-lg shadow-xl z-50 p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Keyboard Shortcuts</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-3">
              {shortcuts.map((shortcut) => (
                <div key={shortcut.key} className="flex justify-between items-center">
                  <span className="text-gray-600">{shortcut.description}</span>
                  <kbd className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm">
                    {shortcut.key}
                  </kbd>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default KeyboardShortcuts;
