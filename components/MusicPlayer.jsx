'use client'

import { useState, useRef, useEffect } from 'react'
import './MusicPlayer.css'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/music.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.5

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(err => {
          console.log('Audio play failed:', err)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="music-player" onClick={toggleMusic}>
      <div className={`music-icon ${isPlaying ? 'playing' : ''}`}>
        {isPlaying ? '🎵' : '🎵'}
      </div>
      <span className="music-text">{isPlaying ? 'Music On' : 'Play Music'}</span>
    </div>
  )
}

export default MusicPlayer
