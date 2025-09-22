import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="bar">
        <div className="owner-name">Dhruv Sharma</div>
        <button
          className={open ? 'menu-toggle open' : 'menu-toggle'}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="site-nav" className={open ? 'nav show' : 'nav'} onClick={closeMenu}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'link active' : 'link'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'link active' : 'link'}>About</NavLink>
          {/* <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'link active' : 'link'}>Portfolio</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'link active' : 'link'}>Services</NavLink>
          <NavLink to="/testimonials" className={({ isActive }) => isActive ? 'link active' : 'link'}>Testimonials</NavLink>
          <NavLink to="/highlights" className={({ isActive }) => isActive ? 'link active' : 'link'}>Highlights</NavLink> */}
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'link active' : 'link'}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
