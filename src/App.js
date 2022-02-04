import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Home from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import Footer from './components/Footer';
import PageNoMatch from './components/PageNoMatch';
import ScrollButton from './components/ScrollButton';
import Mando from './components/Three.js/Mando';
import { Spinner } from 'react-bootstrap';



function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);
  
    return (
      <HelmetProvider>
        <BrowserRouter>
          <div className="site-wrapper">
            <ScrollButton />
            <Header />
            <Mando />
              <Suspense fallback={<div><Spinner/></div>}>
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/work" element={<WorkPage />} />
                    {/* <Route path="/project-:id" element={<SingleProject />} /> */}
                    <Route element={<PageNoMatch />} />
                  </Routes>
                </main>
                <Footer />
              </Suspense>
            </div>
        </BrowserRouter>
      </HelmetProvider>
    );
}

export default App;