import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Header from './components/header'
import Expertises from './pages/expertises'
import Apropos from './pages/a-propos'
import Contact from './pages/contact'
import Footer from './components/footer'
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Expertises" element={<Expertises />} />
        <Route path="/A-propos" element={<Apropos />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);
