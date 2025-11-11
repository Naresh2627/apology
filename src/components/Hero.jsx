import { useState, useEffect } from 'react'
import './Hero.css'

const Hero = ({ onButtonClick }) => {
  const [hearts, setHearts] = useState([])
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    setShowMessage(true)
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        size: Math.random() * 10 + 15,
        duration: Math.random() * 3 + 5
      }
      setHearts(prev => [...prev, newHeart])
      
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id))
      }, 8000)
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <div className="hearts-container">
        {hearts.map(heart => (
          <div
            key={heart.id}
            className="heart"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
              animationDuration: `${heart.duration}s`
            }}
          >
            ❤️
          </div>
        ))}
      </div>
      <div className={`hero-content ${showMessage ? 'show' : ''}`}>
        <h1 className="hero-title">I'm Sorry Ma</h1>
        <p className="hero-text">
          I know I hurt you, and I can't take back what I did. But I want you to know that you mean everything to me. 
          I'm truly sorry for the pain I caused. Please give me a chance to make things right.
        </p>
        <button className="hero-button" onClick={() => {
          if (onButtonClick) onButtonClick()
          document.querySelector('.gallery').scrollIntoView({ behavior: 'smooth' })
        }}>
          See Our Photos ❤️
        </button>
      </div>
    </section>
  )
}

export default Hero
