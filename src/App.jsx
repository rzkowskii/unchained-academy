import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy, useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import Layout from './components/layout/Layout';

// Lazy load components
const HomePage = lazy(() => import('./pages/HomePage'));
const Module1Lesson1 = lazy(() => import('./components/lessons/Module1Lesson1'));
const Module1Lesson2 = lazy(() => import('./components/lessons/Module1Lesson2'));
const Module1Lesson3 = lazy(() => import('./components/lessons/Module1Lesson3'));
const Module1Lesson4 = lazy(() => import('./components/lessons/Module1Lesson4'));

// Error Boundary Component
function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleError = (error) => {
      console.error('Application Error:', error);
      setHasError(true);
      setError(error);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-red-500">Oops! Something went wrong</h1>
          <p className="text-gray-400">{error?.message || 'An unexpected error occurred'}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn btn-primary"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return children;
}

// Loading Component
function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto" />
        <p className="text-gray-400">Loading...</p>
      </div>
    </div>
  );
}

// 404 Not Found Component
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">404</h1>
        <p className="text-xl text-gray-400">Page not found</p>
        <a href="/" className="btn btn-primary inline-block">
          Return Home
        </a>
      </div>
    </div>
  );
}

// Coming Soon Component
function ComingSoon() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-300">Coming Soon</h2>
        <p className="text-gray-400">This lesson is currently under development.</p>
      </div>
    </div>
  );
}

// Main App Content Component
function AppContent() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/module/1/lesson/1" element={<Module1Lesson1 />} />
          <Route path="/module/1/lesson/2" element={<Module1Lesson2 />} />
          <Route path="/module/1/lesson/3" element={<Module1Lesson3 />} />
          <Route path="/module/1/lesson/4" element={<Module1Lesson4 />} />
          <Route path="/module/1/lesson/:lessonId" element={<ComingSoon />} />
          <Route path="/module/:moduleId/*" element={<ComingSoon />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

// Main App Component
export default function App() {
  return (
    <Router>
      <ErrorBoundary>
        <AppContent />
      </ErrorBoundary>
    </Router>
  );
}
