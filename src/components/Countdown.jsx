import { useState, useEffect } from 'react'
import './Countdown.css'

const Countdown = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isVisible, setIsVisible] = useState(false)

  // Set your relationship start date here
  const startDate = new Date('2024-01-14T00:00:00')

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date()
      const diff = now - startDate
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      
      setTimeElapsed({ days, hours, minutes, seconds })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`countdown ${isVisible ? 'visible' : ''}`}>
      <button 
        className="countdown-toggle"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? '✕' : '⏱️'}
      </button>
      
      {isVisible && (
        <div className="countdown-content">
          <h3>Time Together</h3>
          <div className="countdown-grid">
            <div className="countdown-item">
              <span className="countdown-number">{timeElapsed.days}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{timeElapsed.hours}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{timeElapsed.minutes}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{timeElapsed.seconds}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
          <p className="countdown-message">Every moment with you is precious ❤️</p>
        </div>
      )}
    </div>
  )
}

export default Countdown
