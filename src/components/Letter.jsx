import { useState } from 'react'
import './Letter.css'

const Letter = () => {
  const [isReading, setIsReading] = useState(false)
  const [showLetter, setShowLetter] = useState(false)

  const handleOpenLetter = () => {
    setIsReading(true)
    setTimeout(() => setShowLetter(true), 500)
  }

  return (
    <section className="letter">
      <h2 className="section-title">A Letter to You</h2>
      
      {!isReading ? (
        <div className="letter-envelope" onClick={handleOpenLetter}>
          <div className="envelope">
            <div className="envelope-flap"></div>
            <div className="envelope-body">
              <div className="heart-seal">❤️</div>
            </div>
          </div>
          <p className="envelope-hint">Click to open the letter</p>
        </div>
      ) : (
        <div className={`letter-container ${showLetter ? 'show' : ''}`}>
          <div className="letter-content">
            <p>My Love,</p>
            
            <p>For four years, we lived so happily together. I still don't understand how our beautiful life suddenly changed. I was genuinely happy with you, and I never did anything intentionally to hurt you. You were everything to me — more than my own life.</p>
            
            <p>But now, you've decided to leave me, and I don't know how to handle the pain. I only want to make things right between us. We shouldn't let everything go like this. I am truly asking for your forgiveness. I will never repeat any mistake again.</p>
            
            <p>Please don't think only about our fights. Think about all the happy moments we shared, all the times we stood together with love, and how deeply we cared for each other. I only ever wanted you — and I'm still here for you.</p>
            
            <p>I don't know how to explain this pain I am feeling. I know you won't leave me if you truly understand how much this hurts. Maybe right now it feels like your life will be better without me, but one day you will feel the emptiness and realise how much I loved you.</p>
            
            <p>I am suffering without you, and I don't know if you see that. Our love was true — if it was real, then we will come together again. Please don't use your family as a reason to push me away. I tried to move on, but I can't. I believe in us. I trust that one day you will come back, because I know you cannot stay away from me forever.</p>
            
            <p className="letter-signature">With all my love,<br />Naresh</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Letter
