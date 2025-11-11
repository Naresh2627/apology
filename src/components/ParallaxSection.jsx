import { useEffect, useRef } from 'react'
import './ParallaxSection.css'

const ParallaxSection = () => {
  const parallaxRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset
        const rate = scrolled * 0.5
        parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="parallax-section">
      <div ref={parallaxRef} className="parallax-content">
        <div className="parallax-hearts">
          <span className="parallax-heart">💕</span>
          <span className="parallax-heart">💖</span>
          <span className="parallax-heart">💗</span>
          <span className="parallax-heart">💝</span>
          <span className="parallax-heart">💘</span>
        </div>
        <h2 className="parallax-quote">"Every love story is beautiful, but ours is my favorite"</h2>
      </div>
    </div>
  )
}

export default ParallaxSection
