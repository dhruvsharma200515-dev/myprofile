import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Services from './pages/Services.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Highlights from './pages/Highlights.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="app-background">
        <Navbar />
        <main className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/highlights" element={<Highlights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
