import React, {useEffect, useState}from 'react'
import Hero from './segments/Hero'
import Livestreams from './segments/Livestreams'
import guestApi from '../axios/api/guest.api'
const Home = () => {
 const [guestId, setGuestid] = useState()


  useEffect(()=>{
   guestApi.generateIdForGuestUser()
  }, [])

  return (
    <div>
      <Hero/>
      <Livestreams/>
    </div>
  )
}

export default Home
