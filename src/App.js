import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
// import { Container } from "react-bootstrap";
import TopBar from './components/TopBar';
import About from './components/About';
import Contact from './components/Contact';
import Policy from './components/Policy';
import NavBar from './components/NavBar';
import HomeScreen from './screen/HomeScreen';

function App() {
  return (
    <BrowserRouter>
    <TopBar/>
    <NavBar/>
   <Routes>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/policy" element={<Policy />}/>
    <Route path="/" element={<HomeScreen />}/>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
