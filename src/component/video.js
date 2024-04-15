import React from 'react'
import "../styles/video.css"

const Videoyt = () => {
  return (
    <div className="video" >
      <iframe width="80%" height="600px" src="https://www.youtube.com/embed/bTeUVUKyl6E?si=dWknkeiPMwmqfNJD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Videoyt
