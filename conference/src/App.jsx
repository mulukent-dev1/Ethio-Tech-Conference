import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/banner/Banner';
import Speakers from './components/speakers/Speakers';
import About from './components/about/About';
import Schedule from './components/schedule/Schedule';
import Signup from './components/signup/Signup'; // Import the Signup component
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Speakers />
              <About />
              <Schedule />
            </>
          }
        />
        {/* Signup Route */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;