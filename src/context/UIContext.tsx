import React, { createContext, useContext, useState, useCallback } from 'react';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface UIContextType {
  showToast: (message: string, type: 'success' | 'error' | 'info') => void;
  toasts: Toast[];
  removeToast: (id: number) => void;
  isKeyboardShortcutsOpen: boolean;
  toggleKeyboardShortcuts: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [isKeyboardShortcutsOpen, setIsKeyboardShortcutsOpen] = useState(false);

  const showToast = useCallback((message: string, type: 'success' | 'error' | 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const toggleKeyboardShortcuts = useCallback(() => {
    setIsKeyboardShortcutsOpen((prev) => !prev);
  }, []);

  // Set up keyboard shortcuts
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Toggle keyboard shortcuts modal
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        toggleKeyboardShortcuts();
      }
      
      // Focus search
      if (event.key === '/' && !event.ctrlKey && !event.metaKey) {
        event.preventDefault();
        const searchInput = document.querySelector('[data-search-input]') as HTMLInputElement;
        searchInput?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleKeyboardShortcuts]);

  return (
    <UIContext.Provider
      value={{
        showToast,
        toasts,
        removeToast,
        isKeyboardShortcutsOpen,
        toggleKeyboardShortcuts,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};
