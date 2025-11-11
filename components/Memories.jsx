'use client'

import { useState, useEffect, useRef } from 'react'
import './Memories.css'

const Memories = () => {
  const [expandedCard, setExpandedCard] = useState(null)
  const [visibleCards, setVisibleCards] = useState([])
  const cardRefs = useRef([])

  // TO USE YOUR OWN PHOTOS:
  // Put your photos in public/images folder as: memory1.jpg, memory2.jpg, etc.
  
  const memories = [
    {
      id: 1,
      date: 'Beach',
      image: '/images/photo4.png.jpg',
      caption: 'Beach night and Rathanam visit',
      fullStory: 'That day, we went to the beach at night and stayed there together until 8 PM. We were so happy and had such a fun time. We even went to Rathanam, and it was one of our happiest moments.'
    },
    {
      id: 2,
      date: 'Semmozhi Park',
      image: '/images/photo12.png.jpg',
      caption: 'Beautiful memories together',
      fullStory: 'We went to Semmozhi Park, created beautiful memories, took a lot of photos, and had a wonderful experience.'
    },
    {
      id: 3,
      date: 'Mahabalipuram',
      image: '/images/photo20.png.jpg',
      caption: 'Our first trip together',
      fullStory: 'When we went to Mahabalipuram for the first time, we were so happy. That day, you gave me 200 rupees, but I didn\'t spend it on anything.'
    },
    {
      id: 4,
      date: 'Theatre',
      image: '/images/photo16.png.jpg',
      caption: 'Another precious moment',
      fullStory: 'Every moment with you is a treasure. I cherish all the time we spend together.'
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target)
            if (!visibleCards.includes(index)) {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index])
              }, index * 200)
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <section className="memories">
      <h2 className="section-title">Our Photos & Memories</h2>
      <div className="timeline">
        {memories.map((memory, index) => (
          <div
            key={memory.id}
            ref={el => cardRefs.current[index] = el}
            className={`memory-card ${visibleCards.includes(index) ? 'visible' : ''} ${expandedCard === memory.id ? 'expanded' : ''}`}
            onClick={() => toggleCard(memory.id)}
          >
            <div className="memory-date">{memory.date}</div>
            <div className="memory-image">
              <img src={memory.image} alt={memory.caption} />
            </div>
            <div className="memory-caption">{memory.caption}</div>
            {expandedCard === memory.id && (
              <div className="memory-full-story">
                <p>{memory.fullStory}</p>
              </div>
            )}
            <div className="memory-expand-hint">
              {expandedCard === memory.id ? '▲ Click to collapse' : '▼ Click to read more'}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Memories
