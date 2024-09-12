import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import CardDetails from './pages/CardDetails';
import Layout from './Layout';
import FilteredCardsPage from './pages/FilteredCardsPage';
import { PropertyProvider } from './context/PropertyContext';
import ScrollToTop from './components/ScrollToTop'; 

const App = () => {
  return (
    <PropertyProvider>
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main Layout route */}
        <Route path="/" element={<Layout />} />
        
        {/* Route for search and auction filtering */}
        <Route path="/cards/:searchType/:value/" element={<FilteredCardsPage />} />
  
        {/* Card details route */}
        <Route path="/card-details/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  </PropertyProvider>
  
  );
};

export default App;
