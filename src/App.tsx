import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Suspense, lazy, useState, useEffect, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import Layout from './components/layout/Layout';
import { modules } from './lessons/config';

// Lazy load HomePage
const HomePage = lazy(() => import('./pages/HomePage'));

interface ErrorBoundaryProps {
  children: ReactNode;
}

// Error Boundary Component
function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('Application Error:', error);
      setHasError(true);
      setError(error.error);
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

  return <>{children}</>;
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
        <Link to="/" className="btn btn-primary inline-block">
          Return Home
        </Link>
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

function AppContent() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          
          {/* Dynamically generate routes from module configuration */}
          {modules.map(module => 
            module.lessons.map(lesson => (
              <Route
                key={lesson.path}
                path={lesson.path}
                element={
                  lesson.unlocked ? (
                    <Suspense fallback={<LoadingSpinner />}>
                      <lesson.component />
                    </Suspense>
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />
            ))
          )}

          {/* Catch-all route for modules without specific lessons */}
          <Route path="/module/:moduleId/*" element={<ComingSoon />} />
        </Route>

        {/* Standalone routes */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Suspense>
  );
}

export default function App() {
  return (
    <Router>
      <ErrorBoundary>
        <AppContent />
      </ErrorBoundary>
    </Router>
  );
}
