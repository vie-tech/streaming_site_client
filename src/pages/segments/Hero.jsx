import React from 'react'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
    const navigate = useNavigate()

    function startStream(){
      navigate('/live') //ALL THE VIDEO LOGIC WILL BE DONE IN THE OTHER PAGE {HOST}
    }

  return (
    <div>
      <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center" data-aos="fade" data-aos-delay="1500">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          <h2> Stream anonymously <span>Jenny Wilson</span> a Professional Photographer from New York City</h2>
          <p>Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.</p>
          <button href="contact.html" className="btn-get-started" onClick={startStream}>start your stream</button>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Hero
