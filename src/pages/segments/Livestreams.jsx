import React, {useEffect, useState} from 'react'
import guestApi from '../../axios/api/guest.api'
import image from '../../assets/images/8839.jpg'
import {useNavigate} from 'react-router-dom'

const Livestreams = () => {
    const [streams, setStreams] = useState([])
    const navigate = useNavigate()

    function joinChannel(channel){
      localStorage.setItem('channel_to_join', channel)
      navigate('/audience')
    }

    useEffect(()=>{
     async function init(){
        const repsonse = await guestApi.getAllLiveGuestStreams()
        setStreams(repsonse)
     }

     init()
    }, [])

    console.log(streams)
  return (
    <section id="gallery" className="gallery">
    <div className="container-fluid">
      {streams && streams.map((stream)=>{
       return <div className="row gy-4 justify-content-center" onClick={()=>joinChannel(stream.guestChannelName)}>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img src={image} className="img-fluid" alt=""/>
            <div className="gallery-links d-flex align-items-center justify-content-center">
              <a href="assets/img/gallery/gallery-1.jpg" title="Gallery 1" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
              <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>
        
      </div>
      })}
      

    </div>
  </section>
  )
}

export default Livestreams
