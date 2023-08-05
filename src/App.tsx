import type { Component } from 'solid-js';
import logo from './logo.svg';
import styles from './App.module.css';
import Nav from './components/Nav/Nav';
import { Route, Routes, Router } from 'solid-app-router';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
