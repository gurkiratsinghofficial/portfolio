import React from 'react';
import Navbar from './components/Navb'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Projects/>
    <Skills/>
    <Contact/>
    </>
  );
}

export default App;
