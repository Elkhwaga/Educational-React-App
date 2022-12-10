import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';

import Home from './components/home/Home';
import Blog from './components/blog/Blog';
import Team from './components/team/Team';
import About from './components/about/About';
import Price from './components/pricing/Price';
import Contact from './components/contact/Contact';
import Courses from './components/allCourses/Courses';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<Price />} />
        <Route path="/journal" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
