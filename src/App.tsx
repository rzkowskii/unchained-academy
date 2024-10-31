import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import { modules } from './lessons/config';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router basename="/unchained-academy">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          
          {/* Generate routes for each lesson */}
          {modules.map(module =>
            module.lessons.map(lesson => (
              <Route
                key={lesson.path}
                path={lesson.path}
                element={
                  <Layout>
                    <Suspense fallback={<LoadingSpinner />}>
                      <lesson.component />
                    </Suspense>
                  </Layout>
                }
              />
            ))
          )}

          {/* 404 route */}
          <Route
            path="*"
            element={
              <Layout>
                <div className="text-center py-12">
                  <h1 className="text-4xl font-bold text-white mb-4">
                    404 - Page Not Found
                  </h1>
                  <p className="text-gray-400">
                    The page you're looking for doesn't exist.
                  </p>
                </div>
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
