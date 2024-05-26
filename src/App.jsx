import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, HeroSection } from './components';

import MovieList from './pages/MovieList';
import FavoriteMovies from './pages/FavoriteMovies';
import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/favorites" element={<FavoriteMovies />} />
      </Routes>
    </Router>
  );
};

export default App;
