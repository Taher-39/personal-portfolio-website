import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';

function App() {
  return (
      <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
