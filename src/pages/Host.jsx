import React, {useState, useEffect} from 'react'
import guestApi from '../axios/api/guest.api'
import { StreamVideoClient, StreamVideo, StreamCall } from '@stream-io/video-react-sdk';
import Hostvideo from './segments/Hostvideo';
import '@stream-io/video-react-sdk/dist/css/styles.css'

const CredentialFetching = ()=>{

  //AT THE END OF THE DAY YOU'RE GOING TO TURN THIS THE MAIN AUDIENCE FUNCITON BECAUSE STREAM SDK COMES WITH A TYPE GUEST FUNCTION
  
  const apiKey = "s6b78s6su45k"
  console.log(apiKey, 'This is api key')
  const [token, setToken] = useState('')
  const [guestId, setGuestId] = useState('')
  const [callId, setCallId] = useState('')
  const user = {
    id: localStorage.getItem('guestId')
  }
  

  useEffect(()=>{
   async function init(){
    const guestId = localStorage.getItem('guestId')
    setGuestId(guestId)
    if(!guestId) return 
     const callId = localStorage.getItem('channelName')
     setCallId(callId)
     const response = await guestApi.getJwtTokenForGuest(guestId)
     setToken(response)
     console.log( response, user)
   }

   init()

  }, [])
  

  if(!token || !guestId || !callId || !user ) {
    return <div>Loading resources, please wait....</div>
  }

  return <>
  <Host token={token} guestId={guestId} user={user} callId={callId} apiKey={apiKey}/>
  </>
}




const Host = ({token, user, callId, apiKey}) => {

  const client = new StreamVideoClient({apiKey, token, user})
  const call = client.call('livestream', callId)
  call.join({create: true}).then(()=>{
    console.log('call joined')
  })
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
       <Hostvideo/>
      </StreamCall>
    </StreamVideo>
  )
}

export default CredentialFetching
