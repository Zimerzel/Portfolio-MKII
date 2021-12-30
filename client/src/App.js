import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import PageNoMatch from './components/PageNoMatch';
import ScrollToTop from './components/ScrollToTop';

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
            <ScrollToTop />
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                {/* <Route path="/project-:id" element={<SingleProject />} /> */}
                <Route path="*" element={<PageNoMatch />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </HelmetProvider>
    );
}

export default App;