'use client'

import { useState } from 'react'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import Memories from '../components/Memories'
import Letter from '../components/Letter'
import Footer from '../components/Footer'
import MusicPlayer from '../components/MusicPlayer'
import Confetti from '../components/Confetti'
import ParallaxSection from '../components/ParallaxSection'
import VideoSection from '../components/VideoSection'

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false)

  const triggerConfetti = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  return (
    <div className="app">
      {showConfetti && <Confetti />}
      <MusicPlayer />
      <Hero onButtonClick={triggerConfetti} />
      <Gallery />
      <ParallaxSection />
      <Memories />
      <VideoSection />
      <Letter />
      <Footer />
    </div>
  )
}
