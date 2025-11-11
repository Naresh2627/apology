import { useState, useEffect } from 'react'
import './Confetti.css'

const Confetti = () => {
  const [pieces, setPieces] = useState([])

  useEffect(() => {
    const colors = ['#ff69b4', '#ffb6d9', '#ffd4e5', '#ff1493', '#ff69b4']
    const newPieces = []
    
    for (let i = 0; i < 100; i++) {
      newPieces.push({
        id: i,
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5,
        duration: Math.random() * 2 + 2
      })
    }
    
    setPieces(newPieces)
  }, [])

  return (
    <div className="confetti-container">
      {pieces.map(piece => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`
          }}
        />
      ))}
    </div>
  )
}

export default Confetti
