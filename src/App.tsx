import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

// Lazy load page components for better initial load speed
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Experience = lazy(() => import('./pages/Experience'));
const Education = lazy(() => import('./pages/Education'));
const Contact = lazy(() => import('./pages/Contact'));

const pageVariants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.35 } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div style={{ height: '100vh', background: '#fffcfd' }} />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Home /></motion.div>} />
          <Route path="/about" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><About /></motion.div>} />
          <Route path="/experience" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Experience /></motion.div>} />
          <Route path="/education" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Education /></motion.div>} />
          <Route path="/contact" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Contact /></motion.div>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Site is ready immediately, loading screen just fades out
    const handle = requestAnimationFrame(() => {
      setLoading(false);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      
      {/* Content renders immediately to fix LCP and Speed Index */}
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}


