import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import Toast from './components/ui/Toast';
import { useUI } from './context/UIContext';
import KeyboardShortcuts from './components/ui/KeyboardShortcuts';
import { SkeletonCard } from './components/ui/Skeleton';

const ToastContainer = () => {
  const { toasts, removeToast } = useUI();
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

const KeyboardShortcutsModal = () => {
  const { isKeyboardShortcutsOpen, toggleKeyboardShortcuts } = useUI();
  return (
    <KeyboardShortcuts
      isOpen={isKeyboardShortcutsOpen}
      onClose={toggleKeyboardShortcuts}
    />
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Suspense
          fallback={
            <div className="p-4 space-y-4">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add other routes as needed */}
          </Routes>
        </Suspense>
        <ToastContainer />
        <KeyboardShortcutsModal />
      </Layout>
    </Router>
  );
};

export default App;
