import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css';
import './i18n';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Infrastructure = lazy(() => import('./pages/Infrastructure'));
const Packaging = lazy(() => import('./pages/Packaging'));
const ProductsListing = lazy(() => import('./pages/ProductsListing'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const ProjectsListing = lazy(() => import('./pages/ProjectsListing'));
const BlogListing = lazy(() => import('./pages/BlogListing'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const ContactUs = lazy(() => import('./pages/ContactUs'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-50">
      <div className="w-12 h-12 rounded-full border-4 border-neutral-200 border-t-gold animate-spin"></div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-body bg-white text-neutral-800">
        <ScrollToTop />
        <Header />
        
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/infrastructure" element={<Infrastructure />} />
              <Route path="/packaging" element={<Packaging />} />
              <Route path="/products" element={<ProductsListing />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/projects" element={<ProjectsListing />} />
              <Route path="/blog" element={<BlogListing />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
