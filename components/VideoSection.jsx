import './VideoSection.css'

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      src: '/video1.mp4',
      title: 'Our First Memory',
      subtitle: 'The beginning of us'
    },
    {
      id: 2,
      src: '/video2.mp4',
      title: 'Beautiful Moments',
      subtitle: 'Times we cherish'
    },
    {
      id: 3,
      src: '/video3.mp4',
      title: 'Forever Together',
      subtitle: 'Our love story'
    }
  ]

  return (
    <section className="video-section">
      <div className="video-header">
        <h2 className="section-title">Our Special Moments 💕</h2>
        <p className="video-subtitle">Watch these with all my love</p>
      </div>
      
      <div className="videos-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-wrapper">
            <h3 className="video-title">{video.title}</h3>
            <p className="video-desc">{video.subtitle}</p>
            <div className="video-container">
              <video 
                controls 
                className="video-player"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default VideoSection
