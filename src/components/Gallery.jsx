import { useState, useEffect, useRef } from 'react'
import './Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleImages, setVisibleImages] = useState([])
  const imageRefs = useRef([])

  // TO USE YOUR OWN PHOTOS:
  // 1. Put your photos in the public/images folder
  // 2. Name them: photo1.jpg, photo2.jpg, etc.
  // 3. Replace the url below with: '/images/photo1.jpg'
  
  const images = [
    { 
      id: 1, 
      url: '/images/photo11.png.jpg',
      caption: 'Beautiful moment', 
      note: 'The day everything changed ❤️' 
    },
    { 
      id: 2, 
      url: '/images/photo10.png.jpg',
      caption: 'Together', 
      note: 'Your smile made my heart skip 💕' 
    },
    { 
      id: 3, 
      url: '/images/photo13.png.jpg',
      caption: 'Sweet memories', 
      note: 'The most beautiful sight 😍' 
    },
    { 
      id: 4, 
      url: '/images/photo14.png.jpg',
      caption: 'Forever us', 
      note: 'Where I want to be always 💖' 
    },
    { 
      id: 5, 
      url: '/images/photo19.png.jpg',
      caption: 'Happy times', 
      note: 'Making memories with you 🌟' 
    },
    { 
      id: 6, 
      url: '/images/photo22.png.jpg',
      caption: 'I love you', 
      note: 'Forever and always 💗' 
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target)
            if (!visibleImages.includes(index)) {
              setTimeout(() => {
                setVisibleImages(prev => [...prev, index])
              }, index * 150)
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    imageRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setSelectedImage(images[index])
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  return (
    <section className="gallery">
      <h2 className="section-title">Our Photo Gallery 📷</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div 
            key={image.id}
            ref={el => imageRefs.current[index] = el}
            className={`gallery-item polaroid ${visibleImages.includes(index) ? 'visible' : ''}`}
            onClick={() => openLightbox(index)}
          >
            <div className="polaroid-frame">
              <img src={image.url} alt={image.caption} />
              <div className="polaroid-caption">{image.note}</div>
            </div>
            <div className="gallery-overlay">
              <span>Click to view</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>‹</button>
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>›</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.url} alt={selectedImage.caption} />
            <p className="lightbox-caption">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
