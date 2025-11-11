'use client'

import { useState } from 'react'
import './Footer.css'

const Footer = () => {
  const [hearts, setHearts] = useState([])

  const createHeart = (e) => {
    const rect = e.target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const newHeart = {
      id: Date.now() + Math.random(),
      x,
      y
    }
    
    setHearts(prev => [...prev, newHeart])
    
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== newHeart.id))
    }, 2000)
  }

  return (
    <footer className="footer">
      <div className="footer-hearts">
        {hearts.map(heart => (
          <div
            key={heart.id}
            className="floating-heart"
            style={{
              left: `${heart.x}px`,
              top: `${heart.y}px`
            }}
          >
            ❤️
          </div>
        ))}
      </div>
      <div className="footer-heart" onClick={createHeart}>❤️</div>
      <p className="footer-message">I love you and I want to fix everything.</p>
      <p className="footer-submessage">Click the heart to send love ❤️</p>
    </footer>
  )
}

export default Footer
