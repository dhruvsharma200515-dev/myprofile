import { useState } from 'react'
import { FaInstagram, FaLinkedin, FaFacebook, FaRegEnvelope } from 'react-icons/fa'
import './pages.css'

export default function Home() {
  const [copied, setCopied] = useState(false)
  const email = 'dhruvsharma200515@gmail.com'


  return (
    <section className="page full-height">
      <div className="overlay" />
      <div className="home-content">
        <div className="name-block">
          <h1 className="name">Dhruv Sharma</h1>
          <p className="tagline">Go through my profiles</p>
          <div className="socials">
            <a className="chip" href="https://www.instagram.com/dhruvsharmaa15?igsh=ODlzYmlpejI0cHh0" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram className="chip-icon" />
              <span className="chip-label">Instagram</span>
            </a>
            <a className="chip" href="https://www.linkedin.com/in/dhruv-parvesh-sharma-128577266" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="chip-icon" />
              <span className="chip-label">LinkedIn</span>
            </a>
            <a className="chip" href="https://www.facebook.com/share/1MNY1jYYrP/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook className="chip-icon" />
              <span className="chip-label">Facebook</span>
            </a>
            {/* Break to next line before email chip */}
            <span className="break" aria-hidden="true" />
            {/* Email chip: mailto only on Home */}
            <a className="chip" href={`mailto:${email}`} aria-label="Email">
              <FaRegEnvelope className="chip-icon" />
              <span className="chip-label">{email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
