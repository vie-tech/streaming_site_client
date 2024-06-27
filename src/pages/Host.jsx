import React, {useState, useEffect} from 'react'
import guestApi from '../axios/api/guest.api'
import userApi from '../axios/api/user.api';
import { StreamVideoClient, StreamVideo, StreamCall} from '@stream-io/video-react-sdk';
import Spinner from '../assets/utility/Spinner'
import Hostvideo from './segments/Hostvideo';
import '@stream-io/video-react-sdk/dist/css/styles.css'
import {useSelector} from 'react-redux'

const CredentialFetching = ()=>{

  //AT THE END OF THE DAY YOU'RE GOING TO TURN THIS THE MAIN AUDIENCE FUNCITON BECAUSE STREAM SDK COMES WITH A TYPE GUEST FUNCTION
  const {isLoggedIn} = useSelector((state)=>state.appState)
  console.log(isLoggedIn)
  const apiKey = "s6b78s6su45k"

  const [token, setToken] = useState('')
  const [callerName, setCallerName] = useState('')
  const [callId, setCallId] = useState('')
  const user = {
    id: isLoggedIn ? localStorage.getItem('userId'): localStorage.getItem('guestId'),
    role: isLoggedIn ? 'host' : "anonymous",

  }
  

  useEffect(()=>{
   async function init(){
    const callerName = isLoggedIn ? localStorage.getItem('userId') : localStorage.getItem('guestId')
    setCallerName(callerName)
    if(!callerName) return 
     const callId = isLoggedIn ? localStorage.getItem('user_call_id') : localStorage.getItem('guest_call_id') //retrieve from server if logged in
     setCallId(callId)

     if(!isLoggedIn){
      const response = await guestApi.getJwtTokenForGuest(callerName)
      setToken(response)
     }else{
      const response = await userApi.getJwtTokenForUser(callerName)
      console.log(response)
      setToken(response)
     }
    
    

   }

   init()

  }, [])
  

  if(!token || !callerName || !callId || !user ) {
    return <Spinner/>
  }

  return <>
  <Host token={token} callerName={callerName} user={user} callId={callId} apiKey={apiKey}/>
  </>
}



const Host = ({token, user, callId, apiKey, callerName}) => {
  console.log(token, callId, callerName)
  const client = new StreamVideoClient({apiKey, token, user})
  const call = client.call('livestream', callId)
  call.join({create: true}).then(()=>{
    console.log('call joined')
  }).then((err)=>{
    console.log('erroor from the join function' + err)
  })

  useEffect(()=>{

    return () => {
      call.endCall().then(()=>{
        localStorage.removeItem('guestId')
        localStorage.removeItem('guest_call_id')
        guestApi.endCallForGuest(callerName).then((data)=>{
          console.log(data)
         }).catch((err)=>{
          console.log(err)
         })
        console.log('Admin ended the call')

      }).catch(()=>{
        console.log('Admin failed to end th')
      })
    };
  }, [])
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
       <Hostvideo/>
      </StreamCall>
    </StreamVideo>
  )
}

export default CredentialFetching
