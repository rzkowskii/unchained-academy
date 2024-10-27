import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import Module1Lesson1 from './components/lessons/Module1Lesson1';

function LessonContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <Module1Lesson1 />
    </div>
  );
}

function ComingSoon() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-300 mb-2">
          Coming Soon
        </h2>
        <p className="text-gray-400">
          This lesson content is currently under development.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/module/1/lesson/1" element={<LessonContent />} />
          <Route path="/module/:moduleId/lesson/:lessonId" element={<ComingSoon />} />
        </Routes>
      </Layout>
    </Router>
  );
}
