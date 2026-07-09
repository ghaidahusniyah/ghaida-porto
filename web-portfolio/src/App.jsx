import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './assets/components/Header.jsx';
import Hero from './assets/components/Hero.jsx';
import About from './assets/components/About.jsx';
import Education from './assets/components/Education.jsx';
import Experience from './assets/components/Experience.jsx';
import Portfolio from './assets/components/Portfolio.jsx';
import License from './assets/components/LIcense.jsx';
import PortfolioDetail from './assets/components/PortfolioDetail.jsx';
import Footer from './assets/components/Footer.jsx';

const App = () => {
  return (
    <div className='bg-primary text-text font-mulish min-h-screen flex flex-col'>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <div className='bg-primary'>
              <Hero />
              <About />
              <Education />
              <Experience />
              <Portfolio />
              <License />
            </div>
          } />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
