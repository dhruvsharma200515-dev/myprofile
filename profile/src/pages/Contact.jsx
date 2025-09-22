import './pages.css'
import { useState } from 'react'
import { FaInstagram, FaLinkedin, FaFacebook, FaRegEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa'

export default function Contact() {
  const email = 'dhruvsharma200515@gmail.com'
  const whatsapp = '8828278151'
  const [toast, setToast] = useState('')

  const copy = async (text, label) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
      } else {
        const tmp = document.createElement('textarea')
        tmp.value = text
        document.body.appendChild(tmp)
        tmp.select()
        document.execCommand('copy')
        document.body.removeChild(tmp)
      }
      setToast(`${label} copied to clipboard`)
      setTimeout(() => setToast(''), 1500)
    } catch (e) {
      console.error('Copy failed', e)
    }
  }

  return (
    <section className="page full-height center">
      <div className="about-card">
        <h2 className="about-title">Contact</h2>
        <p className="about-text" style={{marginBottom: '0.75rem'}}>
          Feel free to reach out through any of the platforms below.
        </p>

        <div className="socials" style={{justifyContent: 'flex-start'}}>
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

          {/* place contact actions on their own row */}
          <span className="break" aria-hidden="true" />

          <a className="chip" href={`mailto:${email}`} aria-label="Email">
            <FaRegEnvelope className="chip-icon" />
            <span className="chip-label">{email}</span>
          </a>
          <a className="chip" href={`tel:+91${whatsapp}`} aria-label="Call">
            <FaPhone className="chip-icon" />
            <span className="chip-label">+91 {whatsapp}</span>
          </a>
          <a className="chip" href={`https://wa.me/91${whatsapp}?text=Hi%20Dhruv%20Sharma`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="chip-icon" />
            <span className="chip-label">WhatsApp</span>
          </a>

          {/* Copy chips */}
          <span className="break" aria-hidden="true" />
          <button className="chip copy-chip" type="button" onClick={() => copy(email, 'Email')} aria-label="Copy email">
            <FaRegEnvelope className="chip-icon" />
            <span className="chip-label">Copy Email</span>
          </button>
          <button className="chip copy-chip" type="button" onClick={() => copy(`+91${whatsapp}`, 'Phone number')} aria-label="Copy phone number">
            <FaPhone className="chip-icon" />
            <span className="chip-label">Copy Phone</span>
          </button>
        </div>
        {toast && (<div className="toast" role="status" aria-live="polite">{toast}</div>)}
      </div>
    </section>
  )
}
