import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Career from './components/Career';
import Contact from './components/Contact';
import Write from './components/Write';
import PostList from './components/PostList';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Career />
              <Contact />
            </>
          }
        />
        <Route path="/write" element={<Write />} />
        <Route path="/posts" element={<PostList />} />
      </Routes>
    </>
  );
}

export default App;