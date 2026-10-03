import { AnimatePresence, MotionConfig } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail';
import Skills from './pages/Skills';
import Work from './pages/Work';

// Once the old page has left: start the new one at the top and hand it keyboard focus.
function handleRouteExit() {
  window.scrollTo(0, 0);
  requestAnimationFrame(() => {
    document.getElementById('main')?.focus({ preventScroll: true });
  });
}

export default function App() {
  const location = useLocation();

  return (
    // reducedMotion="user" drops transform animations when the OS asks for less motion.
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />

      <AnimatePresence mode="wait" onExitComplete={handleRouteExit}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/mkreddy" element={<Navigate to="/work/mkreddy-general-stores" replace />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </MotionConfig>
  );
}
