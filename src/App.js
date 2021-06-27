import React from 'react';
import Navbar from './components/Navb'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Timeline from './components/Timeline';
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Timeline/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
