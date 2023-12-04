import type { Component } from 'solid-js';
import logo from './logo.svg';
import styles from './App.module.css';
import Nav from './components/Nav/Nav';
import { Route, Routes, Router } from 'solid-app-router';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { inject } from '@vercel/analytics';

const App: Component = () => {
  inject();
  return (
    <div class={styles.App}>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
};

export default App;
