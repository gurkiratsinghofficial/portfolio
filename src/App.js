import React from 'react';
import Navbar from './components/Navb'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Timeline from './components/Timeline';
import ProjectLine from './components/ProjectLine'
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Timeline/>
    <ProjectLine/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
